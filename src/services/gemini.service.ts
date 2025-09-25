import { Injectable } from '@angular/core';
import { GoogleGenAI, GenerateContentResponse, Type } from '@google/genai';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // The API key is sourced from environment variables.
    // This setup assumes `process.env.API_KEY` is available.
    if (!process.env.API_KEY) {
      console.error("API_KEY environment variable not set!");
    }
    this.ai = new GoogleGenAI({apiKey: process.env.API_KEY as string});
  }

  async generateTeacherBio(keywords: string): Promise<string> {
    try {
      const prompt = `Please generate a short, professional, and engaging teacher biography in Persian (Farsi). The bio should be around 2-3 sentences. Use the following keywords as inspiration: "${keywords}"`;
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      return response.text;
    } catch (error) {
      console.error('Error generating teacher bio:', error);
      return 'خطا در تولید بیوگرافی. لطفا دوباره تلاش کنید.';
    }
  }

  async getWritingFeedback(text: string): Promise<string> {
    try {
      const prompt = `You are an English teacher's assistant. Review the following text written by a student. Provide constructive feedback in Persian (Farsi) on grammar, vocabulary, and style. Keep the feedback encouraging and brief, structured with bullet points. Here is the text:\n\n"${text}"`;
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      return response.text;
    } catch (error) {
      console.error('Error getting writing feedback:', error);
      return 'خطا در دریافت بازخورد. لطفا دوباره تلاش کنید.';
    }
  }

  async gradeNarrative(text: string): Promise<{ score: number; feedback: string }> {
     try {
      const prompt = `You are an expert IELTS examiner grading a student's narrative writing task about a difficult journey. 
      Evaluate the text based on the official IELTS Writing Task 2 band descriptors with the following focus:
      1.  **Task Achievement (پاسخ به موضوع):** Does the story clearly describe a difficult journey? Is the word count appropriate (around 100-140 words)?
      2.  **Coherence and Cohesion (انسجام و پیوستگی):** Is the story easy to follow? Are ideas logically connected using linking words?
      3.  **Lexical Resource (دایره لغات):** Is there a good range of vocabulary? Are there attempts to use less common words? Is the word choice accurate?
      4.  **Grammatical Range and Accuracy (دقت و تنوع گرامری):** Is there a mix of simple and complex sentences? Are tenses (especially past tenses) used correctly? Are there many grammatical errors?
      
      Based on a detailed analysis of these four criteria, provide a final score from 0 to 40 (where each criterion is worth 10 points). 
      Then, write a brief, constructive feedback in Persian (Farsi) explaining the score. The feedback must reference the IELTS criteria mentioned above (e.g., "از نظر دایره لغات (Lexical Resource)..."). 
      
      Your response MUST strictly follow the provided JSON schema.
      
      Here is the student's text:\n\n"${text}"`;
      
      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER, description: 'The score from 0 to 40, based on a detailed analysis of the four IELTS criteria.' },
              feedback: { type: Type.STRING, description: 'Constructive feedback in Persian, referencing the specific IELTS criteria (e.g., Task Achievement, Lexical Resource).' },
            },
            required: ['score', 'feedback'],
          },
        },
      });

      const jsonString = response.text;

      try {
        // The Gemini API with responseSchema guarantees a valid JSON string.
        return JSON.parse(jsonString);
      } catch (parseError) {
        console.error('Error parsing Gemini JSON response:', parseError, 'Raw response:', jsonString);
        return { score: 0, feedback: 'خطا در پردازش پاسخ از هوش مصنوعی. پاسخ معتبر نبود.' };
      }

    } catch (error) {
      console.error('Error grading narrative:', error);
      return { score: 0, feedback: 'خطا در ارزیابی متن. لطفا دوباره تلاش کنید.' };
    }
  }
}