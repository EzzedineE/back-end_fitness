const { array } = require('../config/multer');
const Blog = require('../modules/blogsModule')

exports.createBlog = (req, res, next) => {
    delete req.body._id;
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    const blog = new Blog({
        ...req.body, images
    })
    blog.save()

        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}






exports.modifBlog = (req, res, next) => {
    console.log(req.files);
    let images = []
    for (let file of req.files) {
        images.push(file.filename)
    }
    Blog.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id, ...(images.length > 0 && { images }) })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteBlog = (req, res, next) => {
    console.log(req.params.id);
    Blog.findOne({ _id: req.params.id })
        .then(Blog => {
            Blog.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                .catch(error => res.status(400).json({ error }));

        })
        .catch(error => res.status(500).json({ error }));
};
exports.getOneBlog = (req, res, next) => {
    Blog.findOne({ _id: req.params.id })
        .then(blogs => res.status(200).json(blogs))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllBlog = (req, res, next) => {
    Blog.find()
        .then(blogs => res.status(200).json(blogs))
        .catch(error => res.status(400).json({ error }));
}