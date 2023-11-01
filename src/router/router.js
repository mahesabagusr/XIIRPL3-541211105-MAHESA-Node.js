const express = require('express');
const router = express.Router()
const { getUser, addUser, updateUser, deleteUser } = require('../controllers/user.controller')

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.get('/getUser', getUser)

router.post('/addUser', addUser)

router.put('/updateUser/:id', updateUser)

router.delete('/deleteUser/:id', deleteUser)

module.exports = router