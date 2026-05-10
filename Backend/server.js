import { config } from "dotenv"
import { app } from "./src/app.js"

config()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})