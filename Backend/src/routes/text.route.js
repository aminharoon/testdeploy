import express from "express"

export const testRoute = express.Router()

testRoute.get("/", (req, res) => {
    res.json({ data: "this is the test data fetched from the API" })
})