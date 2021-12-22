const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    categorie: { type: String, required: false },
    prix: { type: Number, required: true },
    images: { type: Array, required: false },

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('produits', produitSchema)