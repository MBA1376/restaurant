const express = require('express');
const router = express.Router();
const passport = require('passport');

/**load Order model */
const Order = require('../../models/Order');

/* @route   POST api/restaurant/registerOrder  */
/* @desc    add order for login user */
/* @access  Private */
router.post('/getMyOrders' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    
});