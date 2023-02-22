const mongoose = require('mongoose');

 
var userSchema = new mongoose.Schema({
            username: String,
            password: String,
            text: String,
            leaveDate :String
        },
        {
            collection: "UserInfo",
        });
 
mongoose.model('users',userSchema);
