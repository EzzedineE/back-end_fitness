const mongoose = require('mongoose');

const forfaitSchema = mongoose.Schema({
    titre: { type: String, required: true },
    prix: { type: Number, required: true },
    période: { type: Number, required: true },
    description: { type: String, required: true },
    machine: { type: String, required: true },

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('forfaits', forfaitSchema)