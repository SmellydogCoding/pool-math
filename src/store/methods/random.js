export const getRandom = (min, max, mod = 0, decimals = 0) => {
  let number
  !Number.isInteger(min) || !Number.isInteger(max) ? number = parseFloat((Math.random() * (max - min) + min).toFixed(decimals)) : number = Math.floor(Math.random() * (max - min + 1)) + min
  if (mod > 0.5) {
    let remainder = number % mod
    remainder <= Math.floor(mod / 2) ? number -= remainder : number += mod - remainder
    return number
  } else if (mod === 0.5) {
    let decimal = parseFloat((number % 1).toFixed(1))
    if (decimal === 0.3 || decimal === 0.4) {
      number = Math.abs(decimal - 0.5) + number
    } else if (decimal === 0.6 || decimal === 0.7) {
      number = Math.abs(decimal - 0.5 - number)
    } else if (decimal < 0.3 || decimal > 0.7) {
      number = Math.round(number)
    }
    return number
  } else { return number }
}
