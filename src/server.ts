import express from 'express'
import 'dotenv/config'
import './utils/telegram'

const app = express()


app.get('/', (req, res) => {
  res.json({message: 'List api'})
})


app.listen(process.env.PORT || 8001, () => console.log('Server run http://localhost:8001' ))