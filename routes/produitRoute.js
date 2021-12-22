const express = require("express")
const router = express.Router();
const Produit = require('../controlors/produitCtrl')
const upload = require('../config/multer')

router.post('/', upload.array("images"), Produit.createProduit);
router.get('/', Produit.getAllProduit);
router.delete('/:id', Produit.deleteProduit);
router.put('/:id', upload.array("images"), Produit.modifProduit);
router.get('/:id', Produit.getOneProduit);

module.exports = router