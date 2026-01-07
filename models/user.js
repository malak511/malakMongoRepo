const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
   telegramID:{
            type:Number,
            unique:true,
            required: true
   },
    userName:{
            type:String
        },
        coins:{
            type:Number,
            default: 0
        },
     role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
  }
   
  
});
module.exports = mongoose.model("users",UserSchema)
