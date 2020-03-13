const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
let dataUserAnswers = [];
let dataStoreAll = [];

// Map voor frontend CSS/JS
app.use(express.static('public'));

// Gebruik de bodyParser om Post waardes te pakken
app.use(bodyParser.urlencoded({ extended: true }));

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

    const userCategoryChoice = req.params.id;
    const questionsAmount = 12;
    const typeAnswer = 'boolean';


    //Build API endpoint
    const apiEndpoint = `https://opentdb.com/api.php?amount=${questionsAmount}&category=${userCategoryChoice}&type=${typeAnswer}`;

    const data = fetch(apiEndpoint)
        .then(result => result.json())
        .then(jsonReturnData => {

            storeAll(jsonReturnData);

            res.render('questions', {
                vraagId: userCategoryChoice,
                alleData: jsonReturnData
            });

        });
});

app.post('/category/:id/results', (req, res) => {


    // console.log('Is die van mij', Object.entries(req.body));
    // console.log('De sleutels', Object.keys(req.body));

    const answers = Object.values(req.body);
    storeUserAnswers(answers);


    console.log('Opgeslagen', answers);
    console.log('De waardes', Object.values(req.body));
    console.log('Answers DB', dataUserAnswers);
    getLocalApiData();

    getUserAnswer();
    debugger;
    const data = req.body;

    console.log('hier is je data: ', data);
    res.render('results', {
        userAnswers: data
    });

});

function storeUserAnswers(userAnswers){
    dataUserAnswers.push(userAnswers);
}

function storeAll(apiData) {
    dataStoreAll.push(apiData);
}

function getUserAnswer(){
    console.log('Derde antwoord: ', dataUserAnswers[0][7]);
}

function getLocalApiData(){
    console.log('Dit is alle lokale Api Data: ', dataStoreAll[0].results);
    console.log('Dit is lokale vraag Api Data: ', dataStoreAll[0].results[11].question);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));