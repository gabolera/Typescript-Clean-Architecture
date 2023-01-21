import express from 'express'
import cors from 'cors'
import userRouters from './routes/UserRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRouters)

app.listen(3000, () => {
  console.log(`Clean Archteture Running at 3000`)
})
