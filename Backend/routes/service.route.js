const express = require('express');
const Service = require('../controller/services.controller');
const router = express.Router();

router.get('/',Service.getServices)
router.post('/',Service.addService)
router.patch('/:id',Service.updateService)
router.delete('/:id',Service.deleteService)
router.get('/:id',Service.getById)

module.exports=router;