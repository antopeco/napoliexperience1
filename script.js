/* =========================================================
   VIVERE NAPOLI
   SCRIPT PRINCIPALE
   ========================================================= */

const WHATSAPP_NUMBER = "393423512684";

const experiences = [

    {
        id: "pizza",
        category: "cooking",
        categoryLabel: "Corsi di Cucina",
        title: "Corso di cucina della pizza",
        shortDescription:
            "Scopri l'arte della pizza napoletana attraverso un'esperienza pratica con preparazione e degustazione finale.",
        image: "images/pizza-napoletana.jpg.jpg",
        price: "€49",
        duration: "2 ore",

        itinerary: [
            "Accoglienza e introduzione alla tradizione della pizza napoletana",
            "Preparazione dell'impasto",
            "Lavorazione e stesura della pizza",
            "Condimento",
            "Cottura",
            "Degustazione finale"
        ],

        brief:
            "Un'esperienza pratica dedicata alla pizza napoletana, pensata per imparare le principali tecniche di preparazione e vivere direttamente la tradizione gastronomica partenopea.",

        description:
            "Durante il corso i partecipanti vengono accompagnati nella preparazione della pizza napoletana, dalla lavorazione dell'impasto fino alla cottura e alla degustazione finale.",

        included: [
            "Corso pratico di preparazione della pizza",
            "Ingredienti necessari",
            "Attrezzatura per la preparazione",
            "Degustazione finale",
            "Assistenza durante l'esperienza"
        ],

        meetingPoint:
            "Il punto di incontro viene comunicato al momento della richiesta di disponibilità.",

        notAllowed: [],

        usefulInfo: [
            "Esperienza adatta anche ai principianti",
            "Eventuali esigenze alimentari devono essere comunicate in anticipo",
            "Si consiglia un abbigliamento comodo"
        ]
    },

    {
        id: "fresh-pasta-gelato",
        category: "cooking",
        categoryLabel: "Corsi di Cucina",
        title: "Corso di pasta fresca e gelato",
        shortDescription:
            "Prepara pasta fresca e gelato accompagnato da uno chef locale.",
        image: null,
        price: "Richiedi preventivo",
        duration: "3 ore",

        itinerary: [
            "Accoglienza",
            "Preparazione della pasta fresca",
            "Preparazione di fettuccine e ravioli",
            "Preparazione del gelato",
            "Degustazione finale"
        ],

        brief:
            "Un corso pratico dedicato alla preparazione della pasta fresca e del gelato con l'assistenza di uno chef locale.",

        description:
            "L'esperienza permette di imparare alcune preparazioni della tradizione italiana durante un laboratorio di cucina dedicato alla pasta fresca e al gelato.",

        included: [
            "Lezione di cucina",
            "Chef locale",
            "Preparazione della pasta fresca",
            "Preparazione di fettuccine e ravioli",
            "Preparazione del gelato",
            "Ingredienti",
            "Attrezzatura",
            "Grembiule e cappello da chef",
            "Degustazione",
            "Bevanda",
            "Diploma dello chef"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Alcolici ai minori di 18 anni"
        ],

        usefulInfo: [
            "Adatto anche ai principianti",
            "Nel centro storico di Napoli",
            "A pochi minuti dalla metropolitana Duomo",
            "Eventuali esigenze alimentari devono essere comunicate in anticipo",
            "Esperienza non adatta a persone in sedia a rotelle"
        ]
    },

    {
        id: "fettuccine-ravioli",
        category: "cooking",
        categoryLabel: "Corsi di Cucina",
        title: "Fettuccine Alfredo e ravioli",
        shortDescription:
            "Impara a preparare fettuccine e ravioli con antipasto e bevanda inclusi.",
        image: null,
        price: "Richiedi preventivo",
        duration: "2 ore e 30 minuti",

        itinerary: [
            "Introduzione alla cucina",
            "Preparazione delle fettuccine",
            "Preparazione dei ravioli",
            "Preparazione dei condimenti",
            "Degustazione"
        ],

        brief:
            "Un laboratorio pratico dedicato alla preparazione della pasta fresca.",

        description:
            "Durante il corso i partecipanti imparano le tecniche fondamentali per preparare la pasta fresca e realizzano fettuccine e ravioli.",

        included: [
            "Lezione di cucina",
            "Chef locale",
            "Ingredienti",
            "Fettuccine Alfredo",
            "Ravioli con salsa di pomodoro",
            "Antipasto locale",
            "Bevanda",
            "Limoncello",
            "Attrezzatura",
            "Grembiule e cappello da chef",
            "Diploma"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Alcolici ai minori di 18 anni"
        ],

        usefulInfo: [
            "Adatto ai principianti",
            "Nel centro storico di Napoli",
            "A pochi minuti dalla metropolitana Duomo",
            "Passeggino ammesso",
            "Esperienza non adatta a persone in sedia a rotelle"
        ]
    },

    {
        id: "private-pizza-tiramisu",
        category: "private",
        categoryLabel: "Tour Privati",
        title: "Pizza e tiramisù – esperienza privata",
        shortDescription:
            "Un laboratorio privato dedicato alla preparazione della pizza e del tiramisù.",
        image: null,
        price: "€85",
        duration: "3 ore",

        itinerary: [
            "Accoglienza",
            "Preparazione della pizza",
            "Preparazione del tiramisù",
            "Degustazione finale"
        ],

        brief:
            "Un'esperienza privata che combina la preparazione della pizza napoletana con quella del tiramisù.",

        description:
            "I partecipanti vengono accompagnati nella preparazione della pizza e del tiramisù, con degustazione finale delle preparazioni.",

        included: [
            "Esperienza privata",
            "Preparazione della pizza",
            "Preparazione del tiramisù",
            "Chef locali",
            "Ingredienti",
            "Antipasto locale",
            "Bevande",
            "Limoncello",
            "Grembiule e cappello da chef"
        ],

        meetingPoint:
            "Via delle Zite 30, 80139 Napoli.",

        notAllowed: [
            "Alcolici ai minori di 18 anni"
        ],

        usefulInfo: [
            "Passeggino ammesso",
            "Il trasporto non è incluso",
            "Esperienza non adatta a persone in sedia a rotelle"
        ]
    },

    {
        id: "street-food",
        category: "walking",
        categoryLabel: "Tour a Piedi",
        title: "Street Food Tour di Napoli",
        shortDescription:
            "Un percorso nel centro storico per scoprire i sapori più autentici dello street food napoletano.",
        image: null,
        price: "Richiedi preventivo",
        duration: "2 ore",

        itinerary: [
            "Piazza Carità",
            "Zona Pignasecca",
            "Tappe gastronomiche nel centro storico",
            "Degustazione di specialità napoletane"
        ],

        brief:
            "Un tour a piedi nel centro storico di Napoli con diverse degustazioni dedicate alla tradizione gastronomica partenopea.",

        description:
            "Il percorso accompagna i partecipanti attraverso alcune delle zone più caratteristiche del centro storico, con diverse tappe dedicate alle specialità locali.",

        included: [
            "Sei degustazioni",
            "Spritz di benvenuto",
            "Tarallo",
            "Frittatina di pasta",
            "Polpette al sugo",
            "Cuoppo di fritto",
            "Dessert o gelato",
            "Limoncello o espresso",
            "Guida esperta",
            "Passeggiata guidata"
        ],

        meetingPoint:
            "Piazza Carità 12, davanti alla Parrocchia di San Liborio alla Carità.",

        notAllowed: [],

        usefulInfo: [
            "Allergie e intolleranze devono essere comunicate in anticipo",
            "Disponibili opzioni vegetariane",
            "Si consigliano scarpe comode"
        ]
    },

    {
        id: "panoramic-naples",
        category: "walking",
        categoryLabel: "Tour a Piedi",
        title: "Napoli panoramica – Vomero e Petraio",
        shortDescription:
            "Scopri Napoli dall'alto attraverso Vomero, Petraio e alcuni dei punti panoramici più suggestivi.",
        image: null,
        price: "Richiedi preventivo",
        duration: "2 ore",

        itinerary: [
            "Vomero",
            "Funicolare",
            "Petraio",
            "Corso Vittorio Emanuele",
            "Via Pignasecca"
        ],

        brief:
            "Una passeggiata panoramica attraverso alcuni dei punti più caratteristici della parte alta e centrale di Napoli.",

        description:
            "L'esperienza parte dalla zona del Vomero e prosegue attraverso il Petraio e altri punti panoramici.",

        included: [
            "Guida",
            "Biglietto della funicolare",
            "Materiale visivo"
        ],

        meetingPoint:
            "Pasticceria Galiero – Augusteo.",

        notAllowed: [
            "Alcolici",
            "Droghe"
        ],

        usefulInfo: [
            "Si consigliano scarpe comode",
            "Indossare abbigliamento adatto alla passeggiata",
            "Gli arrivi in ritardo e i no-show non sono rimborsabili"
        ]
    },

    {
        id: "private-walking",
        category: "private",
        categoryLabel: "Tour Privati",
        title: "Tour privato del centro storico di Napoli",
        shortDescription:
            "Un tour privato alla scoperta del centro storico, delle chiese e delle vie simbolo di Napoli.",
        image: null,
        price: "€180",
        duration: "2 ore",

        itinerary: [
            "Piazza del Gesù Nuovo",
            "Chiesa del Gesù Nuovo",
            "Santa Chiara",
            "Spaccanapoli",
            "Piazza San Domenico Maggiore",
            "Duomo di Napoli",
            "Girolamini",
            "San Biagio dei Librai",
            "San Gregorio Armeno",
            "Via dei Tribunali"
        ],

        brief:
            "Un percorso privato nel cuore del centro storico di Napoli.",

        description:
            "Il tour accompagna i partecipanti attraverso alcune delle principali attrazioni del centro storico.",

        included: [
            "Guida",
            "Ingressi alle chiese previste dal percorso"
        ],

        meetingPoint:
            "Piazza del Gesù, presso l'obelisco.",

        notAllowed: [
            "Alcolici",
            "Droghe"
        ],

        usefulInfo: [
            "Si consigliano scarpe comode",
            "Indossare abbigliamento adatto alla passeggiata",
            "Gli arrivi in ritardo e i no-show non sono rimborsabili"
        ]
    },

    {
        id: "capri-day-trip",
        category: "boat",
        categoryLabel: "Tour in Barca",
        title: "Tour in barca a Capri",
        shortDescription:
            "Una giornata dedicata alla scoperta dell'isola e delle sue coste.",
        image: null,
        price: "Richiedi preventivo",
        duration: "Giornata intera",

        itinerary: [
            "Partenza",
            "Navigazione verso Capri",
            "Scoperta della costa dell'isola",
            "Tempo dedicato all'esperienza",
            "Rientro"
        ],

        brief:
            "Un'esperienza in barca dedicata alla scoperta dell'isola di Capri e del suo paesaggio costiero.",

        description:
            "La giornata permette di vivere Capri dal mare e di ammirare le sue coste e i suoi panorami.",

        included: [
            "Esperienza in barca",
            "Navigazione verso Capri"
        ],

        meetingPoint:
            "Il punto di incontro viene comunicato al momento della richiesta di disponibilità.",

        notAllowed: [],

        usefulInfo: [
            "L'esperienza è soggetta alle condizioni del mare",
            "Si consiglia protezione solare",
            "Si consiglia abbigliamento comodo"
        ]
    },

    {
        id: "amalfi-minibus",
        category: "minibus",
        categoryLabel: "Tour in Minibus",
        title: "Tour in minivan",
        shortDescription:
            "Scopri alcuni dei luoghi più belli della Campania accompagnato durante l'esperienza.",
        image: null,
        price: "Richiedi preventivo",
        duration: "Variabile",

        itinerary: [
            "Partenza da Napoli",
            "Percorso attraverso la Campania",
            "Visita delle località previste",
            "Rientro"
        ],

        brief:
            "Un'esperienza organizzata in minivan per scoprire alcune delle destinazioni più belle della Campania.",

        description:
            "Il tour permette di visitare più località della Campania con un trasferimento organizzato in minivan.",

        included: [
            "Trasporto in minivan",
            "Accompagnamento durante l'esperienza"
        ],

        meetingPoint:
            "Il punto di incontro viene comunicato al momento della richiesta di disponibilità.",

        notAllowed: [],

        usefulInfo: [
            "L'itinerario può variare in base all'esperienza scelta",
            "La disponibilità deve essere verificata prima della conferma"
        ]
    },

    {
        id: "private-pompeii-wine",
        category: "private",
        categoryLabel: "Tour Privati",
        title: "Pompei privata con degustazione di vini",
        shortDescription:
            "Visita privata di Pompei combinata con una degustazione di vini alle pendici del Vesuvio.",
        image: null,
        price: "€380",
        duration: "7 ore",

        itinerary: [
            "Pick-up a Napoli",
            "Visita guidata di Pompei",
            "Trasferimento in cantina",
            "Degustazione di vini",
            "Pranzo leggero",
            "Rientro"
        ],

        brief:
            "Un'esperienza privata che combina la visita archeologica di Pompei con una degustazione di vini.",

        description:
            "Il tour prevede un trasferimento privato da Napoli, una visita guidata di Pompei e una successiva esperienza in cantina.",

        included: [
            "Autista privato",
            "Guida autorizzata",
            "Accesso prioritario a Pompei",
            "Visita guidata",
            "Visita in cantina",
            "Degustazione di 4-5 vini locali",
            "Pranzo leggero",
            "Pick-up e rientro"
        ],

        meetingPoint:
            "Pick-up presso hotel, porto o punto concordato a Napoli.",

        notAllowed: [],

        usefulInfo: [
            "Passeggino ammesso",
            "Animali di servizio ammessi",
            "Non adatto a persone in sedia a rotelle"
        ]
    },

    {
        id: "private-panoramic",
        category: "private",
        categoryLabel: "Tour Privati",
        title: "Tour panoramico privato di Napoli",
        shortDescription:
            "Un'esperienza privata tra Vomero, Petraio e centro storico visto dall'alto.",
        image: null,
        price: "€130",
        duration: "2 ore",

        itinerary: [
            "Vomero",
            "Funicolare",
            "Petraio",
            "Corso Vittorio Emanuele",
            "Via Pignasecca"
        ],

        brief:
            "Tour privato dedicato ai panorami di Napoli.",

        description:
            "Il percorso conduce dalla parte alta di Napoli verso il centro attraverso il Petraio e altri punti panoramici.",

        included: [
            "Guida",
            "Biglietto della funicolare",
            "Materiale visivo"
        ],

        meetingPoint:
            "Pasticceria Galiero – Augusteo.",

        notAllowed: [
            "Alcolici",
            "Droghe"
        ],

        usefulInfo: [
            "Scarpe comode consigliate",
            "Abbigliamento adatto alla passeggiata",
            "Gli arrivi in ritardo e i no-show non sono rimborsabili"
        ]
    },

    {
        id: "bay-of-naples",
        category: "multi-day",
        categoryLabel: "Tour Multi-Day",
        title: "Luxury Experience – Baia di Napoli",
        shortDescription:
            "Un itinerario di 4 giorni alla scoperta di Napoli, Pompei, Vesuvio e Costiera Amalfitana.",
        image: null,
        price: "Da €2.260",
        duration: "4 giorni / 3 notti",

        itinerary: [
            "Giorno 1 – Arrivo a Napoli e street food",
            "Giorno 2 – Pompei, Vesuvio e degustazione",
            "Giorno 3 – Tour privato in barca lungo la Costiera Amalfitana",
            "Giorno 4 – Partenza"
        ],

        brief:
            "Un pacchetto di più giorni dedicato alla scoperta della Baia di Napoli.",

        description:
            "L'itinerario combina soggiorno, trasferimenti privati, esperienze gastronomiche, archeologia, vino e una giornata in barca.",

        included: [
            "3 pernottamenti",
            "Sistemazione 5 stelle o equivalente",
            "Trasferimenti privati",
            "Esperienze previste dall'itinerario",
            "Visita di Pompei",
            "Esperienza sul Vesuvio",
            "Degustazione",
            "Tour privato in barca"
        ],

        meetingPoint:
            "Pick-up e trasferimenti organizzati in base all'itinerario.",

        notAllowed: [],

        usefulInfo: [
            "L'itinerario può essere modificato in base alle condizioni meteo",
            "Le attività in mare sono soggette alle condizioni del mare",
            "Il prezzo indicato è un prezzo di partenza"
        ]
    },

    {
        id: "naples-sorrento-islands",
        category: "multi-day",
        categoryLabel: "Tour Multi-Day",
        title: "Napoli, Sorrento e le isole",
        shortDescription:
            "Un itinerario di 11 giorni tra Napoli, Sorrento, Capri, Ischia, Procida, Pompei e Costiera Amalfitana.",
        image: null,
        price: "Da €2.585",
        duration: "11 giorni / 10 notti",

        itinerary: [
            "Napoli",
            "Procida",
            "Pompei e Vesuvio",
            "Ischia",
            "Sorrento",
            "Costiera Amalfitana",
            "Capri",
            "Path of Gods",
            "Esperienze gastronomiche"
        ],

        brief:
            "Un itinerario esperienziale di più giorni che combina cultura, mare, gastronomia, archeologia e natura.",

        description:
            "Il programma comprende diverse esperienze tra Napoli e Sorrento, con escursioni in barca, visite archeologiche, attività gastronomiche e giornate dedicate alle isole.",

        included: [
            "10 pernottamenti",
            "Esperienze previste dall'itinerario",
            "Attività gastronomiche",
            "Escursioni in barca",
            "Visite culturali e naturalistiche"
        ],

        meetingPoint:
            "I punti di incontro vengono comunicati in base alle singole attività.",

        notAllowed: [],

        usefulInfo: [
            "L'itinerario è soggetto alla disponibilità delle attività",
            "Le attività in barca dipendono dalle condizioni del mare",
            "Il programma può subire modifiche in base alle condizioni meteo"
        ]
    }
];


