const router = require('express').Router()
const {Mug, Order, MugsOrder, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log(req.user)
    if (req.user) {
      const cart = await req.user.getCart()
      res.json(cart)
    } else {
      res.json(req.session.cart || [])
    }
  } catch (error) {
    next(error)
  }
})

router.put('/add', async (req, res, next) => {
  try {
    const mug = await Mug.findByPk(req.body.mugId)
    const cartMug = {
      id: mug.id,
      title: mug.title,
      price: mug.price,
      capacity: mug.capacity,
      material: mug.material,
      imgUrl: mug.imgUrl,
      quantity: 1
    }

    if (req.user) await req.user.addMugToCart(mug)
    else {
      if (!req.session.cart) req.session.cart = []

      req.session.cart.push(cartMug)
    }

    res.json(cartMug)
  } catch (error) {
    next(error)
  }
})

// Quantity of Mugs in Cart
router.put('/:id', async (req, res, next) => {
  const mugId = req.params.id
  const addedQuantity = req.body.quantity

  try {
    if (req.body.cartId !== req.user.dataValues.cartId) {
      res.send('You are not authorized to update this cart')
    } else {
      const updatedOrder = await User.updateMugQuantity(
        req.body.cartId,
        mugId,
        addedQuantity
      )
      res.json(updatedOrder)
    }
  } catch (error) {
    console.error(
      'An error occurred while updating mug quantity Error: ',
      error
    )
    next(error)
  }
})
