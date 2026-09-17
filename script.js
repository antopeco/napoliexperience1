const WHATSAPP_NUMBER = "393423512684";

/* =========================================================
   ESPERIENZA PRINCIPALE
   ========================================================= */

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

        description: `
Questa esperienza ti porta nel cuore della tradizione della pizza napoletana attraverso una lezione pratica di circa due ore, guidata da uno chef locale all’interno di un laboratorio di cucina attrezzato.

Durante il corso scoprirai come nasce una vera pizza napoletana, partendo dalla conoscenza degli ingredienti fondamentali e dalla preparazione dell’impasto.

Lo chef ti accompagnerà passo dopo passo nella lavorazione manuale, spiegandoti le principali fasi necessarie per ottenere un impasto correttamente lavorato.

Durante il riposo dell’impasto potrai gustare un antipasto tipico napoletano composto da bruschette con pomodorini, mozzarella, pane fatto in casa e olio extravergine d’oliva, accompagnato dalle bevande previste dall’esperienza.

La lezione prosegue con la stesura dell’impasto e la preparazione della pizza, imparando a lavorare correttamente il disco e a preparare il condimento con pomodoro San Marzano, mozzarella, olio e basilico.

La pizza preparata verrà cotta in un forno professionale e potrai gustare direttamente il risultato del tuo lavoro.

Al termine dell’esperienza riceverai un diploma di pizzaiolo come ricordo della tua esperienza napoletana.

Non è richiesta alcuna esperienza precedente in cucina: la lezione è pensata per essere semplice, pratica e adatta a chi viaggia da solo, alle coppie e alle famiglie.
`,

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
            "Circa 5 minuti a piedi dalla fermata Duomo della metropolitana"
        ]
    }
];

/* =========================================================
   CARICAMENTO ESPERIENZE MODULARI
   ========================================================= */

function loadExperienceScript(path, globalName) {
    return new Promise((resolve) => {
        if (window[globalName]) {
            resolve(window[globalName]);
            return;
        }

        const script = document.createElement("script");

        script.src = path;

        script.onload = function () {
            if (window[globalName]) {
                resolve(window[globalName]);
            } else {
                console.error(
                    `${globalName} non trovata dopo il caricamento di ${path}.`
                );

                resolve(null);
            }
        };

        script.onerror = function () {
            console.error(
                `Impossibile caricare ${path}`
            );

            resolve(null);
        };

        document.head.appendChild(script);
    });
}

/* =========================================================
   LOADER ESPERIENZE
   ========================================================= */

function loadPizzaSeraleExperience() {
    return loadExperienceScript(
        "experiences/cooking/pizza-serale/experience.js",
        "pizzaSeraleExperience"
    );
}

function loadPastaGelatoExperience() {
    return loadExperienceScript(
        "experiences/cooking/gelato/experience.js",
        "pastaGelatoExperience"
    );
}

function loadPizzaTiramisuExperience() {
    return loadExperienceScript(
        "experiences/cooking/tiramisu/experience.js",
        "pizzaTiramisuExperience"
    );
}

function loadPizzaGelatoExperience() {
    return loadExperienceScript(
        "experiences/cooking/pizzagelato/experience.js",
        "pizzaGelatoExperience"
    );
}

function loadTourCostieraExperience() {
    return loadExperienceScript(
        "experiences/minibus/tourcostiera/experience.js",
        "tourCostieraExperience"
    );
}

/*
 * Capri
 */

function loadCapriExperience() {
    return loadExperienceScript(
        "experiences/boat/capri/experience.js",
        "capriExperience"
    );
}

function loadIschiaProcidaExperience() {
    return loadExperienceScript(
        "experiences/boat/ischia-procida/experience.js",
        "ischiaProcidaExperience"
    );
}

/*
 * Ceramica
 */

function loadCeramicaExperience() {
    return loadExperienceScript(
        "experiences/arteecreativita/ceramica/experience.js",
        "ceramicaExperience"
    );
}

/*
 * Fotografia
 */

function loadFotografiaExperience() {
    return loadExperienceScript(
        "experiences/arteecreativita/fotografia/experience.js",
        "fotografiaExperience"
    );
}

/*
 * Tour in Bici
 */

function loadTourInBiciExperience() {
    return loadExperienceScript(
        "experiences/bici/tourinbici/experience.js",
        "bikeToursExperience"
    );
}

/* =========================================================
   UTILITÀ
   ========================================================= */

function formatPrice(value) {
    if (
        value === null ||
        value === undefined ||
        value === 0
    ) {
        return "Richiedi preventivo";
    }

    return `${value} €`;
}

function getRandomImage(images) {
    if (
        !images ||
        images.length === 0
    ) {
        return "";
    }

    return images[
        Math.floor(
            Math.random() * images.length
        )
    ];
}

