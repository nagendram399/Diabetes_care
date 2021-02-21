const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const score_table_Schema = new Schema({
    _id: false,
    id: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    relative: Boolean,
    scores: Array
});

module.exports = mongoose.model('Score', score_table_Schema);