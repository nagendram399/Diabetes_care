const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionNumber: Number,
    subQuestionNumber: Number,
    headerId: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    header: String,
    questionText: String,
    scoreTable: {
        realtive: Boolean,
        scores: Array
    }
});

QuestionSchema.statics.getSubQuestions = function (headerId) {
    return this.find({
        headerId
    });
}

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;