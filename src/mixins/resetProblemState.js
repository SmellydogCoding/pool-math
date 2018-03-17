export default {
  methods: {
    resetProblemState() {
      this.noAnswer= true;
      this.showCorrect = false;
      this.showIncorrect = false;
      this.showAnswerButton = true;
      this.showNextButton = false;
      this.attempts = 0;
      this.answer = 0;
    }
  }
}