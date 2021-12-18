const Commentaire = require('../modules/comantaireModule')

exports.createCommentaire = (req, res, next) => {
    delete req.body._id;
    const commentaire = new Commentaire({
        ...req.body
    });
    commentaire.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
    console.log(commentaire);
}
exports.modifyCommentaire = async (req, res, next) => {
    console.log(req.body);
    const Commentaires = await Commentaire.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({ message: "User updated succesfully" });
    // console.log(req.body);
    // Commentaire.updateOne({ _id: req.params.id }, { ...req.body.commentaire, _id: req.params.id })
    //     .then((result) => res.status(200).json(result))
    //     .catch(error => res.status(400).json({ error }));
}


exports.getAllCommentaire = (req, res, next) => {
    Commentaire.find()
        .then(commentaires => res.status(200).json(commentaires))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteCommentaire = (req, res, next) => {
    Commentaire.findOne({ _id: req.params.id })
        .then(Commentaire => {
            Commentaire.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};