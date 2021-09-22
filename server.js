const express = require('express')
const app = express()
const port = 8081
const routes = require('./src/routes')
require('dotenv').config()

/**
 *  Config app
 */
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () =>{
    console.log(`
        http://localhost:${port}
    `)
})