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
            `Questa esperienza ti porta nel cuore della tradizione della pizza napoletana attraverso una lezione pratica di circa due ore, guidata da uno chef locale all’interno di un laboratorio di cucina attrezzato.

Durante il corso scoprirai come nasce una vera pizza napoletana, partendo dalla conoscenza degli ingredienti fondamentali e dalla preparazione dell’impasto.

Lo chef ti accompagnerà passo dopo passo nella lavorazione manuale, spiegandoti le principali fasi necessarie per ottenere un impasto correttamente lavorato.

Durante il riposo dell’impasto potrai gustare un antipasto tipico napoletano composto da bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva, accompagnato dalle bevande previste dall’esperienza.

La lezione prosegue con la stesura dell’impasto e la preparazione della pizza, imparando a lavorare correttamente il disco e a preparare il condimento con pomodoro San Marzano, mozzarella, olio e basilico.

La pizza preparata verrà cotta in un forno professionale e potrai gustare direttamente il risultato del tuo lavoro.

Al termine dell’esperienza riceverai un diploma di pizzaiolo come ricordo della tua esperienza napoletana.

Non è richiesta alcuna esperienza precedente in cucina: la lezione è pensata per essere semplice, pratica e adatta a chi viaggia da solo, alle coppie e alle famiglie.`,

        preparation: [
            {
                title: "Preparazione dell’impasto",
                text: "Scopri come lavorare gli ingredienti e preparare correttamente l’impasto della pizza napoletana."
            },
            {
                title: "Preparazione del pomodoro",
                text: "Impara a preparare il condimento utilizzando il pomodoro San Marzano."
            },
            {
                title: "Stesura dell’impasto",
                text: "Lavora manualmente l’impasto fino a ottenere il caratteristico disco della pizza napoletana."
            },
            {
                title: "Condimento",
                text: "Prepara la tua pizza con pomodoro, mozzarella, olio e basilico."
            },
            {
                title: "Cottura",
                text: "La pizza viene cotta in un forno professionale secondo la tradizione napoletana."
            },
            {
                title: "Degustazione finale",
                text: "Gusta la pizza preparata da te insieme all’antipasto e alle bevande incluse."
            }
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
            "Per i partecipanti di età inferiore ai 18 anni non sono previste bevande alcoliche."
        ],

        usefulInfo: [
            "Accessibile con passeggino",
            "Animali domestici ammessi",
            "Non accessibile in sedia a rotelle",
            "Laboratorio situato nel centro storico di Napoli",
            "Circa 5 minuti a piedi dalla fermata Duomo della metropolitana",
            "Cancellazione con rimborso completo fino ad almeno 24 ore prima"
        ]
    }
];


/* =========================================================
   UTILITÀ
   ========================================================= */

function formatPrice(value) {
    return `${value} €`;
}


function getRandomImage(images) {
    if (!images || images.length === 0) {
        return "";
    }

    return images[
        Math.floor(Math.random() * images.length)
    ];
}


