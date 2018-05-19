export const getFactors = (temperature, calcium, alkalinity, TDS) => {
  let newFactors = []

  temperature === 32 ? newFactors.push(0.0) : 
  (temperature > 32 && temperature <= 37) ? newFactors.push(0.1) :
  (temperature > 37 && temperature <= 46) ? newFactors.push(0.2) :
  (temperature > 46 && temperature <= 53) ? newFactors.push(0.3) :
  (temperature > 53 && temperature <= 60) ? newFactors.push(0.4) :
  (temperature > 60 && temperature <= 66) ? newFactors.push(0.5) :
  (temperature > 66 && temperature <= 76) ? newFactors.push(0.6) :
  (temperature > 76 && temperature <= 84) ? newFactors.push(0.7) :
  (temperature > 84 && temperature <= 94) ? newFactors.push(0.8) :
  (temperature > 94 && temperature <= 105) ? newFactors.push(0.9) : 
  console.log('temperature out of range')
  
  calcium === 25 ? newFactors.push(1.0) : 
  (calcium > 25 && calcium <= 50) ? newFactors.push(1.3) :
  (calcium > 50 && calcium <= 75) ? newFactors.push(1.5) :
  (calcium > 75 && calcium <= 100) ? newFactors.push(1.6) :
  (calcium > 100 && calcium <= 125) ? newFactors.push(1.7) :
  (calcium > 125 && calcium <= 150) ? newFactors.push(1.8) :
  (calcium > 150 && calcium <= 200) ? newFactors.push(1.9) :
  (calcium > 200 && calcium <= 250) ? newFactors.push(2.0) :
  (calcium > 250 && calcium <= 300) ? newFactors.push(2.1) :
  (calcium > 300 && calcium <= 400) ? newFactors.push(2.2) : 
  (calcium > 400 && calcium <= 800) ? newFactors.push(2.5) : 
  console.log('calcium out of range')
  
  alkalinity === 25 ? newFactors.push(1.4) : 
  (alkalinity > 25 && alkalinity <= 50) ? newFactors.push(1.7) :
  (alkalinity > 50 && alkalinity <= 75) ? newFactors.push(1.9) :
  (alkalinity > 75 && alkalinity <= 100) ? newFactors.push(2.0) :
  (alkalinity > 100 && alkalinity <= 125) ? newFactors.push(2.1) :
  (alkalinity > 125 && alkalinity <= 150) ? newFactors.push(2.2) :
  (alkalinity > 150 && alkalinity <= 200) ? newFactors.push(2.3) :
  (alkalinity > 200 && alkalinity <= 250) ? newFactors.push(2.4) :
  (alkalinity > 250 && alkalinity <= 300) ? newFactors.push(2.5) :
  (alkalinity > 300 && alkalinity <= 400) ? newFactors.push(2.6) : 
  (alkalinity > 400 && alkalinity <= 800) ? newFactors.push(2.9) : 
  console.log('alkalinity out of range')
  
  TDS < 1000 ? newFactors.push(12.1) : newFactors.push(12.2)

  return newFactors
}