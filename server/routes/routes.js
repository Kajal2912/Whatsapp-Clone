const express = require('express')
const router = express.Router()

// ---------controllers--------
const { addUser, getUsers } = require('../controller/userController')
const { newConversation } = require('../controller/conversationController')

router.post('/adduser', addUser)
router.get('/getuser', getUsers)

router.post('/conversation/add', newConversation)

module.exports = router