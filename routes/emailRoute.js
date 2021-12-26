const express = require("express")
const router = express.Router();
const emailCtrl = require('../controlors/emailCtrl')

router.post('/text', emailCtrl.sendtext);



module.exports = router