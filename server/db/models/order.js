const Sequelize = require('sequelize')
const db = require('../db')
const Mug = require('./mug')
const MugOrder = require('./mugOrder')

const Order = db.define('order', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

// Order.updateQuantity = async function(orderId, mugId, newQty) {
//   const cartItem = await MugOrder.findOne({
//     where: {
//       orderId: orderId,
//       mugId: mugId
//     }
//   })
//   const mug = await Mug.findByPk(mugId)

//   await cartItem.update({
//     quantity: newQty
//   })

//   //consider adding attributes to the found product
//   //we could then use object spread here instead
//   const {id, title, description, price, imgUrl} = mug.dataValues
//   const updatedOrder = {
//     id: id,
//     title: title,
//     description: description,
//     price: price,
//     imgUrl:  imgUrl,
//     quantity: newQty
//   }
//   return updatedOrder
// }

module.exports = Order
