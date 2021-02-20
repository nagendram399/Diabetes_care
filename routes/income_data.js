const express = require('express');
const router = express.Router();
const income = require('../models/income');

router.get('/', (req, res) => {
    if (req.cookies.admin)
        res.render('income_data');
    else
        res.redirect('/admin');
});

router.post('/', (req, res) => {
    if (req.cookies.admin) {
        let {
            header,
            score
        } = req.body;
        score = parseInt(score);
        const newIncome = new income({
            income: header,
            score
        });
        newIncome.save((err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('There was an internal server error');
            } else {
                res.status(200).send('Successfully updated income database');
            }
        });
    } else
        res.redirect('/admin');
});

module.exports = router;