import {getFactors} from './factors'
import {getRandom} from './random'
export default {
  s1p1: {
    initial: () => { return {ounces: 24} },
    correct: (units) => { return parseFloat((units.ounces / 16).toFixed(1)) },
    newValues: () => {
      let ounces = getRandom(8, 60)
      return { ounces }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.ounces} Ounces / 16 = ${correct} Pounds.` }
  },
  s1p2: {
    initial: () => { return { flOunces: 260 } },
    correct: (units) => { return parseFloat((units.flOunces / 128).toFixed(2)) },
    newValues: () => {
      let flOunces = getRandom(32, 500)
      return { flOunces }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flOunces} Fluid Ounces / 128 = ${correct} Gallons.` }
  },
  s1p3: {
    initial: () => { return { flOunces: 26 } },
    correct: (units) => { return parseFloat((units.flOunces / 8).toFixed(1)) },
    newValues: () => {
      let flOunces = getRandom(2, 64)
      return { flOunces }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flOunces} Fluid Ounces / 8 = ${correct} Cups.` }
  },
  s1p4: {
    initial: () => { return { yards: 10 } },
    correct: (units) => { return units.yards * 3 },
    newValues: () => {
      let yards = getRandom(1, 50)
      return { yards }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.yards} Yards * 3 = ${correct} Feet.` }
  },
  s1p5: {
    initial: () => { return { inches: 5 } },
    correct: (units) => { return parseFloat((units.inches / 12).toFixed(2)) },
    newValues: () => {
      let inches = getRandom(1, 18)
      return { inches }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.inches} Inches / 12 = ${correct} Feet.` }
  },
  s2p1: {
    initial: () => { return { length: 25, width: 10 } },
    correct: (units) => { return units.length * units.width },
    newValues: () => {
      let width = getRandom(3, 30)
      let length = getRandom(3, 30)
      return { length, width }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.length} Feet * ${units.width} Feet = ${correct} Ft\u00B2.` }
  },
  s2p2: {
    initial: () => { return { diameter: 12, radius: 6 } },
    correct: (units) => { return parseFloat((units.radius * units.radius * 3.14).toFixed(2)) },
    newValues: () => {
      let diameter = getRandom(3, 30)
      let radius = parseFloat((diameter / 2).toFixed(2))
      return { diameter, radius }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.radius} Feet * ${units.radius} Feet * 3.14 = ${correct} Ft\u00B2.` }
  },
  s2p3: {
    initial: () => { return { length: 25, width: 10, shallow: 3, deep: 8, average: 5.5 } },
    correct: (units) => { return parseFloat((units.length * units.width * units.average * 7.5).toFixed(1)) },
    newValues: () => {
      let width = getRandom(3, 30)
      let length = getRandom(3, 30)
      let shallow = getRandom(1, 6)
      let deep = getRandom(6, 18)
      let average = (deep + shallow) / 2
      return { length, width, shallow, deep, average }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.length} Feet * ${units.width} Feet * ${units.average} Feet * 7.5 = ${correct} Ft\u00B2.` }
  },
  s2p4: {
    initial: () => { return { length: 25, width: 10, slength: 18, dlength: 7, sshallow: 3, sdeep: 5, saverage: 4, dshallow: 5, ddeep: 12, daverage: 8.5 } },
    correct: (units) => { return parseFloat(((units.slength * units.width * units.saverage * 7.5) + (units.dlength * units.width * units.daverage * 7.5)).toFixed(1)) },
    newValues: () => {
      let width = getRandom(3, 30)
      let length = getRandom(3, 30)
      let slength = Math.floor(length * 0.75)
      let dlength = length - slength
      let sshallow = getRandom(1, 4)
      let sdeep = getRandom(5, 6)
      let saverage = (sdeep + sshallow) / 2
      let dshallow = sdeep
      let ddeep = getRandom(dshallow, 15)
      let daverage = (ddeep + dshallow) / 2
      return { length, width, slength, dlength, sshallow, sdeep, saverage, dshallow, ddeep, daverage }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0(${units.slength} Feet * ${units.width} Feet * ${units.saverage} Feet * 7.5) + (${units.dlength} Feet * ${units.width} Feet * ${units.daverage} Feet * 7.5) = ${correct} Ft\u00B2.` }
  },
  s2p5: {
    initial: () => { return { diameter: 12, radius: 6, depth: 3 } },
    correct: (units) => { return parseFloat((units.radius * units.radius * 3.14 * units.depth * 7.5).toFixed(2)) },
    newValues: () => {
      let diameter = getRandom(3, 30)
      let radius = parseFloat((diameter / 2).toFixed(2))
      let depth = getRandom(3, 6)
      return { diameter, radius, depth }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.radius} Feet * ${units.radius} Feet * 3.14 * ${units.depth} feet * 7.5 = ${correct} gallons.` }
  },
  s2p6: {
    initial: () => { return { tdiameter: 12, tradius: 6, tdepth: 3, sdiameter: 9, sradius: 4.5, sdepth: 2 } },
    correct: (units) => { return parseFloat(((units.tradius * units.tradius * 3.14 * units.tdepth * 7.5) + (units.sradius * units.sradius * 3.14 * units.sdepth * 7.5)).toFixed(2)) },
    newValues: () => {
      let tdiameter = getRandom(5, 30)
      let tradius = parseFloat((tdiameter / 2).toFixed(2))
      let tdepth = getRandom(2, 4)
      let sdiameter = tdiameter - 3
      let sradius = parseFloat((sdiameter / 2).toFixed(2))
      let sdepth = getRandom(2, 4)
      return { tdiameter, tradius, tdepth, sdiameter, sradius, sdepth }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0(${units.tradius} Feet * ${units.tradius} Feet * 3.14 * ${units.tdepth} feet * 7.5) + (${units.sradius} Feet * ${units.sradius} Feet * 3.14 * ${units.sdepth} feet * 7.5) = ${correct} gallons.` }
  },
  s2p7: {
    initial: () => { return { length: 25, width: 10, inches: 3, feet: 0.25 } },
    correct: (units) => { return parseFloat((units.length * units.width * units.feet * 7.5).toFixed(2)) },
    newValues: () => {
      let width = getRandom(3, 30)
      let length = getRandom(3, 30)
      let inches = getRandom(1, 16)
      let feet = (inches / 12).toFixed(2)
      return { length, width, inches, feet }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.length} Feet * ${units.width} Feet * ${units.feet} Feet * 7.5 = ${correct} Ft\u00B2.` }
  },
  s2p8: {
    initial: () => { return { diameter: 12, radius: 6, inches: 3, feet: 0.25 } },
    correct: (units) => { return parseFloat((units.radius * units.radius * 3.14 * units.feet * 7.5).toFixed(2)) },
    newValues: () => {
      let diameter = getRandom(3, 30)
      let radius = parseFloat((diameter / 2).toFixed(2))
      let inches = getRandom(1, 12)
      let feet = (inches / 12).toFixed(2)
      return { diameter, radius, inches, feet }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.radius} Feet * ${units.radius} Feet * 3.14 * ${units.feet} feet * 7.5 = ${correct} gallons.` }
  },
  s3p1: {
    initial: () => { return { pH: 7.6, temperature: 76, calcium: 200, alkalinity: 100, TDS: 1200, temperaturef: 0.6, calciumf: 1.9, alkalinityf: 2.0, TDSf: 12.2, sub: 12.1, SI: -0.1 } },
    correct: (units) => { return parseFloat((units.pH + units.temperaturef + units.calciumf + units.alkalinityf - units.TDSf).toFixed(2)) },
    newValues: () => {
      let pH = getRandom(7.2, 8.0, 0, 1)
      let temperature = getRandom(32, 105)
      let calcium = getRandom(25, 400, 5)
      let alkalinity = getRandom(25, 180, 5)
      let TDS = getRandom(200, 2000, 10)
      let newFactors = getFactors(temperature, calcium, alkalinity, TDS)
      let sub = parseFloat(newFactors[0] + newFactors[1] + newFactors[2] + pH).toFixed(1)
      return { pH, temperature, calcium, alkalinity, TDS, sub, temperaturef: newFactors[0], calciumf: newFactors[1], alkalinityf: newFactors[2], TDSf: newFactors[3] }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0Saturation Index is ${correct}.` }
  },
  s3p2: {
    initial: () => { return { pH: 7.6, temperature: 76, calcium: 200, alkalinity: 100, cyanuric: 60, TDS: 1200, temperaturef: 0.6, calciumf: 1.9, alkalinityf: 1.6, TDSf: 12.2, sub: 11.7, SI: -0.5 } },
    correct: (units) => { return parseFloat((units.pH + units.temperaturef + units.calciumf + units.alkalinityf - units.TDSf).toFixed(2)) },
    newValues: () => {
      let pH = getRandom(7.2, 8.0, 0, 1)
      let temperature = getRandom(32, 105)
      let calcium = getRandom(25, 400, 5)
      let cyanuric = getRandom(10, 100, 5)
      let alkalinity = Math.round(getRandom(25, 180, 5) - (cyanuric / 3))
      let TDS = getRandom(200, 2000, 10)
      let newFactors = getFactors(temperature, calcium, alkalinity, TDS)
      let sub = parseFloat(newFactors[0] + newFactors[1] + newFactors[2] + pH).toFixed(1)
      return { pH, temperature, calcium, alkalinity, cyanuric, TDS, sub, temperaturef: newFactors[0], calciumf: newFactors[1], alkalinityf: newFactors[2], TDSf: newFactors[3] }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0Saturation Index is ${correct}.` }
  },
  s4p1: {
    initial: () => { return { poolVolume: 75000, unitVolume: 10000, chemicalAmount: 10.0, chemicalType: 'fl.oz.', waterFactor: 7.5, total: 75, conversionFactor: 128, conversionTotal: 0.59, conversionType: 'gallons', conversion: '75 fl.oz. / 128 = 0.59 gallons.' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(40000, 150000, 5000)
      let unitVolume = getRandom(10000, 15000, 1000)
      let chemicalAmount = getRandom(8, 16)
      let chemicalType = 'fl.oz.'
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor).toFixed(2))
      let conversionFactor = 128
      let conversionTotal = parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = 'gallons'
      return { poolVolume, unitVolume, chemicalAmount, chemicalType, waterFactor, total, conversion: `${total} ${chemicalType} / ${conversionFactor} = ${conversionTotal} ${conversionType}`, conversionTotal, conversionType }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p2: {
    initial: () => { return { poolVolume: 50000, unitVolume: 10000, current: 1.0, new: 3.0, desiredChange: 2.0, chemicalName: 'Calcium Hypochlorite', chemicalAmount: 2.0, chemicalType: 'oz.', changeProvided: 1, waterFactor: 5, chemicalFactor: 2, total: 20, conversionFactor: 16, conversionTotal: 1.25, conversionType: 'pounds', conversion: '20 oz. / 16 = 1.25 pounds.' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(40000, 150000, 5000)
      let unitVolume = getRandom(10000, 15000, 1000)
      let chemicalAmount = getRandom(8, 16)
      let chemicalType = 'fl.oz.'
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor).toFixed(2))
      let conversionFactor = 128
      let conversionTotal = parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = 'gallons'
      return { poolVolume, unitVolume, chemicalAmount, chemicalType, waterFactor, total, conversion: `${total} ${chemicalType} / ${conversionFactor} = ${conversionTotal} ${conversionType}`, conversionTotal, conversionType }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  }
}
