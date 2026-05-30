const express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

const articles = require('./routes/articles')
app.use('/articles', articles)

app.listen(8080)