const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

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
    answers:[
        {
            id:{
                type:Schema.Types.ObjectId,
                ans:String
            }
        }
    ]
});

const Question = mongoose.model('Question',QuestionSchema);

// const makequestion = async ()=>{
//     const q = new Question({
//         questionText:"How are you?",
//     });
//     q.answers.push({answers:"I am fine"});
// }
//makequestion();\
 module.exports = Question;