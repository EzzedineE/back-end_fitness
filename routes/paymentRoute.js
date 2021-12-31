const express = require("express")
const router = express.Router();
const paymenteCtrl = require('../controlors/paymentCtrl')

router.post('/payment', paymenteCtrl.paymente);



module.exports = router