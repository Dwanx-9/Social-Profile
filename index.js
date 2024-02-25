let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "tea’s Decentralized Protocol ?",
    answer: "At tea we've recognized that open-source software maintainers and contributors often aren't adequately rewarded for their efforts in creating and maintaining open-source software. "
  },
  {
    question: "how much total Tea token suplly ?",
    answer: "10 Billion"
  },
  // Add another question here
];

const handleAnswer = (answer) => {
  const isCorrect = answer === questions[currentQuestion].answer;
  if (isCorrect) {
    const newScore = score + 100; // Add points when answer is correct
    score = newScore;
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    currentQuestion = nextQuestion;
  } else {
    alert(`Your Quiz Complete: ${score}`);
    // Do something after the quiz is over, e.g. send the score to the server
  }
};
