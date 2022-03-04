const Thermostat = require('./thermostat')

describe('thermostat', () => {
  let thermostat = new Thermostat()
  it('has a default value of 20', () => {
    expect(thermostat.getTemperature()).toBe(20)
  })
  it('increase the temperature by 1 when up() is called', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21)
  })
  it('decreases the temperature by 1 when down() is called', () => {
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(20)
  })
  it('has a power saving feature whos default is true', () => {
    expect(thermostat.powerSaving).toBe(true)
  })
  it('has a power saving feature that can be toggled on/off', () => {
    expect(thermostat.powerSaving).toBe(true)
    thermostat.setPowerSavingMode(false)
    expect(thermostat.powerSaving).toBe(false)
    thermostat.setPowerSavingMode(true)
    expect(thermostat.powerSaving).toBe(true)  
  })
  it('allows temperature to max out at 25 if powerSaving is oon', () => {
    let thermostat = new Thermostat()
    for (let i = 0; i < 6; i++) {thermostat.up()}
    expect(thermostat.getTemperature()).toBe(25)
  })
  it('allows temperature to max out at 32 if powerSaving is off', () => {
    let thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 14; i++) {thermostat.up()}
    expect(thermostat.getTemperature()).toBe(32)
  })
  it('has a minimum temperature of 10 degrees', () => {
    let thermostat = new Thermostat()
    for (let i = 0; i < 10; i++) {thermostat.down()}
    expect(thermostat.getTemperature()).toBe(10)
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(10)
  })
  it('returns low usage if temp is 18 or under', () => {
    let thermostat = new Thermostat()
    for (let i = 0; i < 3; i++) {thermostat.down()}
    expect(thermostat.fetchCurrentEnergyUsage()).toBe('low-usage')
  })
  it('returns high-usage if temp is over or equal to 25', () => {
    let thermostat = new Thermostat()
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 6; i++) {thermostat.up()}
    expect(thermostat.fetchCurrentEnergyUsage()).toBe('high-usage')
  })
  it('returns medium-usage if temp is between 18 and 25', () => {
    let thermostat = new Thermostat()
    expect(thermostat.fetchCurrentEnergyUsage()).toBe('medium-usage')
  })
  it('has a reset button that resets the temperature to 20', () => {
    let thermostat = new Thermostat()
    for (let i = 0; i < 10; i++) {thermostat.down()}
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20)
  })
})