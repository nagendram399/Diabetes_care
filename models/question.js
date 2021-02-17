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
            _id:{id:false},
            id:{
                type:Schema.Types.ObjectId,
                ref:'User'
            },
            ans:String
        }
    ]
});

const Question = mongoose.model('Question',QuestionSchema);

// const makequestion = async ()=>{
//     const q = new Question({
//         questionText:"How are you?",
//         answers:[
//             {id:"602d0187b2bc6c15905b70be",
//             ans:"I am fine"}
//         ]
//     });
//     await q.save();
// }
// makequestion();

module.exports = Question;