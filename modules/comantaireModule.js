const mongoose = require('mongoose');

const commentaireSchema = mongoose.Schema({
    commentaire: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },


}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('commentaires', commentaireSchema)