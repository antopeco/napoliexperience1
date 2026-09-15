const WHATSAPP_NUMBER = "393423512684";

const experiences = [

    /* =========================================================
       CORSI DI CUCINA
    ========================================================= */

    {
        id: "pizza",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Lezione di Pizza Napoletana",
        image: "images/pizza-napoletana.jpg.jpg",
        price: 49,
        priceType: "perPerson",
        duration: "Circa 2 ore",

        short:
            "Lezione pratica dedicata alla preparazione della pizza napoletana, dall'impasto alla cottura, con antipasto, bevande e pizza finale inclusi.",

        description:
            "Questa esperienza ti porta nel cuore della tradizione della pizza napoletana attraverso una lezione pratica di circa due ore, guidata da uno chef locale all’interno di un laboratorio di cucina attrezzato. Durante il corso scoprirai come nasce una vera pizza napoletana, partendo dalla conoscenza degli ingredienti fondamentali e dalla preparazione dell’impasto. Lo chef ti accompagnerà passo dopo passo nella lavorazione manuale, spiegandoti le principali fasi necessarie per ottenere un impasto correttamente lavorato. Durante il riposo dell’impasto potrai gustare un antipasto tipico napoletano composto da bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva, accompagnato dalle bevande previste dall’esperienza. La lezione prosegue con la stesura dell’impasto e la preparazione della pizza, imparando a lavorare correttamente il disco e a preparare il condimento con pomodoro San Marzano, mozzarella, olio e basilico. La pizza preparata verrà cotta in un forno a legna professionale e potrai gustare direttamente il risultato del tuo lavoro. Al termine dell’esperienza riceverai un diploma di pizzaiolo come ricordo della tua esperienza napoletana. Non è richiesta alcuna esperienza precedente in cucina: la lezione è pensata per essere semplice, pratica e adatta a chi viaggia da solo, alle coppie e alle famiglie.",

        itinerary: [
            {
                title: "Accoglienza e introduzione",
                text: "Inizio dell'esperienza presso il laboratorio di cucina e introduzione alla tradizione della pizza napoletana e agli ingredienti utilizzati."
            },
            {
                title: "Preparazione dell'impasto",
                text: "Lavorazione manuale dell'impasto con la guida dello chef locale e spiegazione delle principali fasi della preparazione."
            },
            {
                title: "Antipasto e bevande",
                text: "Durante il riposo dell'impasto viene servito un antipasto tipico napoletano con bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d'oliva, accompagnato dalle bevande incluse."
            },
            {
                title: "Stesura e condimento",
                text: "Stesura dell'impasto e preparazione della pizza con pomodoro San Marzano, mozzarella, olio e basilico."
            },
            {
                title: "Cottura",
                text: "La pizza viene cotta in un forno a legna professionale seguendo le indicazioni dello chef."
            },
            {
                title: "Degustazione e diploma",
                text: "Degustazione della pizza preparata e consegna del diploma di pizzaiolo al termine della lezione."
            }
        ],

        included: [
            "Lezione di pizza napoletana",
            "Chef locale",
            "Preparazione dell'impasto",
            "Preparazione del pomodoro San Marzano",
            "Antipasto tipico napoletano: bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d'oliva",
            "Pizza finale per pranzo o cena",
            "Bevande incluse",
            "Grembiule e utensili da cucina",
            "Cappello da chef",
            "Diploma di pizzaiolo"
        ],

        notIncluded: [
            "Trasporti da e per il punto di incontro"
        ],

        meetingPoint:
            "NaplesBay Cooking Lab, Via delle Zite 30, 80139 Napoli, Italia.",

        notAllowed: [
            "Ai minori di 18 anni non vengono servite bevande alcoliche."
        ],

        useful: [
            "Durata dell'esperienza: circa 2 ore.",
            "Lingue disponibili: italiano, inglese, francese e spagnolo.",
            "Esperienza condivisa.",
            "Accessibile con passeggino.",
            "Animali domestici ammessi.",
            "Non accessibile in sedia a rotelle.",
            "Il laboratorio si trova nel centro storico, a circa 5 minuti a piedi dalla stazione metro Duomo.",
            "Non è richiesta alcuna esperienza precedente in cucina.",
            "Si consiglia abbigliamento comodo.",
            "Cancellazione con rimborso completo se effettuata almeno 24 ore prima."
        ]
    },


    {
        id: "pizza-tiramisu",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Lezione di Pizza e Tiramisù a Napoli",
        image: "images/foto1.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 3 ore",

        short:
            "Corso pratico per preparare pizza napoletana e tiramisù tradizionale con chef locali.",

        description:
            "Un'esperienza culinaria di circa tre ore nella quale i partecipanti imparano a preparare la pizza napoletana e il tiramisù tradizionale.",

        itinerary: [
            {
                title: "Laboratorio di cucina",
                text: "Accoglienza e introduzione all'esperienza."
            },
            {
                title: "Pizza napoletana",
                text: "Preparazione dell'impasto, della pizza e della sua cottura."
            },
            {
                title: "Tiramisù",
                text: "Preparazione del tiramisù tradizionale."
            },
            {
                title: "Degustazione",
                text: "Degustazione delle preparazioni realizzate durante il corso."
            }
        ],

        included: [
            "Lezione di pizza",
            "Lezione di tiramisù",
            "Ingredienti",
            "Chef locale",
            "Degustazione finale",
            "Bevande"
        ],

        notIncluded: [
            "Trasporto da e verso il laboratorio"
        ],

        meetingPoint:
            "Laboratorio di cucina nel centro storico di Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Adatto anche a chi non ha esperienza.",
            "Cancellazione secondo le condizioni indicate dall'attività."
        ]
    },


    {
        id: "pizza-gelato",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Lezione di Pizza e Gelato a Napoli",
        image: "images/foto2.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 3 ore",

        short:
            "Cooking class dedicata alla pizza napoletana e alle basi del gelato artigianale.",

        description:
            "Un corso pratico nel quale vengono preparati la pizza secondo la tradizione napoletana e il gelato artigianale italiano.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione agli ingredienti e all'esperienza."
            },
            {
                title: "Pizza",
                text: "Preparazione dell'impasto e della pizza napoletana."
            },
            {
                title: "Gelato",
                text: "Introduzione alle tecniche di preparazione del gelato artigianale."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale delle preparazioni."
            }
        ],

        included: [
            "Lezione di pizza",
            "Lezione di gelato",
            "Ingredienti",
            "Chef locale",
            "Degustazione finale"
        ],

        notIncluded: [
            "Trasporto da e verso il laboratorio"
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza adatta ai diversi livelli di esperienza."
        ]
    },


    {
        id: "fresh-pasta-gelato",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Pasta fresca e Gelato con chef locale",
        image: "images/foto3.jpg.webp",
        price: "Richiedi preventivo",
        duration: "3 ore",

        short:
            "Corso pratico per preparare pasta fresca, fettuccine, ravioli, salse tradizionali e gelato.",

        description:
            "Il corso si svolge in un laboratorio di cucina nel centro storico di Napoli ed è guidato da uno chef locale. I partecipanti preparano pasta fresca, fettuccine, ravioli, salse tradizionali e gelato artigianale.",

        itinerary: [
            {
                title: "Via delle Zite 30",
                text: "Accoglienza presso il laboratorio di cucina."
            },
            {
                title: "Pasta fresca",
                text: "Preparazione manuale dell'impasto e realizzazione di fettuccine e ravioli."
            },
            {
                title: "Salse",
                text: "Preparazione delle salse Alfredo e pomodoro San Marzano."
            },
            {
                title: "Gelato",
                text: "Lezione pratica sulle basi del gelato artigianale."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale dei piatti preparati."
            }
        ],

        included: [
            "Chef locale professionista",
            "Preparazione di pasta fresca",
            "Fettuccine e ravioli",
            "Salse Alfredo e San Marzano",
            "Antipasto locale",
            "Gelato",
            "Degustazione finale",
            "Bevanda alcolica o analcolica",
            "Utensili",
            "Grembiule",
            "Cappello da chef",
            "Diploma da chef",
            "Deposito bagagli gratuito"
        ],

        notIncluded: [
            "Trasporto da e verso il punto di incontro"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Ai minori di 18 anni non vengono servite bevande alcoliche."
        ],

        useful: [
            "Accessibile con passeggino.",
            "Non accessibile in sedia a rotelle.",
            "Il laboratorio si trova a circa 5 minuti a piedi dalla stazione metro Duomo.",
            "Cancellazione gratuita secondo le condizioni dell'attività."
        ]
    },


    {
        id: "fresh-pasta-tiramisu",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Pasta fresca e Tiramisù con chef locale",
        image: "images/foto4.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 3 ore",

        short:
            "Corso di cucina dedicato alla preparazione della pasta fresca e del tiramisù.",

        description:
            "Esperienza pratica nel laboratorio di cucina di Napoli dedicata alla preparazione della pasta fresca e del tiramisù tradizionale.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione agli ingredienti e alle tecniche."
            },
            {
                title: "Pasta fresca",
                text: "Preparazione dell'impasto e lavorazione della pasta."
            },
            {
                title: "Tiramisù",
                text: "Preparazione della crema e assemblaggio del dolce."
            },
            {
                title: "Degustazione",
                text: "Degustazione delle preparazioni."
            }
        ],

        included: [
            "Lezione di cucina",
            "Chef locale",
            "Ingredienti",
            "Pasta fresca",
            "Tiramisù",
            "Degustazione",
            "Utensili e attrezzatura"
        ],

        notIncluded: [
            "Trasporto da e verso il laboratorio"
        ],

        meetingPoint:
            "Laboratorio di cucina nel centro storico di Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza adatta anche ai principianti.",
            "Si consiglia abbigliamento comodo."
        ]
    },


    {
        id: "fettuccine-ravioli",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Fettuccine Alfredo e Ravioli",
        image: "images/foto5.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 2 ore e 30 minuti",

        short:
            "Corso pratico per preparare fettuccine Alfredo e ravioli con antipasto e bevanda.",

        description:
            "Lezione pratica dedicata alla pasta fresca, alla preparazione delle fettuccine Alfredo e dei ravioli con salsa di pomodoro.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione alla cucina e agli ingredienti."
            },
            {
                title: "Impasto",
                text: "Preparazione della pasta fresca."
            },
            {
                title: "Fettuccine",
                text: "Realizzazione delle fettuccine e della salsa Alfredo."
            },
            {
                title: "Ravioli",
                text: "Preparazione e chiusura dei ravioli."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale."
            }
        ],

        included: [
            "Lezione con chef locale",
            "Fettuccine Alfredo",
            "Ravioli",
            "Antipasto locale",
            "Bevanda",
            "Utensili",
            "Grembiule",
            "Cappello da chef",
            "Diploma"
        ],

        notIncluded: [
            "Trasporto da e verso il laboratorio"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza adatta anche ai principianti.",
            "Il laboratorio si trova nel centro storico."
        ]
    },


    {
        id: "tiramisu",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Lezione di Tiramisù a Napoli",
        image: "images/foto1.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Durata da verificare",

        short:
            "Cooking class dedicata alla preparazione del tiramisù tradizionale con degustazione finale.",

        description:
            "Un'esperienza culinaria dedicata alla preparazione del tiramisù tradizionale e alla sua degustazione.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione agli ingredienti."
            },
            {
                title: "Preparazione",
                text: "Preparazione del tiramisù seguendo le tecniche indicate dallo chef."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale del dessert preparato."
            }
        ],

        included: [
            "Lezione di cucina",
            "Ingredienti",
            "Preparazione del tiramisù",
            "Degustazione",
            "Limoncello"
        ],

        notIncluded: [
            "Trasporti"
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza pratica."
        ]
    },


    {
        id: "pizza-evening",
        category: "cooking",
        categoryLabel: "Corso di cucina",
        title: "Lezione serale di Pizza Napoletana con vino locale",
        image: "images/pizza-napoletana.jpg.jpg",
        price: "Richiedi preventivo",
        duration: "Durata da verificare",

        short:
            "Lezione serale dedicata alla preparazione della pizza napoletana con vino locale.",

        description:
            "Esperienza serale di cucina dedicata alla preparazione della pizza napoletana e alla degustazione con vino locale.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Inizio della lezione."
            },
            {
                title: "Pizza",
                text: "Preparazione della pizza napoletana."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale con vino locale."
            }
        ],

        included: [
            "Lezione di pizza",
            "Ingredienti",
            "Preparazione e degustazione della pizza",
            "Vino locale"
        ],

        notIncluded: [
            "Trasporto"
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza serale."
        ]
    },


    /* =========================================================
       TOUR A PIEDI
    ========================================================= */

    {
        id: "wine-pignasecca",
        category: "walking",
        categoryLabel: "Tour a piedi",
        title: "Degustazione vini alla Pignasecca",
        image: "images/foto2.jpg.webp",
        price: "39 €",
        duration: "Durata da verificare",

        short:
            "Degustazione di quattro vini con antipasti al Mercato della Pignasecca.",

        description:
            "Esperienza gastronomica dedicata alla scoperta di vini e specialità locali nel quartiere della Pignasecca.",

        itinerary: [
            {
                title: "Mercato della Pignasecca",
                text: "Incontro e introduzione alla degustazione."
            },
            {
                title: "Degustazione",
                text: "Assaggio di quattro vini accompagnati da antipasti."
            }
        ],

        included: [
            "Degustazione di quattro vini",
            "Antipasti"
        ],

        notIncluded: [
            "Servizi non espressamente indicati nella scheda dell'attività."
        ],

        meetingPoint:
            "Mercato della Pignasecca, Napoli.",

        notAllowed: [
            "Gli alcolici sono riservati ai maggiorenni."
        ],

        useful: [
            "Esperienza dedicata alla degustazione di vini."
        ]
    },


    {
        id: "street-food",
        category: "walking",
        categoryLabel: "Tour a piedi",
        title: "Street Food Tour di Napoli",
        image: "images/foto2.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 2 ore",

        short:
            "Tour a piedi nel centro storico con sei fermate dedicate allo street food napoletano.",

        description:
            "Percorso gastronomico nel centro storico di Napoli con diverse degustazioni delle specialità della tradizione locale.",

        itinerary: [
            {
                title: "Piazza Carità",
                text: "Punto di incontro e partenza."
            },
            {
                title: "Pignasecca",
                text: "Passeggiata nell'area del mercato."
            },
            {
                title: "Sei degustazioni",
                text: "Tappe gastronomiche dedicate allo street food napoletano."
            },
            {
                title: "Conclusione",
                text: "Degustazione finale dolce."
            }
        ],

        included: [
            "Sei degustazioni",
            "Welcome Spritz",
            "Tarallo",
            "Frittatina",
            "Polpette",
            "Cuoppo",
            "Dessert o gelato",
            "Limoncello o espresso",
            "Guida esperta"
        ],

        notIncluded: [
            "Consumazioni aggiuntive non indicate."
        ],

        meetingPoint:
            "Piazza Carità 12, davanti alla Parrocchia di San Liborio alla Carità.",

        notAllowed: [
            "Eventuali esigenze alimentari devono essere comunicate in anticipo."
        ],

        useful: [
            "Comunicare in anticipo allergie o restrizioni alimentari.",
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "metro-art",
        category: "walking",
        categoryLabel: "Tour a piedi",
        title: "Tour Metro dell'Arte di Napoli",
        image: "images/foto3.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Durata da verificare",

        short:
            "Scopri la Metro dell'Arte di Napoli con particolare attenzione alla Stazione Toledo.",

        description:
            "Un percorso dedicato alle stazioni artistiche della metropolitana napoletana, con particolare attenzione alla Stazione Toledo.",

        itinerary: [
            {
                title: "Stazione Toledo",
                text: "Inizio del percorso."
            },
            {
                title: "Metro dell'Arte",
                text: "Scoperta delle installazioni e delle architetture artistiche."
            }
        ],

        included: [
            "Biglietto 24 ore"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Stazione Toledo, Napoli.",

        notAllowed: [
            "Rispettare le regole delle stazioni e dei trasporti pubblici."
        ],

        useful: [
            "Esperienza svolta utilizzando la rete metropolitana."
        ]
    },


    {
        id: "panoramic",
        category: "walking",
        categoryLabel: "Tour a piedi",
        title: "Tour panoramico e storico di Napoli",
        image: "images/foto4.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 2 ore",

        short:
            "Percorso panoramico tra Vomero, Petraio, Corso Vittorio Emanuele e centro storico.",

        description:
            "Passeggiata panoramica attraverso alcuni dei punti più suggestivi di Napoli, collegando il Vomero al centro storico.",

        itinerary: [
            {
                title: "Vomero",
                text: "Inizio del percorso."
            },
            {
                title: "Petraio",
                text: "Discesa panoramica attraverso il caratteristico percorso del Petraio."
            },
            {
                title: "Corso Vittorio Emanuele",
                text: "Percorso panoramico verso il centro."
            },
            {
                title: "Via Pignasecca",
                text: "Conclusione del tour."
            }
        ],

        included: [
            "Guida",
            "Biglietto della funicolare",
            "Materiale visivo"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Pasticceria Galiero – Augusteo.",

        notAllowed: [
            "Alcol e droghe non sono ammessi."
        ],

        useful: [
            "Indossare scarpe comode.",
            "Si consiglia abbigliamento adeguato.",
            "Arrivi tardivi e no-show non sono rimborsabili."
        ]
    },


    {
        id: "street-art",
        category: "walking",
        categoryLabel: "Tour a piedi",
        title: "Street Art Tour di Napoli",
        image: "images/foto5.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Durata da verificare",

        short:
            "Passeggiata nei Quartieri Spagnoli alla scoperta di murales, dipinti e street art.",

        description:
            "Tour a piedi dedicato alla street art dei Quartieri Spagnoli, con scoperta dei murales e della storia del quartiere.",

        itinerary: [
            {
                title: "Quartieri Spagnoli",
                text: "Inizio della passeggiata."
            },
            {
                title: "Murales",
                text: "Scoperta delle principali opere di street art."
            },
            {
                title: "Storia del quartiere",
                text: "Racconti e curiosità legati ai Quartieri Spagnoli."
            }
        ],

        included: [
            "Tour guidato"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Il punto di incontro viene indicato nella conferma dell'attività.",

        notAllowed: [
            "Rispettare le regole del percorso e degli spazi visitati."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    /* =========================================================
       TOUR IN MINIBUS
    ========================================================= */

    {
        id: "pompeii",
        category: "minibus",
        categoryLabel: "Tour in Minibus",
        title: "Tour Pompei da Napoli",
        image: "images/foto3.jpg.webp",
        price: "74 €",
        duration: "Circa 4 ore",

        short:
            "Visita guidata di Pompei da Napoli con pick-up in minibus, ingresso rapido e guida.",

        description:
            "Tour organizzato da Napoli verso il Parco Archeologico di Pompei con trasferimento in minibus e visita guidata del sito.",

        itinerary: [
            {
                title: "Pick-up a Napoli",
                text: "Partenza da uno dei punti disponibili."
            },
            {
                title: "Trasferimento",
                text: "Trasferimento in minibus verso Pompei."
            },
            {
                title: "Pompei",
                text: "Ingresso al sito archeologico e visita guidata."
            },
            {
                title: "Rientro",
                text: "Trasferimento di ritorno a Napoli."
            }
        ],

        included: [
            "Pick-up in minibus",
            "Trasferimento",
            "Biglietto salta la fila",
            "Visita guidata"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli secondo il punto selezionato.",

        notAllowed: [
            "Rispettare le regole del sito archeologico."
        ],

        useful: [
            "Si consigliano scarpe comode.",
            "Il tour comprende una visita a piedi del sito archeologico."
        ]
    },


    {
        id: "pompeii-vesuvius",
        category: "minibus",
        categoryLabel: "Tour in Minibus",
        title: "Tour Pompei e Vesuvio da Napoli",
        image: "images/foto3.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 7 ore",

        short:
            "Tour di una giornata con Pompei e Vesuvio, trasferimento in minibus, guide e biglietti.",

        description:
            "Esperienza di circa sette ore dedicata alla visita di Pompei e del Vesuvio con trasferimento da Napoli, guide dedicate e biglietti per i siti.",

        itinerary: [
            {
                title: "Napoli",
                text: "Partenza e pick-up."
            },
            {
                title: "Pompei",
                text: "Visita del Parco Archeologico."
            },
            {
                title: "Pausa pranzo",
                text: "Pausa durante l'escursione."
            },
            {
                title: "Vesuvio",
                text: "Trasferimento e visita dell'area del Vesuvio."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Trasferimento in minibus",
            "Guide dedicate",
            "Biglietto salta la fila per Pompei",
            "Biglietto per il Vesuvio",
            "Pausa pranzo"
        ],

        notIncluded: [
            "Servizi non indicati nella scheda."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole dei siti visitati."
        ],

        useful: [
            "Si consigliano scarpe comode.",
            "Il percorso del Vesuvio richiede attività a piedi."
        ]
    },


    {
        id: "amalfi-minibus",
        category: "minibus",
        categoryLabel: "Tour in Minibus",
        title: "Tour Costiera Amalfitana da Napoli",
        image: "images/foto1.jpg.webp",
        price: "90 €",
        duration: "Circa 8 ore",

        short:
            "Tour della Costiera Amalfitana con minibus e tre soste: Sorrento, Positano e Amalfi.",

        description:
            "Escursione giornaliera da Napoli lungo la Costiera Amalfitana con minibus e driver.",

        itinerary: [
            {
                title: "Napoli",
                text: "Partenza alle 08:00."
            },
            {
                title: "Sorrento",
                text: "Tempo libero di circa 1 ora e 30 minuti."
            },
            {
                title: "Positano",
                text: "Tempo libero di circa 1 ora."
            },
            {
                title: "Amalfi",
                text: "Tempo libero di circa 2 ore."
            },
            {
                title: "Napoli",
                text: "Rientro nel pomeriggio."
            }
        ],

        included: [
            "Trasferimento in minibus",
            "Driver",
            "Tre soste lungo il percorso"
        ],

        notIncluded: [
            "Ingressi e servizi non espressamente indicati."
        ],

        meetingPoint:
            "Napoli, secondo il punto di pick-up previsto.",

        notAllowed: [
            "Rispettare le regole dei luoghi visitati."
        ],

        useful: [
            "Tour di una giornata.",
            "Si consigliano scarpe comode."
        ]
    },


    /* =========================================================
       TOUR IN BARCA
    ========================================================= */

    {
        id: "capri",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Capri da Napoli: aliscafo e giro in barca",
        image: "images/foto1.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Circa 8 ore",

        short:
            "Aliscafo Napoli-Capri A/R e giro in barca dell'isola con fermata alla Grotta Azzurra.",

        description:
            "Escursione indipendente a Capri con aliscafo da Napoli, tempo libero sull'isola e giro in barca di circa un'ora e mezza.",

        itinerary: [
            {
                title: "Molo Beverello",
                text: "Partenza da Napoli."
            },
            {
                title: "Aliscafo",
                text: "Trasferimento verso Capri."
            },
            {
                title: "Capri",
                text: "Tempo libero per esplorare l'isola."
            },
            {
                title: "Giro dell'isola",
                text: "Tour in barca di circa 1 ora e 30 minuti con fermata alla Grotta Azzurra."
            },
            {
                title: "Napoli",
                text: "Rientro con aliscafo."
            }
        ],

        included: [
            "Aliscafo Napoli-Capri A/R",
            "Giro in barca di circa 1 ora e 30 minuti",
            "Sosta alla Grotta Azzurra, condizioni permettendo",
            "Wi-Fi a bordo dell'aliscafo",
            "Assistenza al porto",
            "Tasse portuali",
            "Diritti di sbarco"
        ],

        notIncluded: [
            "Ingresso alla Grotta Azzurra",
            "Guida locale sull'isola",
            "Pick-up in hotel",
            "Pasti e bevande"
        ],

        meetingPoint:
            "Molo Beverello, Napoli.",

        notAllowed: [
            "Fumare."
        ],

        useful: [
            "La Grotta Azzurra è soggetta alle condizioni del mare.",
            "L'esperienza non prevede una guida fissa sull'isola.",
            "Non accessibile con sedia a rotelle.",
            "Accessibile con passeggino."
        ]
    },


    {
        id: "private-capri-boat",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Giro in barca privato di Capri",
        image: "images/foto2.jpg.webp",
        price: "450 €",
        duration: "Durata da verificare",

        short:
            "Tour privato intorno a Capri con skipper e aperitivo incluso.",

        description:
            "Esperienza privata in barca dedicata alla scoperta della costa di Capri con skipper e aperitivo.",

        itinerary: [
            {
                title: "Partenza",
                text: "Imbarco secondo il punto indicato nella conferma."
            },
            {
                title: "Capri",
                text: "Navigazione intorno all'isola."
            },
            {
                title: "Soste",
                text: "Possibilità di effettuare soste secondo l'organizzazione del tour."
            },
            {
                title: "Rientro",
                text: "Rientro al punto di partenza."
            }
        ],

        included: [
            "Barca privata",
            "Skipper",
            "Aperitivo"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Punto di imbarco comunicato con la conferma.",

        notAllowed: [
            "Rispettare le disposizioni dell'equipaggio."
        ],

        useful: [
            "Esperienza privata.",
            "Le attività in mare dipendono dalle condizioni operative."
        ]
    },


    {
        id: "naples-gulf-boat",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Tour privato in barca nel Golfo di Napoli",
        image: "images/foto3.jpg.webp",
        price: "400 €",
        duration: "Durata da verificare",

        short:
            "Tour privato nel Golfo di Napoli con skipper.",

        description:
            "Giro privato in barca nel Golfo di Napoli per ammirare la città e la costa dal mare.",

        itinerary: [
            {
                title: "Imbarco",
                text: "Partenza dal punto di incontro indicato."
            },
            {
                title: "Golfo di Napoli",
                text: "Navigazione lungo la costa e scoperta dei panorami dal mare."
            },
            {
                title: "Soste",
                text: "Soste secondo il programma concordato."
            },
            {
                title: "Rientro",
                text: "Ritorno al punto di imbarco."
            }
        ],

        included: [
            "Barca privata",
            "Skipper"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Punto di imbarco comunicato con la conferma.",

        notAllowed: [
            "Seguire le indicazioni dell'equipaggio."
        ],

        useful: [
            "Esperienza privata.",
            "L'itinerario può dipendere dalle condizioni del mare."
        ]
    },


    {
        id: "amalfi-private-boat",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Tour privato in barca della Costiera Amalfitana",
        image: "images/foto4.jpg.webp",
        price: "1.800 €",
        duration: "9 ore",

        short:
            "Gita privata da Napoli lungo la Costiera Amalfitana con skipper, soste per nuotare e aperitivo.",

        description:
            "Tour privato di nove ore da Napoli lungo la Costiera Amalfitana, con navigazione costiera, soste per nuotare e possibilità di sbarcare a terra.",

        itinerary: [
            {
                title: "Mergellina",
                text: "Partenza da Mergellina – Borgo Marinai."
            },
            {
                title: "Costiera Amalfitana",
                text: "Navigazione lungo la costa e soste per nuotare."
            },
            {
                title: "Positano",
                text: "Vista dal mare e possibilità di sbarco."
            },
            {
                title: "Amalfi",
                text: "Possibilità di sbarco e tempo libero."
            },
            {
                title: "Mergellina",
                text: "Rientro al punto di partenza."
            }
        ],

        included: [
            "Skipper professionista",
            "Noleggio barca privata",
            "Carburante",
            "Tasse di attracco",
            "Bevande analcoliche",
            "Snack",
            "Aperitivo a bordo",
            "Soste per nuotare",
            "Musica a bordo",
            "Acqua in bottiglia",
            "Equipaggiamento di sicurezza"
        ],

        notIncluded: [
            "Bevande alcoliche",
            "Attrezzatura per snorkeling",
            "Pranzo o pasti",
            "Trasporto da e verso il punto di incontro"
        ],

        meetingPoint:
            "Mergellina – Borgo Marinai, Via Mergellina, 80122 Napoli.",

        notAllowed: [
            "Fumare."
        ],

        useful: [
            "Non accessibile alle sedie a rotelle.",
            "Non accessibile con passeggino.",
            "Non adatto agli animali domestici.",
            "I seggiolini per bambini non sono disponibili.",
            "Arrivare circa 10 minuti prima della partenza."
        ]
    },


    {
        id: "ischia-procida-boat",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Ischia e Procida in barca privata",
        image: "images/foto5.jpg.webp",
        price: "890 €",
        duration: "Circa 9 ore",

        short:
            "Tour privato da Napoli a Ischia e Procida con skipper, soste sulle isole e aperitivo.",

        description:
            "Gita privata in barca con partenza da Napoli dedicata alla scoperta di Ischia e Procida, con tempo libero sulle isole e aperitivo a bordo.",

        itinerary: [
            {
                title: "Mergellina",
                text: "Partenza da Napoli."
            },
            {
                title: "Ischia",
                text: "Tempo libero sull'isola."
            },
            {
                title: "Procida",
                text: "Tempo libero sull'isola."
            },
            {
                title: "Mergellina",
                text: "Rientro a Napoli."
            }
        ],

        included: [
            "Barca privata",
            "Skipper",
            "Aperitivo",
            "Snack",
            "Birra"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Mergellina – Borgo Marinai, Via Mergellina.",

        notAllowed: [
            "Seguire le indicazioni dell'equipaggio."
        ],

        useful: [
            "Barca privata.",
            "L'attività è soggetta alle condizioni del mare."
        ]
    },


    /* =========================================================
       TOUR PRIVATI
    ========================================================= */

    {
        id: "private-walking",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato a piedi nel centro storico di Napoli",
        image: "images/foto1.jpg.webp",
        price: "180 €",
        duration: "Circa 2 ore",

        short:
            "Visita privata del centro storico tra Spaccanapoli, Duomo e San Gregorio Armeno.",

        description:
            "Tour privato a piedi attraverso alcune delle zone e dei monumenti più rappresentativi del centro storico di Napoli.",

        itinerary: [
            {
                title: "Piazza del Gesù Nuovo",
                text: "Inizio del tour."
            },
            {
                title: "Santa Chiara",
                text: "Visita dell'area monumentale."
            },
            {
                title: "Spaccanapoli",
                text: "Passeggiata lungo il cuore del centro storico."
            },
            {
                title: "Duomo",
                text: "Passaggio presso il Duomo di Napoli."
            },
            {
                title: "San Gregorio Armeno",
                text: "Passeggiata nella celebre strada dei presepi."
            },
            {
                title: "Via dei Tribunali",
                text: "Conclusione del percorso."
            }
        ],

        included: [
            "Guida",
            "Ingressi alle chiese previsti dall'itinerario"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Piazza del Gesù Nuovo, presso l'obelisco.",

        notAllowed: [
            "Alcol e droghe non sono ammessi."
        ],

        useful: [
            "Indossare scarpe comode.",
            "Si consiglia abbigliamento adeguato.",
            "Arrivi tardivi e no-show non sono rimborsabili."
        ]
    },


    {
        id: "private-street-art",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Street Art Tour privato di Napoli",
        image: "images/foto5.jpg.webp",
        price: "120 €",
        duration: "Durata da verificare",

        short:
            "Tour privato nei Quartieri Spagnoli alla scoperta della street art.",

        description:
            "Passeggiata privata dedicata ai murales e alla storia della street art dei Quartieri Spagnoli.",

        itinerary: [
            {
                title: "Quartieri Spagnoli",
                text: "Inizio del percorso."
            },
            {
                title: "Murales",
                text: "Scoperta delle opere di street art."
            },
            {
                title: "Storia e curiosità",
                text: "Racconti dedicati al quartiere."
            }
        ],

        included: [
            "Tour privato",
            "Guida"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Punto di incontro comunicato nella conferma.",

        notAllowed: [
            "Rispettare le regole dei luoghi visitati."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-street-food",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Street Food Tour privato di Napoli",
        image: "images/foto2.jpg.webp",
        price: "62 €",
        duration: "Circa 2 ore",

        short:
            "Tour gastronomico privato nel centro storico con sei fermate dedicate allo street food.",

        description:
            "Percorso privato a piedi attraverso il centro storico di Napoli con sei fermate per degustare specialità dello street food napoletano.",

        itinerary: [
            {
                title: "Piazza Carità",
                text: "Partenza del tour."
            },
            {
                title: "Centro storico",
                text: "Passeggiata gastronomica."
            },
            {
                title: "Sei fermate",
                text: "Degustazione delle specialità previste."
            }
        ],

        included: [
            "Sei fermate gastronomiche",
            "Degustazioni",
            "Guida"
        ],

        notIncluded: [
            "Consumazioni aggiuntive."
        ],

        meetingPoint:
            "Piazza Carità 12.",

        notAllowed: [
            "Comunicare preventivamente eventuali allergie o restrizioni."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-metro",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato della Metro dell'Arte di Napoli",
        image: "images/foto3.jpg.webp",
        price: "Richiedi preventivo",
        duration: "Durata da verificare",

        short:
            "Visita privata dedicata alla Metro dell'Arte e alla Stazione Toledo.",

        description:
            "Percorso privato alla scoperta delle stazioni artistiche della metropolitana di Napoli.",

        itinerary: [
            {
                title: "Stazione Toledo",
                text: "Inizio della visita."
            },
            {
                title: "Metro dell'Arte",
                text: "Scoperta delle principali installazioni artistiche."
            }
        ],

        included: [
            "Tour privato",
            "Guida",
            "Biglietto 24 ore"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Stazione Toledo.",

        notAllowed: [
            "Rispettare le regole della rete metropolitana."
        ],

        useful: [
            "Esperienza svolta utilizzando i trasporti pubblici."
        ]
    },


    {
        id: "private-panoramic",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato panoramico e storico di Napoli",
        image: "images/foto4.jpg.webp",
        price: "130 €",
        duration: "Circa 2 ore",

        short:
            "Tour privato tra Vomero, Petraio e centro storico dall'alto.",

        description:
            "Percorso privato dedicato ai panorami di Napoli con collegamento tra il Vomero, il Petraio e il centro storico.",

        itinerary: [
            {
                title: "Vomero",
                text: "Inizio del percorso."
            },
            {
                title: "Petraio",
                text: "Percorso panoramico in discesa."
            },
            {
                title: "Corso Vittorio Emanuele",
                text: "Vista panoramica sulla città."
            },
            {
                title: "Pignasecca",
                text: "Conclusione del percorso."
            }
        ],

        included: [
            "Guida",
            "Biglietto funicolare",
            "Materiale visivo"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Pasticceria Galiero – Augusteo.",

        notAllowed: [
            "Alcol e droghe non sono ammessi."
        ],

        useful: [
            "Scarpe comode consigliate.",
            "Arrivi tardivi e no-show non sono rimborsabili."
        ]
    },


    {
        id: "private-pizza",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Pizza Napoletana",
        image: "images/pizza-napoletana.jpg.jpg",
        price: "220 €",
        duration: "Durata da verificare",

        short:
            "Lezione privata di pizza napoletana con chef dedicato.",

        description:
            "Esperienza privata dedicata alla preparazione della pizza napoletana con chef dedicato.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Inizio della lezione."
            },
            {
                title: "Impasto",
                text: "Preparazione dell'impasto."
            },
            {
                title: "Pizza",
                text: "Stesura, condimento e cottura."
            },
            {
                title: "Degustazione",
                text: "Degustazione della pizza preparata."
            }
        ],

        included: [
            "Lezione privata",
            "Chef",
            "Ingredienti",
            "Antipasto",
            "Bevanda",
            "Pizza"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata."
        ]
    },


    {
        id: "private-pizza-tiramisu",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Pizza e Tiramisù",
        image: "images/foto1.jpg.webp",
        price: "85 €",
        duration: "3 ore",

        short:
            "Lezione privata di pizza e tiramisù con chef napoletano dedicato.",

        description:
            "Esperienza privata di tre ore in laboratorio di cucina dedicata alla preparazione della pizza napoletana e del tiramisù.",

        itinerary: [
            {
                title: "Via delle Zite 30",
                text: "Accoglienza presso il laboratorio."
            },
            {
                title: "Pizza",
                text: "Impasto, salsa, stesura, farcitura e cottura."
            },
            {
                title: "Tiramisù",
                text: "Preparazione della crema e assemblaggio del dolce."
            },
            {
                title: "Degustazione",
                text: "Degustazione di pizza e tiramisù."
            }
        ],

        included: [
            "Lezione privata di pizza",
            "Lezione privata di tiramisù",
            "Chef dedicato",
            "Preparazione dell'impasto",
            "Preparazione del tiramisù",
            "Snack e antipasto locale",
            "Bevande",
            "Limoncello",
            "Grembiule",
            "Cappello da chef"
        ],

        notIncluded: [
            "Trasporto da e verso il laboratorio"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Accessibile con passeggino.",
            "Non accessibile in sedia a rotelle.",
            "Animali domestici ammessi.",
            "Circa 5 minuti a piedi dalla metro Duomo.",
            "Cancellazione gratuita secondo le condizioni dell'attività."
        ]
    },


    {
        id: "private-pizza-gelato",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Pizza e Gelato",
        image: "images/foto2.jpg.webp",
        price: "85 €",
        duration: "Durata da verificare",

        short:
            "Cooking class privata dedicata alla pizza e al gelato.",

        description:
            "Lezione privata con chef dedicato per imparare a preparare pizza napoletana e gelato.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione alla lezione."
            },
            {
                title: "Pizza",
                text: "Preparazione dell'impasto e della pizza."
            },
            {
                title: "Gelato",
                text: "Introduzione alla preparazione del gelato."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale."
            }
        ],

        included: [
            "Lezione privata",
            "Chef dedicato",
            "Ingredienti",
            "Pizza",
            "Gelato",
            "Degustazione"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata."
        ]
    },


    {
        id: "private-pasta-gelato",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Pasta fresca e Gelato",
        image: "images/foto3.jpg.webp",
        price: "85 €",
        duration: "3 ore",

        short:
            "Lezione privata con chef dedicato per preparare pasta fresca e gelato.",

        description:
            "Corso privato di cucina nel quale vengono preparati pasta fresca, fettuccine, ravioli e gelato.",

        itinerary: [
            {
                title: "Laboratorio",
                text: "Accoglienza e introduzione."
            },
            {
                title: "Pasta",
                text: "Preparazione della pasta fresca."
            },
            {
                title: "Fettuccine e ravioli",
                text: "Realizzazione dei formati di pasta."
            },
            {
                title: "Gelato",
                text: "Preparazione del gelato."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale."
            }
        ],

        included: [
            "Chef privato",
            "Pasta fresca",
            "Fettuccine",
            "Ravioli",
            "Gelato",
            "Ingredienti",
            "Degustazione"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata.",
            "Non accessibile in sedia a rotelle."
        ]
    },


    {
        id: "private-pasta-tiramisu",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Pasta fresca e Tiramisù",
        image: "images/foto4.jpg.webp",
        price: "85 €",
        duration: "Durata da verificare",

        short:
            "Corso privato di cucina dedicato alla pasta fresca e al tiramisù.",

        description:
            "Lezione privata con chef napoletano dedicato alla preparazione della pasta fresca e del tiramisù.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione alla cucina."
            },
            {
                title: "Pasta fresca",
                text: "Preparazione della pasta."
            },
            {
                title: "Tiramisù",
                text: "Preparazione del dolce."
            },
            {
                title: "Degustazione",
                text: "Degustazione finale."
            }
        ],

        included: [
            "Chef dedicato",
            "Lezione privata",
            "Ingredienti",
            "Pasta fresca",
            "Tiramisù",
            "Degustazione"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata."
        ]
    },


    {
        id: "private-fettuccine-ravioli",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Fettuccine Alfredo e Ravioli",
        image: "images/foto5.jpg.webp",
        price: "58 €",
        duration: "Durata da verificare",

        short:
            "Corso privato di cucina con chef dedicato per preparare fettuccine Alfredo e ravioli.",

        description:
            "Lezione privata di cucina dedicata alla pasta fresca, alle fettuccine Alfredo e ai ravioli.",

        itinerary: [
            {
                title: "Impasto",
                text: "Preparazione della pasta fresca."
            },
            {
                title: "Fettuccine",
                text: "Preparazione delle fettuccine Alfredo."
            },
            {
                title: "Ravioli",
                text: "Preparazione dei ravioli."
            },
            {
                title: "Degustazione",
                text: "Degustazione delle preparazioni."
            }
        ],

        included: [
            "Chef dedicato",
            "Lezione privata",
            "Antipasto",
            "Bevanda",
            "Fettuccine",
            "Ravioli",
            "Utensili"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata."
        ]
    },


    {
        id: "private-tiramisu",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Lezione privata di Tiramisù",
        image: "images/foto1.jpg.webp",
        price: "210 €",
        duration: "Durata da verificare",

        short:
            "Cooking class privata dedicata alla preparazione del tiramisù.",

        description:
            "Lezione privata di cucina dedicata alla preparazione del tiramisù tradizionale.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Introduzione agli ingredienti."
            },
            {
                title: "Preparazione",
                text: "Realizzazione della crema e assemblaggio del tiramisù."
            },
            {
                title: "Degustazione",
                text: "Degustazione del dolce preparato."
            }
        ],

        included: [
            "Lezione privata",
            "Chef",
            "Ingredienti",
            "Degustazione",
            "Limoncello"
        ],

        notIncluded: [
            "Trasporto."
        ],

        meetingPoint:
            "Laboratorio di cucina a Napoli.",

        notAllowed: [
            "Gli alcolici non vengono serviti ai minori."
        ],

        useful: [
            "Esperienza privata."
        ]
    },


    {
        id: "private-pompeii",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato di Pompei da Napoli",
        image: "images/foto3.jpg.webp",
        price: "310 €",
        duration: "Durata da verificare",

        short:
            "Visita privata di Pompei con guida, autista e biglietto salta la fila.",

        description:
            "Tour privato dedicato alla visita degli Scavi di Pompei con trasferimento, guida e ingresso prioritario.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up e partenza."
            },
            {
                title: "Pompei",
                text: "Visita guidata degli Scavi."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Autista",
            "Guida",
            "Biglietto salta la fila"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole del sito archeologico."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-pompeii-wine",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Pompei e degustazione vini",
        image: "images/foto4.jpg.webp",
        price: "380 €",
        duration: "Circa 7 ore",

        short:
            "Tour privato di Pompei con visita guidata e degustazione presso una cantina sul Vesuvio.",

        description:
            "Esperienza privata che combina la visita di Pompei con una degustazione di vini locali in una cantina del Vesuvio.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up da hotel, porto o punto concordato."
            },
            {
                title: "Pompei",
                text: "Visita guidata di circa due ore."
            },
            {
                title: "Cantina",
                text: "Trasferimento presso una cantina sul Vesuvio."
            },
            {
                title: "Degustazione",
                text: "Degustazione di vini locali e pausa pranzo."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Driver privato",
            "Guida autorizzata",
            "Ingresso salta la fila",
            "Cantina sul Vesuvio",
            "Degustazione di vini",
            "Pranzo leggero",
            "Pick-up e rientro"
        ],

        notIncluded: [
            "Servizi non espressamente indicati."
        ],

        meetingPoint:
            "Hotel, porto o punto concordato a Napoli.",

        notAllowed: [
            "Rispettare le regole dei siti e della cantina."
        ],

        useful: [
            "Possibilità di utilizzo di passeggino.",
            "Animali di servizio ammessi.",
            "Non accessibile in sedia a rotelle.",
            "Seggiolini per bambini disponibili secondo organizzazione."
        ]
    },


    {
        id: "private-pompeii-sorrento",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato Pompei e Sorrento",
        image: "images/foto5.jpg.webp",
        price: "430 €",
        duration: "Durata da verificare",

        short:
            "Tour privato da Napoli dedicato a Pompei e Sorrento.",

        description:
            "Esperienza privata che combina la visita archeologica di Pompei con la scoperta di Sorrento.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up."
            },
            {
                title: "Pompei",
                text: "Visita degli Scavi."
            },
            {
                title: "Sorrento",
                text: "Visita e tempo libero."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Autista",
            "Guida"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole dei luoghi visitati."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-pompeii-vesuvius",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato Pompei e Vesuvio",
        image: "images/foto3.jpg.webp",
        price: "450 €",
        duration: "Durata da verificare",

        short:
            "Tour privato con visita di Pompei e Vesuvio, autista, guide e biglietti.",

        description:
            "Escursione privata da Napoli che combina il Parco Archeologico di Pompei e il Vesuvio.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up."
            },
            {
                title: "Pompei",
                text: "Visita guidata del sito."
            },
            {
                title: "Vesuvio",
                text: "Trasferimento e visita dell'area."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Autista",
            "Guide",
            "Biglietti salta la fila"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole dei siti visitati."
        ],

        useful: [
            "Scarpe comode consigliate."
        ]
    },


    {
        id: "private-pompeii-herculaneum",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato Pompei ed Ercolano",
        image: "images/foto4.jpg.webp",
        price: "540 €",
        duration: "Durata da verificare",

        short:
            "Tour privato di Pompei ed Ercolano con guida e autista.",

        description:
            "Esperienza privata dedicata alla visita dei due importanti siti archeologici di Pompei ed Ercolano.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up."
            },
            {
                title: "Pompei",
                text: "Visita del sito archeologico."
            },
            {
                title: "Ercolano",
                text: "Visita dell'antica città romana."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Autista",
            "Guida"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole dei siti archeologici."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-caserta",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Tour privato alla Reggia di Caserta",
        image: "images/foto5.jpg.webp",
        price: "320 €",
        duration: "Durata da verificare",

        short:
            "Escursione privata alla Reggia di Caserta con guida e autista.",

        description:
            "Tour privato da Napoli dedicato alla scoperta della Reggia di Caserta.",

        itinerary: [
            {
                title: "Napoli",
                text: "Pick-up."
            },
            {
                title: "Reggia di Caserta",
                text: "Visita della Reggia e degli spazi previsti."
            },
            {
                title: "Napoli",
                text: "Rientro."
            }
        ],

        included: [
            "Autista",
            "Guida"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole della Reggia."
        ],

        useful: [
            "Si consigliano scarpe comode."
        ]
    },


    {
        id: "private-positano-sorrento-pizza",
        category: "private",
        categoryLabel: "Tour Privato",
        title: "Positano e Sorrento con lezione di pizza",
        image: "images/foto1.jpg.webp",
        price: "375 €",
        duration: "Durata da verificare",

        short:
            "Tour privato da Napoli con Positano, Sorrento e lezione di pizza.",

        description:
            "Esperienza privata che combina la scoperta di Positano e Sorrento con una lezione di pizza a Napoli.",

        itinerary: [
            {
                title: "Napoli",
                text: "Partenza."
            },
            {
                title: "Positano",
                text: "Visita e tempo libero."
            },
            {
                title: "Sorrento",
                text: "Visita e tempo libero."
            },
            {
                title: "Lezione di pizza",
                text: "Esperienza culinaria a Napoli."
            }
        ],

        included: [
            "Servizio privato",
            "Trasporto",
            "Lezione di pizza"
        ],

        notIncluded: [
            "Servizi non indicati."
        ],

        meetingPoint:
            "Pick-up a Napoli.",

        notAllowed: [
            "Rispettare le regole dei luoghi visitati."
        ],

        useful: [
            "Tour privato.",
            "Si consigliano scarpe comode."
        ]
    }

];


/* =========================================================
   ELEMENTI DOM
========================================================= */

const catalogGrid =
    document.getElementById("catalog-grid");

const modal =
    document.getElementById("experience-modal");

const modalContent =
    document.getElementById("modal-content");

const filterButtons =
    document.querySelectorAll(".filter-button");


/* =========================================================
   SICUREZZA HTML
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   PREZZO PIZZA
========================================================= */

function getPizzaTotal(participants) {

    const experience =
        experiences.find(
            item => item.id === "pizza"
        );

    if (!experience) {
        return 0;
    }

    const quantity =
        Math.max(
            1,
            parseInt(participants, 10) || 1
        );

    return experience.price * quantity;
}


function updatePizzaPrice(participants) {

    const total =
        getPizzaTotal(participants);

    const totalElement =
        document.getElementById(
            "pizza-total-price"
        );

    if (totalElement) {

        totalElement.textContent =
            `${total} €`;
    }

}


/* =========================================================
   LISTE
========================================================= */

function renderList(items) {

    if (!items || !items.length) {

        return `
            <p>
                Informazione non disponibile nella scheda attuale.
            </p>
        `;
    }

    return `
        <ul>
            ${items.map(item => `
                <li>
                    ${escapeHTML(item)}
                </li>
            `).join("")}
        </ul>
    `;
}


/* =========================================================
   ITINERARIO CON LINEA TRATTEGGIATA
========================================================= */

function renderItinerary(items) {

    if (!items || !items.length) {

        return `
            <p>
                Itinerario non disponibile nella scheda attuale.
            </p>
        `;
    }

    return `
        <div class="itinerary">

            ${items.map((item, index) => `

                <div class="itinerary-stop">

                    <span class="itinerary-number">
                        TAPPA ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h4>
                        ${escapeHTML(item.title)}
                    </h4>

                    <p>
                        ${escapeHTML(item.text)}
                    </p>

                </div>

            `).join("")}

        </div>
    `;
}


/* =========================================================
   CARD
========================================================= */

function renderCards(filter = "all") {

    const filtered =
        filter === "all"
            ? experiences
            : experiences.filter(
                experience =>
                    experience.category === filter
            );


    catalogGrid.innerHTML =
        filtered.map(experience => `

            <article
                class="experience-card"
                data-id="${escapeHTML(experience.id)}"
                tabindex="0"
                role="button"
                aria-label="Scopri ${escapeHTML(experience.title)}"
            >

                <div class="experience-card-image">

                    <img
                        src="${escapeHTML(experience.image)}"
                        alt="${escapeHTML(experience.title)}"
                        loading="lazy"
                    >

                </div>


                <div class="experience-card-content">

                    <span class="experience-card-category">
                        ${escapeHTML(experience.categoryLabel)}
                    </span>


                    <h3 class="experience-card-title">
                        ${escapeHTML(experience.title)}
                    </h3>


                    <p class="experience-card-description">
                        ${escapeHTML(experience.short)}
                    </p>


                    <div class="experience-card-footer">

                        <div>

                            <div class="experience-price">
                                ${
                                    experience.priceType === "perPerson"
                                        ? `${escapeHTML(experience.price)} € / persona`
                                        : escapeHTML(experience.price)
                                }
                            </div>

                            <div class="experience-duration">
                                ${escapeHTML(experience.duration)}
                            </div>

                        </div>


                        <span class="experience-button">
                            Scopri
                        </span>

                    </div>

                </div>

            </article>

        `).join("");
}


/* =========================================================
   MODAL
========================================================= */

function openExperience(id) {

    const experience =
        experiences.find(
            item => item.id === id
        );


    if (!experience) {
        return;
    }


    const whatsappText =
        `Ciao, vorrei richiedere informazioni e disponibilità per l'esperienza "${experience.title}".`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;


    const isPizza =
        experience.id === "pizza";


    const modalPrice =
        isPizza
            ? "49 € / persona"
            : experience.price;


    modalContent.innerHTML = `

        <div class="modal-body">


            <!-- HEADER ESPERIENZA -->

            <div class="modal-hero">

                <div class="modal-hero-image">

                    <img
                        src="${escapeHTML(experience.image)}"
                        alt="${escapeHTML(experience.title)}"
                    >

                </div>


                <div class="modal-hero-info">

                    <span class="modal-category">
                        ${escapeHTML(experience.categoryLabel)}
                    </span>


                    <h2
                        class="modal-title"
                        id="modal-title"
                    >
                        ${escapeHTML(experience.title)}
                    </h2>


                    <p class="modal-short">
                        ${escapeHTML(experience.short)}
                    </p>


                    <div class="modal-meta">

                        <span class="modal-meta-item">
                            ${escapeHTML(experience.duration)}
                        </span>

                        <span class="modal-meta-item">
                            ${escapeHTML(modalPrice)}
                        </span>

                    </div>

                </div>

            </div>


            ${
                isPizza
                    ? `
                        <!-- PARTECIPANTI E PREZZO PIZZA -->

                        <section class="modal-section">

                            <h3>
                                Partecipanti
                            </h3>

                            <div
                                style="
                                    display:flex;
                                    align-items:center;
                                    justify-content:space-between;
                                    gap:20px;
                                    flex-wrap:wrap;
                                    padding:20px;
                                    border-radius:16px;
                                    background:#f7f5fb;
                                    border:1px solid rgba(90,60,140,0.10);
                                "
                            >

                                <div>

                                    <label
                                        for="pizza-participants"
                                        style="
                                            display:block;
                                            font-weight:600;
                                            margin-bottom:8px;
                                        "
                                    >
                                        Numero di partecipanti
                                    </label>

                                    <select
                                        id="pizza-participants"
                                        onchange="updatePizzaPrice(this.value)"
                                        style="
                                            min-width:180px;
                                            padding:12px 14px;
                                            border:1px solid #d8d3df;
                                            border-radius:10px;
                                            background:#fff;
                                            font-size:16px;
                                            cursor:pointer;
                                        "
                                    >
                                        <option value="1">1 persona</option>
                                        <option value="2">2 persone</option>
                                        <option value="3">3 persone</option>
                                        <option value="4">4 persone</option>
                                        <option value="5">5 persone</option>
                                        <option value="6">6 persone</option>
                                        <option value="7">7 persone</option>
                                        <option value="8">8 persone</option>
                                        <option value="9">9 persone</option>
                                        <option value="10">10 persone</option>
                                    </select>

                                </div>


                                <div
                                    style="
                                        text-align:right;
                                        min-width:160px;
                                    "
                                >

                                    <span
                                        style="
                                            display:block;
                                            font-size:13px;
                                            color:#777;
                                            margin-bottom:4px;
                                        "
                                    >
                                        Totale esperienza
                                    </span>

                                    <strong
                                        id="pizza-total-price"
                                        style="
                                            display:block;
                                            font-size:28px;
                                            line-height:1.1;
                                        "
                                    >
                                        49 €
                                    </strong>

                                    <span
                                        style="
                                            display:block;
                                            font-size:13px;
                                            color:#777;
                                            margin-top:4px;
                                        "
                                    >
                                        49 € per persona
                                    </span>

                                </div>

                            </div>

                        </section>
                    `
                    : ""
            }


            <!-- ITINERARIO -->

            <section class="modal-section">

                <h3>
                    Itinerario
                </h3>

                ${renderItinerary(
                    experience.itinerary
                )}

            </section>


            <!-- BREVE -->

            <section class="modal-section">

                <h3>
                    L'attività in breve
                </h3>

                <p>
                    ${escapeHTML(experience.short)}
                </p>

            </section>


            <!-- DESCRIZIONE -->

            <section class="modal-section">

                <h3>
                    Descrizione completa
                </h3>

                <p>
                    ${escapeHTML(experience.description)}
                </p>

            </section>


            <!-- INCLUSO / NON INCLUSO -->

            <section class="modal-section">

                <div class="detail-columns">


                    <div class="detail-box include">

                        <h3>
                            Cosa è incluso
                        </h3>

                        ${renderList(
                            experience.included
                        )}

                    </div>


                    <div class="detail-box exclude">

                        <h3>
                            Cosa non è incluso
                        </h3>

                        ${renderList(
                            experience.notIncluded
                        )}

                    </div>


                </div>

            </section>


            <!-- PUNTO DI INCONTRO -->

            <section class="modal-section">

                <div class="meeting-box">

                    <h3>
                        Punti di incontro
                    </h3>

                    <p>
                        ${escapeHTML(
                            experience.meetingPoint
                        )}
                    </p>

                </div>

            </section>


            <!-- NON AMMESSO -->

            <section class="modal-section">

                <h3>
                    Non ammesso
                </h3>

                ${renderList(
                    experience.notAllowed
                )}

            </section>


            <!-- INFORMAZIONI UTILI -->

            <section class="modal-section">

                <h3>
                    Informazioni utili
                </h3>

                ${renderList(
                    experience.useful
                )}

            </section>


            <!-- WHATSAPP -->

            <section class="modal-request">

                <h3>
                    Richiedi disponibilità
                </h3>


                <p>
                    La disponibilità viene verificata
                    personalmente. Inviaci una richiesta
                    indicando data e numero di partecipanti.
                </p>


                <a
                    class="whatsapp-button"
                    href="${whatsappURL}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Richiedi disponibilità su WhatsApp
                </a>

            </section>


        </div>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CHIUDI MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    modalContent.innerHTML =
        "";
}


/* =========================================================
   FILTRI
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const filter =
                button.dataset.filter;


            filterButtons.forEach(item => {

                const active =
                    item === button;


                item.classList.toggle(
                    "active",
                    active
                );


                item.setAttribute(
                    "aria-selected",
                    active
                        ? "true"
                        : "false"
                );

            });


            renderCards(filter);

        }
    );

});


/* =========================================================
   APERTURA CARD
========================================================= */

catalogGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".experience-card"
            );


        if (!card) {
            return;
        }


        openExperience(
            card.dataset.id
        );

    }
);


/* =========================================================
   APERTURA DA TASTIERA
========================================================= */

catalogGrid.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }


        const card =
            event.target.closest(
                ".experience-card"
            );


        if (!card) {
            return;
        }


        event.preventDefault();


        openExperience(
            card.dataset.id
        );

    }
);


/* =========================================================
   CHIUSURA MODAL
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.matches(
                "[data-close-modal]"
            )
        ) {
            closeModal();
        }

    }
);


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   AVVIO
========================================================= */

renderCards("all");
