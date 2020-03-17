# Progressive Web Apps with the Trivia App

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

## To Do

- [] Tooling
- [] Service workers

## License

Creative Commons Attribution-ShareAlike 4.0 International Link 
