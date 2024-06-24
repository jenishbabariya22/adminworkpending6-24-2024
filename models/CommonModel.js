const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})

const UserModel = mongoose.model('user',userSchema);


//category model 
const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
})

const CategoryModel = mongoose.model('category',categorySchema)

module.exports = {
    UserModel , CategoryModel 
}; 