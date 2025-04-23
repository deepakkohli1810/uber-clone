const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String , 
        required:true,
        minlength: [ 3, 'First name must be at least 3 characters long']
    },
    lastname:{
        type:String , 
    
        minlength: [ 3, 'First name must be at least 3 characters long']
    },
    email: {
        type:String, 
        required :true, 
        unique:true,
        minlength:[5, 'Email must have atleast 5 characters'],
        
    },
    password: {
        type:String, 
        required:true, 

    }, 

    socketId:{
        type:String , 
    }
})

userSchema.method.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.method.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async function (password) {    
    return await bcrypt.hash(password, 10);
}