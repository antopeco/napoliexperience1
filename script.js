const WHATSAPP_NUMBER = "393423512684";

const experiences = [
    {
        id: "pizza",
        title: "Lezione di Pizza Napoletana",
        category: "cooking",
        categoryLabel: "Corsi di Cucina",

        price: 49,
        priceType: "perPerson",

        duration: "2 ore",
        languages: "ITA / ENG / FRA / SPA",
        type: "Esperienza condivisa",

        images: [
            "images/pizza-napoletana-1.jpg.webp",
            "images/pizza-napoletana-2.jpg.webp",
            "images/pizza-napoletana-3.jpg.webp",
            "images/pizza-napoletana-4.jpg.webp",
            "images/pizza-napoletana-5.jpg.webp",
            "images/pizza-napoletana-6.jpg.webp"
        ],

        shortDescription:
            "Impara a preparare la vera pizza napoletana insieme a uno chef locale, dall'impasto alla cottura, e gusta il risultato finale.",

        description:
            "Questa esperienza ti porta nel cuore della tradizione della pizza napoletana attraverso una lezione pratica di circa due ore, guidata da uno chef locale all’interno di un laboratorio di cucina attrezzato. Durante il corso scoprirai come nasce una vera pizza napoletana, partendo dalla conoscenza degli ingredienti fondamentali e dalla preparazione dell’impasto. Lo chef ti accompagnerà passo dopo passo nella lavorazione manuale, spiegandoti le principali fasi necessarie per ottenere un impasto correttamente lavorato. Durante il riposo dell’impasto potrai gustare un antipasto tipico napoletano composto da bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva, accompagnato dalle bevande previste dall’esperienza. La lezione prosegue con la stesura dell’impasto e la preparazione della pizza, imparando a lavorare correttamente il disco e a preparare il condimento con pomodoro San Marzano, mozzarella, olio e basilico. La pizza preparata verrà cotta in un forno professionale e potrai gustare direttamente il risultato del tuo lavoro. Al termine dell’esperienza riceverai un diploma di pizzaiolo come ricordo della tua esperienza napoletana. Non è richiesta alcuna esperienza precedente in cucina: la lezione è pensata per essere semplice, pratica e adatta a chi viaggia da solo, alle coppie e alle famiglie.",

        preparation: [
            "Preparazione dell’impasto",
            "Preparazione del pomodoro San Marzano",
            "Stesura dell’impasto",
            "Condimento della pizza",
            "Cottura in forno professionale",
            "Degustazione finale"
        ],

        included: [
            "Lezione di pizza napoletana",
            "Chef locale",
            "Preparazione dell’impasto",
            "Preparazione del pomodoro San Marzano",
            "Antipasto tipico napoletano (bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva)",
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
            "NaplesBay Cooking Lab, Via delle Zite 30, 80139 Napoli, Italia",

        notAllowed: [
            "Non sono disponibili bevande alcoliche per i partecipanti di età inferiore ai 18 anni"
        ],

        usefulInfo: [
            "Accessibile con passeggino",
            "Animali domestici ammessi",
            "Non accessibile in sedia a rotelle",
            "Laboratorio situato nel centro storico",
            "Circa 5 minuti a piedi dalla fermata Duomo della metropolitana",
            "Cancellazione con rimborso completo fino ad almeno 24 ore prima"
        ]
    }
];


/* =========================================================
   FUNZIONI GENERALI
   ========================================================= */

function getRandomImage(images) {
    if (!images || images.length === 0) {
        return "";
    }

    const randomIndex = Math.floor(Math.random() * images.length);

    return images[randomIndex];
}


function formatPrice(value) {
    return `${value} €`;
}


function getPizzaTotal(participants) {
    return 49 * participants;
}


function formatDateItalian(dateValue) {
    if (!dateValue) {
        return "";
    }

    const parts = dateValue.split("-");

    if (parts.length !== 3) {
        return dateValue;
    }

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


/* =========================================================
   RENDER CATALOGO
   ========================================================= */

function renderExperiences(filter = "all") {

    const grid = document.getElementById("catalog-grid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    const filteredExperiences = experiences.filter((experience) => {

        if (filter === "all") {
            return true;
        }

        return experience.category === filter;
    });


    filteredExperiences.forEach((experience) => {

        const card = document.createElement("article");

        card.className = "experience-card";

        card.dataset.category = experience.category;
        card.dataset.id = experience.id;


        const randomImage = getRandomImage(experience.images);


        card.innerHTML = `

            <div class="experience-image-wrapper">

                <img
                    class="experience-image"
                    src="${randomImage}"
                    alt="${experience.title}"
                    loading="lazy"
                >

            </div>


            <div class="experience-card-content">

                <div class="experience-category">
                    ${experience.categoryLabel}
                </div>


                <h3 class="experience-title">
                    ${experience.title}
                </h3>


                <div class="experience-meta">

                    <span>
                        ${experience.duration}
                    </span>

                    <span>•</span>

                    <span>
                        ${experience.type}
                    </span>

                </div>


                <p class="experience-short-description">
                    ${experience.shortDescription}
                </p>


                <div class="experience-card-bottom">

                    <div class="experience-price">
                        ${formatPrice(experience.price)} / persona
                    </div>


                    <button
                        class="experience-button"
                        type="button"
                        onclick="openExperienceModal('${experience.id}')"
                    >
                        Scopri
                    </button>

                </div>

            </div>
        `;


        card.addEventListener("click", function(event) {

            if (event.target.closest("button")) {
                return;
            }

            openExperienceModal(experience.id);
        });


        grid.appendChild(card);

    });
}


/* =========================================================
   FILTRI
   ========================================================= */

function setupFilters() {

    const filterButtons =
        document.querySelectorAll(".filter-button");


    filterButtons.forEach((button) => {

        button.addEventListener("click", function() {

            const selectedFilter =
                button.dataset.filter;


            filterButtons.forEach((item) => {

                item.classList.remove("active");

                item.setAttribute(
                    "aria-selected",
                    "false"
                );

            });


            button.classList.add("active");

            button.setAttribute(
                "aria-selected",
                "true"
            );


            renderExperiences(selectedFilter);

        });

    });

}


/* =========================================================
   MODAL
   ========================================================= */

function openExperienceModal(id) {

    const experience =
        experiences.find(
            (item) => item.id === id
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


    modalContent.innerHTML = `

        <div class="modal-gallery">

            <div class="modal-gallery-main">

                <img
                    src="${experience.images[0]}"
                    alt="${experience.title}"
                >

            </div>


            <div class="modal-gallery-side">

                <div class="modal-gallery-small">

                    <img
                        src="${experience.images[1]}"
                        alt="${experience.title}"
                    >

                </div>


                <div class="modal-gallery-small">

                    <img
                        src="${experience.images[2]}"
                        alt="${experience.title}"
                    >

                </div>


                <div class="modal-gallery-small">

                    <img
                        src="${experience.images[3]}"
                        alt="${experience.title}"
                    >

                </div>


                <div class="modal-gallery-small">

                    <img
                        src="${experience.images[4]}"
                        alt="${experience.title}"
                    >

                </div>


                <div class="modal-gallery-wide">

                    <img
                        src="${experience.images[5]}"
                        alt="${experience.title}"
                    >

                </div>

            </div>

        </div>


        <div class="modal-header">

            <div class="experience-category">
                ${experience.categoryLabel}
            </div>


            <h2 id="modal-title">
                ${experience.title}
            </h2>


            <div class="modal-meta">

                <span>
                    ${experience.duration}
                </span>

                <span>•</span>

                <span>
                    ${experience.languages}
                </span>

                <span>•</span>

                <span>
                    ${experience.type}
                </span>

            </div>

        </div>


        <section class="modal-section booking-section">

            <div class="booking-grid">


                <div class="booking-field">

                    <label for="pizza-date">
                        Data
                    </label>

                    <input
                        type="date"
                        id="pizza-date"
                    >

                </div>


                <div class="booking-field">

                    <label for="pizza-participants">
                        Partecipanti
                    </label>

                    <select id="pizza-participants">

                        ${Array.from(
                            { length: 10 },
                            (_, index) => {

                                const number =
                                    index + 1;

                                return `
                                    <option value="${number}">
                                        ${number}
                                        ${number === 1
                                            ? "persona"
                                            : "persone"}
                                    </option>
                                `;
                            }
                        ).join("")}

                    </select>

                </div>


                <div class="booking-total">

                    <span>
                        Totale
                    </span>

                    <strong id="pizza-total-price">
                        49 €
                    </strong>

                </div>

            </div>


            <button
                type="button"
                class="whatsapp-button"
                onclick="requestPizzaAvailability()"
            >
                Richiedi disponibilità su WhatsApp
            </button>

        </section>


        <section class="modal-section">

            <h3>
                Preparazione
            </h3>


            <div class="experience-itinerary">

                ${experience.preparation.map(
                    (step, index) => `

                    <div class="itinerary-step">

                        <div class="itinerary-marker">
                            ${index + 1}
                        </div>


                        <div class="itinerary-content">

                            <span class="itinerary-label">
                                Procedura
                            </span>


                            <p>
                                ${step}
                            </p>

                        </div>

                    </div>

                `
                ).join("")}

            </div>

        </section>


        <section class="modal-section">

            <h3>
                L'attività in breve
            </h3>


            <p>
                ${experience.shortDescription}
            </p>

        </section>


        <section class="modal-section">

            <h3>
                Descrizione completa
            </h3>


            <p>
                ${experience.description}
            </p>

        </section>


        <section class="modal-section">

            <h3>
                Cosa è incluso
            </h3>


            <ul>

                ${experience.included.map(
                    (item) => `
                        <li>
                            ${item}
                        </li>
                    `
                ).join("")}

            </ul>

        </section>


        <section class="modal-section">

            <h3>
                Cosa non è incluso
            </h3>


            <ul>

                ${experience.notIncluded.map(
                    (item) => `
                        <li>
                            ${item}
                        </li>
                    `
                ).join("")}

            </ul>

        </section>


        <section class="modal-section">

            <h3>
                Punti di incontro
            </h3>


            <p>
                ${experience.meetingPoint}
            </p>

        </section>


        <section class="modal-section">

            <h3>
                Non ammesso
            </h3>


            <ul>

                ${experience.notAllowed.map(
                    (item) => `
                        <li>
                            ${item}
                        </li>
                    `
                ).join("")}

            </ul>

        </section>


        <section class="modal-section">

            <h3>
                Informazioni utili
            </h3>


            <ul>

                ${experience.usefulInfo.map(
                    (item) => `
                        <li>
                            ${item}
                        </li>
                    `
                ).join("")}

            </ul>

        </section>

    `;


    setupPizzaBooking();


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================================
   CHIUSURA MODAL
   ========================================================= */

function closeExperienceModal() {

    const modal =
        document.getElementById("experience-modal");


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================================
   EVENTI MODAL
   ========================================================= */

function setupModalEvents() {

    const modal =
        document.getElementById("experience-modal");


    if (!modal) {
        return;
    }


    const closeElements =
        modal.querySelectorAll(
            "[data-close-modal]"
        );


    closeElements.forEach((element) => {

        element.addEventListener(
            "click",
            closeExperienceModal
        );

    });

}


/* =========================================================
   PRENOTAZIONE PIZZA
   ========================================================= */

function setupPizzaBooking() {

    const dateInput =
        document.getElementById("pizza-date");


    const participantsSelect =
        document.getElementById(
            "pizza-participants"
        );


    if (!dateInput || !participantsSelect) {
        return;
    }


    setMinimumDate();


    participantsSelect.addEventListener(
        "change",
        updatePizzaPrice
    );


    updatePizzaPrice();

}


/* =========================================================
   DATA MINIMA
   ========================================================= */

function setMinimumDate() {

    const dateInput =
        document.getElementById("pizza-date");


    if (!dateInput) {
        return;
    }


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;
}


/* =========================================================
   PREZZO DINAMICO
   ========================================================= */

function updatePizzaPrice() {

    const participantsSelect =
        document.getElementById(
            "pizza-participants"
        );


    const totalElement =
        document.getElementById(
            "pizza-total-price"
        );


    if (!participantsSelect || !totalElement) {
        return;
    }


    const participants =
        parseInt(
            participantsSelect.value,
            10
        ) || 1;


    const total =
        getPizzaTotal(
            participants
        );


    totalElement.textContent =
        formatPrice(total);
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function requestPizzaAvailability() {

    const dateInput =
        document.getElementById(
            "pizza-date"
        );


    const participantsSelect =
        document.getElementById(
            "pizza-participants"
        );


    if (!dateInput || !participantsSelect) {
        return;
    }


    const selectedDate =
        dateInput.value;


    const participants =
        parseInt(
            participantsSelect.value,
            10
        ) || 1;


    if (!selectedDate) {

        alert(
            "Seleziona una data prima di richiedere la disponibilità."
        );

        return;
    }


    const total =
        getPizzaTotal(
            participants
        );


    const formattedDate =
        formatDateItalian(
            selectedDate
        );


    const message =
`Ciao, vorrei richiedere disponibilità per: Lezione di Pizza Napoletana

Data richiesta: ${formattedDate}

Partecipanti: ${participants}

Totale: ${total} €

Grazie.`;


    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappUrl,
        "_blank"
    );
}


/* =========================================================
   AVVIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderExperiences("all");

        setupFilters();

        setupModalEvents();

    }
);


/* =========================================================
   TASTO ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeExperienceModal();

        }

    }
);
