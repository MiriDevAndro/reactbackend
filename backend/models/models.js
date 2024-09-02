const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        trim:true,
        minlength: 3,
        maxlength: 50
    },
    itemDes:{
        type: String,
        required: true,
        trim:true
    },
    Image: String
    
});

const Items = mongoose.model('Items', schema);
module.exports = Items;