const calculator = require('../../server/calculator')

it('Calculator should return correct value', () => {
    const testData = {
        bottles: 1, time: 1, weight: 1, gender: "male"
    }

    expect(calculator.calculateAlcohol(testData)).toBe(16.83);
})
