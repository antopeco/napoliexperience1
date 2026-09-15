const WHATSAPP_NUMBER = "393423512684";

const experiences = [
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
                text:
                    "Inizio dell’esperienza presso il laboratorio di cucina e introduzione alla tradizione della pizza napoletana e agli ingredienti utilizzati."
            },
            {
                title: "Preparazione dell’impasto",
                text:
                    "Lavorazione manuale dell’impasto con la guida dello chef locale e spiegazione delle principali fasi della preparazione."
            },
            {
                title: "Antipasto e bevande",
                text:
                    "Durante il riposo dell’impasto viene servito un antipasto tipico napoletano con bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva, accompagnato dalle bevande incluse."
            },
            {
                title: "Stesura e condimento",
                text:
                    "Stesura dell’impasto e preparazione della pizza con pomodoro San Marzano, mozzarella, olio e basilico."
            },
            {
                title: "Cottura",
                text:
                    "La pizza viene cotta in un forno a legna professionale seguendo le indicazioni dello chef."
            },
            {
                title: "Degustazione e diploma",
                text:
                    "Degustazione della pizza preparata e consegna del diploma di pizzaiolo al termine della lezione."
            }
        ],

        included: [
            "Lezione di pizza napoletana",
            "Chef locale",
            "Preparazione dell’impasto",
            "Preparazione del pomodoro San Marzano",
            "Antipasto tipico napoletano: bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva",
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
            "Durata dell’esperienza: circa 2 ore.",
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
    }
];


/* =========================================================
   NUMERO PARTECIPANTI E PREZZO
========================================================= */

function getPizzaTotal(participants) {
    const quantity = Math.max(
        1,
        parseInt(participants, 10) || 1
    );

    return 49 * quantity;
}


function updatePizzaPrice(participants) {
    const total = getPizzaTotal(participants);

    const totalElement =
        document.getElementById("pizza-total-price");

    if (totalElement) {
        totalElement.textContent = `${total} €`;
    }
}


/* =========================================================
   ESCAPE HTML
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
   LISTE
========================================================= */

function renderList(items) {
    if (!items || !items.length) {
        return "";
    }

    return `
        <ul>
            ${items.map(item => `
                <li>${escapeHTML(item)}</li>
            `).join("")}
        </ul>
    `;
}


/* =========================================================
   PREPARAZIONE
========================================================= */

function renderItinerary(items) {
    if (!items || !items.length) {
        return `
            <p>
                Preparazione non disponibile.
            </p>
        `;
    }

    return `
        <div class="itinerary">

            ${items.map((item, index) => `
                
                <div class="itinerary-stop">

                    <span class="itinerary-number">
                        PROCEDURA ${String(index + 1).padStart(2, "0")}
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
   RENDER CARD
========================================================= */

function renderCards() {

    const catalogGrid =
        document.getElementById("catalog-grid");

    if (!catalogGrid) {
        return;
    }

    catalogGrid.innerHTML = experiences.map(experience => `

        <article
            class="experience-card"
            data-id="${escapeHTML(experience.id)}"
            tabindex="0"
            role="button"
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
                            49 € / persona
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
   APRI ESPERIENZA
========================================================= */

function openExperience(id) {

    const experience =
        experiences.find(
            item => item.id === id
        );

    if (!experience) {
        return;
    }

    const modal =
        document.getElementById("experience-modal");

    const modalContent =
        document.getElementById("modal-content");

    if (!modal || !modalContent) {
        return;
    }


    const whatsappMessage =
        `Ciao, vorrei richiedere informazioni e disponibilità per l'esperienza "${experience.title}".`;

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


    modalContent.innerHTML = `

        <div class="modal-body">


            <!-- HERO MODAL -->

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
                            49 € / persona
                        </span>

                    </div>

                </div>

            </div>


            <!-- PARTECIPANTI -->

            <section class="modal-section">

                <h3>
                    Partecipanti
                </h3>


                <div class="pizza-price-box">

                    <div>

                        <label for="pizza-participants">
                            Numero di partecipanti
                        </label>


                        <select
                            id="pizza-participants"
                            onchange="updatePizzaPrice(this.value)"
                        >

                            <option value="1">
                                1 persona
                            </option>

                            <option value="2">
                                2 persone
                            </option>

                            <option value="3">
                                3 persone
                            </option>

                            <option value="4">
                                4 persone
                            </option>

                            <option value="5">
                                5 persone
                            </option>

                            <option value="6">
                                6 persone
                            </option>

                            <option value="7">
                                7 persone
                            </option>

                            <option value="8">
                                8 persone
                            </option>

                            <option value="9">
                                9 persone
                            </option>

                            <option value="10">
                                10 persone
                            </option>

                        </select>

                    </div>


                    <div class="pizza-total">

                        <span>
                            Totale
                        </span>


                        <strong id="pizza-total-price">
                            49 €
                        </strong>


                        <small>
                            49 € per persona
                        </small>

                    </div>

                </div>

            </section>


            <!-- PREPARAZIONE -->

            <section class="modal-section">

                <h3>
                    Preparazione
                </h3>

                ${renderItinerary(
                    experience.itinerary
                )}

            </section>


            <!-- ATTIVITÀ IN BREVE -->

            <section class="modal-section">

                <h3>
                    L'attività in breve
                </h3>

                <p>
                    ${escapeHTML(experience.short)}
                </p>

            </section>


            <!-- DESCRIZIONE COMPLETA -->

            <section class="modal-section">

                <h3>
                    Descrizione completa
                </h3>

                <p>
                    ${escapeHTML(experience.description)}
                </p>

            </section>


            <!-- COSA È INCLUSO -->

            <section class="modal-section">

                <h3>
                    Cosa è incluso
                </h3>

                ${renderList(
                    experience.included
                )}

            </section>


            <!-- COSA NON È INCLUSO -->

            <section class="modal-section">

                <h3>
                    Cosa non è incluso
                </h3>

                ${renderList(
                    experience.notIncluded
                )}

            </section>


            <!-- PUNTO DI INCONTRO -->

            <section class="modal-section">

                <h3>
                    Punti di incontro
                </h3>

                <p>
                    ${escapeHTML(
                        experience.meetingPoint
                    )}
                </p>

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
                    Invia una richiesta indicando la data
                    desiderata e il numero di partecipanti.
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

    const modal =
        document.getElementById("experience-modal");

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* =========================================================
   CLICK SULLE CARD
========================================================= */

document.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".experience-card"
            );

        if (card) {

            openExperience(
                card.dataset.id
            );

            return;
        }


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
   TASTIERA
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const card =
            event.target.closest(
                ".experience-card"
            );


        if (
            card &&
            (
                event.key === "Enter" ||
                event.key === " "
            )
        ) {

            event.preventDefault();

            openExperience(
                card.dataset.id
            );

            return;
        }


        if (event.key === "Escape") {

            const modal =
                document.getElementById(
                    "experience-modal"
                );


            if (
                modal &&
                modal.classList.contains("open")
            ) {

                closeModal();

            }

        }

    }
);


/* =========================================================
   AVVIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCards();

    }
);
