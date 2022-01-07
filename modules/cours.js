const mongoose = require('mongoose');

const courstSchema = mongoose.Schema({
    titre: { type: String, },
    description: { type: String, },
    date: {
        type: String, required: false,
        enum: ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    },
    heureDebut: { type: String, },
    heureFin: { type: String, },

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('Cours', courstSchema)