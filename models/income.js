const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    income: String,
    score: Number,
});

module.exports = mongoose.model('Income', incomeSchema);