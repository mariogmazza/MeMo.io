const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  // .put(usersController.update)
  // .put(usersController.populate)
  .delete(usersController.remove);

 router // pop/ maybe err
  .route("/pop/:id") 
  .put(usersController.populate)

  router
    .route("/updateScoreId")
    .put(usersController.update)



module.exports = router;
