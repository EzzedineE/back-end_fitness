const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    titre: { type: String, required: true },
    images: { type: Array, required: false },
    description: { type: String, required: true },


}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('blogs', blogSchema)