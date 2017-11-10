const router = require("express").Router();
const authRoutes = require("./auth");
const scoreRoutes=require("./scores")
const userRoutes=require("./users");

//User router
router.use("/users", userRoutes)

// Auth routes
router.use("/auth", authRoutes);

//Score routes
router.use("/scores", scoreRoutes);


module.exports = router;
