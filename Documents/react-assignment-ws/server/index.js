const express = require("express")
const movieRoute = require("./routes/movieRoutes")
const app = express()

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(express.json())


app.use("/api/v1/", movieRoute);

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
app.get("/" , (req , res) => {
    res.send("App is running")
})