function formatItalianDate(dateValue) {
    if (!dateValue) {
        return "";
    }

    const parts =
        dateValue.split("-");

    if (parts.length !== 3) {
        return dateValue;
    }

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

/* =========================================================
   SUPPORTO TOUR IN BICI
   ========================================================= */

let selectedBikeTourId = "unesco";

let selectedBikeElectric = false;

let selectedBikeChildSeat = false;

let selectedBikeLanguage = "";

function isBikeExperience(experience) {
    return Boolean(
        experience &&
        experience.id === "bike-tours"
    );
}

function getBikeTours(experience) {
    if (
        !isBikeExperience(experience) ||
        !Array.isArray(experience.tours)
    ) {
        return [];
    }

    return experience.tours;
}

function getSelectedBikeTour(experience) {
    const tours =
        getBikeTours(experience);

    if (!tours.length) {
        return null;
    }

    const selected =
        tours.find(
            tour =>
                tour.id ===
                selectedBikeTourId
        );

    return selected || tours[0];
}

/*
 * Tutti i tour possono avere E-bike.
 */

function bikeTourHasElectricBike(tour) {
    if (!tour) {
        return false;
    }

    return true;
}

function getBikeTourBasePrice(tour) {
    if (
        !tour ||
        tour.price === undefined ||
        tour.price === null
    ) {
        return 0;
    }

    return Number(tour.price) || 0;
}

function getBikeTourPricePerPerson(tour) {
    if (!tour) {
        return 0;
    }

    let price =
        getBikeTourBasePrice(
            tour
        );

    if (
        selectedBikeElectric &&
        bikeTourHasElectricBike(
            tour
        )
    ) {
        price += 15;
    }

    if (
        selectedBikeChildSeat
    ) {
        price += 5;
    }

    return price;
}

function getBikeTourWhatsAppMode(tour) {
    if (!tour) {
        return "";
    }

    const options = [];

    if (
        selectedBikeElectric &&
        bikeTourHasElectricBike(
            tour
        )
    ) {
        options.push(
            "E-bike"
        );
    }

    if (
        selectedBikeChildSeat
    ) {
        options.push(
            "Seggiolino bambino"
        );
    }

    if (!options.length) {
        return "Bicicletta standard";
    }

    return options.join(
        " + "
    );
}

function getBikeTourLanguages(
    experience,
    tour
) {
    const source =
        tour &&
        tour.languages
            ? tour.languages
            : experience &&
              experience.languages
                ? experience.languages
                : "";

    if (Array.isArray(source)) {
        return source.filter(Boolean);
    }

    if (!source) {
        return [];
    }

    return String(source)
        .split("/")
        .map(
            language =>
                language.trim()
        )
        .filter(Boolean);
}

function getBikeTourLanguageValue(
    experience,
    tour
) {
    const languages =
        getBikeTourLanguages(
            experience,
            tour
        );

    if (!languages.length) {
        return "";
    }

    if (
        selectedBikeLanguage &&
        languages.includes(
            selectedBikeLanguage
        )
    ) {
        return selectedBikeLanguage;
    }

    return languages[0];
}

function getBikeTourLanguageDisplay(
    experience,
    tour
) {
    const languages =
        getBikeTourLanguages(
            experience,
            tour
        );

    return languages.join(
        " / "
    );
}

/* =========================================================
   PREZZI PER MODALITÀ
   ========================================================= */

function getPricingOptions(experience) {
    if (
        !experience ||
        !experience.pricing
    ) {
        return null;
    }

    const pricing =
        experience.pricing;

    const options = [];

    if (
        pricing.shared !== undefined &&
        pricing.shared !== null
    ) {
        options.push({
            id: "shared",
            label: "Condivisa",
            price: Number(
                pricing.shared
            ),
            description:
                "Insieme ad altri partecipanti"
        });
    }

    if (
        pricing.private !== undefined &&
        pricing.private !== null
    ) {
        options.push({
            id: "private",
            label: "Privata",
            price: Number(
                pricing.private
            ),
            description:
                "Solo il vostro gruppo"
        });
    }

    if (
        Array.isArray(
            pricing.modes
        )
    ) {
        pricing.modes.forEach(
            mode => {

                if (!mode) {
                    return;
                }

                const price =
                    Number(
                        mode.price
                    );

                if (
                    !Number.isFinite(
                        price
                    )
                ) {
                    return;
                }

                options.push({
                    id:
                        mode.id ||
                        `mode-${options.length + 1}`,

                    label:
                        mode.label ||
                        "",

                    price: price,

                    description:
                        mode.description ||
                        ""
                });
            }
        );
    }

    return options.length
        ? options
        : null;
}

function getSelectedPrice(
    experience,
    selectedMode
) {
    if (
        isBikeExperience(
            experience
        )
    ) {
        const tour =
            getSelectedBikeTour(
                experience
            );

        return getBikeTourPricePerPerson(
            tour
        );
    }

    const pricingOptions =
        getPricingOptions(
            experience
        );

    if (pricingOptions) {
        const selectedOption =
            pricingOptions.find(
                option =>
                    option.id ===
                    selectedMode
            );

        if (selectedOption) {
            return selectedOption.price;
        }
    }

    return experience.price || 0;
}

function getDefaultPricingMode(
    experience
) {
    if (
        isBikeExperience(
            experience
        )
    ) {
        return null;
    }

    if (
        experience &&
        experience.defaultMode
    ) {
        return experience.defaultMode;
    }

    const pricingOptions =
        getPricingOptions(
            experience
        );

    if (
        pricingOptions &&
        pricingOptions.length > 0
    ) {
        return pricingOptions[0].id;
    }

    return null;
}

function getSelectedModeLabel(
    experience,
    selectedMode
) {
    if (
        isBikeExperience(
            experience
        )
    ) {
        const tour =
            getSelectedBikeTour(
                experience
            );

        return getBikeTourWhatsAppMode(
            tour
        );
    }

    const pricingOptions =
        getPricingOptions(
            experience
        );

    if (pricingOptions) {
        const selectedOption =
            pricingOptions.find(
                option =>
                    option.id ===
                    selectedMode
            );

        if (selectedOption) {
            return selectedOption.label;
        }
    }

    return experience.type || "";
}

function getSelectedModeType(
    experience,
    selectedMode
) {
    if (
        isBikeExperience(
            experience
        )
    ) {
        const tour =
            getSelectedBikeTour(
                experience
            );

        return tour
            ? tour.duration
            : "";
    }

    const pricingOptions =
        getPricingOptions(
            experience
        );

    if (pricingOptions) {
        const selectedOption =
            pricingOptions.find(
                option =>
                    option.id ===
                    selectedMode
            );

        if (selectedOption) {

            if (
                experience.id ===
                "fotografia"
            ) {
                return selectedOption.label;
            }

            return `Esperienza ${selectedOption.label.toLowerCase()}`;
        }
    }

    return experience.type || "";
}

/* =========================================================
   CALCOLO TOTALE
   ========================================================= */

function getExperienceTotal(
    experience,
    participants,
    selectedMode = null
) {
    const price =
        getSelectedPrice(
            experience,
            selectedMode
        );

    if (!price) {
        return 0;
    }

    return (
        Number(price) *
        participants
    );
}

/* =========================================================
   NORMALIZZAZIONE CATEGORIE
   ========================================================= */

function normalizeCategoryValue(
    value
) {
    if (!value) {
        return "";
    }

    return String(value)
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[_]+/g,
            "-"
        )
        .replace(
            /[^a-z0-9\s-]/g,
            ""
        )
        .replace(
            /\s+/g,
            " "
        )
        .replace(
            /-+/g,
            "-"
        );
}

/* =========================================================
   CONVERSIONE CATEGORIA
   ========================================================= */

function canonicalizeCategory(
    value
) {
    const normalized =
        normalizeCategoryValue(
            value
        );

    if (!normalized) {
        return "";
    }

    if (
        normalized === "all" ||
        normalized === "tutte" ||
        normalized === "tutti"
    ) {
        return "all";
    }

    if (
        normalized === "cooking" ||
        normalized === "cucina" ||
        normalized === "corsi di cucina" ||
        normalized === "corso di cucina" ||
        normalized.includes(
            "corsi di cucina"
        ) ||
        normalized.includes(
            "corso di cucina"
        ) ||
        normalized.includes(
            "cooking"
        )
    ) {
        return "cooking";
    }

    if (
        normalized === "minibus" ||
        normalized === "tour in minibus" ||
        normalized === "tour minibus" ||
        normalized.includes(
            "minibus"
        )
    ) {
        return "minibus";
    }

    if (
        normalized === "boat" ||
        normalized === "barca" ||
        normalized === "tour in barca" ||
        normalized === "tour barca" ||
        normalized.includes(
            "barca"
        ) ||
        normalized.includes(
            "boat"
        )
    ) {
        return "boat";
    }

    if (
        normalized === "art" ||
        normalized === "arte" ||
        normalized === "creativita" ||
        normalized === "arte e creativita" ||
        normalized.includes(
            "arte e creativita"
        ) ||
        normalized.includes(
            "creativita"
        )
    ) {
        return "art";
    }

    if (
        normalized === "bici" ||
        normalized === "bike" ||
        normalized === "tour in bici" ||
        normalized === "tour bici" ||
        normalized.includes(
            "tour in bici"
        ) ||
        normalized.includes(
            "tour bici"
        ) ||
        normalized.includes(
            "bici"
        ) ||
        normalized.includes(
            "bike"
        )
    ) {
        return "bici";
    }

    return normalized;
}

/* =========================================================
   IDENTIFICAZIONE CATEGORIA ESPERIENZA
   ========================================================= */

function getExperienceCategory(
    experience
) {
    if (!experience) {
        return "";
    }

    const category =
        canonicalizeCategory(
            experience.category
        );

    const categoryLabel =
        canonicalizeCategory(
            experience.categoryLabel
        );

    const validCategories = [
        "cooking",
        "minibus",
        "boat",
        "art",
        "bici"
    ];

    if (
        validCategories.includes(
            category
        )
    ) {
        return category;
    }

    if (
        validCategories.includes(
            categoryLabel
        )
    ) {
        return categoryLabel;
    }

    const values = [
        normalizeCategoryValue(
            experience.category
        ),
        normalizeCategoryValue(
            experience.categoryLabel
        )
    ];

    for (
        const value of values
    ) {
        if (!value) {
            continue;
        }

        if (
            value.includes(
                "cooking"
            ) ||
            value.includes(
                "cucina"
            )
        ) {
            return "cooking";
        }

        if (
            value.includes(
                "minibus"
            )
        ) {
            return "minibus";
        }

        if (
            value.includes(
                "barca"
            ) ||
            value.includes(
                "boat"
            )
        ) {
            return "boat";
        }

        if (
            value === "art" ||
            value.includes(
                "arte"
            ) ||
            value.includes(
                "creativita"
            )
        ) {
            return "art";
        }

        if (
            value === "bici" ||
            value.includes(
                "bici"
            ) ||
            value.includes(
                "bike"
            )
        ) {
            return "bici";
        }
    }

    return "";
}

/* =========================================================
   VERIFICA CATEGORIA
   ========================================================= */

function experienceMatchesCategory(
    experience,
    selectedCategory
) {
    if (!experience) {
        return false;
    }

    const canonicalSelectedCategory =
        canonicalizeCategory(
            selectedCategory
        );

    if (
        canonicalSelectedCategory ===
        "all"
    ) {
        return true;
    }

    if (
        !canonicalSelectedCategory
    ) {
        return false;
    }

    const experienceCategory =
        getExperienceCategory(
            experience
        );

    return (
        experienceCategory ===
        canonicalSelectedCategory
    );
}

/* =========================================================
   IDENTIFICAZIONE CATEGORIA DEL PULSANTE
   ========================================================= */

