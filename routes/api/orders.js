const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

/**load Order model */
const Order = require('../../models/Order');
/**load Food model */
const Food = require('../../models/Food');
/**load Address model*/
const Address = require('../../models/Address');


/* @route   POST api/restaurant/registerOrder  */
/* @desc    add order for login user */
/* @access  Private */
router.post('/registerOrder' , passport.authenticate('jwt' , {session : false}) , (req , res) => {
    const errors = {};

    const foodsArray = req.body.foods.split(',');
    const packagingCost = parseFloat(req.body.packagingCost);
    const trackingNumber = mongoose.Types.ObjectId();
    
    Promise
        .all(foodsArray.map(foodId => Food.findById(foodId, { price: 1 })))
        .then((foods) => {
            let totalPrice = 
            foods.reduce((acc, food) => acc+food.price, 0);
            totalPrice+=packagingCost;
           console.log(totalPrice);

            const order = new Order({
                foods : foodsArray ,
                packagingCost ,
                trackingNumber ,
                totalPrice ,
                description : req.body.description ,
                payWay : req.body.payWay ,
                payPort : req.body.payPort ,
                user : req.user._id
            });
            
            order.save()
                .then( order => res.json(order));
        })
        .catch(err => console.log(err));

}); 


module.exports = router;