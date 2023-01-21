import express from 'express'
import cors from 'cors'
import userRouters from './routes/UserRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRouters)

app.listen(3000, () => {
  console.log(`Server Express is running at 3000`)
})
