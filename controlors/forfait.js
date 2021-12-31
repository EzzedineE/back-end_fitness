const Forfait = require('../modules/forfaitModule')

exports.createForfait = (req, res, next) => {
    console.log(req.body);
    const forfait = new Forfait({
        ...req.body
    });
    forfait.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
    console.log(forfait);
}
exports.modifyForfait = async (req, res, next) => {
    console.log(req.body);
    const Forfaits = await Forfait.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({ message: "User updated succesfully" });

}


exports.getOneForfait = (req, res, next) => {
    Forfait.find()
        .then(forfaits => res.status(200).json(forfaits))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteForfait = (req, res, next) => {
    Forfait.findOne({ _id: req.params.id })
        .then(Forfait => {
            Forfait.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};