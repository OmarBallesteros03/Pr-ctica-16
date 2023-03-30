let express = require('express');
//inyeccion de la dependencia express
let app = express();
// app que hace la funcion de servidor
let personsRoute= require('./routes/person');
//incluir router de persons

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//defincion del puerto de escucha

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000')
});