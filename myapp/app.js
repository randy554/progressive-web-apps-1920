require('dotenv').config();
const express       = require('express');
const fetch         = require('node-fetch');
const bodyParser    = require('body-parser');
const compression   = require('compression');

const app           = express();
const port          = 3000;
//
let dataUserAnswers = [];
let dataStoreAll    = [];
const totalScore    = 12;
let score           = 0;

// Map voor frontend CSS/JS
app.use(express.static('public'));

// Gebruik de bodyParser om Post waardes te pakken
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compression());

// Template engine: EJS wordt hier aan de Express app gelinkt
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Home page
app.get('/', (req, res) => {
    resetQuiz();
    res.render('home');
});

app.get('/offline', (req, res) => {
    res.render('offline');
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

    console.log(getLocalApiData());


    for (var i = 0; i < dataUserAnswers[0].length; i++){

        if(dataUserAnswers[0][i] === dataStoreAll[0].results[i].correct_answer){
            score++;
            console.log('Goede antwoord');

        }else{
            console.log('Fout antwoord');
        }
    }
    const data = req.body;
    console.log('Lokale API DB:', getLocalApiData());
    console.log('hier is je data: ', data);
    res.render('results', {
        apiData: getLocalApiData(),
        userAnswers: data,
        yourScore: score
    });

});

function resetQuiz() {
    score = 0;
    dataStoreAll = [];
    dataUserAnswers = [];
}

function storeUserAnswers(userAnswers){
    dataUserAnswers.push(userAnswers);
}

function getUserAnswer(answerNumber){
    return dataUserAnswers[0][answerNumber];
}

function storeAll(apiData) {
    dataStoreAll.push(apiData);
}

function getLocalApiData(){
    return dataStoreAll[0].results;
}

app.listen(process.env.PORT || port, () => console.log(`Trivia app listening on port ${port}!`), console.log(`open the page -> http://localhost:${port}`));