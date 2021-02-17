const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost:27017/jssapp', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology:true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to database');
// });

const QuestionSchema = new Schema({
    questionText: String,
});

const Question = mongoose.model('Question',QuestionSchema);

// const makequestion = async ()=>{
//     await Question.deleteMany({});
//     const q1 = new Question({
//         questionText:"How are you?",
//     });
//     const q2 = new Question({
//         questionText:"How is world?",
//     });
//     await q1.save();
//     await q2.save();
// }
// makequestion();

module.exports = Question;