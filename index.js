const express = require('express')
const app = express()

app.use('/opa', (req, res, next) => {
  console.log('Antes...')
  next()
})

app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
    data: [
      { id: '3', name: 'Ana', position: 1 },
      { id: '34', name: 'Bia', position: 2 },
      { id: '73', name: 'Fred', position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })

  next()

  // res.send('Estou <h1>bem!</h1><br><br><h2>Tipo é HTML!</h2>')

  // res.json({
  //   name: 'iPad 32gb',
  //   price: 1899.0,
  //   discount: 0.12
  // })

  // res.json([
  //     { id: '3', name: 'Ana', position: 1 },
  //     { id: '34', name: 'Bia', position: 2 },
  //     { id: '73', name: 'Fred', position: 3 }
  //   ])
})

app.use('/opa', (req, res) => {
  console.log('Depois..')
})

app.listen(3000, () => {
  console.log(`Backend executando...`)
})
