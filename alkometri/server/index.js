const express = require('express')
const cors = require('cors')
const alkometriServer = express()

alkometriServer.use(cors())
alkometriServer.use(express())
alkometriServer.use(express.json())

const port = 3001

alkometriServer.post("/api", (request, response) => {

    var alcoholLevel = 0

    const data = request.body

    const litres = data.bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = data.weight * 0.1
    const gramsLeft = grams - (burning * data.time)

    if (data.gender == "male") {
        alcoholLevel = gramsLeft / (data.weight * 0.7)
    }
    if (data.gender == "female") {
        alcoholLevel = gramsLeft / (data.weight * 0.6)
    }

    response.status(200).json({ result: alcoholLevel })
})

alkometriServer.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})