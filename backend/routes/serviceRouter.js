// routes/serviceRoutes.js
const express = require('express');


const {createService,getServiceById,getAllSerivces,updateService,deleteService} = require('../controllers/serviceController');
const serviceRouter = express.Router();

serviceRouter.post("/newService",createService);
serviceRouter.get('/', getAllSerivces);
serviceRouter.get('/:id',getServiceById );
serviceRouter.put('/:id',updateService);
serviceRouter.delete('/:id',deleteService );

module.exports = serviceRouter;