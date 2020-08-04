const express = require("express");
const router = express.Router();

// @route     GET api/users/test
// @desc      tests user route
// @access    Public

router.get("/test", (req, res) => res.json({ msg: "Users work" }));

module.exports = router;
