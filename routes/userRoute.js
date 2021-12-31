const express = require("express")
const router = express.Router();
const user = require('../controlors/userCtrl')


router.get('/', user.getUser);
router.get('/:id', user.getOneUser);
// router.put('/:id', user.getOneUser);
router.post('/:id', user.like)
router.post('/delete/:id', user.dislike)
router.post('/abonnement/:id', user.club)

module.exports = router