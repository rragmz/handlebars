const express = require('express')

//Incorporo handlebar
const { engine } = require('express-handlebars')

//Levanto el srevidor de express
const app = express()

//CONFIGURAMOS HANDLEBARS
//Le agregamos que sea .hbs la extensión
app.engine('hbs', engine({ extname: '.hbs' }));
//Express usá este motor de plantillas. La primera de arriba(9) tiene que seer igual a la segunda de la línea a continuación(11)
app.set('view engine', 'hbs');


//MIDLEWARE -> Normalmente cuando usamos app.use es iddleware
app.use(express.static('public'))

const PORT = process.env.PORT || 8080

app.get('/inicio', (req,res) => {
    //Le paso qué tiene que renderizar, que son los archivos que estén en view pero NO dentro de layouts
    res.render('index', { title: 'Inicio', arrayNumeros: [1,2,3,4,5]})
})

app.get('/contacto', (req,res) => {
    res.render('contacto', {title: 'Contacto'})
})

app.get('/servicios', (req,res) => {
    res.render('servicios', 
    {
        title: 'Servicios', 
        arrayServicios: [
            {nombre: 'Servicio 1', body: 'Lorem impsu doloro sit', img: '/assets/img/candys.jpg'},
            {nombre: 'Servicio 2', body: 'Lorem ipsum dolor sit', img: '/assets/img/candys.jpg'},
            {nombre: 'Servicio 3', body: 'Lorem impsu doloro sit amet', img: '/assets/img/candys.jpg'},
            {nombre: 'Servicio 4', body: 'Lorem ipsum doloro sit amet', img: '/assets/img/candys.jpg'},
            {nombre: 'Servicio 5', body: 'Lorem impsu doloro sit', img: '/assets/img/candys.jpg'},

        ]
    })
})


app.listen(PORT, (err) => {
    if(err) throw new Error(`Algo pasó... ${err}`)
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})