export default {
  s1p1: {
    initial: () => { return {ounces: 24} },
    correct: (units) => { return parseFloat((units.ounces / 16).toFixed(2)); },
    newValues: () => { 
      let ounces = Math.floor(Math.random() * 60 + 1);
      return {ounces: ounces}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.ounces} Ounces / 16 = ${correct} Pounds.`}
  }
}
