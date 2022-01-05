const User = require('../modules/userModule')
const Club = require('../modules/clubsModule')


exports.getUser = (req, res, next) => {
    User.find().populate('clubs')
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
    console.log(User);

}
exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(users => res.status(200).json(users))
        .catch(error => res.status(404).json({ error })
        );
}



exports.like = async (req, res, next) => {
    try {
        const like = await User.findByIdAndUpdate(
            req.params.id,
            { $push: { mylikes: req.body.aime } },
            { new: true }
        ).then(await Club.findByIdAndUpdate(
            req.body.aime,
            { $inc: { likes: 1 } }, { new: true }),
        )
            .catch(error => res.status(400).json({ error }));
        res.json(like);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }

};
exports.dislike = async (req, res, next) => {
    try {
        const data = await User.findByIdAndUpdate(
            req.params.id,
            { $pull: { mylikes: req.body.aime } },
            { new: true }
        ).then(await Club.findByIdAndUpdate(
            req.body.aime,
            { $inc: { likes: -1 } }, { new: true }),
        )
            .catch(error => res.status(400).json({ error }));;
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }
};
exports.club = async (req, res, next) => {
    try {
        console.log(req.body)

        const club = await User.findByIdAndUpdate(
            req.params.id,
            { nomClub: req.body.body.nomClub, nomForfait: req.body.body.nomForfait, prix: req.body.body.prix, dateInscription: req.body.body.dateInscription },
            { new: true }
        )
            .catch(error => res.status(400).json({ error }));
        res.json(club)
        console.log(club);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server err" });
    }
};

