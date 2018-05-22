export const getNewAnswerSet = (correct, type, decimals) => {
// const getNewAnswerSet = (correct, type, decimals) => {
  // pick random number between 0 and 3
  let correctPosition = Math.floor(Math.random() * 4)
  let newAnswers
  // picked number determines answer choices - relative to the correct answer
  if (type === 'SI') {
    // for saturation index problems, randomly choose whether the last answer choice will be correct + 2 or correct - 2
    let lastChoice
    Math.floor(Math.random() * 2) === 1 ? lastChoice = correct + 0.2 : lastChoice = correct - 0.2
    switch (correctPosition) {
      case 0: newAnswers = [correct, correct + 0.1, correct - 0.1, lastChoice].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 1: newAnswers = [lastChoice, correct, correct + 0.1, correct - 0.1].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 2: newAnswers = [correct - 0.1, lastChoice, correct, correct + 0.1].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 3: newAnswers = [correct + 0.1, correct - 0.1, lastChoice, correct].map(answer => parseFloat(answer.toFixed(decimals))); break
    }
  } else {
    switch (correctPosition) {
      case 0: newAnswers = [correct, correct * 1.25, correct * 1.35, correct * 1.5].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 1: newAnswers = [correct, correct * 0.75, correct * 1.25, correct * 1.5].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 2: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 1.25].map(answer => parseFloat(answer.toFixed(decimals))); break
      case 3: newAnswers = [correct, correct * 0.75, correct * 0.85, correct * 0.95].map(answer => parseFloat(answer.toFixed(decimals))); break
    }
  }

  // using toFixed() with one decimal place with small values can sometime result in duplicate answers in the answer set
  // this will recursivly run the function with the answers set to two decimal places
  let duplicates = false
  let sorted = newAnswers.sort()
  sorted.forEach((value, index) => { if (sorted[index] === sorted[index - 1]) { duplicates = true } })
  if (duplicates) { return getNewAnswerSet(correct, type, decimals + 1) }

  // create an array with numbers 0-3 in random order. eg: [1,3,0,2]  These are the index positions for the new answers above
  let answerPositions = []
  let newAnswerSet = []
  // pick random number between 0 and 3 - making sure to use each number only once
  for (let i = 1; i < 5; i++) {
    let number
    do {
      number = Math.floor(Math.random() * 4)
    } while (answerPositions.includes(number))
    answerPositions.push(number)
  }
  // using the values in the answerPositions array as index positions and the values in the newAnswers array as values
  // create the newAnswerSet array using newAnswerSet[answerPositions] = newAnswers
  // the result is the values in the newAnswers array are pushed into a new array in random positions
  // this creates a new answer set for the new problem
  answerPositions.forEach((index, value) => {
    newAnswerSet[value] = {text: newAnswers[index].toFixed(decimals), value: newAnswers[index]}
  })
  return newAnswerSet
}
