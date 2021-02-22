const occupation = require('../models/occupation');
const education = require('../models/education');
const income = require('../models/income');

module.exports = async (occ, edu, inc, callback) => {
    try {
        const score1 = await occupation.findOne({
            occupation: occ
        }, 'score');
        const score2 = await education.findOne({
            education: edu
        }, 'score');
        const score3 = await income.findOne({
            minIncome: {
                $gte: inc
            },
            maxIncome: {
                $lte: inc
            }
        }, 'score');
        callback(score1 + score2 + score3);
    } catch (err) {
        console.log(err);
        callback(null);
    }
}