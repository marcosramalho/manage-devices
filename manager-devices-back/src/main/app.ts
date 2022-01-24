import express from 'express'
import cors from 'cors'

import '../infrastructure/typeorm'

import router from './router'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.get('', (req, res) => {
  return res.send('ok')
})
