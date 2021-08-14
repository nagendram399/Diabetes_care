const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId

module.exports = [
    {
        questionNumber: 1,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd18'),
        questionText: 'If yes, for how many days per week? (days)',
        questionType: 'input'
    }, 
    {
        questionNumber: 2,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd18'),
        questionText: 'How long per day (in min)',
        questionType: 'input'
    }, 
    {
        questionNumber: 1,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd1f'),
        questionText: 'Parity :',
        questionType: 'input'
    },
    {
        questionNumber: 2,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd1f'),
        questionText: 'Previous history of gestational diabetes mellitus?',
        questionType: 'choice'
    },
    {
        questionNumber: 1,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd24'),
        questionText: 'Weight (kg)',
        questionType: 'input'
    },
    {
        questionNumber: 2,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd24'),
        questionText: 'Height (cm)',
        questionType: 'input'
    },
    {
        questionNumber: 3,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd24'),
        questionText: 'Waist Circumference (cm)',
        questionType: 'input'
    },
    {
        questionNumber: 4,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd24'),
        questionText: 'Hip Circumference (cm)',
        questionType: 'input'
    },
    {
        questionNumber: 1,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd25'),
        questionText: 'HbA1C',
        questionType: 'input'
    },
    {
        questionNumber: 2,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd25'),
        questionText: 'FBS',
        questionType: 'input'
    },
    {
        questionNumber: 3,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd25'),
        questionText: 'PPBS',
        questionType: 'input'
    },
    {
        questionNumber: 4,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd25'),
        questionText: 'Blood pressure',
        questionType: 'input'
    },
    {
        questionNumber: 5,
        subQuestions: false,
        headerId: toId('60d0c075f94acf5832dfbd25'),
        questionText: 'Blood Group',
        questionType: 'input'
    }
]