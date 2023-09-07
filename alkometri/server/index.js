const express = require('express')
const cors = require('cors')
const alkometriServer = express()
const calculator = require('./calculator')
alkometriServer.use(cors())
alkometriServer.use(express())
alkometriServer.use(express.json())

const port = 3001

alkometriServer.post("/api", (request, response) => {
    var alcoholLevel = calculator.calculateAlcohol(request.body)
    response.status(200).json({ result: alcoholLevel })
})

alkometriServer.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})