function getButtonCategory(
    button
) {
    if (!button) {
        return "all";
    }

    const dataCategory =
        button.getAttribute(
            "data-category"
        );

    if (dataCategory) {
        const categoryFromData =
            canonicalizeCategory(
                dataCategory
            );

        if (categoryFromData) {
            return categoryFromData;
        }
    }

    const buttonText =
        button.textContent
            ? button.textContent.trim()
            : "";

    const categoryFromText =
        canonicalizeCategory(
            buttonText
        );

    if (categoryFromText) {
        return categoryFromText;
    }

    return "all";
}

/* =========================================================
   FILTRO CATEGORIE
   ========================================================= */

let activeCategory = "all";

function setupCategoryFilters() {
    const buttons =
        Array.from(
            document.querySelectorAll(
                ".filter-button"
            )
        );

    if (!buttons.length) {
        console.warn(
            "Nessun pulsante categoria .filter-button trovato."
        );

        return;
    }

    buttons.forEach(
        button => {
            button.addEventListener(
                "click",
                function () {

                    activeCategory =
                        getButtonCategory(
                            button
                        );

                    buttons.forEach(
                        otherButton => {
                            otherButton.classList.toggle(
                                "active",
                                otherButton ===
                                    button
                            );
                        }
                    );

                    renderExperiences();
                }
            );
        }
    );

    const activeButton =
        buttons.find(
            button =>
                button.classList.contains(
                    "active"
                )
        );

    if (activeButton) {
        activeCategory =
            getButtonCategory(
                activeButton
            );
    }
}

/* =========================================================
   CARD
   ========================================================= */

function renderExperiences() {
    const grid =
        document.getElementById(
            "catalog-grid"
        );

    if (!grid) {
        console.error(
            "Elemento #catalog-grid non trovato."
        );

        return;
    }

    grid.innerHTML = "";

    const filteredExperiences =
        experiences.filter(
            experience =>
                experienceMatchesCategory(
                    experience,
                    activeCategory
                )
        );

    filteredExperiences.forEach(
        experience => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "experience-card";

            card.dataset.id =
                experience.id;

            const galleryImages =
                (
                    experience.images ||
                    []
                )
                    .map(
                        (
                            image,
                            index
                        ) => {
                            return `
                                <img
                                    src="${image}"
                                    alt="${experience.title} - Foto ${index + 1}"
                                    loading="${
                                        index === 0
                                            ? "eager"
                                            : "lazy"
                                    }"
                                >
                            `;
                        }
                    )
                    .join("");

            const galleryDots =
                (
                    experience.images ||
                    []
                )
                    .map(
                        (
                            _,
                            index
                        ) => {
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
                    )
                    .join("");

            let cardTitle =
                experience.title;

            let cardDescription =
                experience.shortDescription;

            let cardDuration =
                experience.duration;

            let cardPrice =
                getSelectedPrice(
                    experience,
                    getDefaultPricingMode(
                        experience
                    )
                );

            /*
             * Tour in Bici:
             * una sola card dinamica.
             */

            if (
                isBikeExperience(
                    experience
                )
            ) {
                const selectedTour =
                    getSelectedBikeTour(
                        experience
                    );

                if (selectedTour) {
                    cardTitle =
                        selectedTour.title;

                    cardDescription =
                        selectedTour.shortDescription ||
                        selectedTour.description ||
                        experience.shortDescription;

                    cardDuration =
                        selectedTour.duration;

                    cardPrice =
                        getBikeTourPricePerPerson(
                            selectedTour
                        );
                }
            }

            const priceHtml =
                cardPrice
                    ? `${formatPrice(
                          cardPrice
                      )} / persona`
                    : "Richiedi preventivo";

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
                        ${
                            experience.categoryLabel ||
                            ""
                        }
                    </div>

                    ${
                        isBikeExperience(
                            experience
                        )
                            ? `
                                <div
                                    class="bike-card-selector-wrapper"
                                    style="margin-bottom:12px;"
                                >

                                    <label
                                        for="bike-card-tour-selector"
                                        style="
                                            display:block;
                                            font-size:12px;
                                            margin-bottom:6px;
                                            opacity:.75;
                                        "
                                    >
                                        Scegli il tuo tour
                                    </label>

                                    <select
                                        id="bike-card-tour-selector"
                                        class="bike-card-tour-selector"
                                        style="
                                            width:100%;
                                            padding:10px 12px;
                                            border-radius:8px;
                                            border:1px solid rgba(0,0,0,.12);
                                            background:#fff;
                                        "
                                    >
                                        ${getBikeTours(
                                            experience
                                        )
                                            .map(
                                                tour => `
                                                    <option
                                                        value="${tour.id}"
                                                        ${
                                                            tour.id ===
                                                            selectedBikeTourId
                                                                ? "selected"
                                                                : ""
                                                        }
                                                    >
                                                        ${tour.title}
                                                    </option>
                                                `
                                            )
                                            .join("")}
                                    </select>

                                </div>
                            `
                            : ""
                    }

                    <h3 class="experience-card-title">
                        ${cardTitle}
                    </h3>

                    <p class="experience-card-description">
                        ${
                            cardDescription ||
                            ""
                        }
                    </p>

                    <div class="experience-card-footer">

                        <div>

                            <div class="experience-price">
                                ${priceHtml}
                            </div>

                            <div class="experience-duration">
                                ${
                                    cardDuration ||
                                    ""
                                }
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

            const bikeSelector =
                card.querySelector(
                    "#bike-card-tour-selector"
                );

            if (bikeSelector) {
                bikeSelector.addEventListener(
                    "click",
                    function (
                        event
                    ) {
                        event.stopPropagation();
                    }
                );

                bikeSelector.addEventListener(
                    "change",
                    function (
                        event
                    ) {
                        event.stopPropagation();

                        selectedBikeTourId =
                            bikeSelector.value;

                        selectedBikeElectric =
                            false;

                        selectedBikeChildSeat =
                            false;

                        selectedBikeLanguage =
                            "";

                        renderExperiences();
                    }
                );
            }

            card.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target.closest(
                            ".experience-card-gallery-arrow"
                        ) ||
                        event.target.closest(
                            ".experience-card-gallery-dot"
                        ) ||
                        event.target.closest(
                            ".bike-card-tour-selector"
                        )
                    ) {
                        return;
                    }

                    openExperienceModal(
                        experience.id
                    );
                }
            );

            grid.appendChild(card);
        }
    );
}

/* =========================================================
   GALLERIA CARD
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
            (
                dot,
                dotIndex
            ) => {
                dot.classList.toggle(
                    "active",
                    dotIndex ===
                        index
                );
            }
        );
    }

    function scrollToImage(
        index
    ) {
        if (
            index < 0 ||
            index >=
                experience.images.length
        ) {
            return;
        }

        currentIndex =
            index;

        gallery.scrollTo({
            left:
                gallery.clientWidth *
                currentIndex,
            behavior:
                "smooth"
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
                experience.images.length -
                    1,
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
                    ? experience.images
                          .length - 1
                    : currentIndex - 1;

            scrollToImage(
                index
            );
        }
    );

    nextButton.addEventListener(
        "click",
        function (event) {
            event.stopPropagation();

            const index =
                currentIndex >=
                experience.images.length -
                    1
                    ? 0
                    : currentIndex + 1;

            scrollToImage(
                index
            );
        }
    );

    gallery.addEventListener(
        "scroll",
        function () {
            const index =
                getCurrentIndexFromScroll();

            if (
                index !==
                currentIndex
            ) {
                currentIndex =
                    index;

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
        dot => {
            dot.addEventListener(
                "click",
                function (event) {
                    event.stopPropagation();

                    const index =
                        parseInt(
                            dot.dataset.index,
                            10
                        );

                    scrollToImage(
                        index
                    );
                }
            );
        }
    );

    updateDots(0);
}

/* =========================================================
   CREAZIONE DATI MODAL
   ========================================================= */

