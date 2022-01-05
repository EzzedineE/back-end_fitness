const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const courstSchema = mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: false },
    heure: { type: String, required: false },

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('Cours', courstSchema)