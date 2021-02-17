const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: String,
    lname: String,
    email:String,
    password:String,
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
//     const u = new User({
//         fname:"Ayushi",
//         lname:"Chaudhary",
//     })
// await u.save();
// }
//  makeUser();

module.exports = User;