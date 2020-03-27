# Progressive Web Apps with the Trivia App

## Concept

#### Een client-side trivia app met 12 leuke vragen!


- Stap 1: Selecteer een categorie om vragen over te beantwoorden

- Stap 2: Vul alle 12 vragen in (True or False) en verstuur je antwoorden

- Stap 3: Bekijk je resultaat. Hoeveel vragen heb je goed?

### Overzichtspagina

![Overzichtspagina](https://raw.githubusercontent.com/randy554/progressive-web-apps-1920/master/docs/img/homepage.png)

### Vragenpagina

![Exercises](https://raw.githubusercontent.com/randy554/progressive-web-apps-1920/master/docs/img/questionpage.png)  
 
### Resultatenpagina 

![Exercises](https://raw.githubusercontent.com/randy554/progressive-web-apps-1920/master/docs/img/resultspage.png)


## API 

De app maakt gebruik van de Trivia API. De response data is JSON. Er kan gebruik worden gemaakt van een SESSION TOKEN. Deze zorgt ervoor dat gedurende de sessie alleen maar unieke vragen worden terug gestuurd. De sessie doet 6 uur. Verder kan de API zonder key worden gebruikt. Er is in de documentatie helaas niks te vinden over limiet van API gebruik.

### Voorbeeld van response data:

https://opentdb.com/api.php?amount=12&category=12&difficulty=easy&type=boolean
![Trivia API](https://raw.githubusercontent.com/randy554/progressive-web-apps-1920/master/docs/img/https_opentdb_API.png)

Omschrijving

De API biedt de mogelijkheid om tussen de 1 en 50 Trivia vragen te terug te krijgen. Deze vragen kunnen gaan over verschillende categoriën zoals politiek & geschiedenis. Verder kun je de moeilijkheidsgraad van de vragen aanpassen op easy, medium en hard. Ook kan er gekozen worden om multiple choice antwoorden of boolean antwoorden te ontvangen.

## Optimalisaties

#### Minify CSS

<details>

<summary>Code</summary>

</details>

#### Concat CSS

#### Compress files
 

## Built with

- [x] Node 
- [x] Express
- [x] EJS
- [x] Nodemon
- [x] Node-fetch
- [x] Body-parser

## Install

### 1. Clone de Repo naar je pc

    git clone https://github.com/randy554/progressive-web-apps-1920.git
    
### 2. Navigeer naar de root van de app

    cd progressive-web-apps-1920

### 3. Installeer de benodigde paketten die in de package.json staan

    npm install

### 4. Start server

    npm run start

### 5. Bekijk site

    http://localhost:3000/

## Wat heb ik geleerd?

Ik heb kennis mogen maken met NodeJS, NPM en ExpressJS. Ik heb geleerd hoe je via de terminal handmatig projecten kunt aanmaken voor
ExpressJS. Ook heb geleerd hoe je dit door middel van een generator kunt doen. Ik heb geleerd hoe je pakketten via NPM kunt binnen halen 
voor een project en hoe je deze als dependencie of devDependencie kan installeren. Ik heb geleerd dat je bepaalde dingen globaal kan 
installeren of alleen binnen de context voor je project. Ik heb kennis mogen maken met EJS. Daarbij heb ik ook leren gebruik maken van
partials. Deze heb ik helaas nog niet in mijn PWA code geplaatst maar wel in mijn Browser Technologie app (zie repo). In de example code
staat de require zonder () & "" en dat geeft bij mij problemen.Ik heb geleerd over wat NPM scripts zijn, waarvoor je deze kunt gebruiken 
en hoe. Ik heb geleerd hoe je met formulieren post request data kunt ontvangen
en deze verder kunt verwerken.

## Waar ik tegen aanloop

Mijn vragen die weergeven html specialcharacters. Weet nog niet precies waar dat aanligt.

## To Do

- [x] Tooling (Gulp-concat, Gulp-autoprefixer, Gulp-clean-css)
- [x] HTML encode issue
- [x] Service workers
- [] Heroku deployment
- [] Refactor code met modules
- [] Comments nagaan en consistent houden

## Bronnen

- [Express tutorial en docs](https://expressjs.com/en/starter/installing.html)
- [EJS](https://ejs.co/#install)
- [NPM scripts](https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/)
- [Gulp for beginners](https://css-tricks.com/gulp-for-beginners/)
- [Service workers](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=1)
- [Environment Variables](https://www.youtube.com/watch?v=17UVejOw3zA)
- [Heroku tutorial](https://www.youtube.com/watch?v=Rz886HkV1j4&t=2s,) & [Docs](https://devcenter.heroku.com/articles/git)
- [Web App Manifest Generator](https://app-manifest.firebaseapp.com/)
- [Declan example code](https://github.com/decrek/progressive-web-apps-1920)

## Credits

Dank aan de volgende personen voor hun uitleg en ondersteuning:
- Tabish Nanhekhan (Service Workers)
- Wouter Van Der Heijde (Gulp)


## License

Creative Commons Attribution-ShareAlike 4.0 International Link 
