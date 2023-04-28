const express = require("express");
const applicationController = require("../Controllers/applicationController");

const router = express.Router();

router.get("/news/*", applicationController.get_news);

module.exports = router;