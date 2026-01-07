const mongoose = require('mongoose')
module.exports= async () => {
    try {
     await mongoose.connect('mongodb://localhost:27017/mangoBOT');
       console.log("db connected") 
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
    
}
