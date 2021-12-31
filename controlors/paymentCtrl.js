const payment = require('../modules/comantaireModule')
// const stripe = require('stripe', (config.stripeSecret))
exports.paymente = (req, res, next) => {
    stripe.charges.create({
        amount: req.body.amount, currency: 'USD',
        description: 'One-time setup fee',
        source: req.body.token.id
    },
        (err, charge) => { if (err) { next(err); } res.json({ success: true, status: "payments Successfull" }) });

}