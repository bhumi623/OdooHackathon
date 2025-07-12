const questions = [
  {
    id: 1,
    title: "How to deal with anxiety during presentations?",
    description: "I often get extremely anxious when presenting. What coping techniques work best for this?",
    user: "SpeakerFox",
    time: "2025-07-11T09:00:00Z",
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
    answers: 2,
    answersdesc: [
      { id: 1, text: "Start with just 5 minutes each night.", relates: 4 },
      { id: 2, text: "Write what you're grateful for.", relates: 3 }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
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

  questions.push({
    id: i,
    title: `Mental health question #${i}`,
    description: "This is a placeholder question to simulate a stack of mental health related queries.",
    user: `User${i}`,
    time: new Date(Date.now() - i * 3600 * 1000).toISOString(),
    answers: sampleAnswers.length,
    answersdesc: sampleAnswers
  });
}

export default questions;