function formatItalianDate(dateValue) {
    if (!dateValue) {
        return "";
    }

    const parts = dateValue.split("-");

    if (parts.length !== 3) {
        return dateValue;
    }

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


function getPizzaTotal(participants) {
    return participants * 49;
}


/* =========================================================
   CARD
   ========================================================= */

function renderExperiences() {

    const grid = document.getElementById("catalog-grid");

    if (!grid) {
        console.error("Elemento #catalog-grid non trovato.");
        return;
    }

    grid.innerHTML = "";

    experiences.forEach((experience) => {

        const card = document.createElement("article");

        card.className = "experience-card";

        card.dataset.id = experience.id;

        const randomImage =
            getRandomImage(experience.images);

        card.innerHTML = `
            <div class="experience-card-image">
                <img
                    src="${randomImage}"
                    alt="${experience.title}"
                    loading="lazy"
                >
            </div>

            <div class="experience-card-content">

                <div class="experience-card-category">
                    ${experience.categoryLabel}
                </div>

                <h3 class="experience-card-title">
                    ${experience.title}
                </h3>

                <p class="experience-card-description">
                    ${experience.shortDescription}
                </p>

                <div class="experience-card-footer">

                    <div>
                        <div class="experience-price">
                            ${formatPrice(experience.price)} / persona
                        </div>

                        <div class="experience-duration">
                            ${experience.duration}
                        </div>
                    </div>

                    <button
                        type="button"
                        class="experience-button"
                    >
                        Scopri
                    </button>

                </div>

            </div>
        `;


        card.addEventListener("click", function () {

            openExperienceModal(
                experience.id
            );

        });


        grid.appendChild(card);
    });
}


/* =========================================================
   MODAL
   ========================================================= */

function openExperienceModal(id) {

    const experience =
        experiences.find(
            item => item.id === id
        );

    if (!experience) {
        return;
    }


    const modal =
        document.getElementById(
            "experience-modal"
        );

    const modalContent =
        document.getElementById(
            "modal-content"
        );


    if (!modal || !modalContent) {
        console.error(
            "Elementi modal non trovati."
        );

        return;
    }


    modalContent.innerHTML = `

        <div class="modal-body">

            <!-- =========================================
                 TESTATA
                 ========================================= -->

            <div
                class="modal-hero"
                style="
                    grid-template-columns:
                    minmax(260px, 0.95fr)
                    minmax(0, 1.05fr);
                    align-items: center;
                "
            >

                <div
                    class="modal-hero-image"
                    style="
                        min-height: 310px;
                        max-height: 360px;
                    "
                >

                    <img
                        src="${experience.images[0]}"
                        alt="${experience.title}"
                    >

                </div>


                <div class="modal-hero-info">

                    <div class="modal-category">
                        ${experience.categoryLabel}
                    </div>

                    <h2 class="modal-title">
                        ${experience.title}
                    </h2>

                    <p class="modal-short">
                        ${experience.shortDescription}
                    </p>

                    <div class="modal-meta">

                        <div class="modal-meta-item">
                            Durata:
                            ${experience.duration}
                        </div>

                        <div class="modal-meta-item">
                            ${experience.languages}
                        </div>

                        <div class="modal-meta-item">
                            ${experience.type}
                        </div>

                        <div class="modal-meta-item">
                            ${formatPrice(experience.price)} / persona
                        </div>

                    </div>

                </div>

            </div>


            <!-- =========================================
                 GALLERIA
                 FOTO PRINCIPALE A SINISTRA
                 5 FOTO SOTTO
                 ========================================= -->

            <section
                style="
                    margin-top: -10px;
                    margin-bottom: 40px;
                "
            >

                <div
                    class="pizza-gallery"
                    style="
                        display:grid;
                        grid-template-columns:
                        minmax(0, 1.15fr)
                        minmax(0, 1fr);
                        gap:12px;
                    "
                >

                    <!-- FOTO PRINCIPALE -->

                    <div
                        style="
                            grid-row:1 / 3;
                            height:330px;
                            overflow:hidden;
                            border-radius:18px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[0]}"
                            alt="${experience.title}"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <!-- FOTO 2 -->

                    <div
                        style="
                            height:158px;
                            overflow:hidden;
                            border-radius:18px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[1]}"
                            alt="${experience.title} - Foto 2"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <!-- FOTO 3 -->

                    <div
                        style="
                            height:158px;
                            overflow:hidden;
                            border-radius:18px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[2]}"
                            alt="${experience.title} - Foto 3"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>

                </div>


                <!-- CINQUE FOTO SOTTO LA PRINCIPALE -->

                <div
                    style="
                        display:grid;
                        grid-template-columns:
                        repeat(5, minmax(0, 1fr));
                        gap:12px;
                        margin-top:12px;
                    "
                >

                    <div
                        style="
                            height:115px;
                            overflow:hidden;
                            border-radius:14px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[1]}"
                            alt="${experience.title} - Foto 2"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <div
                        style="
                            height:115px;
                            overflow:hidden;
                            border-radius:14px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[2]}"
                            alt="${experience.title} - Foto 3"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <div
                        style="
                            height:115px;
                            overflow:hidden;
                            border-radius:14px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[3]}"
                            alt="${experience.title} - Foto 4"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <div
                        style="
                            height:115px;
                            overflow:hidden;
                            border-radius:14px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[4]}"
                            alt="${experience.title} - Foto 5"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>


                    <div
                        style="
                            height:115px;
                            overflow:hidden;
                            border-radius:14px;
                            background:#f1f1f4;
                        "
                    >

                        <img
                            src="${experience.images[5]}"
                            alt="${experience.title} - Foto 6"
                            style="
                                width:100%;
                                height:100%;
                                object-fit:cover;
                            "
                        >

                    </div>

                </div>

            </section>


            <!-- =========================================
                 DATA E PARTECIPANTI
                 ========================================= -->

            <section
                style="
                    margin-top:40px;
                    padding:26px;
                    border:1px solid #e8e8ed;
                    border-radius:20px;
                    background:#fafafa;
                "
            >

                <div
                    style="
                        display:grid;
                        grid-template-columns:
                        repeat(2, minmax(0, 1fr));
                        gap:24px;
                        align-items:end;
                    "
                >

                    <!-- DATA -->

                    <div>

                        <label
                            for="pizza-date"
                            style="
                                display:block;
                                margin-bottom:9px;
                                color:#202020;
                                font-size:13px;
                                font-weight:800;
                            "
                        >
                            Data
                        </label>

                        <input
                            type="date"
                            id="pizza-date"
                            style="
                                width:100%;
                                height:50px;
                                padding:0 15px;
                                border:1px solid #ddddE4;
                                border-radius:13px;
                                background:white;
                                color:#202020;
                                font-size:14px;
                                outline:none;
                            "
                        >

                    </div>


                    <!-- PARTECIPANTI -->

                    <div>

                        <label
                            for="pizza-participants"
                            style="
                                display:block;
                                margin-bottom:9px;
                                color:#202020;
                                font-size:13px;
                                font-weight:800;
                            "
                        >
                            Partecipanti
                        </label>

                        <select
                            id="pizza-participants"
                            style="
                                width:100%;
                                height:50px;
                                padding:0 15px;
                                border:1px solid #ddddE4;
                                border-radius:13px;
                                background:white;
                                color:#202020;
                                font-size:14px;
                                outline:none;
                                cursor:pointer;
                            "
                        >

                            ${Array.from(
                                { length: 10 },
                                (_, index) => {

                                    const number =
                                        index + 1;

                                    return `
                                        <option value="${number}">
                                            ${number}
                                            ${
                                                number === 1
                                                    ? "persona"
                                                    : "persone"
                                            }
                                        </option>
                                    `;
                                }
                            ).join("")}

                        </select>

                    </div>

                </div>


                <!-- TOTALE -->

                <div
                    style="
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:20px;
                        margin-top:22px;
                        padding-top:20px;
                        border-top:1px solid #e8e8ed;
                    "
                >

                    <span
                        style="
                            color:#737373;
                            font-size:14px;
                            font-weight:600;
                        "
                    >
                        Totale esperienza
                    </span>

                    <strong
                        id="pizza-total-price"
                        style="
                            color:#202020;
                            font-size:24px;
                            font-weight:800;
                            letter-spacing:-0.03em;
                        "
                    >
                        49 €
                    </strong>

                </div>

            </section>


            <!-- =========================================
                 PREPARAZIONE
                 ========================================= -->

            <section class="modal-section">

                <h3>
                    Preparazione
                </h3>

                <div class="itinerary">

                    ${experience.preparation.map(
                        (step, index) => `

                            <div class="itinerary-stop">

                                <span class="itinerary-number">
                                    Procedura ${String(index + 1).padStart(2, "0")}
                                </span>

                                <h4>
                                    ${step.title}
                                </h4>

                                <p>
                                    ${step.text}
                                </p>

                            </div>

                        `
                    ).join("")}

                </div>

            </section>


            <!-- =========================================
                 ATTIVITÀ IN BREVE
                 ========================================= -->

            <section class="modal-section">

                <h3>
                    L'attività in breve
                </h3>

                <p>
                    ${experience.shortDescription}
                </p>

            </section>


            <!-- =========================================
                 DESCRIZIONE COMPLETA
                 ========================================= -->

            <section class="modal-section">

                <h3>
                    Descrizione completa
                </h3>

                <p
                    style="
                        white-space:pre-line;
                    "
                >
                    ${experience.description}
                </p>

            </section>


            <!-- =========================================
                 INCLUSO / NON INCLUSO
                 ========================================= -->

            <section class="modal-section">

                <div class="detail-columns">

                    <div class="detail-box include">

                        <h3>
                            Cosa è incluso
                        </h3>

                        <ul>

                            ${experience.included.map(
                                item => `
                                    <li>
                                        ${item}
                                    </li>
                                `
                            ).join("")}

                        </ul>

                    </div>


                    <div class="detail-box exclude">

                        <h3>
                            Cosa non è incluso
                        </h3>

                        <ul>

                            ${experience.notIncluded.map(
                                item => `
                                    <li>
                                        ${item}
                                    </li>
                                `
                            ).join("")}

                        </ul>

                    </div>

                </div>

            </section>


            <!-- =========================================
                 PUNTO DI INCONTRO
                 ========================================= -->

            <section class="modal-section">

                <div class="meeting-box">

                    <h3>
                        Punti di incontro
                    </h3>

                    <p>
                        ${experience.meetingPoint}
                    </p>

                </div>

            </section>


            <!-- =========================================
                 NON AMMESSO
                 ========================================= -->

            <section class="modal-section">

                <h3>
                    Non ammesso
                </h3>

                <ul>

                    ${experience.notAllowed.map(
                        item => `
                            <li>
                                ${item}
                            </li>
                        `
                    ).join("")}

                </ul>

            </section>


            <!-- =========================================
                 INFORMAZIONI UTILI
                 ========================================= -->

            <section class="modal-section">

                <h3>
                    Informazioni utili
                </h3>

                <ul>

                    ${experience.usefulInfo.map(
                        item => `
                            <li>
                                ${item}
                            </li>
                        `
                    ).join("")}

                </ul>

            </section>


            <!-- =========================================
                 WHATSAPP
                 ========================================= -->

            <section class="modal-request">

                <h3>
                    Richiedi disponibilità
                </h3>

                <p>
                    Seleziona data e partecipanti e inviaci
                    la richiesta. Verificheremo personalmente
                    la disponibilità e ti risponderemo su WhatsApp.
                </p>

                <button
                    type="button"
                    class="whatsapp-button"
                    id="pizza-whatsapp-button"
                >
                    Richiedi disponibilità su WhatsApp
                </button>

            </section>

        </div>
    `;


    setupPizzaBooking();


    const whatsappButton =
        document.getElementById(
            "pizza-whatsapp-button"
        );

    if (whatsappButton) {

        whatsappButton.addEventListener(
            "click",
            requestPizzaAvailability
        );

    }


    modal.classList.add("open");

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
        document.getElementById(
            "experience-modal"
        );

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

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
        document.getElementById(
            "experience-modal"
        );

    if (!modal) {
        return;
    }


    modal.addEventListener(
        "click",
        function (event) {

            const closeTarget =
                event.target.closest(
                    "[data-close-modal]"
                );

            if (closeTarget) {
                closeExperienceModal();
            }

        }
    );
}


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeExperienceModal();
        }

    }
);


/* =========================================================
   PRENOTAZIONE
   ========================================================= */

function setupPizzaBooking() {

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
        document.getElementById(
            "pizza-date"
        );

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


    if (
        !participantsSelect ||
        !totalElement
    ) {
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


    if (
        !dateInput ||
        !participantsSelect
    ) {
        return;
    }


    const selectedDate =
        dateInput.value;


    if (!selectedDate) {

        alert(
            "Seleziona una data prima di richiedere la disponibilità."
        );

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


    const formattedDate =
        formatItalianDate(
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
    function () {

        renderExperiences();

        setupModalEvents();

    }
);
