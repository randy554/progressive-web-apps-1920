# Progressive Web Apps with the Trivia App

## Concept

#### Een client-side trivia app met 12 leuke vragen!

- Stap 1: Selecteer een categorie om vragen over te beantwoorden

- Stap 2: Vul alle 12 vragen in (True or False) en verstuur je antwoorden

- Stap 3: Bekijk je resultaat. Hoeveel vragen heb je goed?

### Live demo
[live app demo](https://the-trivia-app.herokuapp.com/)

### Overzichtspagina

![Overzichtspagina](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/homepage-Trivia%20app.png?raw=true)

### Vragenpagina

![Exercises](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/questionpage-Trivia%20app.png?raw=true)  
 
### Resultatenpagina 

![Exercises](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/resultspage-Trivia%20app.png?raw=true)

## Inhoudsopgave

- [API](#API)
- [Bronnen](#bronnen)
- [Optimalisaties](#Optimalisaties)
- [Built with](#Built with)
- [Install](#Install)
- [Conclusie](#Conclusie)
- [To Do](#To Do)
- [Wishlist](#Wishlist)
- [Bronnen](#Bronnen)
- [Credit](#Credit)
- [License](#License)

## API 

De app maakt gebruik van de Trivia API. De response data is JSON. Er kan gebruik worden gemaakt van een SESSION TOKEN. Deze zorgt ervoor dat gedurende de sessie alleen maar unieke vragen worden terug gestuurd. De sessie doet 6 uur. Verder kan de API zonder key worden gebruikt. Er is in de documentatie helaas niks te vinden over limiet van API gebruik.

### Voorbeeld van response data:

https://opentdb.com/api.php?amount=12&category=12&difficulty=easy&type=boolean
![Trivia API](https://raw.githubusercontent.com/randy554/progressive-web-apps-1920/master/docs/img/https_opentdb_API.png)

Omschrijving

De API biedt de mogelijkheid om tussen de 1 en 50 Trivia vragen te terug te krijgen. Deze vragen kunnen gaan over verschillende categoriën zoals politiek & geschiedenis. Verder kun je de moeilijkheidsgraad van de vragen aanpassen op easy, medium en hard. Ook kan er gekozen worden om multiple choice antwoorden of boolean antwoorden te ontvangen.

## Optimalisaties


<details>

<summary>Voor & Na optimalisatie</summary>
Dit is het resultaat voor & na het toepassen van caching, css minifyen, css concat en Gzip compression:

### Voor

![Voor](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/zonder_cache_hele_site_network.png?raw=true)

51ms
### Na

![Na](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/met_cache_hele_site_network.png?raw=true)

25ms
</details>

#### Minify CSS

<details>

<summary>Code</summary>

```js
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

.pipe(cleanCSS());
```

</details>

<details>

<summary>Network</summary>

![Zonder minify network](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/zonder_minify_network.png)

</details>

<details>

<summary>Audits</summary>
Zonder minify

![Zonder minify](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/audit.png)

</details>

#### Concat CSS

<details>

<summary>Code</summary>

```js
const gulp = require('gulp');
const concat = require('gulp-concat');

return gulp.src([
    "./src/css/main.css",
    "./src/css/question.css"
])
    .pipe(concat("index.css")) // samenvoegen bestanden en bestandsnaam opgeven
    .pipe(gulp.dest("./public/css"));
```

</details>

<details>

<summary>Network</summary>

![zonder concat](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/zonder_concat_indexccs_verwijderd.png?raw=true)

</details>

<details>

<summary>Audits</summary>

Zonder concat

Opvallend hier is bij het inladen van meerdere css bestanden (ipv met concat in 1 bestand) dat de metrics onder het kopje 
'Performance' met uitzondering van Max Potentiel First Input Delay allemaal omhoog gingen.
![zonder concat](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/audit_zonder_concat_met_cache_met_compression.png?raw=true)

</details>

#### Compress files

<details>

<summary>Code</summary>

```js
const compression   = require('compression');
app.use(compression());
```

</details>

<details>

<summary>Network</summary>

![zonder compression network](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/zonder_compression_network_met_sw.png?raw=true)

</details>

<details>

<summary>Audits</summary>

Zonder compression

![zonder compression](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/audit_zonder_compression.png?raw=true)

</details>

#### Cache

<details>

<summary>Code</summary>

De service worker wordt geregistreerd.

```js
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}
```
Bij de install event plaatsen we de bestanden die gecached moeten worden.

```js
// Install Service    Worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed');

    evt.waitUntil(
        caches.open(static_cache_name).then(cache => {
            console.log('Caching shell assets');
            return cache.addAll(assets).then(() => self.skipWaiting());
        })
            .catch(err => {
                console.error(err);
            })
    );
});
```
De fetch event weergeeft bij offline het eerder gechachte offline bestand weer.

```js
// Install Service    Worker
self.addEventListener('fetch', evt => {

    console.log('Fetch event', evt.request.url);

    evt.respondWith(caches.match(evt.request)
        .then(cachedResponse => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(evt.request)
                .catch( err => {
                    return caches.open(static_cache_name)
                        .then(cache => cache.match('/offline'))
                })

        })
    );
});
```

</details>

<details>

<summary>Application</summary>

Dit zijn de bestanden die gecached worden: home page, offline page & index.css

![Bestanden in cache](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/cache_bestand.png?raw=true)

</details>

<details>

<summary>Network</summary>

![zonder cache](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/network_zonder_cache.png?raw=true)

</details>

<details>

<summary>Audits</summary>

![Audit met cache](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/test/audit.png)

</details>

Mijn site is niet bepaald groot hierdoor waren de indivuduele optimalisatie niet heel erg indrukwekkend. Daarin tegen is
 de over all optimalisatie wel vrij duidelijk. Het cachen van assets doet zoals ik had verwacht veel voor de performance. 
Verder ben ik positief verast over de concat feature. Wel had ik meer verwacht van css minify, hoe wel de bestanden niet
heel groot zijn. Het testen in igocnito modus gaf andere resultaten aan dan in de normale modus. Mijn Audit score ging van 98
naar 100 en mijn Max Potential First Input Delay ging van 600ms naar 20ms.

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

## Conclusie

<details>
    <summary>Client side vs Server side rendering voor het tonen van data uit een API</summary>
    
Bij server side renderen vinden activiteiten zoals het doen van een fetch plaatst op de server. De bezoeker krijgt 
een html pagina terug met de content. Ditzelfde scenario bij clientside wordt uitgevoerd door de browser vandaar dat 
er bij expressJS de fetch van de browser niet werkte en hiervoor een aparte package voor nodig was. 

    
</details>

<details>

<summary>Service workers</summary>

De service worker zou je als het hart van een PWA (Progressive Web App) kunnen zien. Door de service worker is het bijv. mogelijk om bezoekers 
push notificaties te versturen of offline content (html, css, png etc.) aan te serveren. Hiermee dient de
service worker als een soort proxy tussen de client en de server. De service worker draaid op de achtergrond (op een aparte thread),
hierdoor heeft het ook geen toegang tot de DOM. Hieronder een aantal schema's die ik had gemaakt voor verheldering: 

Service worker lifecycle
 
![service worker lifecycle](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/sw_schets.jpg?raw=true)

Fetch event

![Fetch event](https://github.com/randy554/progressive-web-apps-1920/blob/master/docs/img/fetch_events.jpg?raw=true)

</details>

<details>

<summary>Critical rendering path</summary> 
    
De critical rendering path zijn de stappen die de browser doorloopt om een pagina te weergeven (renderen). Dit houdt in grote lijnen in
de opbouw van de DOM, CSSOM en het verwerken van de aanpassingen van JS. Door dit proces te optimaliseren verhoog je de snelheid waarmee een pagina
binnen de browser wordt weergeven. Binnen dit project heb ik hier aan gewerkt door:

- mijn frontend javascript onderaan de pagina te plaatsen (had ook met defer of eventueel sync gekund). Hierdoor zit het de DOM zo min mogelijk in de weg.
- de verschillende CSS bestanden samengevoegd in een bestand. Hierdoor hoeft er maar één bron te worden opgehaald.
- het ene CSS bestand te minifyen. Dit en de vorige maatregel zorgen ervoor dat de CSS snel binnen gehaald en geparsed kan worden want zolang dit nog niet is gebeurd
zit css in de weg van renderen.
- gebruik te maken van cache voor mijn homepagina en css hierdoor hoeft de server niet helemaal naar de server toe voor deze assets.
 
</details>

#### Wat heb ik geleerd?

Ik heb kennis mogen maken met NodeJS, NPM en ExpressJS. Ik heb geleerd hoe je via de terminal handmatig projecten kunt aanmaken voor
ExpressJS. Ook heb geleerd hoe je dit door middel van een generator kunt doen. Ik heb geleerd hoe je pakketten via NPM kunt binnen halen 
voor een project en hoe je deze als dependencie of devDependencie kan installeren. Ik heb geleerd dat je bepaalde dingen globaal kan 
installeren of alleen binnen de context voor je project. Ik heb kennis mogen maken met EJS. Daarbij heb ik ook leren gebruik maken van
partials. Deze heb ik helaas nog niet in mijn PWA code geplaatst maar wel in mijn Browser Technologie app (zie repo). In de example code
staat de require zonder () & "" en dat geeft bij mij problemen (UPDATE: inmiddels zitten ze er nu wel bij) .Ik heb geleerd over wat NPM scripts zijn, waarvoor je deze kunt gebruiken 
en hoe. Ik heb geleerd hoe je met formulieren post request data kunt ontvangen
en deze verder kunt verwerken.

 
 <details>
 
 <summary>Gulp</summary>
 
# CSS Minifyen | Samenvoegen | Cross browser compatible


Door middel van Gulp wil ik mijn CSS bestanden kleiner maken en samenvoegen. Ook wil ik met 
behulp van Gulp mijn CSS code meer browser compatible maken. Dit ga ik doen door middel van 
Gulp pakketten.

### Wat is Gulp?

Gulp is een tool waarmee je veel voorkomende/ vervelende taken kan automatiseren zoals je browser
refreshen bij het opslaan van een bestand. 


### Hoe krijg je Gulp?

Voor dat we Gulp kunnen installeren hebben we een package.json file nodig
Deze kun je aanmaken door via de terminal in je project root command: npm init uit te voeren.

Gulp kun je installeren via npm op twee manieren:

``` Npm install gulp  -g // als je hem globaal wilt installeren ```
``` Npm install gulp —save-dev // door dit toetevoegen komt hij in package.json onder devDependenicies ```

Wat leuk is aan Gulp is dat je naast eigen opdrachten (Tasks) die je kunt schrijven, gebruik kunt maken van
plugins van andere. Hierdoor bespaar je weer tijd bij het automatiseren van je build proces. Ik ga gebruik maken
van de volgende plugins:

- Gulp-concat (voegt bestanden meerdere bestanden tot 1)
- Gulp-autoprefixer (zorgt ervoor dat je css meer cross browser compatible wordt bijv. -webkit)
- Gulp-clean-css (verkleint css bestanden)

### Plugins installeren

Je kunt de plugins installeren door deze in je package.json file onder de devDependencies object te benoemen:

```
"devDependencies": {
  "gulp": "^4.0.2",
  "gulp-autoprefixer": "^7.0.1",
  "gulp-clean-css": "^4.2.0",
  "gulp-concat": "^2.6.1"
}
```

```

Npm install

```
 
 </details>
 

## To Do

- [x] Tooling (Gulp-concat, Gulp-autoprefixer, Gulp-clean-css)
- [x] HTML encode issue
- [x] Service workers
- [x] Heroku deployment

## Wishlist

- [] Gifjes voor resultatenpagina
- [] Refactor code met modules
- [] Comments nagaan en consistent houden
- [] Watchers for build css


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
- Wouter Van Der Heijde (NPM scripts)


## License

Creative Commons Attribution-ShareAlike 4.0 International Link 
