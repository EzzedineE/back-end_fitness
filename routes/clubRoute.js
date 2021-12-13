const express = require("express")
const router = express.Router();
const club = require('../controlors/clubCtrl')
const upload = require('../config/multer')

router.post('/', upload.array("images"), club.createClub);
router.get('/', club.getAllClub);
router.delete('/:id', club.deleteClub);
router.put('/:id', upload.array("images"), club.modifClub);
router.get('/:id', club.getOneClub);

module.exports = router