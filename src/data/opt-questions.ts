import { OPTQuestion } from "../models/user.model";

// Oxford Quick Placement Test – Version 2
// This test is created based on the user-provided answer key.
export const MOCK_OPT_QUESTIONS: OPTQuestion[] = [
  // Part 1: Notices (Questions 1-5)
  { id: 1, text: "Where would you see this notice: 'You can look, but don’t touch the pictures'?", options: ["in an office", "in a cinema", "in a museum", "in a library"], correctAnswer: "in a museum" },
  { id: 2, text: "Where would you see this notice: 'Please give the right money to the driver'?", options: ["on a plane", "on a bus", "in a taxi", "on a train"], correctAnswer: "on a bus" },
  { id: 3, text: "Where would you see this notice: 'NO PARKING PLEASE'?", options: ["in a street", "in a library", "in a swimming pool", "in a park"], correctAnswer: "in a street" },
  { id: 4, text: "Where would you see this notice: 'CROSS BRIDGE FOR TRAINS TO EDINBURGH'?", options: ["at an airport", "at a bus stop", "in a station", "on a motorway"], correctAnswer: "in a station" },
  { id: 5, text: "Where would you see this notice: 'KEEP IN A COLD PLACE'?", options: ["on a book", "on food", "on clothes", "on a chair"], correctAnswer: "on food" },

  // Part 2: Cloze Test - THE STARS (Questions 6-10)
  { id: 6, text: "At night, when you look ______ at the sky, you can see thousands of stars.", options: ["at", "up", "on", "in"], correctAnswer: "up" },
  { id: 7, text: "Stars are really ______ big, hot balls of fire.", options: ["very", "too", "much", "so"], correctAnswer: "very" },
  { id: 8, text: "New stars ______ born all the time.", options: ["is", "was", "are", "be"], correctAnswer: "are" },
  { id: 9, text: "Light from our Sun takes more ______ four years to reach the next nearest star.", options: ["then", "from", "than", "as"], correctAnswer: "than" },
  { id: 10, text: "In the past, people ______ stars to know which way to travel.", options: ["use", "used", "were using", "have used"], correctAnswer: "used" },

  // Questions 11-20 - General Grammar
  { id: 11, text: "I'm sorry, I haven't ______ my homework.", options: ["do", "did", "done", "doing"], correctAnswer: "done" },
  { id: 12, text: "She is ______ friendly than her sister.", options: ["more", "most", "much", "many"], correctAnswer: "more" },
  { id: 13, text: "If you ______ hard, you will pass the exam.", options: ["study", "studied", "studying", "will study"], correctAnswer: "study" },
  { id: 14, text: "There are ______ books on the table.", options: ["any", "some", "a", "an"], correctAnswer: "some" },
  { id: 15, text: "I ______ to the radio when you called.", options: ["listened", "listen", "was listening", "am listening"], correctAnswer: "was listening" },
  { id: 16, text: "This is the best film I ______ ever seen.", options: ["have", "has", "had", "was"], correctAnswer: "have" },
  { id: 17, text: "You ______ be quiet in the library.", options: ["must", "can", "have", "do"], correctAnswer: "must" },
  { id: 18, text: "The car was ______ by my father.", options: ["drove", "driven", "driving", "drive"], correctAnswer: "driven" },
  { id: 19, text: "He asked me ______ I was from.", options: ["what", "who", "where", "when"], correctAnswer: "where" },
  { id: 20, text: "I've been waiting for you ______ two hours.", options: ["since", "for", "at", "on"], correctAnswer: "for" },

  // Questions 21-30 - User-provided Grammar
  { id: 21, text: "The baby won't go to sleep ______ we leave a light on.", options: ["if", "when", "unless", "while"], correctAnswer: "unless" },
  { id: 22, text: "I'll leave a key under the mat in case you ______ home before me.", options: ["will get", "got", "getting", "get"], correctAnswer: "get" },
  { id: 23, text: "The scholarship gave me a great ______ to study abroad.", options: ["luck", "chance", "event", "time"], correctAnswer: "chance" },
  { id: 24, text: "She ended the concert ______ her most famous song.", options: ["by", "with", "in", "at"], correctAnswer: "with" },
  { id: 25, text: "Due to the drought, there is a severe ______ of water.", options: ["shortage", "lack", "loss", "need"], correctAnswer: "shortage" },
  { id: 26, text: "He is widely ______ as the best player of his generation.", options: ["regarded", "thought", "seen", "considered"], correctAnswer: "regarded" },
  { id: 27, text: "I saw him ______ a month ago, at the beginning of June.", options: ["nearly", "about", "around", "almost"], correctAnswer: "almost" },
  { id: 28, text: "There's no need to make such a ______ about it; it's a minor problem.", options: ["fuss", "trouble", "mess", "drama"], correctAnswer: "fuss" },
  { id: 29, text: "She bought a new hat that ______ perfectly with her coat.", options: ["matched", "fitted", "went", "suited"], correctAnswer: "went" },
  { id: 30, text: "Everyone was fine after the crash, ______ from a few bumps and bruises.", options: ["except", "other", "besides", "apart"], correctAnswer: "apart" },

  // Questions 31-50 - Intermediate to Advanced Grammar
  { id: 31, text: "If I'd known you were coming, I ______ a cake.", options: ["would bake", "baked", "would have baked", "will bake"], correctAnswer: "would have baked" },
  { id: 32, text: "It's time you ______ to bed. It's very late.", options: ["go", "went", "are going", "have gone"], correctAnswer: "went" },
  { id: 33, text: "He is ______ to be a very talented musician.", options: ["saying", "told", "said", "says"], correctAnswer: "said" },
  { id: 34, text: "I wish I ______ play the guitar.", options: ["can", "will", "could", "am able"], correctAnswer: "could" },
  { id: 35, text: "The man ______ I was talking to is my boss.", options: ["which", "who", "whose", "what"], correctAnswer: "who" },
  { id: 36, text: "He isn't used ______ in a cold climate.", options: ["to live", "to living", "live", "living"], correctAnswer: "to living" },
  { id: 37, text: "Not only ______ late, but he also forgot his books.", options: ["he was", "was he", "he is", "is he"], correctAnswer: "was he" },
  { id: 38, text: "I would rather you ______ so loudly.", options: ["don't speak", "won't speak", "wouldn't speak", "didn't speak"], correctAnswer: "didn't speak" },
  { id: 39, text: "______ the bad weather, the match went ahead.", options: ["Although", "Despite", "However", "Even though"], correctAnswer: "Despite" },
  { id: 40, text: "By this time tomorrow, the exam ______.", options: ["will finish", "will have finished", "finishes", "is finishing"], correctAnswer: "will have finished" },
  { id: 41, text: "She advised me ______ a doctor.", options: ["seeing", "see", "to see", "that I see"], correctAnswer: "to see" },
  { id: 42, text: "The furniture ______ delivered tomorrow.", options: ["are being", "is being", "are", "is"], correctAnswer: "is being" },
  { id: 43, text: "He managed to put out the fire, ______ was very fortunate.", options: ["that", "what", "which", "who"], correctAnswer: "which" },
  { id: 44, text: "There's very ______ coffee left in the jar.", options: ["few", "a few", "little", "a little"], correctAnswer: "little" },
  { id: 45, text: "The test was ______ easy that everyone passed.", options: ["such", "so", "too", "very"], correctAnswer: "so" },
  { id: 46, text: "I'd prefer to stay at home ______ go to the cinema.", options: ["than", "to", "from", "instead"], correctAnswer: "than" },
  { id: 47, text: "This is the first time I ______ sushi.", options: ["ate", "eat", "am eating", "have eaten"], correctAnswer: "have eaten" },
  { id: 48, text: "He was made ______ for his mistake.", options: ["pay", "to pay", "paying", "paid"], correctAnswer: "to pay" },
  { id: 49, text: "The harder you work, ______ you will achieve.", options: ["the most", "more", "the more", "most"], correctAnswer: "the more" },
  { id: 50, text: "You had better ______ now before the traffic gets bad.", options: ["leave", "to leave", "leaving", "left"], correctAnswer: "leave" },

  // Questions 51-60 - User-provided Rules/Usage
  { id: 51, text: "Let's have a ______ of tennis this afternoon.", options: ["play", "match", "game", "sport"], correctAnswer: "game" },
  { id: 52, text: "I'm getting tired ______ hearing the same excuses every day.", options: ["with", "from", "of", "by"], correctAnswer: "of" },
  { id: 53, text: "That cake ______ eating up before it goes bad.", options: ["need", "needs", "is needing", "has needed"], correctAnswer: "needs" }, // Note: the answer key says "eating", the verb is "needs". The question has been adapted.
  { id: 54, text: "She's not used to ______ invited to such formal events.", options: ["be", "have been", "being", "get"], correctAnswer: "being" },
  { id: 55, text: "I know you want to, but I'd rather we ______ meet tomorrow if that's okay.", options: ["wouldn't", "didn't", "don't", "won't"], correctAnswer: "wouldn't" },
  { id: 56, text: "The police will ______ all possible leads in the investigation.", options: ["chase", "follow", "run after", "pursue"], correctAnswer: "pursue" },
  { id: 57, text: "Anyone ______ after 10 PM will not be admitted to the hall.", options: ["arrive", "arrives", "arriving", "to arrive"], correctAnswer: "arriving" },
  { id: 58, text: "The stadium was ______ with thousands of excited fans.", options: ["filled", "packed", "crowded", "loaded"], correctAnswer: "packed" },
  { id: 59, text: "A quiet environment is ______ to effective studying.", options: ["conducive", "helpful", "useful", "good"], correctAnswer: "conducive" },
  { id: 60, text: "The windows were left open to allow the rooms to ______ cool.", options: ["stay", "get", "become", "remain"], correctAnswer: "remain" },
];
