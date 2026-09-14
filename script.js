const WHATSAPP_NUMBER = "393423512684";

const experiences = [

    {
        id: "pizza",

        category: "cooking",
        categoryLabel: "Corso di cucina",

        title: "Lezione di Pizza Napoletana",

        image: "images/pizza-napoletana.jpg.jpg",

        price: "49 €",
        duration: "Circa 2 ore",

        short:
            "Impara a preparare una vera pizza napoletana seguendo le tecniche della tradizione.",

        description:
            "Un’esperienza pratica dedicata alla preparazione della pizza napoletana. Durante la lezione imparerai le principali fasi della lavorazione dell’impasto, della preparazione e della cottura, utilizzando ingredienti della tradizione napoletana.",

        itinerary: [
            {
                title: "Accoglienza",
                text: "Inizio dell’esperienza e introduzione alla lezione."
            },
            {
                title: "Preparazione dell’impasto",
                text: "Scoperta delle tecniche fondamentali per lavorare l’impasto."
            },
            {
                title: "Preparazione della pizza",
                text: "Stesura, condimento e preparazione della pizza napoletana."
            },
            {
                title: "Cottura e degustazione",
                text: "Cottura della pizza e degustazione finale."
            }
        ],

        included: [
            "Lezione pratica di pizza",
            "Ingredienti necessari alla preparazione",
            "Attrezzatura per la lezione",
            "Degustazione della pizza preparata"
        ],

        notIncluded: [
            "Trasferimenti da e verso il luogo dell’esperienza"
        ],

        meetingPoint:
            "Il punto di incontro viene indicato nella conferma della disponibilità.",

        notAllowed: [
            "Il consumo di alcolici è soggetto ai limiti previsti per i minori."
        ],

        useful: [
            "Esperienza adatta anche a chi non ha esperienza precedente.",
            "Si consiglia abbigliamento comodo."
        ]
    },


    {
        id: "capri",

        category: "boat",
        categoryLabel: "Tour in barca",

        title: "Capri da Napoli",

        image: "images/foto1.jpg.webp",

        price: "Richiedi preventivo",
        duration: "Circa 8 ore",

        short:
            "Partenza da Napoli, arrivo a Capri e giro in barca dell’isola con fermata alla Grotta Azzurra.",

        description:
            "Una giornata dedicata alla scoperta di Capri partendo da Napoli. L’esperienza combina il trasferimento in aliscafo con un giro in barca intorno all’isola e tempo libero per esplorare Capri e Anacapri in autonomia.",

        itinerary: [
            {
                title: "Molo Beverello",
                text: "Punto di partenza da Napoli."
            },
            {
                title: "Trasferimento in aliscafo",
                text: "Navigazione verso Capri."
            },
            {
                title: "Capri",
                text: "Tempo libero per esplorare l’isola."
            },
            {
                title: "Giro dell’isola in barca",
                text: "Tour in barca di circa 1 ora e 30 minuti con fermata alla Grotta Azzurra."
            },
            {
                title: "Rientro a Napoli",
                text: "Ritorno al Molo Beverello."
            }
        ],

        included: [
            "Aliscafo Napoli-Capri andata e ritorno",
            "Giro in barca dell’isola",
            "Fermata alla Grotta Azzurra",
            "Voucher digitale"
        ],

        notIncluded: [
            "Ingresso alla Grotta Azzurra",
            "Guida durante il tempo libero sull’isola"
        ],

        meetingPoint:
            "Molo Beverello, Napoli.",

        notAllowed: [
            "Eventuali limitazioni operative possono dipendere dalle condizioni del mare e dalle disposizioni degli operatori."
        ],

        useful: [
            "Il voucher viene utilizzato al porto.",
            "L’esperienza prevede tempo libero a Capri.",
            "La fermata alla Grotta Azzurra è soggetta alle condizioni operative e del mare."
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
            "Passeggiata gastronomica nel centro storico di Napoli con degustazione di specialità locali.",

        description:
            "Un percorso a piedi attraverso alcune delle zone più caratteristiche del centro di Napoli, accompagnato da diverse degustazioni della tradizione gastronomica napoletana.",

        itinerary: [
            {
                title: "Piazza Carità",
                text: "Punto di incontro e inizio del percorso."
            },
            {
                title: "Pignasecca",
                text: "Passeggiata nell’area del mercato e scoperta delle specialità locali."
            },
            {
                title: "Degustazioni",
                text: "Tappe gastronomiche con diverse specialità dello street food napoletano."
            },
            {
                title: "Tappa finale",
                text: "Conclusione dell’esperienza con degustazione dolce."
            }
        ],

        included: [
            "Sei degustazioni",
            "Welcome Spritz",
            "Tarallo",
            "Frittatina",
            "Polpette",
            "Cuoppo di fritto",
            "Dessert o gelato",
            "Limoncello o espresso",
            "Guida esperta"
        ],

        notIncluded: [
            "Eventuali consumazioni aggiuntive non indicate nel programma."
        ],

        meetingPoint:
            "Piazza Carità 12, davanti alla Parrocchia di San Liborio alla Carità.",

        notAllowed: [
            "Eventuali limitazioni alimentari devono essere comunicate in anticipo."
        ],

        useful: [
            "Indicare in anticipo allergie o esigenze alimentari.",
            "Si consigliano scarpe comode."
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
            "Una giornata alla scoperta di Pompei e del Vesuvio con trasferimento in minibus, ingressi e visite dedicate.",

        description:
            "L’esperienza permette di combinare in una sola giornata la visita del sito archeologico di Pompei con l’escursione sul Vesuvio, partendo da Napoli con trasferimento in minibus.",

        itinerary: [
            {
                title: "Pick-up a Napoli",
                text: "Partenza da uno dei punti di prelievo disponibili in città."
            },
            {
                title: "Trasferimento a Pompei",
                text: "Trasferimento in minibus verso il sito archeologico."
            },
            {
                title: "Pompei",
                text: "Visita del sito archeologico con guida."
            },
            {
                title: "Pausa pranzo",
                text: "Pausa dedicata al pranzo."
            },
            {
                title: "Vesuvio",
                text: "Trasferimento verso il Parco Nazionale del Vesuvio."
            },
            {
                title: "Crateri del Vesuvio",
                text: "Percorso verso il cratere e visita panoramica."
            },
            {
                title: "Rientro a Napoli",
                text: "Drop-off a Napoli."
            }
        ],

        included: [
            "Trasferimento in minibus",
            "Autista professionista",
            "Biglietti per Pompei",
            "Biglietti per il Vesuvio",
            "Visita guidata",
            "Pausa pranzo con pasta, pizza e bevande"
        ],

        notIncluded: [
            "Servizi o consumazioni aggiuntive non espressamente indicate."
        ],

        meetingPoint:
            "Sono disponibili diversi punti di prelievo a Napoli, indicati al momento della richiesta.",

        notAllowed: [
            "L’accesso al Vesuvio può essere soggetto alle disposizioni del Parco e alle condizioni operative."
        ],

        useful: [
            "Si consigliano scarpe comode.",
            "L’escursione sul Vesuvio prevede un percorso a piedi.",
            "L’esperienza può essere soggetta a modifiche per motivi di sicurezza o condizioni operative."
        ]
    }

];


const catalogGrid =
    document.getElementById("catalog-grid");

const modal =
    document.getElementById("experience-modal");

const modalContent =
    document.getElementById("modal-content");

const filterButtons =
    document.querySelectorAll(".filter-button");


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function renderList(items) {

    if (!items || !items.length) {

        return `
            <p>
                Informazione non disponibile.
            </p>
        `;
    }

    return `
        <ul>
            ${items.map(item => `
                <li>${escapeHTML(item)}</li>
            `).join("")}
        </ul>
    `;
}


function renderItinerary(items) {

    if (!items || !items.length) {

        return `
            <p>
                Itinerario non disponibile.
            </p>
        `;
    }

    return `
        <div class="itinerary">

            ${items.map((item, index) => `

                <div class="itinerary-stop">

                    <span class="itinerary-number">
                        Tappa ${String(index + 1).padStart(2, "0")}
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
                                ${escapeHTML(experience.price)}
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


    modalContent.innerHTML = `

        <div class="modal-body">

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
                            ${escapeHTML(experience.price)}
                        </span>

                    </div>

                </div>

            </div>


            <section class="modal-section">

                <h3>
                    Itinerario
                </h3>

                ${renderItinerary(experience.itinerary)}

            </section>


            <section class="modal-section">

                <h3>
                    L'attività in breve
                </h3>

                <p>
                    ${escapeHTML(experience.short)}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Descrizione completa
                </h3>

                <p>
                    ${escapeHTML(experience.description)}
                </p>

            </section>


            <section class="modal-section">

                <div class="detail-columns">

                    <div class="detail-box include">

                        <h3>
                            Cosa è incluso
                        </h3>

                        ${renderList(experience.included)}

                    </div>


                    <div class="detail-box exclude">

                        <h3>
                            Cosa non è incluso
                        </h3>

                        ${renderList(experience.notIncluded)}

                    </div>

                </div>

            </section>


            <section class="modal-section">

                <div class="meeting-box">

                    <h3>
                        Punti di incontro
                    </h3>

                    <p>
                        ${escapeHTML(experience.meetingPoint)}
                    </p>

                </div>

            </section>


            <section class="modal-section">

                <h3>
                    Non ammesso
                </h3>

                ${renderList(experience.notAllowed)}

            </section>


            <section class="modal-section">

                <h3>
                    Informazioni utili
                </h3>

                ${renderList(experience.useful)}

            </section>


            <section class="modal-request">

                <h3>
                    Richiedi disponibilità
                </h3>

                <p>
                    La disponibilità viene verificata personalmente.
                    Inviaci una richiesta su WhatsApp indicando data e numero di partecipanti.
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


    document.body.style.overflow = "hidden";
}


function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    modalContent.innerHTML = "";
}


/* FILTRI */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const filter =
                button.dataset.filter;


            filterButtons.forEach(
                item => {

                    const active =
                        item === button;

                    item.classList.toggle(
                        "active",
                        active
                    );

                    item.setAttribute(
                        "aria-selected",
                        active ? "true" : "false"
                    );

                }
            );


            renderCards(filter);

        }
    );

});


/* CARDS */

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


/* CHIUSURA MODAL */

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


/* AVVIO */

renderCards("all");
