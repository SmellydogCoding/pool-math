export default {
  data() {
    return {
      incorrectMessage: `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.`
    }
  },
  methods: {
    answerQuestion() {
      if (this.answer === this.correct) {
        this.showHintButton = false;
        this.showCorrect = true;
        this.showIncorrect = false;
      } else {
        this.showIncorrect = true;
        this.attempts ++;
        if (this.attempts >= 2) { this.showHintButton = true; }
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
      let correctPosition = Math.floor(Math.random() * 4);
      let newAnswers;
      switch (correctPosition) {
        case 0: newAnswers = [correct, correct * 1.25, correct * 1.35, correct * 1.5].map(answer => parseFloat(answer.toFixed(2))); break;
        case 1: newAnswers = [correct, correct * 0.75, correct * 1.25, correct * 1.5].map(answer => parseFloat(answer.toFixed(2))); break;
        case 2: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 1.25].map(answer => parseFloat(answer.toFixed(2))); break;
        case 3: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 0.95].map(answer => parseFloat(answer.toFixed(2))); break;
      }
      // create an array with numbers 0-3 in random order. eg: [1,3,0,2]  These are the index positions for the new answers above - reusable
      let answerPositions = []
      let newAnswerSet = [];
    
      const getRandomIndex = () => { 
        return Math.floor(Math.random() * 4);
      }
      
      for (let i = 1; i < 5; i++) {
        let number;
        // make sure no number is used twice in the answerPositions array
        do {
          number = getRandomIndex();
        } while (answerPositions.includes(number));
        answerPositions.push(number);
      }
      // using the values in the answerPositions array as index positions and the values in the newAnswers array as values
      // create the newAnswerSet array using newAnswerSet[answerPositions] = newAnswers
      answerPositions.forEach((index, value) => {
        newAnswerSet[value] = newAnswers[index];
      });
      // the result is the values in the newAnswers array are pushed into a new array in random positions
      // this creates a new answer set for the new problem
      return newAnswerSet;
    }
  },
  // computed: {
  //   incorrectMessage() { return `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.` }
  // }
}