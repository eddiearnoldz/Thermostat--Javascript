class Thermostat {
  constructor(temperature = 20, powerSaving = true) {
    this.temperature = temperature;
    this.powerSaving = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if ( this.powerSaving === true && this.temperature >= 25) {
      return this.temperature = 25;
    } else if (this.powerSaving === false && this.temperature >= 32){
      return this.temperature = 32;
    } else {
      return this.temperature++;
    }
  }
  down() {
    if (this.temperature > 10) {
      return this.temperature--;
    }
  }
  setPowerSavingMode(choice) {
    if ((choice) === false) {
      return this.powerSaving = false;
    } else if ((choice) === true) {
      return this.powerSaving = true;
    }
  }
  fetchCurrentEnergyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature > 25) {
      return 'high-usage';
    } else {
      return 'medium-usage';
    }
  }
  reset() {
    return this.temperature = 20;
  }
}


// const thermostat = new Thermostat
// console.log(thermostat.up());
// console.log(thermostat.down());
// console.log(thermostat.setPowerSavingMode(true));
// console.log(thermostat.setPowerSavingMode(false));
// console.log(thermostat.setPowerSavingMode(true));
// console.log(thermostat.reset());
// console.log(thermostat.fetchCurrentEnergyUsage());
module.exports = Thermostat