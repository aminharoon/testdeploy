import { config } from "dotenv"
import { app } from "./src/app.js"

config()
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

server.on("error", (err) => {
    console.error("Server failed to start:", err)
    process.exit(1)
})