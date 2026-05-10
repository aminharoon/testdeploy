import express from "express"
import { testRoute } from "./routes/text.route.js"
import path from "path"

export const app = express()
const __dirname = path.resolve()
app.use(express.json())

app.use("/api", testRoute)

// Serve static files from the public directory (expects frontend build in Backend/public)
app.use(express.static(path.join(__dirname, "public")))

// For any other route, return the frontend's index.html
app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
