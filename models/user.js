const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    address: String,
    phNo: Number,
    maritalStatus: String,
    educationalQualification: String,
    occupation: String,
    monthlyIncome: String,
    religion: String,
    password: String,
    answers: [{
        _id: {
            id: false
        },
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        },
        answer: String,
        score: Number
    }]
});
const User = mongoose.model('User', UserSchema);

module.exports = User;