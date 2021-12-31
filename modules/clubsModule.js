const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
    nom: { type: String, required: true },
    address: { type: String, required: true },
    images: { type: Array, required: false },
    description: { type: String, required: true },
    instagram: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: Number, required: true },
    facebook: { type: String, required: true },
    cours: [{ type: Array, required: true }],
    likes: { type: Number, required: false },

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('clubs', clubSchema)