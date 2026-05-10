import express from "express"
import { testRoute } from "./routes/text.route.js"
import path from "path"

export const app = express()
const __dirname = path.resolve()
app.use(express.json())

app.use("/api", testRoute)

app.use(express.static("../public/index.html"))

console.log()

app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
