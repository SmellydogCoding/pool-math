import {getFactors} from './factors'
import {getRandom} from './random'
import chemical from './chemicalAdjustmentValues'
import poolTypes from './poolTypes'
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
    initial: () => { return { poolVolume: 50000, unitVolume: 10000, currentValue: 1.0, newValue: 3.0, desiredChange: 2.0, chemicalName: 'Calcium Hypochlorite', chemicalAmount: 2.0, chemicalType: 'oz.', changeProvided: 1, waterFactor: 5, chemicalFactor: 2, total: 20, conversionFactor: 16, conversionTotal: 1.25, conversionType: 'pounds', conversion: '20 oz. / 16 = 1.25 pounds.' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = getRandom(5000, 15000, 1000)
      let currentValue = getRandom(0, 2)
      let newValue = getRandom(3, 5)
      let desiredChange = newValue - currentValue
      let chlorineType = chemical.chlorineUp[getRandom(0, 7)]
      let chemicalName = chlorineType.name
      let chemicalAmount = getRandom(1, 15)
      let chemicalType = chlorineType.unit
      let changeProvided = chlorineType.amount
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chlorineType.unit === 'oz.' ? 16 : 128
      let conversionTotal = chlorineType.unit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chlorineType.unit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chlorineType.unit === 'pounds' ? `${total} ${chemicalType}` : `${total} ${chemicalType} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalType, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p3: {
    initial: () => { return { poolVolume: 30000, unitVolume: 10000, currentValue: 1.0, newValue: 3.0, desiredChange: 2.0, chemicalName: 'Sodium Hypochlorite', chemicalAmount: 10.7, chemicalUnit: 'fl.oz.', changeProvided: 1, waterFactor: 3, chemicalFactor: 2, total: 64.2, conversionFactor: 128, conversionTotal: 0.5, conversionType: 'gallons', conversion: '64.2 fl.oz. / 128 = 0.5 gallons.' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(0, 2)
      let newValue = getRandom(3, 5)
      let desiredChange = newValue - currentValue
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.chlorineUp[getRandom(0, 6)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p4: {
    initial: () => { return { poolVolume: 40000, unitVolume: 10000, currentValue: 70, newValue: 100, desiredChange: 30, chemicalName: 'Sodium Bicarbonate', chemicalAmount: 1.4, chemicalUnit: 'pounds', changeProvided: 10, waterFactor: 4, chemicalFactor: 3, total: 16.8, conversionFactor: 1, conversionTotal: 16.8, conversionType: 'pounds', conversion: '16.8 pounds' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(30, 70, 10)
      let newValue = getRandom(80, 120, 10)
      let desiredChange = newValue - currentValue
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.alkalinityUp[getRandom(0, 2)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p5: {
    initial: () => { return { poolVolume: 60000, unitVolume: 10000, currentValue: 160, newValue: 100, desiredChange: 60, chemicalName: 'Muriatic Acid', chemicalAmount: 26.0, chemicalUnit: 'fl.oz.', changeProvided: 10, waterFactor: 6, chemicalFactor: 6, total: 936.0, conversionFactor: 128, conversionTotal: 7.31, conversionType: 'gallons', conversion: '936.0 fl.oz / 128 = 7.31 gallons' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(130, 190, 10)
      let newValue = getRandom(80, 120, 10)
      let desiredChange = Math.abs(newValue - currentValue)
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.alkalinityDown[getRandom(0, 1)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p6: {
    initial: () => { return { poolVolume: 80000, unitVolume: 10000, currentValue: 100, newValue: 200, desiredChange: 100, chemicalName: 'Calcium Chloride (100%)', chemicalAmount: 0.9, chemicalUnit: 'pounds', changeProvided: 10, waterFactor: 8, chemicalFactor: 10, total: 72.0, conversionFactor: 1, conversionTotal: 72.0, conversionType: 'pounds', conversion: '72 pounds' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(25, 175, 25)
      let newValue = getRandom(200, 400, 25)
      let desiredChange = Math.abs(newValue - currentValue)
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.calciumUp[getRandom(0, 1)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p7: {
    initial: () => { return { poolVolume: 40000, unitVolume: 10000, currentValue: 0, newValue: 30, desiredChange: 30, chemicalName: 'Cyanuric Acid', chemicalAmount: 13.0, chemicalUnit: 'oz', changeProvided: 10, waterFactor: 4, chemicalFactor: 3, total: 156.0, conversionFactor: 16, conversionTotal: 9.75, conversionType: 'pounds', conversion: '156.0 oz / 16 = 9.75 pounds' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(0, 25, 5)
      let newValue = getRandom(30, 50, 5)
      let desiredChange = Math.abs(newValue - currentValue)
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.stabilizerUp[0]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s4p8: {
    initial: () => { return { poolVolume: 70000, unitVolume: 10000, currentValue: 20, newValue: 5, desiredChange: 15, chemicalName: 'Sodium Theosulfate', chemicalAmount: 2.6, chemicalUnit: 'oz', changeProvided: 1, waterFactor: 7, chemicalFactor: 15, total: 273.0, conversionFactor: 16, conversionTotal: 17.06, conversionType: 'pounds', conversion: '273.0 oz / 16 = 17.06 pounds' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let currentValue = getRandom(5, 20)
      let newValue = getRandom(1, 5)
      let desiredChange = Math.abs(newValue - currentValue)
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.chlorineDown[getRandom(0, 1)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, currentValue, newValue, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s5p1: {
    initial: () => { return { freeCl: 3, totalCl: 4 } },
    correct: (units) => { return parseFloat(((units.totalCl - units.freeCl) * 10).toFixed(1)) },
    newValues: () => {
      let freeCl = getRandom(1.01, 5, 0.5, 1)
      let totalCl = freeCl + getRandom(0.5, 3, 0.5, 1)
      let breakpoint = (totalCl - freeCl) * 10
      return { freeCl, totalCl, breakpoint }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0The Breakpoint Value is ${correct} ppm.` }
  },
  s5p2: {
    initial: () => { return { poolVolume: 30000, unitVolume: 10000, freeCl: 2, totalCl: 3, breakpoint: 10, desiredChange: 8.0, chemicalName: 'Sodium Hypochlorite', chemicalAmount: 10.7, chemicalUnit: 'fl.oz.', changeProvided: 1, waterFactor: 3, chemicalFactor: 8, total: 256.8, conversionFactor: 128, conversionTotal: 2.0, conversionType: 'gallons', conversion: '256.8 fl.oz. / 128 = 2.0 gallons.' } },
    correct: (units) => { return parseFloat((units.conversionTotal).toFixed(2)) },
    newValues: () => {
      let poolVolume = getRandom(2000, 150000, 1000)
      let unitVolume = 10000
      let freeCl = getRandom(1.01, 5, 0.5, 1)
      let totalCl = freeCl + getRandom(0.5, 3, 0.5, 1)
      let breakpoint = (totalCl - freeCl) * 10
      let desiredChange = breakpoint - freeCl
      let { name: chemicalName, amount: chemicalAmount, unit: chemicalUnit, change: changeProvided } = chemical.chlorineUp[getRandom(0, 6)]
      let waterFactor = parseFloat((poolVolume / unitVolume).toFixed(1))
      let chemicalFactor = parseFloat((desiredChange / changeProvided).toFixed(1))
      let total = parseFloat((chemicalAmount * waterFactor * chemicalFactor).toFixed(2))
      let conversionFactor = chemicalUnit === 'oz.' ? 16 : 128
      let conversionTotal = chemicalUnit === 'pounds' ? total : parseFloat((total / conversionFactor).toFixed(2))
      let conversionType = chemicalUnit === 'oz.' ? 'pounds' : 'gallons'
      let conversion = chemicalUnit === 'pounds' ? `${total} ${chemicalUnit}` : `${total} ${chemicalUnit} / ${conversionFactor} = ${conversionTotal} ${conversionType}`
      return { poolVolume, unitVolume, freeCl, totalCl, breakpoint, desiredChange, chemicalName, chemicalAmount, chemicalUnit, changeProvided, waterFactor, chemicalFactor, total, conversion, conversionTotal, conversionType, conversionFactor }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0You need to add ${correct} ${units.conversionType}.` }
  },
  s6p1: {
    initial: () => { return { volume: 50000, flow: 130 } },
    correct: (units) => { return parseFloat((units.volume / units.flow / 60).toFixed(1)) },
    newValues: () => {
      let volume = getRandom(40000, 150000, 5000)
      let flowFactor = getRandom(0.5, 1.5, 0.1, 1)
      let flow = parseFloat(((volume / 6 / 60) * flowFactor).toFixed(0))
      return { volume, flow }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.volume} / ${units.flow} / 60 = ${correct} Hours.` }
  },
  s6p2: {
    initial: () => { return { volume: 2000, flow: 70 } },
    correct: (units) => { return parseFloat((units.volume / units.flow).toFixed(1)) },
    newValues: () => {
      let volume = getRandom(1000, 5000, 100)
      let flowFactor = getRandom(0.5, 1.5, 0.1, 1)
      let flow = parseFloat(((volume / 30) * flowFactor).toFixed(0))
      return { volume, flow }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.volume} / ${units.flow} = ${correct} Minutes.` }
  },
  s6p3: {
    initial: () => { return { name: 'Swimming Pool', volume: 30000, turnover: 6 } },
    correct: (units) => { return parseFloat((units.volume / units.turnover / 60).toFixed(1)) },
    newValues: () => {
      let currentPoolIndex = getRandom(0, 4)
      let volume = getRandom(poolTypes[currentPoolIndex].min, poolTypes[currentPoolIndex].max, poolTypes[currentPoolIndex].mod)
      let name = poolTypes[currentPoolIndex].name
      let turnover = poolTypes[currentPoolIndex].turnover
      return { name, volume, turnover }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.volume} / ${units.turnover} / 60 = ${correct} Gallons Per Minute.` }
  },
  s6p4: {
    initial: () => { return { volume: 1000 } },
    correct: (units) => { return parseFloat((units.volume / 30).toFixed(1)) },
    newValues: () => {
      let volume = getRandom(1000, 5000, 100)
      return { volume }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.volume} / 30 = ${correct} Gallons Per Minute.` }
  },
  s7p1: {
    initial: () => { return { length: 1.5, width: 1.5, grids: 5 } },
    correct: (units) => { return parseFloat((units.length * units.width * 2 * units.grids).toFixed(1)) },
    newValues: () => {
      let length = getRandom(1, 5, 0.5)
      let width = getRandom(1, 5, 0.5)
      let grids = getRandom(1, 10, 1)
      return { length, width, grids }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.length} x ${units.width} x ${units.grids} = ${correct}ft\u00B2.` }
  },
  s7p2: {
    initial: () => { return { length: 2, width: 2, flow: 100, fmr: 2.0 } },
    correct: (units) => { return Math.ceil(units.flow / units.fmr / (units.length * units.width * 2)) },
    newValues: () => {
      let length = getRandom(1, 5, 0.5)
      let width = getRandom(1, 5, 0.5)
      let flow = getRandom(30, 150, 10)
      let fmrFactor = getRandom(0, 1)
      let fmr = fmrFactor === 0 ? 2.0 : 2.5
      return { length, width, flow, fmr }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flow} / ${units.fmr} / (${units.length} x ${units.width} x 2) = ${correct} grids (rounded up).` }
  },
  s7p3: {
    initial: () => { return { area: 40, fmr: 2.0 } },
    correct: (units) => { return parseFloat((units.area * units.fmr).toFixed(0)) },
    newValues: () => {
      let area = getRandom(10, 100, 5)
      let fmrFactor = getRandom(0, 1)
      let fmr = fmrFactor === 0 ? 2.0 : 2.5
      return { area, fmr }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.area} x ${units.fmr} = ${correct} gpm.` }
  },
  s7p4: {
    initial: () => { return { diameter: 6, radius: 3 } },
    correct: (units) => { return parseFloat((units.radius * units.radius * 3.14).toFixed(1)) },
    newValues: () => {
      let diameter = getRandom(1, 10, 0.5)
      let radius = diameter / 2
      return { diameter, radius }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.radius} x ${units.radius} x 3.14 = ${correct}ft\u00B2.` }
  },
  s7p5: {
    initial: () => { return { flow: 75, fmr: 14 } },
    correct: (units) => { return parseFloat((units.flow / units.fmr).toFixed(1)) },
    newValues: () => {
      let flow = getRandom(30, 150, 10)
      let fmr = getRandom(5, 20, 1)
      return { flow, fmr }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.flow} / ${units.fmr} = ${correct}ft\u00B2.` }
  },
  s7p6: {
    initial: () => { return { area: 25, fmr: 13 } },
    correct: (units) => { return parseFloat((units.area * units.fmr).toFixed(1)) },
    newValues: () => {
      let area = getRandom(5, 50, 5)
      let fmr = getRandom(5, 20, 1)
      return { area, fmr }
    },
    correctMessage: (units, correct) => { return `Correct!\u00A0\u00A0${units.area} x ${units.fmr} = ${correct} gpm.` }
  }
}
