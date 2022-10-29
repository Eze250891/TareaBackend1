


var express = require('express');
var app = express();
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/saludo', (req, res) => {
    const persona = {
        nombre: "Ezequiel",
        apellido: " Di Giacomo"
    }
        res.json({
           msj: `Hola yo soy ${persona.nombre} ${persona.apellido}`
        })
})


app.get('/dividir/:divisor/:dividendo', (req, res) => {

    if (req.params.divisor == 0) {
         res.json ("error")
        
    }else {
        res.json (req.params.dividendo / req.params.divisor)
    }
})


app.listen(port, ()=> {
    console.log(`example app listen on port ${port}`)
} )