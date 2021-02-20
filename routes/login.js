const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const router = express.Router();

router.post('/verify', (req, res) => {
    const {
        phNo,
        password
    } = req.body;

    user.findOne({
        phNo
    }, (err, foundData) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        if (foundData === null)
            res.status(200).send('User not found');

        bcrypt.compare(password, foundData.password, (err, result) => {
            if (result)
                res.status(200).send('verified');
            else
                res.status(200).send('Ph-No and passwords do not match');
        });

    });
});

router.post('/', (req, res) => {
    const phNo = req.body.phNo;

    user.findOne({
        phNo
    }, (err, foundData) => {
        if (err) {
            console.log(err);
        }
        res.cookie('patient', foundData._id, {
            signed: true,
            maxAge: 3 * 30 * 24 * 60 * 60 * 1000,
            sameSite: true
        });
        if (foundData.answers.length == 0)
            res.redirect('/details')
        else
            res.redirect('/dashboard');
    });
});

module.exports = router;