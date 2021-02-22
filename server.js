const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express(),
    port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/jssapp', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => console.log(err));
mongoose.connection.once('open', () => console.log('Successfully connected to database'));

app.use(helmet());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));
app.get('/logout', (req, res) => {
    res.clearCookie('patient');
    res.redirect('/login');
});

app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));

//Only admin access to modify db
app.use('/admin/occupation_data', require('./routes/occupation_data'));
app.use('/admin/education_data', require('./routes/education_data'));
app.use('/admin/income_data', require('./routes/income_data'));
app.use('/admin/socio_economic_status_data', require('./routes/socio_economic_status_data'));

app.use('/admin', require('./routes/admin'));


app.listen(port, console.log(`Successfully connected to port ${port}`));