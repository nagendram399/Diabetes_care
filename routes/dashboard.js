const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    const _id = req.signedCookies.patient;
    if (!_id)
        res.redirect('/login');

    user.findById(_id, '-password -answers', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        res.render('dashboard', result);
    });
});

module.exports = router;