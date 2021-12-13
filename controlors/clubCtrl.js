const { array } = require('../config/multer');
const Club = require('../modules/clubsModule')

exports.createClub = (req, res, next) => {
    delete req.body._id;
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    const club = new Club({
        ...req.body, images
    })
    club.save()

        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}






exports.modifClub = (req, res, next) => {
    console.log(req.files);
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    Club.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id, ...(images.length > 0 && { images }) })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteClub = (req, res, next) => {
    console.log(req.params.id);
    Club.findOne({ _id: req.params.id })
        .then(Club => {
            Club.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};
exports.getOneClub = (req, res, next) => {
    Club.findOne({ _id: req.params.id })
        .then(clubs => res.status(200).json(clubs))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllClub = (req, res, next) => {
    Club.find()
        .then(clubs => res.status(200).json(clubs))
        .catch(error => res.status(400).json({ error }));
}