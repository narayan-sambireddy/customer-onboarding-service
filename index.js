/**
* Test the connectivity to MongoDB through mongoose middleware.
*/
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/customer_onboarding')

mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB')
);


app.get('/', (req, res) => res.send('Hello Alpha!!'))

var server = app.listen(3000, () =>
  console.log("Server is running at http://localhost:" + server.address().port)
)
