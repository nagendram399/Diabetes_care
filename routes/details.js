const express = require('express');
const question = require('../models/question');
const user = require('../models/user');
const router = express.Router();
const calculateScore = require('../utils/calculateScore');

router.get('/', (req, res) => {
    const prepareQuestion = value => ({
        _id: value._id,
        questionNumber: value.questionNumber || value.subQuestionNumber,
        questionText: value.questionText
    })
    question.find({}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        let questions = result.map(each => {
            if (each.questionText !== null)
                return prepareQuestion(each);
            return ({
                header: each.header,
                subQuestions: question.getSubQuestions(each._id).map(each => prepareQuestion(each))
            });
        });

        res.render('details', JSON.stringify(questions));

    })
});

router.post('/', (req, res) => {
    const answers = JSON.parse(req.body.answers),
        _id = req.signedCookies;

    user.findOne({
        _id
    }, (err, patient) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was an internal server error');
        }
        for (let i = 0; i < answers.length; i++) {
            const score = calculateScore(answers[i]);
            if (score !== null)
                answers[i].score = score;
            patient.answers.push({
                ...answers[i]
            });
        }
        patient.save(err => {
            if (err) {
                console.log(err);
                res.status(500).send('There was an internal server error');
            }
            res.status(200).send('Successfully updated database');
        });
    });
});

// router.post('/', (req, res) => {
//     const answers = req.body.answers,
//         _id = req.signedCookies.user;
//     user.findOne({
//         _id
//     }, (err, patient) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('There was an internal server error');
//         }

//         for (const each of answers) {
//             let flag = false;
//             for (let i = 0; i < patient.answers.length; ++i)
//                 if (patient.answers[i].id == each._id) {
//                     patient.answers[i].answer = each.answer;
//                     const score = calculateScore(each);
//                     if (score !== null)
//                         patient.answers[i].score = score;
//                     flag = true;
//                     break;
//                 }
//             if (!flag) {
//                 const score = calculateScore(each);
//                 let newAnswer = {
//                     id: each._id,
//                     answer: each.answer
//                 }
//                 if (score !== null)
//                     newAnswer.score = score;
//                 patient.answers[i].append(newAnswer);
//             }
//         }
//         patient.save((err) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send('There was an internal server error');
//             }
//             res.status(200).send('Successfully updated database');
//         });
//     });
// });