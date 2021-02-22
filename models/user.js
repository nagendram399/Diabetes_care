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
    socioEconomicClass: {
        label: String,
        value: Number
    },
    password: String,
    score: {
        type: Number,
        default: 0
    },
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