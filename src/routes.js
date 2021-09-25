const express = require('express')
const route = express.Router()
const sendController = require('./controllers/SendMailController')

route.post('/send_contact', sendController.SendMail)
route.get('/', sendController.HomeMail)


module.exports = route
