const express = require('express')
const indexRouter = require('./app/routes/index')

const app = express()
const port = 9009

app.use(express.json())
app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})