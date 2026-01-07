const connectDB = require("./config/db.config")
const Role = require("./models/role")

connectDB();
require('./bot')

let roles = ['admin','noob','junior','senior']



async function main(){
    try{
        for(let role of roles){
           await Role.create({
                name:role
            })
        }
        
        let role = await db.Roles.findOne({
            where:{
                name : 'admin'
            }
        })
        let admin = await db.Users.create({
            telegramID:,
            userName:,
            coins:99999
        })
        await admin.setRole(role)
        console.log('bot is running...')
    }catch(e){
        console.error(e)
    }
}

main()
