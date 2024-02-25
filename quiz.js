let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What is tea’s Decentralized Protocol?",
    answer: "At tea we've recognized that open-source software maintainers and contributors often aren't adequately rewarded for their efforts in creating and maintaining open-source software."
  },
  {
    question: "How much total Tea token supply?",
    answer: "10 Billion"
  },
  // Add more questions here
];

const handleAnswer = (answer) => {
  const isCorrect = answer.toLowerCase() === questions[currentQuestion].answer.toLowerCase();
  if (isCorrect) {
    const newScore = score + 100; // Add points when the answer is correct
    score = newScore;
    console.log("Correct! Score:", score);
  } else {
    console.log("Incorrect.");
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    currentQuestion = nextQuestion;
    console.log("Moving to next question:", currentQuestion + 1);
    console.log("Question:", questions[currentQuestion].question);
  } else {
    console.log("Quiz Complete! Your Score:", score);
    // Do something after the quiz is over, e.g. send the score to the server
  }
};

// Example usage:
handleAnswer("At tea we've recognized that open-source software maintainers and contributors often aren't adequately rewarded for their efforts in creating and maintaining open-source software.");
handleAnswer("10 Billion");
