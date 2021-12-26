const nodemailer = require("nodemailer");
let ejs = require('ejs');
let fs = require('fs')
const path = require("path");
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});
exports.sendtext = async (req, res, next) => {
    try {
        let info = await transporter.sendMail({
            from: 'ezzedine.elechi@gmail.com',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
        });
        res.status(200).json({ msg: 'email send' })
    } catch (error) {
        res.status(500).json(error)
    }
}
