const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static'))

app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Goedemorgen',
    });
})

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))