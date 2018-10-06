// var mongoose = require('mongoose');
// var Schema = new mongoose.Schema;

// orderSchema = new Schema ({
// owner : {type : Schema.Types.ObjectId, ref : 'User'},
// totalPrice : {type : Number,default : 0},
// products : [
// {
// product : {type : Schema.Types.ObjectId,ref : 'Product'},
// quantity : {type : Number,default : 1}
// } 

// ]
// })

// module.exports = mongoose.model('Order',orderSchema);


var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var orderSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    totalPrice: { type: Number, default: 0 },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }

    ],
    created : {type : Date,default : Date.now}
})
module.exports = mongoose.model('Order', orderSchema);