const questions = [
  {
    id: 1,
    title: "How to deal with anxiety during presentations?",
    description: "I often get extremely anxious when presenting. What coping techniques work best for this?",
    user: "SpeakerFox",
    time: "2025-07-11T09:00:00Z",
    tags: ["anxiety", "public speaking", "coping"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Breathe deeply and practice visualization.", relates: 3 },
      { id: 2, text: "Rehearsing helps reduce anxiety.", relates: 1 }
    ]
  },
  {
    id: 2,
    title: "Best ways to manage exam stress?",
    description: "Finals are approaching and I feel overwhelmed. How do you manage this stress effectively?",
    user: "StudyBee",
    time: "2025-07-10T15:20:00Z",
    tags: ["exam", "stress", "study tips"],
    answers: 1,
    answersdesc: [
      { id: 1, text: "Timetable planning really works for me.", relates: 2 }
    ]
  },
  {
    id: 3,
    title: "Is journaling actually useful for anxiety?",
    description: "I've read about journaling but never tried it. How should I begin?",
    user: "InkyMind",
    time: "2025-07-10T11:45:00Z",
    tags: ["journaling", "self-help", "anxiety"],
    answers: 0,
    answersdesc: [
      { id: 1, text: "Start with just 5 minutes each night.", relates: 4 },
      { id: 2, text: "Write what you're grateful for.", relates: 3 }
    ]
  },
  {
  id: 4,
    title: "How to stop overthinking at night?",
    description: "My brain won't shut off when I go to bed. Any mental tricks or habits?",
    user: "NightThinker",
    time: "2025-07-11T20:00:00Z",
    tags: ["overthinking", "sleep", "habits"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Try journaling before bed to clear your mind.", relates: 3 },
      { id: 2, text: "White noise and a fixed bedtime routine help.", relates: 2 }
    ]
  },
  {
    id: 5,
    title: "Is social media making my anxiety worse?",
    description: "I feel more anxious after scrolling. Is this normal?",
    user: "ScrollTired",
    time: "2025-07-11T19:30:00Z",
    tags: ["anxiety", "social media", "comparison"],
    answers: 1,
    answersdesc: [
      { id: 1, text: "Yes, doomscrolling can increase anxiety. Try limiting your screen time.", relates: 4 }
    ]
  },
  {
    id: 6,
    title: "How to deal with failure without spiraling?",
    description: "I failed an important test and now feel worthless. How to cope?",
    user: "FallingStars",
    time: "2025-07-11T18:45:00Z",
    tags: ["failure", "self-worth", "resilience"],
    answers: 3,
    answersdesc: [
      { id: 1, text: "Remind yourself it’s just one test, not your identity.", relates: 2 },
      { id: 2, text: "Talk to someone—it helps ground your thoughts.", relates: 1 },
      { id: 3, text: "Reframe it as a learning opportunity.", relates: 3 }
    ]
  },
  {
    id: 7,
    title: "Why do I feel tired even after sleeping?",
    description: "I sleep 8 hours but still wake up exhausted. Could it be mental?",
    user: "DrainedDreamer",
    time: "2025-07-11T17:00:00Z",
    tags: ["fatigue", "mental health", "sleep"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Might be mental burnout—try unplugging more often.", relates: 2 },
      { id: 2, text: "Sleep quality matters more than quantity.", relates: 3 }
    ]
  },
  {
    id: 8,
    title: "How to regain motivation after burnout?",
    description: "I’ve been burnt out from work. How do I recover mentally?",
    user: "BurnoutBlues",
    time: "2025-07-11T16:20:00Z",
    tags: ["burnout", "motivation", "recovery"],
    answers: 1,
    answersdesc: [
      { id: 1, text: "Start with small wins—build momentum slowly.", relates: 2 }
    ]
  },
  {
    id: 9,
    title: "What helps when you're emotionally numb?",
    description: "I don’t feel sadness or joy lately. What can help?",
    user: "FlatlineFeelings",
    time: "2025-07-11T15:45:00Z",
    tags: ["numbness", "emotion", "disconnect"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Routine exercise and sunlight helped me reconnect.", relates: 2 },
      { id: 2, text: "Talk therapy helped unlock a lot for me.", relates: 3 }
    ]
  },
  {
    id: 10,
    title: "Is therapy worth trying even if I'm not 'that bad'?",
    description: "I don’t feel broken, but sometimes I’m off. Would therapy help?",
    user: "UnsureSoul",
    time: "2025-07-11T14:30:00Z",
    tags: ["therapy", "mental health", "mild symptoms"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Therapy isn’t only for crisis—it helps with clarity too.", relates: 3 },
      { id: 2, text: "Think of it like a gym for your mind.", relates: 2 }
    ]
  },
  {
    id: 11,
    title: "How do I break the cycle of procrastination?",
    description: "Even small tasks feel huge. I delay and then feel guilty.",
    user: "LoopLocked",
    time: "2025-07-11T13:15:00Z",
    tags: ["procrastination", "guilt", "habits"],
    answers: 3,
    answersdesc: [
      { id: 1, text: "Use a timer method like Pomodoro.", relates: 2 },
      { id: 2, text: "Start with just 2-minute tasks.", relates: 2 },
      { id: 3, text: "Reward yourself after completing tasks.", relates: 1 }
    ]
  },
  {
    id: 12,
    title: "What’s the best way to calm a racing heart during anxiety?",
    description: "My heart races randomly even when nothing is wrong. How can I calm it?",
    user: "PulsePanic",
    time: "2025-07-11T12:00:00Z",
    tags: ["anxiety", "physical symptoms", "panic"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Try grounding techniques like 5-4-3-2-1.", relates: 3 },
      { id: 2, text: "Breathing in for 4, hold for 4, out for 4 works wonders.", relates: 2 }
    ]
  },
  {
    id: 13,
    title: "How do I handle loneliness in a big city?",
    description: "I moved to a new city and feel alone despite the crowd.",
    user: "UrbanIsland",
    time: "2025-07-11T11:00:00Z",
    tags: ["loneliness", "city life", "social connection"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Join community events or volunteer locally.", relates: 2 },
      { id: 2, text: "Reach out online—there are local forums and meetups.", relates: 3 }
    ]
  },
  {
    id: 14,
    title: "How do I stop comparing myself to others?",
    description: "I constantly feel behind in life compared to my peers. Any tips?",
    user: "ShadowSteps",
    time: "2025-06-10T11:00:00Z",
    tags: ["comparison", "confidence", "self-worth"],
    answers: 2,
    answersdesc: [
      { id: 1, text: "Focus on your growth, not their highlights.", relates: 4 },
      { id: 2, text: "Social media is a filter. Don’t measure your journey against it.", relates: 3 }
    ]
  }
];

const tagOptions = [
  ["coping", "therapy", "anxiety"],
  ["stress", "productivity", "school"],
  ["relationships", "boundaries", "communication"],
  ["burnout", "self-care", "work"],
  ["sleep", "habits", "routine"],
  ["trauma", "healing", "support"],
  ["mindfulness", "meditation", "calm"],
  ["depression", "fatigue", "mental health"],
  ["confidence", "growth", "positivity"]
];

for (let i = 15; i <= 50; i++) {
  const sampleAnswers = [
    {
      id: 1,
      text: "This is a mock answer that users can relate to.",
      relates: Math.floor(Math.random() * 5)
    },
    {
      id: 2,
      text: "Another perspective answer.",
      relates: Math.floor(Math.random() * 3)
    }
  ];

  const randomTags = tagOptions[i % tagOptions.length];

  questions.push({
    id: i,
    title: `Mental health question #${i}`,
    description: "This is a placeholder question to simulate a stack of mental health related queries.",
    user: `User${i}`,
    time: new Date(Date.now() - i * 3600 * 1000).toISOString(),
    tags: randomTags,
    answers: sampleAnswers.length,
    answersdesc: sampleAnswers
  });
}

export default questions;
