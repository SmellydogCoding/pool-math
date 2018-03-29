export default {
  s1p1: {
    correct: (units) => { return parseFloat((units.ounces / 16).toFixed(2)); },
    newValues: () => { 
      let ounces = Math.floor(Math.random() * 60 + 1);
      return {ounces: ounces}
    }
  }
}
