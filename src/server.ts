import express from "express"
import cors from "cors"
import { route } from "./routes/feedbackRoute"

const app = express()
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started\nhttp://localhost:8000`)
})