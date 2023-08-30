const express = require('express')
const cors = require('cors')

const alkometriServer = express()
alkometriServer.use(cors())
const port = 3001

alkometriServer.get("/", (request, response) => {
    response.status(200).json({result: "Alkometri Server responding"})
})

alkometriServer.listen(port,() =>{
    console.log(`Server running at port: ${port}`)
})