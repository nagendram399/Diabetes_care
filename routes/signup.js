const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/user');

router.post('/', (req, res) => {
    const {
        fname,
        lname,
        email,
        phNo,
        password
    } = req.body, answers = [];
    const newUser = new user({
        fname,
        lname,
        email,
        phNo,
        password: bcrypt.hashSync(password, 10),
        answers
    });
    newUser.save();
    res.redirect('/');
});

router.post('/verify', (req, res) => {
    const {
        email,
        phNo
    } = req.body;
    user.findOne({
        $or: [{
            email
        }, {
            phNo
        }]
    }, (err, foundData) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was some error');
        }
        if (foundData === null)
            res.status(200).send('verified');
        else if (foundData.mail === mail)
            res.status(406).send('e-mail already in use');
        else
            res.status(406).send('ph-No already in use');
    });
});

module.exports = router;