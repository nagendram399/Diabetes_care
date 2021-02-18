const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express(),
    port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/jssapp', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => err ? console.log(err) : console.log('Successfully connected to database'));

app.use(helmet());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.use('/signup', require('./routes/signup'));


app.listen(port, console.log(`Successfully connected to port ${port}`));