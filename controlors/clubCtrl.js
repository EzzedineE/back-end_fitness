const { array } = require('../config/multer');
const Club = require('../modules/clubsModule')
const Cour = require('../modules/cours')
const Forfait = require('../modules/forfaitModule')

exports.createClub = (req, res, next) => {
    delete req.body._id;
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    const club = new Club({
        likes: 0,
        ...req.body, images
    })
    club.save()

        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }, console.log(error)));
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
    Club.findOne({ _id: req.params.id })
        .then(Club => {
            Club.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};
exports.getOneClub = async (req, res, next) => {
    try {
        const club = await Club.findById(req.params.id).populate("cours forfaits")
        res.json(club);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }
}
exports.getAllClub = (req, res, next) => {
    Club.find()
        .then(clubs => res.status(200).json(clubs))
        .catch(error => res.status(400).json({ error }));
}
exports.payment = async (req, res, next) => {
    try {
        const condida = await Club.findByIdAndUpdate(
            req.params.id,
            { $push: { condidat: req.body.condidat }, },
            { new: true })
        res.json(condida);
        console.log(condida);
        const pri = await Club.findByIdAndUpdate(
            req.params.id,
            { $push: { prix: req.body.prix } },
            { new: true })
        res.json(pri);
        console.log(pri);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }

};
exports.cours = async (req, res, next) => {

    const cour = await Cour.create(req.body)

    try {
        const cours = await Club.findByIdAndUpdate(
            req.params.id,
            { $push: { cours: cour._id } },
            { new: true }
        )
            .catch(error => res.status(400).json({ error }));
        res.json(cours)
        console.log(cours);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }
}

exports.forfaits = async (req, res, next) => {

    const forfait = await Forfait.create(req.body)


    try {
        const forfaits = await Club.findByIdAndUpdate(
            req.params.id,
            { $push: { forfaits: forfait._id } },
            { new: true }

        )
            .catch(error => res.status(400).json({ error }));
        res.json(forfaits)
        console.log('hello', forfaits);
        console.log('hi', forfait);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }
}