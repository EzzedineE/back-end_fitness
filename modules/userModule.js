const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, required: true },
    role: { type: String, required: true },
    mylikes: [{ type: Schema.Types.ObjectId, ref: 'clubs' }],
    nomClub: { type: Schema.Types.ObjectId, ref: 'clubs' },
    nomForfait: { type: String, required: false },
    prixForfait: { type: Number, required: false },
    dateInscription: { type: Date, required: false },
}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);