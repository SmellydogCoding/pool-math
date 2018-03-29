// common (intital) state and methods for pool problems
export default {
  data() {
    return {
      answer: 0,
      attempts: 0,
      noAnswer: true,
      showCorrect: false,
      showIncorrect: false,
      showHintButton: false,
      hintWidth: '500px',
      incorrectMessage: `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.`
    }
  },
  methods: {
    answerQuestion(correct) {
      if (this.answer === correct) {
        this.showHintButton = false;
        this.showCorrect = true;
        this.showIncorrect = false;
      } else {
        this.showIncorrect = true;
        this.attempts ++;
        if (this.attempts >= 2) { this.showHintButton = true; } // show hint button after 2 incorrect answers
      }
    },
    resetProblemState() {
      this.noAnswer= true;
      this.showCorrect = false;
      this.showIncorrect = false;
      this.showAnswerButton = true;
      this.showNextButton = false;
      this.attempts = 0;
      this.answer = 0;
    },
    getNewAnswerSet(correct) {
      // pick random number between 0 and 3
      let correctPosition = Math.floor(Math.random() * 4);
      let newAnswers;
      // picked number determines answer choices - relative to the correct answer
      switch (correctPosition) {
        case 0: newAnswers = [correct, correct * 1.25, correct * 1.35, correct * 1.5].map(answer => parseFloat(answer.toFixed(2))); break;
        case 1: newAnswers = [correct, correct * 0.75, correct * 1.25, correct * 1.5].map(answer => parseFloat(answer.toFixed(2))); break;
        case 2: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 1.25].map(answer => parseFloat(answer.toFixed(2))); break;
        case 3: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 0.95].map(answer => parseFloat(answer.toFixed(2))); break;
      }
      // create an array with numbers 0-3 in random order. eg: [1,3,0,2]  These are the index positions for the new answers above
      let answerPositions = []
      let newAnswerSet = [];
      // pick random number between 0 and 3 - making sure to use each number only once
      for (let i = 1; i < 5; i++) {
        let number;
        do {
          number = Math.floor(Math.random() * 4);
        } while (answerPositions.includes(number));
        answerPositions.push(number);
      }
      // using the values in the answerPositions array as index positions and the values in the newAnswers array as values
      // create the newAnswerSet array using newAnswerSet[answerPositions] = newAnswers
      // the result is the values in the newAnswers array are pushed into a new array in random positions
      // this creates a new answer set for the new problem
      answerPositions.forEach((index, value) => {
        newAnswerSet[value] = newAnswers[index];
      });
      return newAnswerSet;
    }
  }
}