const User = require('../modules/userModule')


exports.getUser = (req, res, next) => {
    User.find()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
}
exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(users => res.status(200).json(users))
        .catch(error => res.status(404).json({ error }));
}