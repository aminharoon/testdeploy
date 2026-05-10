import express from "express"
import { testRoute } from "./routes/text.route.js"
import path from "path"

export const app = express()
const __dirname = path.resolve()
app.use(express.json())

app.use("/api", testRoute)
