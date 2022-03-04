const Thermostat = require("./thermostat");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let thermostat = new Thermostat

const changeTemperature = () => {
  rl.question('Enter Command: ', (input) => {
    getInput(input)
    _cliResponse()
    changeTemperature()
  });
}
changeTemperature();




const _getTemp = () => {
  console.log(`The temperature is now ${thermostat.getTemperature()}`)
}
const _max = () => {
  console.log(`The temperature is now ${thermostat.getTemperature()}: (maximum reached)`) 
}
const _cliResponse = () => {
  if (thermostat.getTemperature() === 25 && thermostat.powerSaving === true) {
    _max() 
  } else if (thermostat.getTemperature() === 32 && thermostat.powerSaving === false) {
    _max() 
  } else {
    _getTemp()
  }
}
const getInput = (input) => {
  if ((input) === 'up') {
    thermostat.up();
  } else if ((input) === 'down') {
    thermostat.down();
  } else if ((input) === 'psm on') {
    thermostat.setPowerSavingMode(true)
  } else if ((input) === 'psm off') {
    thermostat.setPowerSavingMode(false)
  }
}
