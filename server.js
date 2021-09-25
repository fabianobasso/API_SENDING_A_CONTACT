const express = require('express')
const app = express()
const port = 8081
const routes = require('./src/routes')
require('dotenv').config()

/**
 *  Config app
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
    console.log(`
        http://localhost:${port}
    `)
})
