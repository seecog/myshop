var express = require('express');
var jwtCheck = require('../jwtcheck');
var router = express.Router();
var Order = require('../models/order.model');
//stripe start
var stripe = require('stripe')('sk_test_iii1IKPAuuMlXZreV61trPro');

router.post('/order',jwtCheck,(req,res)=>{
var order = new Order();
order.owner = req.decoded.user._id;
order.totalPrice = req.body.totalPrice;
order.products = req.body.products;

order.save();
res.json({
  success : true,
  message : "Your order created succesfully"
})
});


router.get('/order',jwtCheck,(req,res)=>{
  Order.find({
    owner : req.decoded.user._id
  })
  .populate('owner')
  .populate('products.product')
  .exec((err,orders)=>{
    res.json({
      success : true,
      message : "Yorders",
      orders : orders
    })
  })
  
  });

  router.get('/order/:id',jwtCheck,(req,res)=>{
    console.log('The parameter is ',req.params.id)
    Order.findOne({
      _id : req.params.id
    })
    .populate('owner')
    .populate('products.product')
    .exec((err,order)=>{
      res.json({
        success : true,
        message : "order",
        order : order
      })
    })
    
    });

//stripe end

router.post('/payment',(req,res)=>{

// Create a new customer and then a new charge for that customer:
stripe.customers.create({
    email: 'adwaitamohanty08@gmail.com'
  }).then(function(customer){
    return stripe.customers.createSource(customer.id, {
      source: 'tok_visa'
    });
  }).then(function(source) {
    return stripe.charges.create({
      amount: 5000,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
      res.json({
		  
          success : charge
      })
    // New charge created on a new customer
  }).catch(function(err) {
      res.json({error : err})
    // Deal with an error
  });




})


module.exports = router;