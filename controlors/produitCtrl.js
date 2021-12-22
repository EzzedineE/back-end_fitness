const { array } = require('../config/multer');
const Produit = require('../modules/produitModule')

exports.createProduit = (req, res, next) => {
    console.log(req)

    delete req.body._id;
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    console.log(images);
    const produit = new Produit({
        ...req.body, images
    })
    produit.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }, console.log(error)));
}






exports.modifProduit = (req, res, next) => {
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    Produit.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id, ...(images.length > 0 && { images }) })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteProduit = (req, res, next) => {
    Produit.findOne({ _id: req.params.id })
        .then(Produit => {
            Produit.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};
exports.getOneProduit = (req, res, next) => {
    Produit.findOne({ _id: req.params.id })
        .then(produits => res.status(200).json(produits))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllProduit = (req, res, next) => {
    Produit.find()
        .then(produits => res.status(200).json(produits))
        .catch(error => res.status(400).json({ error }));
}