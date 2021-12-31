const express = require("express")
const router = express.Router();
const forfaitCtrl = require('../controlors/forfait')

router.post('/', forfaitCtrl.createForfait);
router.delete('/:id', forfaitCtrl.deleteForfait);
router.put('/:id', forfaitCtrl.modifyForfait);
router.get('/', forfaitCtrl.getOneForfait);


module.exports = router