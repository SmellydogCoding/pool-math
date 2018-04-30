export const getRandom = (min, max, mod=0, decimals=0) => {
  let number;
  !Number.isInteger(min) || !Number.isInteger(max) ? number =  parseFloat((Math.random() * (max - min) + min).toFixed(decimals)) : number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (mod > 0) {
    let remainder = number%mod;
    remainder <= Math.floor(mod / 2) ? number -= remainder : number += mod - remainder
    return number
  } else { return number }
}