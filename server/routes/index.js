const express = require('express');
const router = express.Router();

const signin = require('./signin.js');
const signout = require('./signout.js');
const signup = require('./signup.js');
const article = require('./article.js');
const qiniu = require('./qiniu.js');
const category = require('./category.js');
const user = require('./user.js')

router.use('/signin', signin);
router.use('/article', article);
router.use('/signout', signout);
router.use('/signup', signup);
router.use('/qiniu', qiniu);
router.use('/category', category);
router.use('/user', user);

module.exports = router;
