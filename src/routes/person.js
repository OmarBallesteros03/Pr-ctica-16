let express = require('express');
let router = express.Router();
//instanciacion del router

router.get('/person',(req, res)=>{
    res.send('has solicitado el listado de personas');
});

module.exports= router;