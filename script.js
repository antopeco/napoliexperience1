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
                 ========================================= -->

            <div
                class="modal-hero"
            >

                <div
                    class="modal-hero-image"
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

                        <div class="modal-meta-item modal-meta-duration">
                            ${experience.duration}
                        </div>

                        <div class="modal-meta-item modal-meta-languages">
                            ${experience.languages}
                        </div>

                        <div class="modal-meta-item modal-meta-type">
                            ${experience.type}
                        </div>

                        <div class="modal-meta-item modal-meta-price">
                            ${formatPrice(experience.price)}
                            / persona
                        </div>

                    </div>

                </div>

            </div>


            <!-- =========================================
                 INDICATORI FOTO MOBILE
                 ========================================= -->

            <div
                class="pizza-mobile-gallery"
                aria-label="Galleria immagini"
            >

                <button
                    type="button"
                    id="mobile-gallery-prev"
                    class="pizza-mobile-gallery-arrow"
                    aria-label="Foto precedente"
                >
                    ‹
                </button>


                <div
                    class="pizza-mobile-gallery-dots"
                >

                    ${experience.images
                        .map(
                            (image, index) => {

                                return `
                                    <button
                                        type="button"
                                        class="pizza-mobile-gallery-dot ${
                                            index === 0
                                                ? "active"
                                                : ""
                                        }"
                                        data-mobile-gallery-index="${index}"
                                        aria-label="Visualizza foto ${index + 1}"
                                    ></button>
                                `;

                            }
                        )
                        .join("")}

                </div>


                <button
                    type="button"
                    id="mobile-gallery-next"
                    class="pizza-mobile-gallery-arrow"
                    aria-label="Foto successiva"
                >
                    ›
                </button>

            </div>


            <!-- =========================================
                 GALLERIA DESKTOP FOTO 2-6
                 ========================================= -->

            <section
                class="pizza-modal-gallery"
            >

                <div
                    class="pizza-modal-gallery-inner"
                >

                    <button
                        type="button"
                        id="gallery-prev"
                        aria-label="Foto precedente"
                        class="pizza-gallery-arrow"
                    >
                        ‹
                    </button>


                    <div
                        id="pizza-thumbnail-gallery"
                        class="pizza-thumbnail-gallery"
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
                                        >

                                            <img
                                                src="${image}"
                                                alt="${experience.title} - Foto ${realIndex + 1}"
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
                        class="pizza-gallery-arrow"
                    >
                        ›
                    </button>

                </div>

            </section>


            <!-- =========================================
                 DATA + PERSONE
                 ========================================= -->

            <section
                class="pizza-booking"
            >

                <div
                    class="pizza-booking-fields"
                >

                    <div>

                        <label
                            for="pizza-date"
                        >
                            Data
                        </label>

                        <input
                            type="date"
                            id="pizza-date"
                        >

                    </div>


                    <div>

                        <label
                            for="pizza-participants"
                        >
                            Persone
                        </label>

                        <select
                            id="pizza-participants"
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
                >
                    Richiedi disponibilità su WhatsApp
                </button>


                <div
                    class="pizza-total"
                >

                    <span>
                        Totale esperienza
                    </span>

                    <strong
                        id="pizza-total-price"
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

    const mobilePreviousButton =
        document.getElementById(
            "mobile-gallery-prev"
        );

    const mobileNextButton =
        document.getElementById(
            "mobile-gallery-next"
        );

    const mobileDots =
        Array.from(
            document.querySelectorAll(
                ".pizza-mobile-gallery-dot"
            )
        );


    if (!mainImage) {
        return;
    }


    const thumbnails =
        gallery
            ? Array.from(
                gallery.querySelectorAll(
                    ".pizza-gallery-thumb"
                )
            )
            : [];


    let currentIndex = 0;


    function updateGallery(index) {

        if (
            index < 0 ||
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


        mobileDots.forEach(
            (dot) => {

                const dotIndex =
                    parseInt(
                        dot.dataset.mobileGalleryIndex,
                        10
                    );


                dot.classList.toggle(
                    "active",
                    dotIndex === currentIndex
                );

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

                    updateGallery(index);

                }
            );

        }
    );


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const previousIndex =
                    currentIndex <= 0
                        ? experience.images.length - 1
                        : currentIndex - 1;

                updateGallery(
                    previousIndex
                );

            }
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const nextIndex =
                    currentIndex >= experience.images.length - 1
                        ? 0
                        : currentIndex + 1;

                updateGallery(
                    nextIndex
                );

            }
        );

    }


    if (mobilePreviousButton) {

        mobilePreviousButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const previousIndex =
                    currentIndex <= 0
                        ? experience.images.length - 1
                        : currentIndex - 1;

                updateGallery(
                    previousIndex
                );

            }
        );

    }


    if (mobileNextButton) {

        mobileNextButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const nextIndex =
                    currentIndex >= experience.images.length - 1
                        ? 0
                        : currentIndex + 1;

                updateGallery(
                    nextIndex
                );

            }
        );

    }


    mobileDots.forEach(
        (dot) => {

            dot.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const index =
                        parseInt(
                            dot.dataset.mobileGalleryIndex,
                            10
                        );

                    updateGallery(index);

                }
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
    let touchStartY = 0;


    mainImage.addEventListener(
        "touchstart",
        function (event) {

            if (
                event.touches &&
                event.touches.length > 0
            ) {

                touchStartX =
                    event.touches[0].clientX;

                touchStartY =
                    event.touches[0].clientY;

            }

        },
        {
            passive: true
        }
    );


    mainImage.addEventListener(
        "touchend",
        function (event) {

            if (
                !event.changedTouches ||
                event.changedTouches.length === 0
            ) {
                return;
            }


            const touch =
                event.changedTouches[0];


            const differenceX =
                touchStartX -
                touch.clientX;


            const differenceY =
                touchStartY -
                touch.clientY;


            if (
                Math.abs(differenceX) < 45 ||
                Math.abs(differenceX) <
                    Math.abs(differenceY)
            ) {
                return;
            }


            if (differenceX > 0) {

                const nextIndex =
                    currentIndex >=
                        experience.images.length - 1
                        ? 0
                        : currentIndex + 1;

                updateGallery(
                    nextIndex
                );

            } else {

                const previousIndex =
                    currentIndex <= 0
                        ? experience.images.length - 1
                        : currentIndex - 1;

                updateGallery(
                    previousIndex
                );

            }

        },
        {
            passive: true
        }
    );


    updateGallery(0);
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
