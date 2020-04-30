# Emilia-Romagna (North Italy) castles #

- [Use app](https://castelli.vijon.it/)
- [Storybook](http://castelli.vijon.it:2001)

## Overview ##

After seeing this [institutional website](http://geo.regione.emilia-romagna.it/schede/castelli/) I thought it would be very interesting to have those castles "in your pocket". Having not found public APIs or a DB of that data I had to make a scraping bot written in NodeJS that processed page by page.

This app is born out of the desire to experience the world of PWAs, a set of technologies capable of approaching webapps to native mobile apps.
I took advantage of it to immerse myself in the React world, studying the whole ecosystem (Redux, RXJS, Styled components, Firebase, ...).

The main feature of this micro-application is that it can work totally offline. In fact, caching systems of the app files (assets such as the JS engine) are exploited and the database is stored in the device, a database that resides on Firebase.

***

# Castelli dell'Emilia-Romagna #

- [Vai all'app](https://castelli.vijon.it/)
- [Storybook](http://castelli.vijon.it:2001)

## Panoramica ##

Dopo aver visto questo [portale istituzionale](http://geo.regione.emilia-romagna.it/schede/castelli/) ho pensato che sarebbe stato molto interessante avere quei castelli "in tasca". Non avendo trovato API pubbliche o un DB di quei dati ho dovuto prendermeli facendo navigare il sito ad un bot che ho scritto in NodeJS e elaborando pagina per pagina.

Questa app nasce dalla voglia di sperimentare il mondo delle PWA, un insieme di tecnologie capace di avvicinare ancora di più le webapp alle app native del mondo mobile.
Ne ho approfittato per immergermi nel mondo React, studiando tutto l'ecosistema (Redux, RXJS, Styled components, Firebase, ...).

La caratteristica principale di questa micro-applicazione è di poter funzionare totalmente offline. Infatti vengono sfruttati sistemi di caching dei files dell'app (assets tipo il motore JS) e il salvataggio del database nel dispositivo, database che risiede su Firebase.

***
## Tech ##

* COMPILING
    * Typescript
    * Create React App
    * Storybook

* CLIENT 
    * React
    * Redux
    * Styled components
    * RxJS
    * PWA

* SERVER 
    * NodeJS 
    * Firebase
