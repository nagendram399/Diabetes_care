const mongoose = require('mongoose');
//const Question = require('./question');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: String,
    lname: String,
    email:String,
    password:String,
    answers:[
        {
            _id:{id:false},
            id:{
                type:Schema.Types.ObjectId,
                ref:'Question',
                required: true
            },
            ans:String
        }
    ]
});
const User = mongoose.model('User',UserSchema);
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



// const makeUser = async()=>{
//     await User.deleteMany();
//     const q1 = await Question.findOne();
//     const q2 = await Question.findOne();
//     const u = new User({
//         fname:"Ayushi",
//         lname:"Chaudhary",
//         answers:[
//             {
//                 id:q1.id,
//                 ans:"Hello WOrld"
//             },
//             {
//                 id:q2.id,
//                 ans:"Bye World"
//             }
//         ]
//     })
// await u.save();
// }
// makeUser();

module.exports = User;