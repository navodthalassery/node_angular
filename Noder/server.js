const express = require('express');
var path = require('path');
const expressLayouts = require('express-ejs-layouts');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

app.use(cors());
//require('./config/passport')(passport);

//Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

//connect-falsh
app.use(flash());

//Global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

    next()
});

const db = require('./config/keys').MongoURI;
mongoose.connect(db, { useUnifiedTopology: true })
    .then(() => console.log('mongoose connected.'))
    .catch(err => console.log(err));

app.use(express.json());

//EJS
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));
//app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

//Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/flight', require('./routes/flight'));


app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'name1', lastName: 'last11' },
        { id: 2, firstName: 'name222', lastName: 'last2' },
        { id: 3, firstName: 'name3', lastName: 'last3' }
    ]

    return res.json(customers);
})

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`listening port ${port}`) });