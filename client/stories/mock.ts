import { ItemType, toMap } from '../src/types';

const item: ItemType = {
    "geo" : {
      "lat" : 44.93851313237045,
      "lng" : 9.681951021030173,
      /*"scala-di-visualizzazione-a-schermo" : "1:10,000",
      "sistema-di-riferimento" : "Coordinate UTM Fuso 32 (Ed50)",
      "x-max" : "553808.13",
      "x-min" : "552749.79",
      "y-max" : "4976438.72",
      "y-min" : "4975644.97"*/
    },
    "history" : toMap({
      "1300" : {
        "text" : "Il castello  di Grazzano Visconti risale alla fine del XIV secolo, nucleo originario dell'insediamento appartenuto fin dal XIV secolo agli Anguissola.",
        "title" : "Fine del XIV secolo"
      },
      "1388" : {
        "text" : "Nel 1388 Giovanni Anguissola acquista la terza parte del castello di Grazzano.",
        "title" : "1388"
      },
      "1395" : {
        "text" : "Il castello di Grazzano Visconti sorge nell'anno 1395 per opera di Giovanni Anguissola dopo il suo matrimonio con Beatrice, sorella del duca di Milano Gian Galeazzo Visconti.",
        "title" : "1395"
      },
      "1414" : {
        "text" : "Il castello  di Grazzano Visconti, con diploma del febbraio 1414, veniva concesso in feudo da re Sigismondo a Bernardone Anguissola.",
        "title" : "1 febbraio 1414"
      },
      "1418" : {
        "text" : "I diritti giurisdizionali su Grazzano Visconti sono definitivamente concessi (pleno iure) agli Anguissola nell'anno 1418.",
        "title" : "1418"
      },
      "1419" : {
        "text" : "Alla morte di Bernardo Anguissola, nell'anno 1419, suo figlio Giovanni doveva succedergli alla testa dei suoi beni, ma il castello di Grazzano Visconti lungo tutto il XIV secolo non aveva mai ottenuto il riconoscimento di prerogativa signorile da parte del comune di Piacenza.",
        "title" : "1419"
      },
      "1424" : {
        "text" : "Nell'anno 1424 re Sigismondo investe Bernardone Anguissola del castello di Grazzano Visconti.",
        "title" : "1424"
      },
      "1428" : {
        "text" : "Nel 1428 viene riconfermata l'investitura agli Anguissola di Grazzano Visconti con Giovanni.",
        "title" : "1428"
      },
      "1431" : {
        "text" : "Tra il 1431 ed il 1438 il duca di Milano Filippo Maria Visconti concede a Giovanni Anguissola importanti privilegi per alcuni castelli posti all'imbocco della val Nure tra cui anche su Grazzano Visconti.",
        "title" : "1431"
      },
      "1438" : {
        "text" : "Filippo Maria Visconti, duca di Milano, in data 22 febbraio 1438 infeuda Giovanni Anguissola del \"territorio nostro placentino loca et castra Ripae et Grazani, cum villis etc.\".",
        "title" : "22 febbraio 1438"
      },
      "1459" : {
        "text" : "Il 21 marzo 1459 la lettera patente del duca Francesco Sforza accoglie la richiesta del conte Giovanni Anguissola ed enumarava le pertinenze del castello di Grazzano Visconti.",
        "title" : "21 marzo 1459"
      },
      "1462" : {
        "text" : "Nella fonte si legge: \"Anno domini 1462 - Exuentibus igitur ipsis summo mane de Civitate Comes Onophrius cum Rustics descendentes a partibus montantis apud Castellum Grazzani\".",
        "title" : "1462"
      },
      "1521" : {
        "text" : "Nel 1521 il fortilizio di Grazzano Visconti viene attaccato dalle truppe del condottiero francese Lautrec.",
        "title" : "1521"
      },
      "1543" : {
        "text" : "Il 10 settembre 1543 il conte Giovanni Anguissola partecipa all'omicidio del duca Pier Luigi Farnese. Poco dopo aver commesso il delitto, il conte Giovanni si porta a Milano con tutta la sua famiglia abbandonando per sempre il suo castello  di Grazzano Visconti.",
        "title" : "10 settembre 1543"
      },
      "1576" : {
        "text" : "Nel 1576 Teodosio ed Alessandro Anguissola, padre e figlio, acquistano dal conte Giovanni Anguissola Tedeschi il castello ed il feudo di Grazzano Visconti.",
        "title" : "1576"
      }
    }),
    "id" : "1498",
    "info" : {
      "comune" : "VIGOLZONE (PC)",
      "condizione" : 1,
      "images" : [ {
        "src" : "/gstatico/documenti/immagini/castelli/1498.jpg",
        "title" : "Immagine 1498.jpg"
      } ],
      "informazioni" : "dato non inserito",
      "localita" : "Grazzano Visconti",
      "manutenzione" : "dato non inserito",
      "precisione" : 2,
      "toponimo" : ""
    },
    "name" : "Grazzano Visconti",
    "title" : "Grazzano Visconti",
    "url" : "index.jsp?id=1498"
  };
  let mockDetails = item

  const mockPosition = {
      coords: {
          latitude: null,
          longitude: null,
          accuracy: null,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
      },
      timestamp: null
  }
  
  mockDetails['distance'] = 50122.34234;

  const mockItems = toMap( [item, item, item])

  export default {
    details: mockDetails,
    list: mockItems,
    position: mockPosition
  }