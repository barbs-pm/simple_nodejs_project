const express = require('express')
const app = express()
const router = require('./routes/routes')

app.get('/', (request, response) => {
    response.send("TESTE")
})

app.use(express.json())
app.use('/', router)

app.listen(3333, () => {
    console.log("Server running")
})
