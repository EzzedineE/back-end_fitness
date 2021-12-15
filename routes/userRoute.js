const express = require("express")
const router = express.Router();
const user = require('../controlors/userCtrl')


router.get('/', user.getUser);
router.get('/:id', user.getOneUser);

module.exports = router