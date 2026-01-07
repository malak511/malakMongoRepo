const User = require("../models/user")
const Role = require("../models/role")

exports.findOrCreateUser = async (msg)=>{
    let user = await User.findOne({ telegramID: msg.from.id }).exec()
    if (!user) {
      user = await User.create({
        telegramID: msg.from.id,
        userName: msg.from.username
      })
      const role = await Role.findOne({ name: 'noob' }).exec()
      user.role = role._id
      await user.save() }

    return user}

exports.addCoin = async (telegramID,amount)=>{
    const user = await User.findOne({ telegramID:telegramID })

    user.coins += amount
    await user.save();
    return user
}