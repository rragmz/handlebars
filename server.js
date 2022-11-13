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

app.get('/', (req,res) => {
    //Le paso qué tiene que renderizar, que son los archivos que estén en view pero NO dentro de layouts
    //Puedo usar render, porque estoy usando html. Sino sería send.
    res.render('index', { title: 'Inicio', arrayNumeros: [1,2,3,4,5]})
})

app.get('/contacto', (req,res) => {
    res.render('contacto', {title: 'Contacto'})
})

app.get('/servicios', (req,res) => {
    baseDatosServicios = [
        {nombre: 'Servicio 1', body: 'Lorem impsu doloro sit', img: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
        {nombre: 'Servicio 2', body: 'Lorem ipsum dolor sit', img: '/assets/img/candys.jpg'},
        {nombre: 'Servicio 3', body: 'Lorem impsu doloro sit amet', img: 'https://images.unsplash.com/photo-1576712967455-c8d22580e9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
        {nombre: 'Servicio 4', body: 'Lorem ipsum doloro sit amet', img: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'},
        {nombre: 'Servicio 5', body: 'Lorem impsu doloro sit', img: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=593&q=80'},
    ]
    res.render('servicios', 
    {
        title: 'Servicios', 
        arrayServicios: baseDatosServicios
    })
})


app.listen(PORT, (err) => {
    if(err) throw new Error(`Algo pasó... ${err}`)
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})