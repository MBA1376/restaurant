const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

/**load Comment model */
const Comment = require('../../models/Comment');
/**load User model */
const User = require('../../models/User');
/**load Order model */
const Order = require('../../models/Order');

/* @route   GET api/userpanels/getLoginUserComments  */
/* @desc    get login user's comments about restaurant */
/* @access  Private */
router.get('/getLoginUserComments' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    Comment.find({user : req.user._id})
        .then(comments => {
            if(!comments) {
                errors.comments = 'no comment exist for this user';
                return res.status(400).json(errors);
            }

            res.json(comments);
        })
        .catch(err => console.log(err));
});


/* @route   POST api/userpanels/completeInfo  */
/* @desc    complete informations of user */
/* @access  Private */
router.post('/completeInfo' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    User.findByIdAndUpdate(req.user._id , req.body , {new: true})
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

/* @route   POST api/userpanels/changePassword  */
/* @desc    change password of login user */
/* @access  Private */
router.post('/changePassword' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    User.findById(req.user._id)
        .then(user => {
            
            user.password = req.body.password;

            bcrypt.genSalt(10 , (err , salt) => {
                bcrypt.hash(user.password , salt , (err , hash) => {
                    if(err) console.log(err);
                    
                    user.password = hash;

                    user.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        })
        .catch( err => console.log(err));
});

/* @route   POST api/userpanels/registerOrder  */
/* @desc    add order for login user */
/* @access  Private */
router.post('/getMyOrders' , passport.authenticate('jwt' , {session : false}) , (req , res) => {

});

/* @route   GET api/userpanels/getMyOrders  */
/* @desc    get orders of login user */
/* @access  Private */
router.get('/getMyOrders' , passport.authenticate('jwt' , {session : false}) , (req , res) => {

});

module.exports = router;