const router = require("express").Router();
const scoresController = require("../../controllers/scoresController");

// Matches with "/api/scores"
router.route("/registerScore")
.post(scoresController.create);

router.route("/upScore")
.post(scoresController.update)

router.route("/")
  .get(scoresController.findAll)
  .post(scoresController.create);

// Matches with "/api/scores/:id"
router
  .route("/:id")
  .get(scoresController.findById)
  .put(scoresController.update)
  .delete(scoresController.remove);

module.exports = router;
