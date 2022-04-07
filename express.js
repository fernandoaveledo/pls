const express=require('express')

const app=express();

const PORT= 8080;

const server= app.listen(PORT, () => {
    console.log(`aplicacion express escuchando en el puerto ${PORT}`);
})

server.on("error",error => console.log(`se tiene el siguiente error: ${error}`))


//llamo a mi json
const fs = require('fs');

let dataString = fs.readFileSync('./productos.json', 'utf-8');

//parseo el json
let data = JSON.parse(dataString)


let titulazo= data.titulo;



//ruta para retornar array con todos los productos en el servidor
app.get('/productos', (req, res) => {
    res.send(data)
})


//ruta para retornar objeto random
app.get('/productoRandom', (req, res) => {
    let random = Math.floor(Math.random()*data.length) 
    res.send(JSON.stringify(data[random]));
})

app.get('/api/productos/:id', (req,res) => {
    let productoss = [{nombre:'cpu', precio:250}, {nombre:'gpu', precio:500}]

    res.json({
        result:'get by id',
        producto:productoss[req.params.id],
        id:req.params.id
    })

})