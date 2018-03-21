export default {
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
    }
  },
  computed: {
    incorrectMessage() { return `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.` }
  }
}