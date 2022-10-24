const express = require('express')
const app = express()
let port = process.env.port || 3000

let almacen = require("./modules/almacen.js")
let cesta = []

app.get("/", (req, res) => {
    res.send(almacen)
})

app.get("/departamento/:departamento", (req, res) => {
    let html = "<table><tr><th>Producto</th><th>Precio</th><th>Stock</th></tr>"
    let index = almacen.findIndex((departamento) => departamento.nombre === req.params.departamento)

    if (index < 0) {
        res.send("No existe el departamento!!")
    } else {
        almacen[index].productos.forEach((producto, i) => {
            html += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`
        })
        html += "</table>"
    
        res.send(html)
    }
})

app.get("/:departamento/:nombre/:cantidad", (req, res) => {

    let departamentoIndex = almacen.findIndex((departamento) => departamento.nombre === req.params.departamento )

    if (departamentoIndex < 0){
        res.send("No existe el departamento")
    } else {
        let departamento = almacen[departamentoIndex]
        let productoIndex = departamento.productos.findIndex((producto) => producto.nombre === req.params.nombre )

        if (productoIndex < 0) {
            res.send("No existe el producto")
        } else {
            let producto = almacen[departamentoIndex].productos[productoIndex]

            if (producto.stock < req.params.cantidad) {
                res.send("No existe stock suficiente de ese producto")
            } else {
                cesta.push({nombre: producto.nombre, cantidad: req.params.cantidad})
                producto.stock -= req.params.cantidad
                res.send("Añadido!")
            }
        }
    }
})

app.get("/cesta", (req, res) => {
    if(cesta.length < 1) {
        res.send("Tu cesta todavía está vacía :)")
    } else {
        let html = "<table><tr><th>Producto</th><th>Cantidad</th></tr>"
        cesta.forEach((producto, i) => {
            html += `<tr><td>${producto.nombre}</td><td>${producto.cantidad}</td></tr>`
        })
        html += "</table>"
    
        res.send(html)
    }
})

app.get("/checkout", (req, res) => {
    if (cesta.length > 0) {
        cesta = []
        res.send("Compra realizada!")
    } else {
        res.send("Tu cesta todavía está vacía :)")
    }
})

app.listen(port, err =>
    err 
    ? console.error("No se ha podido conectar")
    : console.log("Escuchando en puerto " + port)
)