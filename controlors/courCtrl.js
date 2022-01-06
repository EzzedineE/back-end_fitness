const Cour = require('../modules/cours')

// exports.createCours = (req, res, next) => {
//     console.log(req.body);
//     const cour = new Cour({
//         ...req.body
//     });
//     cour.save()
//         .then((result) => res.status(201).json(result))
//         .catch(error => res.status(400).json({ error }));
//     console.log(cour);
// }
exports.modifyCour = async (req, res, next) => {
    console.log(req.body);
    const Cours = await Cour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({ message: "User updated succesfully" });

}


exports.getCour = (req, res, next) => {
    Cour.find()
        .then(Cours => res.status(200).json(Cours))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteCour = (req, res, next) => {
    Cour.findOne({ _id: req.params.id })
        .then(Cour => {
            Cour.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};