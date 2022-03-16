const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.type('html')
  res.end('<h1>Hello</h1>')
})

app.listen(3001)
