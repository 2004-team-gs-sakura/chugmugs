const User = require('./user')
const Mug = require('./mug')
const Order = require('./order')
const MugOrder = require('./mugOrder')

Order.belongsToMany(Mug, {through: MugOrder})
Mug.belongsToMany(Order, {through: MugOrder})

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
  User,
  Mug,
  MugOrder,
  Order
}
