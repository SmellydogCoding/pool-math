export default {
  s1p1: {
    initial: () => { return {ounces: 24} },
    correct: (units) => { return parseFloat((units.ounces / 16).toFixed(2)); },
    newValues: () => { 
      let ounces = Math.floor(Math.random() * 60 + 1);
      return {ounces: ounces}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.ounces} Ounces / 16 = ${correct} Pounds.`}
  },
  s1p2: {
    initial: () => { return { flOunces: 260 } },
    correct: (units) => { return parseFloat((units.flOunces / 128).toFixed(2)); },
    newValues: () => { 
      let flOunces = Math.floor(Math.random() * 500 + 1);
      return {flOunces: flOunces}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flOunces} Fluid Ounces / 128 = ${correct} Gallons.`}
  },
  s1p3: {
    initial: () => { return { flOunces: 26 } },
    correct: (units) => { return parseFloat((units.flOunces / 8).toFixed(2)); },
    newValues: () => { 
      let flOunces = Math.floor(Math.random() * 64 + 1);
      return {flOunces: flOunces}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flOunces} Fluid Ounces / 8 = ${correct} Cups.`}
  },
  s1p4: {
    initial: () => { return { yards: 10 } },
    correct: (units) => { return parseFloat((units.yards * 3).toFixed(2)); },
    newValues: () => { 
      let yards = Math.floor(Math.random() * 50 + 1);
      return {yards: yards}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.yards} Yards * 3 = ${correct} Feet.`}
  },
  s1p5: {
    initial: () => { return { inches: 5 } },
    correct: (units) => { return parseFloat((units.inches / 12).toFixed(2)); },
    newValues: () => { 
      let inches = Math.floor(Math.random() * 18 + 1);
      return {inches: inches}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.inches} Inches / 12 = ${correct} Feet.`}
  },
  s2p1: {
    initial: () => { return { length: 25, width: 10 } },
    correct: (units) => { return parseFloat((units.length * units.width).toFixed(2)); },
    newValues: () => { 
      let length = Math.floor(Math.random() * 50 + 1);
      let width = Math.floor(Math.random() * 30 + 1);
      return {length: length, width: width}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.length} Feet * ${units.width} Feet = ${correct} Ft\u00B2.`}
  },
  s2p2: {
    initial: () => { return { diameter: 12, radius: 6 } },
    correct: (units) => { return parseFloat((units.radius * units.radius * 3.14).toFixed(2)); },
    newValues: () => { 
      let diameter = Math.floor(Math.random() * 20 + 1);
      let radius = parseFloat((diameter / 2).toFixed(2));
      return {diameter: diameter, radius: radius}
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.radius} Feet * ${units.radius} Feet * 3.14 = ${correct} Ft\u00B2.`}
  },
}
