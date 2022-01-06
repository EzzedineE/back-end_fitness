const express = require("express")
const router = express.Router();
const forfaitCtrl = require('../controlors/forfait')


router.delete('/:id', forfaitCtrl.deleteForfait);
router.put('/:id', forfaitCtrl.modifyForfait);
router.get('/forfait', forfaitCtrl.getForfait);


module.exports = router