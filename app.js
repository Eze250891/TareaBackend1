


var express = require('express');
var app = express();
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
// app.get('/saludo', (req, res) => {
//     const persona = {
//         nombre: "Ezequiel",
//         apellido: " Di Giacomo"
//     }
//         res.json({
//            saludo: `Hola yo soy ${persona.nombre} ${persona.apellido}`
//         })
// })


app.get('/cuenta'), (req, res) => {

    const division = {
        dividendo: " ",
        divisor: ">=1"
    }

    if(req.params.divisor === 0){
        res.json ("no se puede dividir por 0")
    }
    
}

app.listen(port, ()=> {
    console.log(`example app listen on port ${port}`)
} )