function getBikeModalData(
    experience,
    tour
) {
    if (!tour) {
        return {
            title: experience.title,
            shortDescription:
                experience.shortDescription ||
                "",
            description:
                experience.description ||
                "",
            duration:
                experience.duration ||
                "",
            languages:
                experience.languages ||
                "",
            type:
                experience.type ||
                "",
            program: [],
            included:
                experience.included ||
                [],
            notIncluded:
                experience.notIncluded ||
                [],
            meetingPoint:
                experience.meetingPoint ||
                "",
            notAllowed:
                experience.notAllowed ||
                [],
            usefulInfo:
                experience.usefulInfo ||
                []
        };
    }

    return {
        title:
            tour.title ||
            experience.title,

        shortDescription:
            tour.shortDescription ||
            experience.shortDescription ||
            "",

        description:
            tour.description ||
            experience.description ||
            "",

        duration:
            tour.duration ||
            experience.duration ||
            "",

        languages:
            getBikeTourLanguageDisplay(
                experience,
                tour
            ),

        type:
            tour.type ||
            tour.duration ||
            experience.type ||
            "",

        program:
            tour.program ||
            [],

        included:
            tour.included ||
            [],

        notIncluded:
            tour.notIncluded ||
            [],

        meetingPoint:
            tour.meetingPoint ||
            experience.meetingPoint ||
            "",

        notAllowed:
            tour.notAllowed ||
            [],

        usefulInfo:
            tour.usefulInfo ||
            []
    };
}

/* =========================================================
   HTML PROGRAMMA
   ========================================================= */

function createProgramHtml(
    program
) {
    return (
        program || []
    )
        .map(
            (
                step,
                index
            ) => {

                const isStringStep =
                    typeof step ===
                    "string";

                const stepTitle =
                    isStringStep
                        ? step
                        : step.title ||
                          "";

                const description =
                    isStringStep
                        ? ""
                        : step.description ||
                          step.text ||
                          "";

                return `
                    <div class="itinerary-stop">

                        <span class="itinerary-number">
                            Tappa ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <h4>
                            ${stepTitle}
                        </h4>

                        ${
                            description
                                ? `
                                    <p>
                                        ${description}
                                    </p>
                                `
                                : ""
                        }

                    </div>
                `;
            }
        )
        .join("");
}

function createListHtml(
    items
) {
    return (
        items || []
    )
        .map(
            item => `
                <li>
                    ${item}
                </li>
            `
        )
        .join("");
}

function createMeetingPointHtml(
    meetingPoint
) {
    const meetingPoints =
        Array.isArray(
            meetingPoint
        )
            ? meetingPoint
            : meetingPoint
                ? [
                      meetingPoint
                  ]
                : [];

    return meetingPoints
        .map(
            point => `
                <div class="meeting-point-item">

                    <span class="meeting-point-marker">
                        ●
                    </span>

                    <span class="meeting-point-text">
                        ${point}
                    </span>

                </div>
            `
        )
        .join("");
}

/* =========================================================
   AGGIORNAMENTO CONTENUTI TOUR IN BICI
   ========================================================= */

function updateBikeTourModalContent(
    experience
) {
    if (
        !isBikeExperience(
            experience
        )
    ) {
        return;
    }

    const tour =
        getSelectedBikeTour(
            experience
        );

    if (!tour) {
        return;
    }

    const data =
        getBikeModalData(
            experience,
            tour
        );

    const titleElement =
        document.getElementById(
            "bike-modal-title"
        );

    const shortElement =
        document.getElementById(
            "bike-modal-short"
        );

    const durationElement =
        document.getElementById(
            "bike-modal-duration"
        );

    const languagesElement =
        document.getElementById(
            "bike-modal-languages"
        );

    const typeElement =
        document.getElementById(
            "modal-experience-type"
        );

    const priceElement =
        document.getElementById(
            "modal-experience-price"
        );

    const programElement =
        document.getElementById(
            "bike-modal-program"
        );

    const descriptionElement =
        document.getElementById(
            "bike-modal-description"
        );

    const includedElement =
        document.getElementById(
            "bike-modal-included"
        );

    const notIncludedElement =
        document.getElementById(
            "bike-modal-not-included"
        );

    const meetingElement =
        document.getElementById(
            "bike-modal-meeting"
        );

    const notAllowedElement =
        document.getElementById(
            "bike-modal-not-allowed"
        );

    const usefulInfoElement =
        document.getElementById(
            "bike-modal-useful-info"
        );

    if (titleElement) {
        titleElement.textContent =
            data.title;
    }

    if (shortElement) {
        shortElement.textContent =
            data.shortDescription;
    }

    if (durationElement) {
        durationElement.textContent =
            data.duration;
    }

    if (languagesElement) {
        languagesElement.textContent =
            data.languages;
    }

    if (typeElement) {
        typeElement.textContent =
            data.type;
    }

    if (programElement) {
        programElement.innerHTML =
            createProgramHtml(
                data.program
            );
    }

    if (descriptionElement) {
        descriptionElement.textContent =
            data.description;
    }

    if (includedElement) {
        includedElement.innerHTML =
            createListHtml(
                data.included
            );
    }

    if (notIncludedElement) {
        notIncludedElement.innerHTML =
            createListHtml(
                data.notIncluded
            );
    }

    if (meetingElement) {
        meetingElement.innerHTML =
            createMeetingPointHtml(
                data.meetingPoint
            );
    }

    if (notAllowedElement) {
        notAllowedElement.innerHTML =
            createListHtml(
                data.notAllowed
            );
    }

    if (usefulInfoElement) {
        usefulInfoElement.innerHTML =
            createListHtml(
                data.usefulInfo
            );
    }

    updateBikeTourOptions(
        experience
    );

    updateBikeTourPriceDisplay(
        experience
    );
}

/* =========================================================
   AGGIORNAMENTO OPZIONI BIKE
   ========================================================= */

function updateBikeTourOptions(
    experience
) {
    const tour =
        getSelectedBikeTour(
            experience
        );

    if (!tour) {
        return;
    }

    const electricWrapper =
        document.getElementById(
            "bike-electric-wrapper"
        );

    const childWrapper =
        document.getElementById(
            "bike-child-wrapper"
        );

    const electricOption =
        document.getElementById(
            "bike-electric-option"
        );

    const childSeatOption =
        document.getElementById(
            "bike-child-seat-option"
        );

    if (electricOption) {
        electricOption.checked =
            selectedBikeElectric;
    }

    if (childSeatOption) {
        childSeatOption.checked =
            selectedBikeChildSeat;
    }

    if (electricWrapper) {
        electricWrapper.style.display =
            bikeTourHasElectricBike(
                tour
            )
                ? "flex"
                : "none";
    }

    if (
        !bikeTourHasElectricBike(
            tour
        )
    ) {
        selectedBikeElectric =
            false;
    }

    const languages =
        getBikeTourLanguages(
            experience,
            tour
        );

    const languageSelect =
        document.getElementById(
            "bike-language"
        );

    if (languageSelect) {
        languageSelect.innerHTML =
            languages
                .map(
                    language => `
                        <option
                            value="${language}"
                            ${
                                getBikeTourLanguageValue(
                                    experience,
                                    tour
                                ) === language
                                    ? "selected"
                                    : ""
                            }
                        >
                            ${language}
                        </option>
                    `
                )
                .join("");

        const selectedLanguage =
            getBikeTourLanguageValue(
                experience,
                tour
            );

        languageSelect.value =
            selectedLanguage;

        selectedBikeLanguage =
            selectedLanguage;
    }

    if (childWrapper) {
        childWrapper.style.display =
            "flex";
    }
}

/* =========================================================
   PREZZO BIKE
   ========================================================= */

function updateBikeTourPriceDisplay(
    experience
) {
    const tour =
        getSelectedBikeTour(
            experience
        );

    if (!tour) {
        return;
    }

    const pricePerPerson =
        getBikeTourPricePerPerson(
            tour
        );

    const participantsSelect =
        document.getElementById(
            "pizza-participants"
        );

    const totalElement =
        document.getElementById(
            "pizza-total-price"
        );

    const modalPriceElement =
        document.getElementById(
            "modal-experience-price"
        );

    const modalTypeElement =
        document.getElementById(
            "modal-experience-type"
        );

    const participants =
        participantsSelect
            ? parseInt(
                  participantsSelect.value,
                  10
              ) || 1
            : 1;

    if (modalPriceElement) {
        modalPriceElement.textContent =
            `${formatPrice(
                pricePerPerson
            )} / persona`;
    }

    if (modalTypeElement) {
        modalTypeElement.textContent =
            tour.duration || "";
    }

    if (totalElement) {
        totalElement.textContent =
            formatPrice(
                pricePerPerson *
                    participants
            );
    }
}

