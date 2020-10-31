var express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');
var router = express.Router();
const { registerValidation, loginValidation } = require('../config/validation');
const jwt = require('jsonwebtoken');

// router.get('/login', function (req, res) {
//     req.flash('success_msg', 'You are now registered');
//     res.render('login');
// });
router.get('/register', (req, res) => res.render('register'));

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    //let errors = [];

    const { error } = registerValidation(req.body);//schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    ///console.log('password ', password);
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                res.status(400).send('Email id already in use');
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, function (err, hash) {
                        //console.log('newUser.password ', newUser.password);
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then(user => {
                            //req.flash('success_msg', 'You are now registered');
                            // res.send(user);
                            res.send({ user: user._id });
                        }).catch(err => console.log(err));
                    })
                });
            }
        })
    //}
});

router.get('/details', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.send('Error ', err);
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send('Email is wrong');

    // passport.authenticate('local', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/user/login',
    //     failureFlash: true,
    // })(req, res, next);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const secret = process.env.TOKEN_SECRET || 'secret';
    const token = jwt.sign({_id:user._id}, secret);
    let user1 = {...user};
    user1.token = token;

    return res.header('auth-token', token).send(user1);
});

router.get('/logout', (req, res) => {
    //const {email, password} = req.body;
    req.logOut();
    req.flash('succes_msg', 'You are logged out');
    res.redirect('/user/login');
});


module.exports = router;
