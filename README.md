# Progressive Web Apps with the Trivia App

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



## Concept

Een client-side trivia app met 12 leuke vragen!

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

## Built with

- [x] Node 
- [x] Express
- [x] EJS
- [x] Nodemon
- [x] Node-fetch
- [x] Body-parser

## Install

### 1. Clone de Repo naar je pc

### 2. Navigeer naar de root van de app

### 3. Installeer paketten

### 4. Start server

### 5. Bekijk site


## To Do

- [x] Tooling (Gulp-concat, Gulp-autoprefixer, Gulp-clean-css)
- [] HTML encode issue
- [] Service workers

## License

Creative Commons Attribution-ShareAlike 4.0 International Link 
