const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const verifyToken = require('../config/verifyToken');
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));
//router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('Dashboard', { name: req.user.name }));
router.get('/dashboard', verifyToken, (req, res) => {
    //res.json({ posts: { title: 'my first post', description: 'postied' } })
    res.send(req.user);
});

module.exports = router;