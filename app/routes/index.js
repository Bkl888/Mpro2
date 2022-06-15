const express = require('express')
const todoRoute = require('../controllers/todo.controller')
const loginRoute = require('../controllers/login.controller')
const rulesRoute = require('../middleware/product.middleware')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
}) 

router.get('/product', todoRoute.listproduct)
router.get('/product/:id', todoRoute.detailproduct)
router.post('/product', authMiddleware.isAuthenticate,rulesRoute.checkProduct, todoRoute.insertproduct)
router.put('/product/:id', todoRoute.updateproduct)
router.delete('/product/:id', todoRoute.deleteproduct)

// router.post('/login', authMiddleware.isAuthenticate, loginRoute.login)
router.post('/user', todoRoute.insertuser)
router.delete('/user/:id', todoRoute.deleteuser)
router.post('/login', loginRoute.login)

module.exports = router