const question = require('../models/question');

module.exports = obj => {
    question.findById(obj.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const scores = result.scoreTable.scores;
            if (result.scoreTable) {
                if (!result.scoreTable.relative) {
                    for (const each of scores)
                        if (each.answer === obj.answer)
                            return each.score;
                } else {
                    for (const each of scores)
                        if (parseInt(each.min) >= parseInt(obj.answer) && parseInt(obj.answer) <= parseInt(each.max))
                            return each.score;
                }
            }
        }
        return null;
    });
}