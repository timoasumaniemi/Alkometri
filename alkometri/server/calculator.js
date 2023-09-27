function calculateAlcohol(data) {
    var alcoholLevel = 0
    const litres = data.bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = data.weight * 0.1
    const gramsLeft = grams - (burning * data.time)

    if (data.gender == "male") {
        alcoholLevel = gramsLeft / (data.weight * 0.7)
    }
    else if (data.gender == "female") {
        alcoholLevel = gramsLeft / (data.weight * 0.6)
    }
    if(alcoholLevel < 0) {
        alcoholLevel = 0
    }

    return parseFloat(alcoholLevel.toFixed(2));
}

module.exports = { calculateAlcohol }