/* =========================================================
   ELEMENTI
   ========================================================= */

const catalogGrid = document.getElementById("catalog-grid");
const modal = document.getElementById("experience-modal");
const modalContent = document.getElementById("modal-content");


/* =========================================================
   UTILITY
   ========================================================= */

function escapeHtml(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function renderList(items) {

    if (!items || !items.length) {
        return `<p>Nessuna informazione specificata.</p>`;
    }

    return `
        <ul>
            ${items.map(item => `
                <li>${escapeHtml(item)}</li>
            `).join("")}
        </ul>
    `;
}


/* =========================================================
   IMMAGINE CARD
   ========================================================= */

function getCardImage(experience) {

    if (experience.image) {

        return `
            <div class="experience-card-image">
                <img
                    src="${escapeHtml(experience.image)}"
                    alt="${escapeHtml(experience.title)}"
                    loading="lazy"
                >
            </div>
        `;
    }

    return `
        <div class="experience-card-image image-placeholder">
            <span>${escapeHtml(experience.categoryLabel)}</span>
        </div>
    `;
}


/* =========================================================
   CARD
   ========================================================= */

function createExperienceCard(experience) {

    return `
        <article
            class="experience-card"
            data-experience-id="${escapeHtml(experience.id)}"
            tabindex="0"
            role="button"
            aria-label="Apri ${escapeHtml(experience.title)}"
        >

            ${getCardImage(experience)}

            <div class="experience-card-content">

                <span class="card-category">
                    ${escapeHtml(experience.categoryLabel)}
                </span>

                <h3>
                    ${escapeHtml(experience.title)}
                </h3>

                <p class="experience-card-description">
                    ${escapeHtml(experience.shortDescription)}
                </p>

                <div class="experience-meta">

                    <span class="experience-duration">
                        ${escapeHtml(experience.duration)}
                    </span>

                    <span class="experience-price">
                        ${escapeHtml(experience.price)}
                    </span>

                </div>

                <button
                    type="button"
                    class="card-action"
                    data-open-experience="${escapeHtml(experience.id)}"
                >
                    Scopri
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   CATALOGO
   ========================================================= */

function renderCatalog(filter = "all") {

    if (!catalogGrid) {
        return;
    }

    const filtered = experiences.filter(experience => {

        if (filter === "all") {
            return true;
        }

        return experience.category === filter;
    });


    if (!filtered.length) {

        catalogGrid.innerHTML = `
            <div class="empty-catalog">
                Nessuna esperienza disponibile in questa categoria.
            </div>
        `;

        return;
    }


    catalogGrid.innerHTML = filtered
        .map(createExperienceCard)
        .join("");
}


/* =========================================================
   MODAL
   ========================================================= */

function openExperience(id) {

    const experience = experiences.find(
        item => item.id === id
    );

    if (!experience || !modal || !modalContent) {
        return;
    }


    const image = experience.image
        ? `
            <div class="experience-card-image">
                <img
                    src="${escapeHtml(experience.image)}"
                    alt="${escapeHtml(experience.title)}"
                >
            </div>
        `
        : "";


    modalContent.innerHTML = `

        ${image}

        <div class="modal-body">

            <span class="modal-category">
                ${escapeHtml(experience.categoryLabel)}
            </span>

            <h2 class="modal-title" id="modal-title">
                ${escapeHtml(experience.title)}
            </h2>

            <p class="modal-summary">
                ${escapeHtml(experience.shortDescription)}
            </p>

            <div class="experience-meta">

                <span class="experience-duration">
                    ${escapeHtml(experience.duration)}
                </span>

                <span class="experience-price">
                    ${escapeHtml(experience.price)}
                </span>

            </div>


            <section class="modal-section">
                <h3>Itinerario</h3>
                ${renderList(experience.itinerary)}
            </section>


            <section class="modal-section">
                <h3>L'attività in breve</h3>
                <p>
                    ${escapeHtml(experience.brief)}
                </p>
            </section>


            <section class="modal-section">
                <h3>Descrizione completa</h3>
                <p>
                    ${escapeHtml(experience.description)}
                </p>
            </section>


            <section class="modal-section">
                <h3>Cosa è incluso</h3>
                ${renderList(experience.included)}
            </section>


            <section class="modal-section">
                <h3>Punti di incontro</h3>
                <p>
                    ${escapeHtml(experience.meetingPoint)}
                </p>
            </section>


            <section class="modal-section">
                <h3>Non ammesso</h3>
                ${renderList(experience.notAllowed)}
            </section>


            <section class="modal-section">
                <h3>Informazioni utili</h3>
                ${renderList(experience.usefulInfo)}
            </section>


            <div class="modal-booking">

                <h3>
                    Richiedi disponibilità
                </h3>

                <p class="quote-note">
                    La disponibilità viene verificata personalmente prima della conferma.
                </p>

                <a
                    class="whatsapp-button"
                    href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Ciao, vorrei verificare la disponibilità per l'esperienza "${experience.title}".`
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Richiedi disponibilità su WhatsApp
                </a>

            </div>

        </div>
    `;


    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CHIUDI MODAL
   ========================================================= */

function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* =========================================================
   CLICK
   ========================================================= */

document.addEventListener("click", event => {

    const openButton = event.target.closest(
        "[data-open-experience]"
    );

    if (openButton) {

        event.preventDefault();
        event.stopPropagation();

        openExperience(
            openButton.getAttribute("data-open-experience")
        );

        return;
    }


    const featuredCard = event.target.closest(
        ".featured-card[data-featured-id]"
    );

    if (
        featuredCard &&
        !event.target.closest("button")
    ) {

        event.preventDefault();

        openExperience(
            featuredCard.getAttribute("data-featured-id")
        );

        return;
    }


    const experienceCard = event.target.closest(
        ".experience-card[data-experience-id]"
    );

    if (
        experienceCard &&
        !event.target.closest("button")
    ) {

        event.preventDefault();

        openExperience(
            experienceCard.getAttribute("data-experience-id")
        );

        return;
    }


    const closeButton = event.target.closest(
        "[data-close-modal]"
    );

    if (closeButton) {

        event.preventDefault();

        closeModal();

        return;
    }


    const filterButton = event.target.closest(
        ".filter-button"
    );

    if (filterButton) {

        event.preventDefault();

        document
            .querySelectorAll(".filter-button")
            .forEach(button => {
                button.classList.remove("active");
            });

        filterButton.classList.add("active");

        renderCatalog(
            filterButton.getAttribute("data-filter")
        );

        return;
    }

});


/* =========================================================
   TASTIERA
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
        return;
    }


    const card = event.target.closest(
        ".experience-card[data-experience-id], .featured-card[data-featured-id]"
    );

    if (
        card &&
        (event.key === "Enter" || event.key === " ")
    ) {

        event.preventDefault();

        const id =
            card.getAttribute("data-experience-id") ||
            card.getAttribute("data-featured-id");

        openExperience(id);
    }

});


/* =========================================================
   INIZIALIZZAZIONE
   ========================================================= */

renderCatalog("all");

console.log(
    "Vivere Napoli: sito inizializzato correttamente."
);