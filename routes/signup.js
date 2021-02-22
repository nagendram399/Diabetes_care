const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/user');
const findSocioEconomicClass = require('../utils/findSocioEconomicClass');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/verify', (req, res) => {
    const phNo = parseInt(req.body.phNo);
    user.findOne({
        phNo
    }, (err, foundData) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        if (foundData === null)
            res.status(200).send('verified');
        else
            res.status(406).send('ph-No already in use');
    });
});

router.post('/', (req, res) => {
    let {
        name,
        age,
        sex,
        address,
        phNo,
        maritalStatus,
        educationalQualification,
        occupation,
        monthlyIncome,
        religion,
        password
    } = req.body, answers = [];
    age = parseInt(age);
    phNo = parseInt(phNo);
    monthlyIncome = parseInt(monthlyIncome);

    bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS), (err, password) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        findSocioEconomicClass(occupation, educationalQualification, monthlyIncome, socioEconomicClass => {
            const newUser = new user({
                name,
                age,
                sex,
                address,
                phNo,
                maritalStatus,
                educationalQualification,
                occupation,
                monthlyIncome,
                religion,
                socioEconomicClass,
                password,
                answers
            });
            newUser.save((err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                res.cookie('patient', result._id, {
                    signed: true,
                    maxAge: 3 * 30 * 24 * 60 * 60 * 1000,
                    sameSite: true
                });
                res.redirect('/details');
            });
        });
    });

});

module.exports = router;