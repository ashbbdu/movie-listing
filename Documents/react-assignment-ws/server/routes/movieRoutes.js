const express = require("express")
const { movieController, movieDetails } = require("../controllers/Movies")

const router = express.Router()

router.get("/movie-list" , movieController)
router.get("/movieDetails/:id" , movieDetails)

module.exports = router;