
const { Router } = require('express');

const STATUS_USER_ERROR = 220;

const router = Router();

router.get('/', (req,res)=>{
    let { email, password } = req.query;
    console.log("RECIBIDO: ", email," ",password)
    var errorMje="";
    if(email && password){
        let users = require ('../data/users');
        let authUser = users.find(u=> u.email===email && u.password===password)
        if(!authUser){ 
            let userBadEmail = users.find(u=> u.email===email )
            if(!userBadEmail) errorMje="Email incorrecto"
            else { 
            let userBadPass = users.find(u=> u.email===email && u.password!==password) 
            if(userBadPass) errorMje="Password incorrecto"
            }
            return res.status(STATUS_USER_ERROR).json({error:"usuario no autorizado", motivo: errorMje})
        }else  res.status(200).json(authUser)
    }else{
        return res.status(400).json({error:"Faltan datos"})
    }
    });

    module.exports = router