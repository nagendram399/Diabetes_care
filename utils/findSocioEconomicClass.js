const occupation = require('../models/occupation');
const education = require('../models/education');
const income = require('../models/income');
const socio_economic_status = require('../models/socio_economic_status');

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
        const score = score1 + score2 + score3;
        const status = await socio_economic_status.findOne({
            minScore: {
                $gte: score
            },
            maxScore: {
                $lte: score
            }
        }, 'class');
        callback(status);
    } catch (err) {
        console.log(err);
        callback(null);
    }
}