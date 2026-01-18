const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const { updateUser, searchByApplicationId } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

router.patch("/update/:id", protect, authorizeRoles('user'), updateUser);

router.get("/:id", protect, authorizeRoles('company'), searchByApplicationId);

module.exports = router;
