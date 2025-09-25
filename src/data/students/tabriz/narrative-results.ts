import { StudentNarrativeResult } from '../../../models/user.model';

/**
 * انبار داده تخصصی برای نتایج آزمون نوشتاری (Narrative) زبان‌آموزان تبریز.
 * این فایل به صورت تفکیک‌شده، فقط داده‌های مربوط به این آزمون را نگهداری می‌کند
 * تا با تفکیک داده‌ها، مقیاس‌پذیری و مدیریت پروژه بهبود یابد.
 */
export const TABRIZ_NARRATIVE_RESULTS: StudentNarrativeResult[] = [
  // Results from Preliminary Stage
  { studentId: 8, score: 34, text: "My most difficult journey was trying to find a specific old shop in the Tabriz Grand Bazaar. It's a labyrinth of alleys. I asked many shopkeepers for directions. It was a long journey inside the bazaar, but finally I found the beautiful, hidden shop.", feedback: "A wonderful and very culturally specific story! Your description of the bazaar as a 'labyrinth' is excellent. Well done." },
  { studentId: 701, score: 18, text: "I go to El Goli park. It was long walk. Journey was hard.", feedback: "Good start. Remember to use 'It was a long walk'. Try to add more details about why it was hard." },
  { studentId: 702, score: 23, text: "The journey to my university was difficult in winter. There was a lot of snow and the buses were late. I was very cold when waiting for the bus.", feedback: "A good description of a winter journey in Tabriz! You explained the problem clearly." },
  { studentId: 703, score: 29, text: "I had a difficult journey when I traveled to Kandovan village. The road was mountainous and winding. The car moved slowly. But the village with its rock houses was amazing to see.", feedback: "A great story about a local trip. Your use of 'winding' and 'amazing' is very good." },
  { studentId: 704, score: 27, text: "My difficult journey was a long train ride. The train was very crowded and I couldn't find a seat. I had to stand for many hours. It was tiring.", feedback: "A very clear and well-told story about a common travel problem." },
  { studentId: 705, score: 33, text: "The journey to prepare for the university entrance exam was a very difficult and stressful period. It was a journey of many months of study, but the final result was worth the effort.", feedback: "A very thoughtful and metaphorical use of the word 'journey'. Excellent." },
  { studentId: 706, score: 24, text: "I ride my bike to my friend's house. It was a difficult journey because the road was uphill. I was very tired when I arrived.", feedback: "Good story! Remember the past tense of 'ride' is 'rode'." },
  { studentId: 707, score: 28, text: "My family and I drove to another city. The journey was difficult because our car had a problem and we had to stop many times. It was a very long trip.", feedback: "A clear story. You explained the problem well." },
  { studentId: 708, score: 10, text: 'I am writing about a difficult journey on a snowy road.', feedback: 'این یک جمله یک داستان کامل نیست، بلکه بیان قصد شما برای نوشتن است. برای کسب نمره، لطفاً یک داستان کامل در مورد یک سفر دشوار بنویسید که در گذشته اتفاق افتاده است.' },
  { studentId: 709, score: 30, text: "I got lost in a big city during my first solo trip. My phone battery died and I didn't have a map. It was a difficult journey to find my hotel. I learned to be more prepared.", feedback: "A great story with a clear lesson learned at the end." },
  { studentId: 710, score: 20, text: "I journey to the market. It was very crowded. It was difficult to walk.", feedback: "Good sentences. You can also say 'My journey to the market...'." },
  { studentId: 711, score: 28, text: "A difficult journey for me was a trip by car in heavy rain. The road was slippery and it was hard to see. We drove very slow. It was a stressful journey.", feedback: "A clear story that shows the difficulty well. You can use 'slowly' as the adverb." },
  { studentId: 712, score: 31, text: "I had a difficult journey trying to find a book in the university library. The computer system was down, so I had to search the shelves for hours. It was tiring but I finally found it.", feedback: "A very relatable story about academic life! Well done." },
  { studentId: 713, score: 35, text: "My most difficult journey was hiking in the mountains near Tabriz. A sudden fog came and we lost our way for a while. It was scary, but we stayed together and used our map to get back safely. It taught me about teamwork.", feedback: "An excellent story with a great lesson at the end. Well told." },
  { studentId: 714, score: 38, text: "The journey of starting a small business, a cafe, was incredibly difficult. It involved long hours, financial risks, and learning many new skills. But seeing customers enjoy the place I built makes it all worthwhile.", feedback: "A wonderful, inspiring story. Your vocabulary is strong." },
  
  // Results from Advanced Stage
  { studentId: 715, score: 39, text: "The journey to prepare for the TOEFL exam was a difficult mental marathon. It required months of disciplined study and strategies to overcome test anxiety. The pressure was immense, but achieving my target score was a huge relief.", feedback: "A very well-structured and sophisticated piece of writing." },
  { studentId: 716, score: 39, text: "The intellectual journey of learning a musical instrument as an adult is a difficult path of humility and perseverance. It involves rewiring your brain and accepting that progress is often incremental and slow.", feedback: "An excellent, insightful reflection on learning. Superb vocabulary." },
  
  // Results from Completed Stage
  { studentId: 717, score: 40, text: "The journey of restoring a vintage piece of art was a painstaking process. It was a difficult test of patience and meticulous attention to detail, but bringing a piece of history back to life was profoundly satisfying.", feedback: "A beautiful and unique story, written flawlessly." },
  { studentId: 718, score: 40, text: "The psychological journey of adapting to a major life change, such as becoming a parent, is perhaps the most difficult of all. It's a continuous process of recalibrating one's identity and priorities.", feedback: "A profound and mature reflection, expressed with excellent command of English." },
];