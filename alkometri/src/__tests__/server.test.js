const calculator = require('../../server/calculator')

it('Calculator should return 123', () =>{
    expect(calculator.calculateAlcohol()).toBe(123);
})
