const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
   fullname:{
    firstname:{
        type:String, 
        required:true, 
        minlength:[3, 'First name must have atleast 3 characters'],
    },
    lastname:{
        type:String, 
        minlength:[3, 'Last name must have atleast 3 characters'],
    }

   },
    email: {
        type:String, 
        required :true, 
        unique:true,
        minlength:[5, 'Email must have atleast 5 characters'],
        
    },
    password: {
        type:String, 
        select:false,
        required:true, 

    }, 

    socketId:{
        type:String , 
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {    
    return await bcrypt.hash(password, 10);
}


const userModel =  mongoose.model('user', userSchema);

module.exports = userModel;
