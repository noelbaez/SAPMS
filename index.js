const express = require('express')
const http = require('http123')
const app = express()

app.get('/', (req,res) => {
  res.type('html')
  res.end('<h1>Hello</h1>')
})

app.listen(3001)
