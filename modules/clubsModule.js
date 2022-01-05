const mongoose = require('mongoose');
const { array } = require('../config/multer');
var Schema = mongoose.Schema;
const clubSchema = mongoose.Schema({
    nom: { type: String, required: true },
    address: { type: String, required: true },
    images: { type: Array, required: true },
    description: { type: String, required: true },
    instagram: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: Number, required: true },
    facebook: { type: String, required: true },
    toutJour: { type: String, required: false },
    weekend: { type: String, required: false },
    cours: [{ type: Schema.Types.ObjectId, ref: 'Cours' }],
    likes: { type: Number, required: false },
    condidat: [{ type: String, required: false }],
    prix: [{ type: Number, required: false }]

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('clubs', clubSchema)