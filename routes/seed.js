const express = require('express');
const router = express.Router();
const question = require('../models/question');
const optionalAnswerScore = require('../models/optionalAnswerScore');

const questionsList = require('../utils/questionSeed');
const subquestionsList = require('../utils/subquestionSeed');
const answersList = require('../utils/answerSeed')

router.get('/questionSeed', (req, res) => {
    // question.insertMany(questionsList, (err, result) => {
    //     if(err) {
    //         console.error(err);
    //     }
    //     return res.json(result);
    // });
});

router.get('/subquestionSeed', (req, res) => {
    // question.insertMany(subquestionsList, (err, result) => {
    //     if(err) {
    //         console.error(err);
    //     }
    //     return res.json(result);
    // });
});

router.get('/answerSeed', (req, res) => {
    // optionalAnswerScore.insertMany(answersList, (err, result) => {
    //     if(err) {
    //         console.error(err);
    //     }
    //     return res.json(result);
    // });
});

module.exports = router;