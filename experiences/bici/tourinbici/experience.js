window.bikeToursExperience = {

    id: "bike-tours",

    title: "Scegli il tuo Tour in Bici",

    category: "bici",

    categoryLabel: "Tour in Bici",

    price: 40,

    priceType: "perPerson",

    duration: "3 ore",

    languages:
        "ITA / ENG / FRA / SPA / TED / OLANDESE",

    type: "Esperienza in bicicletta",

    /*
     * La quarta immagine viene utilizzata
     * come immagine principale.
     */

    images: [
        "images/bicitour4.jpg.avif",
        "images/bicitour1.jpg.avif",
        "images/bicitour2.jpg.avif",
        "images/bicitour3.jpg.avif",
        "images/bicitour5.jpg.avif",
        "images/bicitour6.jpg.avif",
    ],

    shortDescription:
        "Scopri Napoli e i Campi Flegrei in bicicletta scegliendo tra cinque itinerari, dalla scoperta del centro storico ai panorami di Posillipo e ai percorsi verso i Campi Flegrei.",

    description: `
Scegli il percorso in bicicletta più adatto a te e scopri Napoli, Posillipo e i Campi Flegrei attraverso cinque itinerari differenti.

Ogni tour propone un modo diverso di vivere il territorio, attraversando il lungomare di Napoli, il centro storico, le colline panoramiche di Posillipo e i paesaggi archeologici e naturali dei Campi Flegrei.

Puoi scegliere tra percorsi dedicati alla scoperta delle radici greco-romane di Napoli, itinerari panoramici sul Golfo, tour verso Pozzuoli e il Lago d'Averno oppure percorsi più lunghi alla scoperta dei laghi e del territorio di Miseno.

Seleziona il tour che preferisci per visualizzare tutti i dettagli, l'itinerario, la durata, la distanza, la difficoltà e le opzioni disponibili.
`,

    minParticipants: 1,

    /*
     * Nessun limite massimo di partecipanti.
     */

    maxParticipants: null,

    /*
     * Supplementi.
     *
     * E-bike: supplemento di 15 € per ogni E-bike selezionata.
     * Seggiolino: supplemento di 5 € per ogni seggiolino selezionato.
     *
     * Il numero massimo selezionabile di E-bike e seggiolini
     * sarà determinato dal numero di biciclette adulte.
     */

    supplements: {
        electricBike: 15,
        childSeat: 5
    },

    /*
     * I cinque tour disponibili.
     */

    tours: [

        {
            id: "unesco",

            title:
                "Napoli, sito patrimonio mondiale dell'UNESCO",

            price: 40,

            duration: "3 ore",

            distance: "8–10 km",

            difficulty: "Facile",

            languages:
                "ITA / ENG / FRA / SPA / TED / OLANDESE",

            theme:
                "Storia e atmosfera, vivi come un abitante del posto",

            description: `
Il nostro bestseller, perfetto per un primo sguardo alla città!

Alla ricerca delle radici greco-romane della città.

Percorreremo il lungomare di Napoli, toccando il magico nucleo originario della città, Castel dell'Ovo e il suo borgo sottostante, il Borgo Marinari, proseguendo verso est lungo Via Caracciolo.

Un giro lungo la maestosa Piazza del Plebiscito e il Palazzo Reale ci conduce poi alla vivace zona commerciale di Via Toledo, Piazza Carità e Piazza del Gesù.

Qui inizia l'antico cuore greco di Napoli, con i suoi Decumani, le principali strade parallele dell'antica città greca della Neapolis, che attraversano decine di vicoli e le strette vie del centro storico.

Percorriamo il Decumano inferiore in direzione del centro, detto “Maggiore”, Via dei Tribunali e Anticaglia.

È possibile aggiungere un'estensione verso il Monte Echia: se le vostre gambe, o una e-bike, vi spingono ad affrontare la ripida salita, da Piazza del Plebiscito si raggiunge con una breve salita la cima del Monte Echia, il primo sito di insediamento greco sulla terraferma.

Una splendida vista su Castel dell'Ovo e sul Golfo di Napoli allieterà il vostro tour.
`,

            program: [
                {
                    title: "Lungomare di Napoli",
                    description:
                        "Percorriamo il lungomare di Napoli fino al nucleo originario della città."
                },
                {
                    title: "Castel dell'Ovo e Borgo Marinari",
                    description:
                        "Scopriamo Castel dell'Ovo e il caratteristico Borgo Marinari."
                },
                {
                    title: "Via Caracciolo",
                    description:
                        "Proseguiamo verso est lungo Via Caracciolo."
                },
                {
                    title: "Piazza del Plebiscito e Palazzo Reale",
                    description:
                        "Attraversiamo la maestosa Piazza del Plebiscito e raggiungiamo il Palazzo Reale."
                },
                {
                    title: "Via Toledo e Piazza del Gesù",
                    description:
                        "Il percorso continua attraverso Via Toledo, Piazza Carità e Piazza del Gesù."
                },
                {
                    title: "I Decumani",
                    description:
                        "Entriamo nel cuore greco della città attraversando i Decumani e le strette vie del centro storico."
                },
                {
                    title: "Via dei Tribunali e Anticaglia",
                    description:
                        "Percorriamo il Decumano inferiore, Via dei Tribunali e l'Anticaglia."
                },
                {
                    title: "Monte Echia",
                    description:
                        "Estensione facoltativa verso la cima del Monte Echia."
                }
            ],

            included: [
                "Bicicletta",
                "Guida",
                "Casco"
            ],

            notIncluded: [],

            meetingPoint:
                "Galleria Principe di Napoli, 27, 80135 Napoli",

            usefulInfo: [
                "Durata: 3 ore",
                "Distanza: 8–10 km",
                "Difficoltà: Facile",
                "Per bloccare l'attività è richiesto un acconto del 10%. Il restante importo sarà saldato direttamente in struttura."
            ]
        },

        {
            id: "posillipo-pozzuli",

            title:
                "Posillipo e Pozzuoli",

            price: 70,

            duration: "3 ore",

            distance: "45 km",

            difficulty:
                "Media-Impegnativa",

            languages:
                "ITA / ENG / FRA / SPA / TED / OLANDESE",

            theme:
                "Siti archeologici, località balneare",

            description: `
Inizialmente percorriamo il lungomare di Napoli, toccando il magico nucleo originario della città, Castel dell'Ovo, il suo borgo sottostante, Borgo Marinari, per poi dirigerci verso ovest su Via Caracciolo, pedalando lungo il lungomare, un tempo spiaggia al servizio dell'antico quartiere dei pescatori, il pittoresco quartiere di Mergellina e l'elegante Chiaia, oggi meta prediletta per una passeggiata o un giro dei bar.

Una salita leggera e costante ci conduce sulla collina di Posillipo, un'oasi panoramica così vicina eppure lontana dalla città, cara a poeti e nobili, con le sue ville affacciate sul mare, la strada audace che aggira grotte e burroni e si incrocia con i tornanti che portano gli antichi borghi agricoli della collina, fino al mare verde solcato dalle barche da pesca.

Il viaggio prosegue con la visita facoltativa dell'area archeologica di Pausilypon, della straordinaria Villa di Vedio Pollione e del punto panoramico che si affaccia sull'incantevole baia di Trentaremi.

Guide professioniste del CSI Gaiola, su prenotazione, ci accompagneranno alla scoperta delle bellezze del sito.

Successivamente scenderemo dolcemente verso la località di Bagnoli per poi dirigerci verso il cuore dei Campi Flegrei, la cittadina di Pozzuoli.

Qui ci fermeremo al Tempio di Serapide, noto per essere il “termometro” del fenomeno vulcanico del bradisismo.

Dal centro di Pozzuoli al misterioso e affascinante Lago d'Averno basta un attimo.

Il giro del lago, parte del Parco dei Campi Flegrei, è facilmente percorribile in bicicletta e permette di ammirare i resti del Tempio di Apollo, romanticamente immersi in una natura rigogliosa.

Anatre, cormorani, oche e altri abitanti del lago salutano i ciclisti diretti a Pozzuoli.

Sulla via del ritorno percorreremo il lungolago di Pozzuoli e ci fermeremo al Molo Nord in via Coroglio, vicino a Piazza Bagnoli, per goderci la vista “dal mare” dei Campi Flegrei.

Indimenticabile è la sensazione di poter sfiorare la piccola isola di Nisida e di avere allo stesso tempo l'imponente sagoma dell'isola di Ischia.

La nostra guida vi fornirà maggiori dettagli sulla storia della zona e sui progetti di riqualificazione in corso.
`,

            program: [
                {
                    title: "Lungomare e Mergellina",
                    description:
                        "Percorriamo il lungomare passando per Castel dell'Ovo, Borgo Marinari, Via Caracciolo, Mergellina e Chiaia."
                },
                {
                    title: "Collina di Posillipo",
                    description:
                        "Una salita conduce verso la panoramica collina di Posillipo."
                },
                {
                    title: "Pausilypon",
                    description:
                        "Visita facoltativa dell'area archeologica di Pausilypon e della baia di Trentaremi."
                },
                {
                    title: "Bagnoli e Pozzuoli",
                    description:
                        "Scendiamo verso Bagnoli e proseguiamo verso Pozzuoli."
                },
                {
                    title: "Tempio di Serapide",
                    description:
                        "Sosta presso il Tempio di Serapide."
                },
                {
                    title: "Lago d'Averno",
                    description:
                        "Percorriamo il Lago d'Averno e ammiriamo i resti del Tempio di Apollo."
                },
                {
                    title: "Via Coroglio",
                    description:
                        "Ritorno lungo il lungolago di Pozzuoli fino al Molo Nord."
                },
                {
                    title: "Nisida e Ischia",
                    description:
                        "Vista panoramica sulle isole di Nisida e Ischia."
                }
            ],

            included: [
                "Bicicletta",
                "Guida",
                "Casco"
            ],

            notIncluded: [],

            meetingPoint:
                "Galleria Principe di Napoli, 27, 80135 Napoli",

            usefulInfo: [
                "Durata: mezza giornata",
                "Distanza: 45 km",
                "Difficoltà: Media-Impegnativa",
                "Media con e-bike",
                "Per bloccare l'attività è richiesto un acconto del 10%. Il restante importo sarà saldato direttamente in struttura."
            ]
        },

        {
            id: "golfo-posillipo",

            title:
                "Il Golfo di Napoli e il Colle di Posillipo",

            price: 50,

            duration: "3 ore",

            distance: "20 km",

            difficulty:
                "Media",

            languages:
                "ITA / ENG / FRA / SPA / TED / OLANDESE",

            theme:
                "Vista mare, vita di strada, buone vibrazioni",

            description: `
Il tour vi offrirà un assaggio immediato della bellezza di questa città che ha affascinato interi popoli, dagli antichi Greci e Romani ai poeti medievali, fino agli instancabili viaggiatori del “Grand Tour” del XIX secolo.

Inizialmente percorriamo il lungomare di Napoli, toccando il magico nucleo originario della città, Castel dell'Ovo, il suo borgo sottostante, Borgo Marinari, per poi dirigerci verso ovest su Via Caracciolo, pedalando lungo il lungomare, un tempo spiaggia al servizio dell'antico quartiere dei pescatori, il pittoresco quartiere di Mergellina e l'elegante Chiaia, oggi meta prediletta per una passeggiata o un giro dei bar.

Una salita leggera e costante ci conduce sulla collina di Posillipo, un'oasi panoramica così vicina eppure lontana dalla città, cara a poeti e nobili, con le sue ville affacciate sul mare, la strada audace che aggira grotte e burroni e si incrocia con i tornanti che portano gli antichi borghi agricoli della collina, fino al mare verde solcato dalle barche da pesca.

Come ricompensa finale della nostra pedalata, raggiungiamo il Parco Virgilio, che domina la cima della collina, luogo molto amato dai napoletani per il suo verde e soprattutto per la splendida vista sul Golfo di Napoli con il Vesuvio, Capri, Ischia e Procida.
`,

            program: [
                {
                    title: "Lungomare di Napoli",
                    description:
                        "Percorriamo il lungomare passando per Castel dell'Ovo e Borgo Marinari."
                },
                {
                    title: "Via Caracciolo",
                    description:
                        "Proseguiamo verso ovest lungo Via Caracciolo, Mergellina e Chiaia."
                },
                {
                    title: "Collina di Posillipo",
                    description:
                        "Una salita leggera e costante conduce sulla collina di Posillipo."
                },
                {
                    title: "Parco Virgilio",
                    description:
                        "Raggiungiamo il Parco Virgilio per ammirare il panorama sul Golfo di Napoli."
                }
            ],

            included: [
                "Bicicletta",
                "Guida",
                "Casco"
            ],

            notIncluded: [],

            meetingPoint:
                "Galleria Principe di Napoli, 27, 80135 Napoli",

            usefulInfo: [
                "Durata: 3,5 ore",
                "Distanza: 20 km",
                "Difficoltà: Media",
                "Facile con la bici elettrica",
                "Per bloccare l'attività è richiesto un acconto del 10%. Il restante importo sarà saldato direttamente in struttura."
            ]
        },

        {
            id: "lago-vigneto-campi-flegrei",

            title:
                "Un lago, un vigneto e un assaggio dei Campi Flegrei",

            price: 85,

            duration: "3 ore",

            distance: "45 km",

            difficulty:
                "Media con e-bike",

            languages:
                "ITA / ENG / FRA / SPA / TED / OLANDESE",

            theme:
                "Vista mare, relax, vino e cibo",

            description: `
La prima parte è in comune con il tour “Le vie navigabili verso Miseno”.

È un bel viaggio attraverso i Campi Flegrei: insieme scopriremo la natura del luogo e assaporeremo tutta la magia dei vini e dei prodotti tipici di questa regione.

Raggiungeremo la graziosa cittadina di Pozzuoli, ne visiteremo le bellezze e poi ripartiremo alla volta del Lago d'Averno.

Sulla riva destra del lago si trova un luogo tipico, la nota azienda vinicola Mirabella, dove vi verrà offerto un delizioso calice di vino.

Protagonisti saranno il rosso Piedirosso e il bianco Falanghina; inoltre, potrete gustare un pranzo facoltativo, solo su prenotazione, a base di prodotti genuini e naturali, tutti fatti in casa.

Quest'azienda vinicola aderisce alla rete “Slow Food”, che si occupa proprio della valorizzazione dei territori attraverso un'alimentazione autentica.

Per favorire la digestione, è possibile fare una passeggiata sul Monte Nuovo, il vulcano più recente del complesso dei Campi Flegrei, attraversando i suoi vigneti.

Dopodiché riprenderemo le biciclette e torneremo a Pozzuoli e Napoli percorrendo una strada panoramica che costeggia il mare.

Infine, faremo una breve passeggiata lungo il molo di Via Coroglio.

Le nostre guide esperte vi forniranno maggiori informazioni su questi luoghi magici e sorprendenti.
`,

            program: [
                {
                    title: "Pozzuoli",
                    description:
                        "Raggiungiamo Pozzuoli e scopriamo le bellezze della città."
                },
                {
                    title: "Lago d'Averno",
                    description:
                        "Proseguiamo verso il Lago d'Averno."
                },
                {
                    title: "Azienda vinicola Mirabella",
                    description:
                        "Sosta presso l'azienda vinicola con degustazione di un calice di vino."
                },
                {
                    title: "Monte Nuovo",
                    description:
                        "Possibilità di passeggiare sul Monte Nuovo attraversando i vigneti."
                },
                {
                    title: "Ritorno verso Napoli",
                    description:
                        "Rientro verso Pozzuoli e Napoli lungo una strada panoramica sul mare."
                },
                {
                    title: "Via Coroglio",
                    description:
                        "Breve passeggiata finale lungo il molo di Via Coroglio."
                }
            ],

            included: [
                "Bicicletta",
                "Guida",
                "Casco"
            ],

            notIncluded: [],

            meetingPoint:
                "Galleria Principe di Napoli, 27, 80135 Napoli",

            usefulInfo: [
                "Durata: giornata intera",
                "Distanza: 45 km",
                "Difficoltà: Media con e-bike",
                "Calice di vino incluso",
                "Pranzo facoltativo su prenotazione",
                "Per bloccare l'attività è richiesto un acconto del 10%. Il restante importo sarà saldato direttamente in struttura."
            ]
        },

        {
            id: "miseno",

            title:
                "Vie navigabili per Miseno",

            price: 75,

            duration: "3 ore",

            distance: "52 km",

            difficulty:
                "Medio-Alta",

            languages:
                "ITA / ENG / FRA / SPA / TED / OLANDESE",

            theme:
                "Patrimonio romano, natura, tour sportivo",

            description: `
I laghi, le antiche cisterne e il sentiero costiero, insieme a diverse tipologie di resti archeologici, caratterizzano il lento viaggio verso Miseno.

Durante la nostra prima tappa scopriremo il Tempio di Serapide, noto per essere il “termometro” del fenomeno vulcanico del bradisismo.

Dal centro di Pozzuoli al misterioso e affascinante Lago d'Averno basta un tiro di sasso.

Il giro del lago, parte del Parco dei Campi Flegrei, è facilmente percorribile in bicicletta e permette di ammirare le rovine del cosiddetto “Tempio di Apollo”, un enorme complesso termale romano, romanticamente immerse in una natura rigogliosa.

Anatre, cormorani, oche e altri abitanti del lago salutano i ciclisti diretti verso il prossimo specchio d'acqua.

Lo splendido paesaggio aiuta ad affrontare le brevi salite che si presentano, prima di scendere dolcemente verso il Lago Fusaro, le cui acque ospitano l'elegante Vanvitelliana Lodge, famoso per essere stato il set televisivo della fiaba di Pinocchio.

Il percorso prosegue fino a Misenum, dopo aver attraversato il centro storico di Chapel, nel comune di Bacoli.

In seguito circumnavigheremo il lago e poi saliremo fino alla Piscina Mirabilis, la più grande cisterna mai costruita dai Romani, che incanta i visitatori con i suoi alti archi e un gioco di luci e colori.

Viaggio di ritorno facoltativo con la ferrovia di Cumana, biglietti non inclusi.
`,

            program: [
                {
                    title: "Tempio di Serapide",
                    description:
                        "Prima tappa presso il Tempio di Serapide e scoperta del fenomeno del bradisismo."
                },
                {
                    title: "Lago d'Averno",
                    description:
                        "Percorriamo il Lago d'Averno e ammiriamo le rovine del cosiddetto Tempio di Apollo."
                },
                {
                    title: "Lago Fusaro",
                    description:
                        "Proseguiamo verso il Lago Fusaro e la Vanvitelliana Lodge."
                },
                {
                    title: "Misenum",
                    description:
                        "Il percorso continua verso Misenum attraversando il territorio di Bacoli."
                },
                {
                    title: "Piscina Mirabilis",
                    description:
                        "Saliamo fino alla Piscina Mirabilis, la grande cisterna romana."
                },
                {
                    title: "Ritorno",
                    description:
                        "Possibilità di rientro con la ferrovia di Cumana, con biglietti non inclusi."
                }
            ],

            included: [
                "Bicicletta",
                "Guida",
                "Casco"
            ],

            notIncluded: [
                "Biglietto della ferrovia di Cumana per il viaggio di ritorno"
            ],

            meetingPoint:
                "Galleria Principe di Napoli, 27, 80135 Napoli",

            usefulInfo: [
                "Durata: mezza giornata",
                "Distanza: 52 km",
                "Difficoltà: Medio-Alta",
                "Media con e-bike",
                "Rientro facoltativo con la ferrovia di Cumana",
                "Per bloccare l'attività è richiesto un acconto Il restante importo sarà saldato direttamente in struttura."
            ]
        }
    ]
};
