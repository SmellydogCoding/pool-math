export default {
  methods: {
    getNewAnswerSet(newAnswers) {
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
  }
}