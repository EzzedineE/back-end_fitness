const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    address: { type: String, required: false },
    date: { type: Date, required: false },
    role: { type: String, required: false },
    mylikes: [{ type: Schema.Types.ObjectId, ref: 'clubs' }],
    nomClub: { type: Schema.Types.ObjectId, ref: 'clubs' },
    nomForfait: { type: String, required: false },
    prix: { type: Number, required: false },
    dateInscription: { type: Date, required: false },
}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);