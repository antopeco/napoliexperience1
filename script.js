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
            "images/pizza-napoletana-1.jpg.webp.webp",
            "images/pizza-napoletana-2.jpg.webp.webp",
            "images/pizza-napoletana-3.jpg.webp.webp",
            "images/pizza-napoletana-4.jpg.webp.webp",
            "images/pizza-napoletana-5.jpg.webp.webp",
            "images/pizza-napoletana-6.jpg.webp.webp"
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

    const grid =
        document.getElementById("catalog-grid");

    if (!grid) {
        console.error("Elemento #catalog-grid non trovato.");
        return;
    }

    grid.innerHTML = "";

    experiences.forEach((experience) => {

        const card =
            document.createElement("article");

        card.className =
            "experience-card";

        card.dataset.id =
            experience.id;


        const randomImage =
            getRandomImage(experience.images);


        const galleryImages =
            experience.images.map(
                (image, index) => {

                    return `
                        <img
                            src="${image}"
                            alt="${experience.title} - Foto ${index + 1}"
                            loading="${index === 0 ? "eager" : "lazy"}"
                        >
                    `;

                }
            ).join("");


        const galleryDots =
            experience.images.map(
                (_, index) => {

                    return `
                        <span
                            class="experience-card-gallery-dot ${
                                index === 0
                                    ? "active"
                                    : ""
                            }"
                            data-index="${index}"
                        ></span>
                    `;

                }
            ).join("");


        card.innerHTML = `

            <div class="experience-card-image">

                <div
                    class="experience-card-gallery-track"
                    data-gallery-id="${experience.id}"
                >
                    ${galleryImages}
                </div>


                <div
                    class="experience-card-gallery-controls"
                >

                    <button
                        type="button"
                        class="experience-card-gallery-arrow"
                        data-gallery-prev
                        aria-label="Foto precedente"
                    >
                        ‹
                    </button>


                    <button
                        type="button"
                        class="experience-card-gallery-arrow"
                        data-gallery-next
                        aria-label="Foto successiva"
                    >
                        ›
                    </button>

                </div>


                <div
                    class="experience-card-gallery-dots"
                >
                    ${galleryDots}
                </div>

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


        const gallery =
            card.querySelector(
                ".experience-card-gallery-track"
            );


        const previousButton =
            card.querySelector(
                "[data-gallery-prev]"
            );


        const nextButton =
            card.querySelector(
                "[data-gallery-next]"
            );


        const dots =
            Array.from(
                card.querySelectorAll(
                    ".experience-card-gallery-dot"
                )
            );


        setupCardGallery(
            card,
            gallery,
            previousButton,
            nextButton,
            dots,
            experience
        );


        card.addEventListener(
            "click",
            function () {

                openExperienceModal(
                    experience.id
                );

            }
        );


        grid.appendChild(card);

    });
}


/* =========================================================
   GALLERIA CARD MOBILE
   ========================================================= */

function setupCardGallery(
    card,
    gallery,
    previousButton,
    nextButton,
    dots,
    experience
) {

    if (
        !card ||
        !gallery ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }


    let currentIndex = 0;


    function updateDots(index) {

        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === index
                );

            }
        );

    }


    function scrollToImage(index) {

        if (
            index < 0 ||
            index >= experience.images.length
        ) {
            return;
        }


        currentIndex = index;


        gallery.scrollTo({
            left:
                gallery.clientWidth *
                currentIndex,
            behavior: "smooth"
        });


        updateDots(
            currentIndex
        );

    }


    function getCurrentIndexFromScroll() {

        if (
            !gallery.clientWidth
        ) {
            return 0;
        }


        return Math.max(
            0,
            Math.min(
                experience.images.length - 1,
                Math.round(
                    gallery.scrollLeft /
                    gallery.clientWidth
                )
            )
        );
    }


    previousButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const index =
                currentIndex <= 0
                    ? experience.images.length - 1
                    : currentIndex - 1;

            scrollToImage(index);

        }
    );


    nextButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const index =
                currentIndex >= experience.images.length - 1
                    ? 0
                    : currentIndex + 1;

            scrollToImage(index);

        }
    );


    gallery.addEventListener(
        "scroll",
        function () {

            const index =
                getCurrentIndexFromScroll();


            if (
                index !== currentIndex
            ) {

                currentIndex = index;

                updateDots(
                    currentIndex
                );

            }

        },
        {
            passive: true
        }
    );


    gallery.addEventListener(
        "touchstart",
        function (event) {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    gallery.addEventListener(
        "touchmove",
        function (event) {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    gallery.addEventListener(
        "touchend",
        function (event) {

            event.stopPropagation();

        },
        {
            passive: true
        }
    );


    gallery.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    dots.forEach(
        (dot) => {

            dot.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const index =
                        parseInt(
                            dot.dataset.index,
                            10
                        );

                    scrollToImage(index);

                }
            );

        }
    );


    updateDots(0);

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
                 FOTO 1 + TITOLO
                 ========================================= -->

            <div
                class="modal-hero"
                style="
                    grid-template-columns:
                    minmax(260px, 0.95fr)
                    minmax(0, 1.05fr);
                    align-items:center;
                "
            >

                <div
                    class="modal-hero-image"
                    style="
                        min-height:310px;
                        max-height:360px;
                    "
                >

                    <img
                        id="pizza-main-image"
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
                            ${formatPrice(experience.price)}
                            / persona
                        </div>

                    </div>

                </div>

            </div>


            <!-- =========================================
                 GALLERIA FOTO 2-6
                 ========================================= -->

            <section
                style="
                    margin-top:24px;
                    margin-bottom:40px;
                "
            >

                <div
                    style="
                        position:relative;
                        width:100%;
                    "
                >

                    <button
                        type="button"
                        id="gallery-prev"
                        aria-label="Foto precedente"
                        style="
                            position:absolute;
                            left:-16px;
                            top:50%;
                            transform:translateY(-50%);
                            z-index:10;
                            width:40px;
                            height:40px;
                            border:none;
                            border-radius:50%;
                            background:white;
                            color:#202020;
                            box-shadow:
                                0 5px 18px
                                rgba(0,0,0,0.16);
                            font-size:25px;
                            line-height:1;
                            cursor:pointer;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                        "
                    >
                        ‹
                    </button>


                    <div
                        id="pizza-thumbnail-gallery"
                        style="
                            display:flex;
                            gap:12px;
                            width:100%;
                            overflow-x:auto;
                            overflow-y:hidden;
                            scroll-behavior:smooth;
                            scrollbar-width:none;
                            padding:
                                4px 8px 10px 8px;
                            box-sizing:border-box;
                            -webkit-overflow-scrolling:touch;
                        "
                    >

                        ${experience.images
                            .slice(1)
                            .map(
                                (image, index) => {

                                    const realIndex =
                                        index + 1;

                                    return `

                                        <button
                                            type="button"
                                            class="pizza-gallery-thumb"
                                            data-index="${realIndex}"
                                            aria-label="Visualizza foto ${realIndex + 1}"
                                            style="
                                                flex:
                                                    0 0 125px;
                                                width:125px;
                                                height:90px;
                                                padding:0;
                                                border:none;
                                                border-radius:14px;
                                                overflow:hidden;
                                                background:#f1f1f4;
                                                cursor:pointer;
                                                position:relative;
                                                opacity:0.82;
                                                outline:none;
                                                box-sizing:border-box;
                                                transition:
                                                    opacity 0.2s ease,
                                                    transform 0.2s ease;
                                            "
                                        >

                                            <img
                                                src="${image}"
                                                alt="${experience.title} - Foto ${realIndex + 1}"
                                                style="
                                                    width:100%;
                                                    height:100%;
                                                    object-fit:cover;
                                                    display:block;
                                                    pointer-events:none;
                                                "
                                            >

                                        </button>

                                    `;
                                }
                            )
                            .join("")}

                    </div>


                    <button
                        type="button"
                        id="gallery-next"
                        aria-label="Foto successiva"
                        style="
                            position:absolute;
                            right:-16px;
                            top:50%;
                            transform:translateY(-50%);
                            z-index:10;
                            width:40px;
                            height:40px;
                            border:none;
                            border-radius:50%;
                            background:white;
                            color:#202020;
                            box-shadow:
                                0 5px 18px
                                rgba(0,0,0,0.16);
                            font-size:25px;
                            line-height:1;
                            cursor:pointer;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                        "
                    >
                        ›
                    </button>

                </div>

            </section>


            <!-- =========================================
                 DATA + PERSONE
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
                                box-sizing:border-box;
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
                            Persone
                        </label>

                        <select
                            id="pizza-participants"
                            style="
                                box-sizing:border-box;
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


                <button
                    type="button"
                    class="whatsapp-button"
                    id="pizza-whatsapp-button"
                    style="
                        width:100%;
                        margin-top:22px;
                    "
                >
                    Richiedi disponibilità su WhatsApp
                </button>


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
                                    Procedura
                                    ${String(index + 1).padStart(2, "0")}
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

                <p style="white-space:pre-line;">
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

        </div>
    `;


    setupPizzaGallery(experience);

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
   GALLERIA MODAL
   ========================================================= */

function setupPizzaGallery(experience) {

    const mainImage =
        document.getElementById(
            "pizza-main-image"
        );

    const gallery =
        document.getElementById(
            "pizza-thumbnail-gallery"
        );

    const previousButton =
        document.getElementById(
            "gallery-prev"
        );

    const nextButton =
        document.getElementById(
            "gallery-next"
        );


    if (
        !mainImage ||
        !gallery ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }


    const thumbnails =
        Array.from(
            gallery.querySelectorAll(
                ".pizza-gallery-thumb"
            )
        );


    let currentIndex = 0;


    function updateMainImage(index) {

        if (
            index < 1 ||
            index >= experience.images.length
        ) {
            return;
        }


        currentIndex = index;


        mainImage.src =
            experience.images[currentIndex];


        mainImage.alt =
            `${experience.title} - Foto ${currentIndex + 1}`;


        thumbnails.forEach(
            (thumbnail) => {

                const thumbnailIndex =
                    parseInt(
                        thumbnail.dataset.index,
                        10
                    );


                const isActive =
                    thumbnailIndex === currentIndex;


                thumbnail.style.opacity =
                    isActive
                        ? "1"
                        : "0.82";


                thumbnail.style.outline =
                    isActive
                        ? "3px solid #8b3dff"
                        : "none";


                thumbnail.style.transform =
                    isActive
                        ? "scale(1.02)"
                        : "scale(1)";

            }
        );


        const activeThumbnail =
            thumbnails.find(
                thumbnail =>
                    parseInt(
                        thumbnail.dataset.index,
                        10
                    ) === currentIndex
            );


        if (activeThumbnail) {

            activeThumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        }

    }


    thumbnails.forEach(
        (thumbnail) => {

            thumbnail.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const index =
                        parseInt(
                            thumbnail.dataset.index,
                            10
                        );

                    updateMainImage(index);

                }
            );

        }
    );


    previousButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const nextIndex =
                currentIndex <= 1
                    ? experience.images.length - 1
                    : currentIndex - 1;

            updateMainImage(
                nextIndex
            );

        }
    );


    nextButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const nextIndex =
                currentIndex >= experience.images.length - 1
                    ? 1
                    : currentIndex + 1;

            updateMainImage(
                nextIndex
            );

        }
    );


    thumbnails.forEach(
        thumbnail => {

            thumbnail.style.opacity =
                "0.82";

            thumbnail.style.outline =
                "none";

            thumbnail.style.transform =
                "scale(1)";

        }
    );


    let touchStartX = 0;
    let touchEndX = 0;


    gallery.addEventListener(
        "touchstart",
        function (event) {

            if (
                event.touches &&
                event.touches.length > 0
            ) {

                touchStartX =
                    event.touches[0].clientX;

            }

        },
        {
            passive: true
        }
    );


    gallery.addEventListener(
        "touchend",
        function (event) {

            if (
                event.changedTouches &&
                event.changedTouches.length > 0
            ) {

                touchEndX =
                    event.changedTouches[0].clientX;

            }


            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) < 40) {
                return;
            }


            if (difference > 0) {

                gallery.scrollBy({
                    left: 150,
                    behavior: "smooth"
                });

            } else {

                gallery.scrollBy({
                    left: -150,
                    behavior: "smooth"
                });

            }

        },
        {
            passive: true
        }
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


    if (
        !dateInput ||
        !participantsSelect
    ) {
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
