const express = require("express")
const router = express.Router();
const courCtrl = require('../controlors/courCtrl')

router.post('/', courCtrl.createCours);
router.delete('/:id', courCtrl.deleteCour);
router.put('/:id', courCtrl.modifyCour);
router.get('/cour', courCtrl.getCour);


module.exports = router