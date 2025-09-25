import { StudentNarrativeResult } from '../../../models/user.model';

/**
 * انبار داده تخصصی برای نتایج آزمون نوشتاری (Narrative) زبان‌آموزان فیروزکوه.
 * این فایل به صورت تفکیک‌شده، فقط داده‌های مربوط به این آزمون را نگهداری می‌کند
 * تا با تفکیک داده‌ها، مقیاس‌پذیری و مدیریت پروژه بهبود یابد.
 */
export const FIROUZKOUH_NARRATIVE_RESULTS: StudentNarrativeResult[] = [
  // --- Results from Preliminary Stage ---
  { studentId: 501, score: 16, text: "I go to mountain. It is cold. The journey is hard.", feedback: "ایده خوبی است. برای تعریف داستان، از زمان گذشته استفاده کن: 'I went to the mountain. It was cold.' به تلاش خود ادامه بده." },
  { studentId: 502, score: 23, text: "My journey to the river was difficult. I walked for a long time. The sun was very hot. I was thirsty.", feedback: "داستان خوبی است و به خوبی احساساتت را بیان کرده‌ای. استفاده از زمان گذشته صحیح است. آفرین." },
  { studentId: 503, score: 30, text: "A difficult journey was a train ride in winter. The train stopped for two hours because of snow on the tracks. It was cold inside the train and we did not have much food. But finally, it started moving again.", feedback: "داستان بسیار خوبی با جزئیات عالی. شما به خوبی توانسته‌اید یک موقعیت دشوار را توصیف کنید." },
  { studentId: 504, score: 25, text: "I ride my bicycle to my village. The road was very bumpy. It was a difficult journey for me. My bicycle was shaking a lot.", feedback: "توصیف خوبی از یک جاده ناهموار. به یاد داشته باش که شکل گذشته فعل 'ride'، 'rode' است. کار خوبی بود." },
  { studentId: 505, score: 29, text: "My first journey to Tehran alone was difficult. I got lost in the metro station. It was very big and crowded. I had to ask a police officer for help. He was very kind and showed me the right way.", feedback: "یک داستان بسیار واقعی و قابل درک. شما به خوبی مشکل و نحوه حل آن را توضیح داده‌اید." },
  { studentId: 506, score: 22, text: "I went to the mountain. It was difficult journey because it was very cold. I was with my family. We came back home early.", feedback: "Good story. Try to use more connecting words." },
  { studentId: 507, score: 29, text: "My difficult journey was a long bus ride to another city. The bus was old and not comfortable. It was very crowded, so I had to stand for a long time. It was a very tiring day for me.", feedback: "Very clear and relatable story." },
  { studentId: 508, score: 30, text: "The most difficult journey for me was learning to ride a motorcycle. I fell many times and was afraid, but I kept practicing. Finally, I learned how to control it. It was a journey of overcoming fear.", feedback: "A great story about perseverance!" },
  { studentId: 509, score: 33, text: "A challenging journey I undertook was a solo hiking trip in the Alborz mountains. Navigating the unfamiliar trails and dealing with the solitude was difficult, but it was also an incredibly empowering experience of self-reliance.", feedback: "Excellent vocabulary and a compelling story." },

  // --- Results from Advanced Stage ---
  { studentId: 510, score: 35, text: "The journey of starting my own small online business was fraught with challenges, from navigating technical issues to marketing my products. It was a steep learning curve but ultimately very rewarding.", feedback: "Great use of advanced vocabulary." },
  { studentId: 511, score: 38, text: "The most difficult journey I've embarked upon was a metaphorical one: the process of changing my career path after a decade in another field. It involved extensive retraining and overcoming significant self-doubt.", feedback: "A profound and well-articulated story." },

  // --- Results from Completed Stage ---
  { studentId: 512, score: 39, text: "The journey to mastering a complex musical instrument, in my case the violin, has been a decades-long endeavor. It's a difficult path of relentless discipline, confronting limitations, and the pursuit of an elusive perfection.", feedback: "Exceptionally written." },
];