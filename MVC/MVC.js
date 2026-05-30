const express = require('express')
var app = express()

app.use(express.json())

const articles = require('./routes/articles')
app.use('/articles', articles)

app.listen(8080)