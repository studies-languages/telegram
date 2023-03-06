import express from 'express'
import './utils/telegram'
const app = express()

app.get('/', (req, res) => {
  res.json({message: 'List api'})
})


app.listen(process.env.PORT || 8000, () => console.log('Server run http://localhost:8000' ))