const mongoose = require('mongoose');
 // Load env vars

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECTION,)
    .then(()=>{
        console.log('Connected to MongoDB');
    }).catch(err => console.log(err));
}

module.exports = connectToDB;
