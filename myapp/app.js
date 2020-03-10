const express = require('express');
const app = express();
const port = 3000;

// Hierin frontend CSS/JS
app.use(express.static('public'));

// Template engine: EJS wordt hier aan de Express app gelinkt
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Home page
app.get('/', (req, res) => {
    res.render('home');
});

// Questions page
app.get('/category/:id/questions', (req, res) => {
    const id =  req.params.id
    res.render('questions', {
        vraagId: id
    });
});

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))