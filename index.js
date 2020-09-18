//Verwende Express & Verweis
const express = require('express')
//Express Aktivieren
const app = express()
//EJS Aktivieren
app.set('view engine', 'ejs')


//Navigation-Data einbinden
const navData = require('./nav.json')


//Gallery.json-Data einbinden
const galleryData = require('./gallery.json')


//Server abhören
app.listen(3000, () =>{
    console.log('listening at 3000');   
})


//Um Public Ordner zu verwenden
app.use(express.static('public'))


//Routing
app.get('/', (req, res) =>{
    res.render('index', {navData: navData})
})
app.get('/team', (req, res) =>{
    res.render('team', {navData: navData})
})
app.get('/about', (req, res) =>{
    res.render('about', {navData: navData})
})
app.get('/contact', (req, res) =>{
    res.render('contact', {navData: navData})
})
app.get('/gallery', (req, res) =>{
    res.render('gallery', {navData: navData, galleryData: galleryData} )
})


//Routing 404
app.use((req, res) => {
    res.render('404')
})