const express = require("express");
const { getAllUsers } = require("../contoller/users");

const router = express();

router.get('/',getAllUsers);

// router.get('/:userId',getUser)

module.exports = router
