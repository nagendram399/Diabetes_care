const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionNumber: Number,
    subQuestion: Number,
    header: String,
    questionText: String,
    score: Boolean
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;