/* =========================================================
   MODAL
   ========================================================= */

function openExperienceModal(
    id
) {
    const experience =
        experiences.find(
            item =>
                item.id === id
        );

    if (!experience) {
        console.error(
            "Esperienza non trovata:",
            id
        );

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

    if (
        !modal ||
        !modalContent
    ) {
        console.error(
            "Elementi modal non trovati."
        );

        return;
    }

    const selectedBikeTour =
        isBikeExperience(
            experience
        )
            ? getSelectedBikeTour(
                  experience
              )
            : null;

    const modalData =
        isBikeExperience(
            experience
        )
            ? getBikeModalData(
                  experience,
                  selectedBikeTour
              )
            : experience;

    const program =
        isBikeExperience(
            experience
        )
            ? modalData.program
            : experience.program ||
              experience.preparation ||
              [];

    const isCookingProgram =
        Boolean(
            experience.preparation &&
                !experience.program
        );

    const programHeading =
        isCookingProgram
            ? "Preparazione"
            : "Il programma";

    const programHtml =
        isBikeExperience(
            experience
        )
            ? createProgramHtml(
                  program
              )
            : program
                  .map(
                      (
                          step,
                          index
                      ) => {

                          const isStringStep =
                              typeof step ===
                              "string";

                          const stepTitle =
                              isStringStep
                                  ? step
                                  : step.title ||
                                    "";

                          const description =
                              isStringStep
                                  ? ""
                                  : step.description ||
                                    step.text ||
                                    "";

                          return `
                            <div class="itinerary-stop">

                                <span class="itinerary-number">
                                    ${
                                        isCookingProgram
                                            ? "Procedura"
                                            : "Tappa"
                                    }
                                    ${String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                <h4>
                                    ${stepTitle}
                                </h4>

                                ${
                                    description
                                        ? `
                                            <p>
                                                ${description}
                                            </p>
                                        `
                                        : ""
                                }

                            </div>
                        `;
                      }
                  )
                  .join("");

    const included =
        isBikeExperience(
            experience
        )
            ? modalData.included
            : experience.included ||
              [];

    const notIncluded =
        isBikeExperience(
            experience
        )
            ? modalData.notIncluded
            : experience.notIncluded ||
              [];

    const notAllowed =
        isBikeExperience(
            experience
        )
            ? modalData.notAllowed
            : experience.notAllowed ||
              [];

    const usefulInfo =
        isBikeExperience(
            experience
        )
            ? modalData.usefulInfo
            : experience.usefulInfo ||
              [];

    const meetingPoint =
        isBikeExperience(
            experience
        )
            ? modalData.meetingPoint
            : experience.meetingPoint;

    const includedHtml =
        createListHtml(
            included
        );

    const notIncludedHtml =
        createListHtml(
            notIncluded
        );

    const notAllowedHtml =
        createListHtml(
            notAllowed
        );

    const usefulInfoHtml =
        createListHtml(
            usefulInfo
        );

    const meetingPointHtml =
        createMeetingPointHtml(
            meetingPoint
        );

    /* =====================================================
       PREZZI
       ===================================================== */

    const pricingOptions =
        getPricingOptions(
            experience
        );

    const defaultMode =
        getDefaultPricingMode(
            experience
        );

    const initialPrice =
        getSelectedPrice(
            experience,
            defaultMode
        );

    const initialType =
        getSelectedModeType(
            experience,
            defaultMode
        );

    const minParticipants =
        Number.isInteger(
            experience.minParticipants
        )
            ? experience.minParticipants
            : 1;

    const maxParticipants =
        Number.isInteger(
            experience.maxParticipants
        )
            ? experience.maxParticipants
            : 10;

    const participantOptionsHtml =
        Array.from(
            {
                length:
                    maxParticipants -
                    minParticipants +
                    1
            },
            (
                _,
                index
            ) => {
                const number =
                    minParticipants +
                    index;

                return `
                    <option
                        value="${number}"
                    >
                        ${number}
                        ${
                            number ===
                            1
                                ? "persona"
                                : "persone"
                        }
                    </option>
                `;
            }
        ).join("");

    const priceHtml =
        initialPrice
            ? `${formatPrice(
                  initialPrice
              )} / persona`
            : "Richiedi preventivo";

    const initialTotal =
        initialPrice
            ? formatPrice(
                  getExperienceTotal(
                      experience,
                      minParticipants,
                      defaultMode
                  )
              )
            : "Richiedi preventivo";

    /* =====================================================
       SELETTORE TOUR IN BICI
       ===================================================== */

    const bikeTourSelectorHtml =
        isBikeExperience(
            experience
        )
            ? `
                <div
                    class="experience-pricing-selector"
                    id="bike-tour-selector-wrapper"
                >

                    <div class="experience-pricing-title">
                        Scegli il tuo tour
                    </div>

                    <div
                        class="experience-pricing-options"
                        style="display:block;"
                    >

                        <select
                            id="bike-tour-selector"
                            style="
                                width:100%;
                                padding:12px 14px;
                                border-radius:10px;
                                border:1px solid rgba(0,0,0,.12);
                                background:#fff;
                                font-size:14px;
                            "
                        >
                            ${getBikeTours(
                                experience
                            )
                                .map(
                                    tour => `
                                        <option
                                            value="${tour.id}"
                                            ${
                                                tour.id ===
                                                selectedBikeTourId
                                                    ? "selected"
                                                    : ""
                                            }
                                        >
                                            ${tour.title}
                                        </option>
                                    `
                                )
                                .join("")}
                        </select>

                        <div
                            id="bike-language-wrapper"
                            style="
                                margin-top:14px;
                            "
                        >

                            <label
                                for="bike-language"
                                style="
                                    display:block;
                                    font-size:13px;
                                    margin-bottom:7px;
                                "
                            >
                                Lingua
                            </label>

                            <select
                                id="bike-language"
                                style="
                                    width:100%;
                                    padding:12px 14px;
                                    border-radius:10px;
                                    border:1px solid rgba(0,0,0,.12);
                                    background:#fff;
                                    font-size:14px;
                                "
                            >
                                ${getBikeTourLanguages(
                                    experience,
                                    selectedBikeTour
                                )
                                    .map(
                                        language => `
                                            <option
                                                value="${language}"
                                                ${
                                                    getBikeTourLanguageValue(
                                                        experience,
                                                        selectedBikeTour
                                                    ) === language
                                                        ? "selected"
                                                        : ""
                                                }
                                            >
                                                ${language}
                                            </option>
                                        `
                                    )
                                    .join("")}
                            </select>

                        </div>

                        <div
                            id="bike-tour-options"
                            style="
                                margin-top:14px;
                                display:flex;
                                flex-direction:column;
                                gap:10px;
                            "
                        >

                            <label
                                id="bike-electric-wrapper"
                                style="
                                    display:flex;
                                    align-items:center;
                                    gap:10px;
                                    cursor:pointer;
                                "
                            >

                                <input
                                    type="checkbox"
                                    id="bike-electric-option"
                                    ${
                                        selectedBikeElectric
                                            ? "checked"
                                            : ""
                                    }
                                >

                                <span>
                                    E-bike
                                    <strong>
                                        +15 € / persona
                                    </strong>
                                </span>

                            </label>

                            <label
                                id="bike-child-wrapper"
                                style="
                                    display:flex;
                                    align-items:center;
                                    gap:10px;
                                    cursor:pointer;
                                "
                            >

                                <input
                                    type="checkbox"
                                    id="bike-child-seat-option"
                                    ${
                                        selectedBikeChildSeat
                                            ? "checked"
                                            : ""
                                    }
                                >

                                <span>
                                    Seggiolino bambino
                                    <strong>
                                        +5 € / persona
                                    </strong>
                                </span>

                            </label>

                        </div>

                    </div>
                </div>
            `
            : "";

    const pricingSelectorHtml =
        isBikeExperience(
            experience
        )
            ? bikeTourSelectorHtml
            : pricingOptions
                ? `
                    <div
                        class="experience-pricing-selector"
                        id="experience-pricing-selector"
                    >

                        <div class="experience-pricing-title">
                            ${
                                experience.id ===
                                "fotografia"
                                    ? "Scegli la durata"
                                    : "Come vuoi partecipare?"
                            }
                        </div>

                        <div class="experience-pricing-options">

                            ${pricingOptions
                                .map(
                                    option => `
                                        <button
                                            type="button"
                                            class="experience-pricing-option ${
                                                option.id ===
                                                defaultMode
                                                    ? "active"
                                                    : ""
                                            }"
                                            data-pricing-mode="${option.id}"
                                        >

                                            <span
                                                class="experience-pricing-option-label"
                                            >
                                                ${option.label}
                                            </span>

                                            <strong>
                                                ${formatPrice(
                                                    option.price
                                                )}
                                                / persona
                                            </strong>

                                            ${
                                                option.description
                                                    ? `
                                                        <small>
                                                            ${option.description}
                                                        </small>
                                                    `
                                                    : ""
                                            }

                                        </button>
                                    `
                                )
                                .join("")}

                        </div>
                    </div>
                `
                : "";

    /* =====================================================
       HTML MODAL
       ===================================================== */

    modalContent.innerHTML = `
        <div class="modal-body">

            <div class="modal-hero">

                <div class="modal-hero-image">

                    <img
                        id="pizza-main-image"
                        src="${modalExperienceImage(
                            experience,
                            selectedBikeTour
                        )}"
                        alt="${modalData.title}"
                    >

                </div>

                <div class="modal-hero-info">

                    <div class="modal-category">
                        ${experience.categoryLabel}
                    </div>

                    <h2
                        class="modal-title"
                        id="${
                            isBikeExperience(
                                experience
                            )
                                ? "bike-modal-title"
                                : ""
                        }"
                    >
                        ${modalData.title}
                    </h2>

                    <p
                        class="modal-short"
                        id="${
                            isBikeExperience(
                                experience
                            )
                                ? "bike-modal-short"
                                : ""
                        }"
                    >
                        ${
                            modalData.shortDescription ||
                            ""
                        }
                    </p>

                    <div class="modal-meta">

                        <div
                            class="modal-meta-item modal-meta-duration"
                            id="${
                                isBikeExperience(
                                    experience
                                )
                                    ? "bike-modal-duration"
                                    : ""
                            }"
                        >
                            ${modalData.duration || ""}
                        </div>

                        <div
                            class="modal-meta-item modal-meta-languages"
                            id="${
                                isBikeExperience(
                                    experience
                                )
                                    ? "bike-modal-languages"
                                    : ""
                            }"
                        >
                            ${modalData.languages || ""}
                        </div>

                      ${
    isBikeExperience(
        experience
    )
        ? ""
        : `
            <div
                class="modal-meta-item modal-meta-type"
                id="modal-experience-type"
            >
                ${initialType}
            </div>
        `
}

                        <div
                            class="modal-meta-item modal-meta-price"
                            id="modal-experience-price"
                        >
                            ${priceHtml}
                        </div>

                    </div>

                </div>

            </div>

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

                <div class="pizza-mobile-gallery-dots">

                    ${(experience.images || [])
                        .map(
                            (
                                image,
                                index
                            ) => `
                                <button
                                    type="button"
                                    class="pizza-mobile-gallery-dot ${
                                        index === 0
                                            ? "active"
                                            : ""
                                    }"
                                    data-mobile-gallery-index="${index}"
                                    aria-label="Visualizza foto ${
                                        index + 1
                                    }"
                                ></button>
                            `
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

            <section class="pizza-modal-gallery">

                <div class="pizza-modal-gallery-inner">

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

                        ${(experience.images || [])
                            .slice(1)
                            .map(
                                (
                                    image,
                                    index
                                ) => {
                                    const realIndex =
                                        index +
                                        1;

                                    return `
                                        <button
                                            type="button"
                                            class="pizza-gallery-thumb"
                                            data-index="${realIndex}"
                                            aria-label="Visualizza foto ${
                                                realIndex +
                                                1
                                            }"
                                        >

                                            <img
                                                src="${image}"
                                                alt="${modalData.title} - Foto ${
                                                    realIndex +
                                                    1
                                                }"
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

            </section>${pricingSelectorHtml}

            <div
                class="pizza-booking"
                style="margin-top:20px;"
            >

                <div class="pizza-booking-fields">

                    <div>

                        <label for="pizza-date">
                            Data
                        </label>

                        <input
                            type="date"
                            id="pizza-date"
                        >

                    </div>

                    <div>

                        <label for="pizza-participants">
                            Persone
                        </label>

                        <select
                            id="pizza-participants"
                        >

                            ${participantOptionsHtml}

                        </select>

                    </div>

                </div>

            </div>

            

            <section
                class="pizza-booking"
                style="margin-top:0;"
            >

                <button
                    type="button"
                    class="whatsapp-button"
                    id="pizza-whatsapp-button"
                >
                    Richiedi disponibilità su WhatsApp
                </button>

                <div class="pizza-total">

                    <span>
                        Totale esperienza
                    </span>

                    <strong id="pizza-total-price">
                        ${initialTotal}
                    </strong>

                </div>

            </section>

            <section class="modal-section">

                <h3>
                    ${programHeading}
                </h3>

                <div
                    class="itinerary"
                    id="${
                        isBikeExperience(
                            experience
                        )
                            ? "bike-modal-program"
                            : ""
                    }"
                >
                    ${programHtml}
                </div>

            </section>

            <section class="modal-section">

                <h3>
                    L'attività in breve
                </h3>

                <p
                    id="${
                        isBikeExperience(
                            experience
                        )
                            ? "bike-modal-short"
                            : ""
                    }"
                >
                    ${
                        modalData.shortDescription ||
                        ""
                    }
                </p>

            </section>

            <section class="modal-section">

                <h3>
                    Descrizione completa
                </h3>

                <p
                    style="white-space: pre-line;"
                    id="${
                        isBikeExperience(
                            experience
                        )
                            ? "bike-modal-description"
                            : ""
                    }"
                >
                    ${modalData.description || ""}
                </p>

            </section>

            <section class="modal-section">

                <div class="detail-columns">

                    <div class="detail-box include">

                        <h3>
                            Cosa è incluso
                        </h3>

                        <ul
                            id="${
                                isBikeExperience(
                                    experience
                                )
                                    ? "bike-modal-included"
                                    : ""
                            }"
                        >
                            ${includedHtml}
                        </ul>

                    </div>

                    ${
                        notIncludedHtml
                            ? `
                                <div class="detail-box exclude">

                                    <h3>
                                        Cosa non è incluso
                                    </h3>

                                    <ul
                                        id="${
                                            isBikeExperience(
                                                experience
                                            )
                                                ? "bike-modal-not-included"
                                                : ""
                                        }"
                                    >
                                        ${notIncludedHtml}
                                    </ul>

                                </div>
                            `
                            : ""
                    }

                </div>

            </section>

            <section class="modal-section">

                <div class="meeting-box">

                    <h3>
                        Punti di incontro
                    </h3>

                    <div
                        class="meeting-points-list"
                        id="${
                            isBikeExperience(
                                experience
                            )
                                ? "bike-modal-meeting"
                                : ""
                        }"
                    >
                        ${meetingPointHtml}
                    </div>

                </div>

            </section>

            ${
                notAllowedHtml
                    ? `
                        <section class="modal-section">

                            <h3>
                                Non ammesso
                            </h3>

                            <ul
                                id="${
                                    isBikeExperience(
                                        experience
                                    )
                                        ? "bike-modal-not-allowed"
                                        : ""
                                }"
                            >
                                ${notAllowedHtml}
                            </ul>

                        </section>
                    `
                    : ""
            }

            ${
                usefulInfoHtml
                    ? `
                        <section class="modal-section">

                            <h3>
                                Informazioni utili
                            </h3>

                            <ul
                                id="${
                                    isBikeExperience(
                                        experience
                                    )
                                        ? "bike-modal-useful-info"
                                        : ""
                                }"
                            >
                                ${usefulInfoHtml}
                            </ul>

                        </section>
                    `
                    : ""
            }

        </div>
    `;

    setupExperienceGallery(
        experience
    );

    setupExperienceBooking(
        experience,
        defaultMode
    );

    if (
        isBikeExperience(
            experience
        )
    ) {
        setupBikeTourSelector(
            experience
        );
    } else {
        setupPricingSelector(
            experience,
            defaultMode
        );
    }

    const whatsappButton =
        document.getElementById(
            "pizza-whatsapp-button"
        );

    if (whatsappButton) {
        whatsappButton.addEventListener(
            "click",
            function () {
                requestExperienceAvailability(
                    experience
                );
            }
        );
    }

    modal.classList.add(
        "open"
    );

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}

/* =========================================================
   IMMAGINE PRINCIPALE MODAL
   ========================================================= */

function modalExperienceImage(
    experience,
    selectedTour
) {
    /*
     * Il Tour in Bici utilizza
     * sempre la galleria principale
     * dell'esperienza.
     */

    if (
        experience &&
        Array.isArray(
            experience.images
        ) &&
        experience.images.length
    ) {
        return experience.images[0];
    }

    if (
        selectedTour &&
        Array.isArray(
            selectedTour.images
        ) &&
        selectedTour.images.length
    ) {
        return selectedTour.images[0];
    }

    return "";
}

/* =========================================================
   SELETTORE TOUR IN BICI
   ========================================================= */

function setupBikeTourSelector(
    experience
) {
    const selector =
        document.getElementById(
            "bike-tour-selector"
        );

    if (!selector) {
        return;
    }

    selector.addEventListener(
        "change",
        function () {

            selectedBikeTourId =
                selector.value;

            selectedBikeElectric =
                false;

            selectedBikeChildSeat =
                false;

            selectedBikeLanguage =
                "";

            /*
             * Non chiudiamo e non
             * riapriamo il modal.
             * Aggiorniamo direttamente
             * tutti i contenuti.
             */

            updateBikeTourModalContent(
                experience
            );

            updateBikeTourCard(
                experience
            );
        }
    );

    const languageSelect =
        document.getElementById(
            "bike-language"
        );

    if (languageSelect) {
        languageSelect.addEventListener(
            "change",
            function () {

                selectedBikeLanguage =
                    languageSelect.value;

            }
        );
    }

    const electricOption =
        document.getElementById(
            "bike-electric-option"
        );

    if (electricOption) {
        electricOption.addEventListener(
            "change",
            function () {

                selectedBikeElectric =
                    electricOption.checked;

                updateBikeTourPriceDisplay(
                    experience
                );
            }
        );
    }

    const childSeatOption =
        document.getElementById(
            "bike-child-seat-option"
        );

    if (childSeatOption) {
        childSeatOption.addEventListener(
            "change",
            function () {

                selectedBikeChildSeat =
                    childSeatOption.checked;

                updateBikeTourPriceDisplay(
                    experience
                );
            }
        );
    }

    updateBikeTourOptions(
        experience
    );

    updateBikeTourPriceDisplay(
        experience
    );
}

/* =========================================================
   AGGIORNAMENTO CARD BIKE
   ========================================================= */

function updateBikeTourCard(
    experience
) {
    if (
        !isBikeExperience(
            experience
        )
    ) {
        return;
    }

    /*
     * Manteniamo una sola card.
     * La ricreiamo per aggiornare titolo,
     * descrizione, durata e prezzo.
     */

    renderExperiences();
}

/* =========================================================
   SELETTORE CONDIVISA / PRIVATA / MODALITÀ
   ========================================================= */

function setupPricingSelector(
    experience,
    defaultMode
) {
    const pricingOptions =
        getPricingOptions(
            experience
        );

    if (!pricingOptions) {
        return;
    }

    const buttons =
        Array.from(
            document.querySelectorAll(
                "[data-pricing-mode]"
            )
        );

    buttons.forEach(
        button => {
            button.addEventListener(
                "click",
                function () {
                    const selectedMode =
                        button.dataset
                            .pricingMode;

                    buttons.forEach(
                        otherButton => {
                            otherButton.classList.toggle(
                                "active",
                                otherButton ===
                                    button
                            );
                        }
                    );

                    updateExperiencePrice(
                        experience,
                        selectedMode
                    );
                }
            );
        }
    );

    updateExperiencePrice(
        experience,
        defaultMode
    );
}

/* =========================================================
   GALLERIA MODAL
   ========================================================= */

function setupExperienceGallery(
    experience
) {
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

    function updateGallery(
        index
    ) {
        if (
            index < 0 ||
            index >=
                experience.images.length
        ) {
            return;
        }

        currentIndex =
            index;

        mainImage.src =
            experience.images[
                currentIndex
            ];

        const currentBikeTour =
            isBikeExperience(
                experience
            )
                ? getSelectedBikeTour(
                      experience
                  )
                : null;

        mainImage.alt =
            `${
                currentBikeTour
                    ? currentBikeTour.title
                    : experience.title
            } - Foto ${
                currentIndex + 1
            }`;

        thumbnails.forEach(
            thumbnail => {
                const thumbnailIndex =
                    parseInt(
                        thumbnail.dataset
                            .index,
                        10
                    );

                const isActive =
                    thumbnailIndex ===
                    currentIndex;

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
            dot => {
                const dotIndex =
                    parseInt(
                        dot.dataset
                            .mobileGalleryIndex,
                        10
                    );

                dot.classList.toggle(
                    "active",
                    dotIndex ===
                        currentIndex
                );
            }
        );

        const activeThumbnail =
            thumbnails.find(
                thumbnail =>
                    parseInt(
                        thumbnail.dataset
                            .index,
                        10
                    ) ===
                    currentIndex
            );

        if (
            activeThumbnail
        ) {
            activeThumbnail.scrollIntoView(
                {
                    behavior:
                        "smooth",
                    block:
                        "nearest",
                    inline:
                        "center"
                }
            );
        }
    }

    thumbnails.forEach(
        thumbnail => {
            thumbnail.addEventListener(
                "click",
                function (event) {
                    event.stopPropagation();

                    const index =
                        parseInt(
                            thumbnail.dataset
                                .index,
                            10
                        );

                    updateGallery(
                        index
                    );
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
                        ? experience
                              .images
                              .length -
                          1
                        : currentIndex -
                          1;

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
                    currentIndex >=
                    experience.images
                        .length -
                        1
                        ? 0
                        : currentIndex +
                          1;

                updateGallery(
                    nextIndex
                );
            }
        );
    }

    if (
        mobilePreviousButton
    ) {
        mobilePreviousButton.addEventListener(
            "click",
            function (event) {
                event.stopPropagation();

                const previousIndex =
                    currentIndex <= 0
                        ? experience
                              .images
                              .length -
                          1
                        : currentIndex -
                          1;

                updateGallery(
                    previousIndex
                );
            }
        );
    }

    if (
        mobileNextButton
    ) {
        mobileNextButton.addEventListener(
            "click",
            function (event) {
                event.stopPropagation();

                const nextIndex =
                    currentIndex >=
                    experience.images
                        .length -
                        1
                        ? 0
                        : currentIndex +
                          1;

                updateGallery(
                    nextIndex
                );
            }
        );
    }

    mobileDots.forEach(
        dot => {
            dot.addEventListener(
                "click",
                function (event) {
                    event.stopPropagation();

                    const index =
                        parseInt(
                            dot.dataset
                                .mobileGalleryIndex,
                            10
                        );

                    updateGallery(
                        index
                    );
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
                event.touches.length >
                    0
            ) {
                touchStartX =
                    event.touches[0]
                        .clientX;

                touchStartY =
                    event.touches[0]
                        .clientY;
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
                event.changedTouches
                    .length === 0
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
                Math.abs(
                    differenceX
                ) < 45 ||
                Math.abs(
                    differenceX
                ) <
                    Math.abs(
                        differenceY
                    )
            ) {
                return;
            }

            if (
                differenceX > 0
            ) {
                const nextIndex =
                    currentIndex >=
                    experience.images
                        .length -
                        1
                        ? 0
                        : currentIndex +
                          1;

                updateGallery(
                    nextIndex
                );
            } else {
                const previousIndex =
                    currentIndex <= 0
                        ? experience
                              .images
                              .length -
                          1
                        : currentIndex -
                          1;

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

    modal.classList.remove(
        "open"
    );

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
        if (
            event.key ===
            "Escape"
        ) {
            closeExperienceModal();
        }
    }
);

/* =========================================================
   BOOKING
   ========================================================= */

let activeBookingExperience =
    null;

let activeBookingMode =
    null;

function setupExperienceBooking(
    experience,
    selectedMode = null
) {
    activeBookingExperience =
        experience;

    activeBookingMode =
        selectedMode;

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
        function () {

            if (
                isBikeExperience(
                    experience
                )
            ) {
                updateBikeTourPriceDisplay(
                    experience
                );

                return;
            }

            updateExperiencePrice(
                experience,
                activeBookingMode
            );
        }
    );

    updateExperiencePrice(
        experience,
        selectedMode
    );
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
        ).padStart(
            2,
            "0"
        );

    const day =
        String(
            today.getDate()
        ).padStart(
            2,
            "0"
        );

    dateInput.min =
        `${year}-${month}-${day}`;
}

/* =========================================================
   PREZZO DINAMICO
   ========================================================= */

function updateExperiencePrice(
    experience,
    selectedMode = null
) {
    activeBookingMode =
        selectedMode;

    if (
        isBikeExperience(
            experience
        )
    ) {
        updateBikeTourPriceDisplay(
            experience
        );

        return;
    }

    const participantsSelect =
        document.getElementById(
            "pizza-participants"
        );

    const totalElement =
        document.getElementById(
            "pizza-total-price"
        );

    const modalPriceElement =
        document.getElementById(
            "modal-experience-price"
        );

    const modalTypeElement =
        document.getElementById(
            "modal-experience-type"
        );

    if (
        !participantsSelect ||
        !totalElement
    ) {
        return;
    }

    const minParticipants =
        Number.isInteger(
            experience.minParticipants
        )
            ? experience.minParticipants
            : 1;

    const participants =
        parseInt(
            participantsSelect.value,
            10
        ) || minParticipants;

    const selectedPrice =
        getSelectedPrice(
            experience,
            selectedMode
        );

    if (
        modalTypeElement
    ) {
        modalTypeElement.textContent =
            getSelectedModeType(
                experience,
                selectedMode
            );
    }

    if (!selectedPrice) {
        totalElement.textContent =
            "Richiedi preventivo";

        if (
            modalPriceElement
        ) {
            modalPriceElement.textContent =
                "Richiedi preventivo";
        }

        return;
    }

    if (
        modalPriceElement
    ) {
        modalPriceElement.textContent =
            `${formatPrice(
                selectedPrice
            )} / persona`;
    }

    const total =
        getExperienceTotal(
            experience,
            participants,
            selectedMode
        );

    totalElement.textContent =
        formatPrice(total);
}

/* =========================================================
   WHATSAPP
   ========================================================= */

function requestExperienceAvailability(
    experience
) {
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

    const minParticipants =
        Number.isInteger(
            experience.minParticipants
        )
            ? experience.minParticipants
            : 1;

    const participants =
        parseInt(
            participantsSelect.value,
            10
        ) || minParticipants;

    const selectedMode =
        activeBookingMode;

    const total =
        getExperienceTotal(
            experience,
            participants,
            selectedMode
        );

    const formattedDate =
        formatItalianDate(
            selectedDate
        );

    const totalText =
        total
            ? `${total} €`
            : "Richiedi preventivo";

    let message;

    /*
     * Messaggio specifico Tour in Bici.
     */

    if (
        isBikeExperience(
            experience
        )
    ) {
        const tour =
            getSelectedBikeTour(
                experience
            );

        const options =
            getBikeTourWhatsAppMode(
                tour
            );

        const language =
            getBikeTourLanguageValue(
                experience,
                tour
            );

        message =
            `Ciao, vorrei richiedere disponibilità per il Tour in Bici.

