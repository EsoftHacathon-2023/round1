const express = require('express');
const User = require('../controller/user.controller');
const router = express.Router();

router.get('/',User.getUser)
router.post('/',User.addUser)
router.patch('/:id',User.updateUser)
router.delete('/:id',User.deleteUser)
router.get('/:id',User.getById)

module.exports=router;