const express = require('express');
const router = express.Router();
const passport = require('passport');


/* @route   POST api/restaurant/registerAddress  */
/* @desc    add address for login user */
/* @access  Private */
router.post('/registerAddress' , passport.authenticate('jwt' , {session : false}) , (req , res) => {

});

/* @route   DELETE api/restaurant/removeAddress  */
/* @desc    remove address for login user */
/* @access  Private */
router.delete('/registerAddress' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    
});


module.exports = router;