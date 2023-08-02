const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.post('/register', (req, res) =>{
    res.redirect('/');
})
app.post('/login', (req,res) => {
    res.redirect('/');
})
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.listen(PORT, () => console.log('Escuchando el el puerto ' + PORT));