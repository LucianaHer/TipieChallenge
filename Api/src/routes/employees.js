const { Router } = require('express');

//const STATUS_USER_ERROR = 422;

const router = Router();

router.get('/', (req,res)=>{
    let jsonData = require('../data/data_tipie.json');
    res.status(200).json(jsonData)
});



module.exports = router
