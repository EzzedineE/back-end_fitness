const express = require("express")
const router = express.Router();
const commentaireCtrl = require('../controlors/comantaireCtrl')

router.post('/', commentaireCtrl.createCommentaire);
router.delete('/:id', commentaireCtrl.deleteCommentaire);
router.put('/:id', commentaireCtrl.modifyCommentaire);
router.get('/', commentaireCtrl.getAllCommentaire);


module.exports = router