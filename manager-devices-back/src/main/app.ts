import express from 'express'

import '../infrastructure/typeorm'

import router from './router'

export const app = express()

app.use(express.json())
app.use(router)

app.get('', (req, res) => {
  return res.send('ok')
})
