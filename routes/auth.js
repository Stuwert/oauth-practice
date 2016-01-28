var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/auth/linkedin', passport.authenticate('linkedin'))
//
// router.get('/')

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {failureRedirect: '/'}), function(req, res, next){
  res.redirect('/')
})

module.exports = router;