Tour: ${tour ? tour.title : ""}

Lingua: ${language}

Opzione: ${options}

Data richiesta: ${formattedDate}

Partecipanti: ${participants}

Prezzo per persona: ${
                tour
                    ? getBikeTourPricePerPerson(
                          tour
                      )
                    : ""
            } €

Totale: ${totalText}

Grazie.`;

    } else {

        const modeText =
            getSelectedModeLabel(
                experience,
                selectedMode
            );

        message =
            `Ciao, vorrei richiedere disponibilità per: ${experience.title}

Modalità: ${modeText}

Data richiesta: ${formattedDate}

Partecipanti: ${participants}

Totale: ${totalText}

Grazie.`;
    }

    const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

    window.open(
        whatsappUrl,
        "_blank"
    );
}

/* =========================================================
   FUNZIONE DI CARICAMENTO GENERICA
   ========================================================= */

function addExperienceToCatalog(
    experience
) {
    if (!experience) {
        return;
    }

    const alreadyExists =
        experiences.some(
            item =>
                item.id ===
                experience.id
        );

    if (
        !alreadyExists
    ) {
        experiences.push(
            experience
        );

        renderExperiences();

        renderFeaturedExperiences();
    }
}
function renderFeaturedExperiences() {

    const featuredGrid =
        document.getElementById(
            "featured-grid"
        );

    if (!featuredGrid) {
        return;
    }

    const experiencesByCategory = {};

    experiences.forEach(
        function (experience) {

            if (
                !experience ||
                !experience.category
            ) {
                return;
            }

            if (
                !experiencesByCategory[
                    experience.category
                ]
            ) {
                experiencesByCategory[
                    experience.category
                ] = [];
            }

            experiencesByCategory[
                experience.category
            ].push(
                experience
            );
        }
    );

    const categories =
        Object.keys(
            experiencesByCategory
        );

    if (
        categories.length < 3
    ) {
        return;
    }

    const shuffledCategories =
        categories
            .slice()
            .sort(
                function () {
                    return Math.random() - 0.5;
                }
            );

    const selectedCategories =
        shuffledCategories.slice(
            0,
            3
        );

    const selectedExperiences =
        selectedCategories.map(
            function (category) {

                const categoryExperiences =
                    experiencesByCategory[
                        category
                    ];

                return categoryExperiences[
                    Math.floor(
                        Math.random() *
                        categoryExperiences.length
                    )
                ];
            }
        );

    featuredGrid.innerHTML =
        selectedExperiences
            .map(
                function (
                    experience
                ) {

                    const image =
                        experience.id ===
                        "bike-tours"
                            ? "images/bicitour4.jpg.avif"
                            : (
                                experience.images &&
                                experience.images.length
                            )
                                ? experience.images[0]
                                : "";

                    return `
                        <article
                            class="featured-card"
                            data-featured-id="${experience.id}"
                        >

                            <div
                                class="featured-card-image"
                            >

                                <img
                                    src="${image}"
                                    alt="${experience.title}"
                                >

                            </div>

                            <div
                                class="featured-card-content"
                            >

                                <h3
                                    class="featured-card-title"
                                >
                                    ${experience.title}
                                </h3>

                                <button
                                    class="featured-card-button"
                                    type="button"
                                >
                                    SCOPRI
                                </button>

                            </div>

                        </article>
                    `;
                }
            )
            .join("");

    const featuredCards =
        featuredGrid.querySelectorAll(
            ".featured-card"
        );

    featuredCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const experienceId =
                        card.dataset.featuredId;

                    const experience =
                        experiences.find(
                            function (item) {
                                return (
                                    item.id ===
                                    experienceId
                                );
                            }
                        );

                    if (
                        experience
                    ) {
                        openExperienceModal(
                            experience
                        );
                    }
                }
            );
        }
    );
}

/* =========================================================
   AVVIO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupModalEvents();

        setupCategoryFilters();

        /*
         * Mostra immediatamente
         * l'esperienza principale.
         */

        renderExperiences();

        /*
         * Pizza Serale
         */

        loadPizzaSeraleExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Pasta fresca e Gelato
         */

        loadPastaGelatoExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Pizza e Tiramisù
         */

        loadPizzaTiramisuExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Pizza e Gelato
         */

        loadPizzaGelatoExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Tour Costiera
         */

        loadTourCostieraExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Capri
         */

        loadCapriExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Ischia e Procida
         */

        loadIschiaProcidaExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Ceramica
         */

        loadCeramicaExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Fotografia
         */

        loadFotografiaExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );

        /*
         * Tour in Bici
         */

        loadTourInBiciExperience()
            .then(
                function (
                    experience
                ) {
                    addExperienceToCatalog(
                        experience
                    );
                }
            );
    }
);
