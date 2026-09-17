/* =========================================================
   TRADUZIONE AUTOMATICA ITA / ENG
   ========================================================= */

const TRANSLATION_API =
    "https://api.mymemory.translated.net/get";

let translationCache = {};
let isEnglishActive = false;
let isTranslating = false;

const TRANSLATION_CONCURRENCY = 5;


/* =========================================================
   ELEMENTI DA NON TRADURRE
   ========================================================= */

function shouldIgnoreTextNode(node) {

    if (!node.parentElement) {
        return true;
    }

    const parent =
        node.parentElement;

    const tag =
        parent.tagName.toLowerCase();

    if (
        tag === "script" ||
        tag === "style" ||
        tag === "noscript" ||
        tag === "svg"
    ) {
        return true;
    }

    if (
        parent.closest(
            ".language-switcher"
        )
    ) {
        return true;
    }

    return false;
}


/* =========================================================
   PULIZIA DELLA TRADUZIONE
   ========================================================= */

function cleanTranslatedText(text) {

    if (!text) {
        return text;
    }

    let cleaned =
        String(text);

    /*
     * Rimuove eventuali tag XML/HTML
     * restituiti da MyMemory.
     *
     * Esempio:
     * <x id="404"/>
     * <g id="417">Bike tour</g>
     */

    cleaned =
        cleaned.replace(
            /<[^>]*>/g,
            ""
        );

    /*
     * Rimuove eventuali entità HTML
     * che possono essere restituite
     * sotto forma di testo.
     */

    const textarea =
        document.createElement(
            "textarea"
        );

    textarea.innerHTML =
        cleaned;

    cleaned =
        textarea.value;

    /*
     * Elimina spazi multipli.
     */

    cleaned =
        cleaned.replace(
            /\s+/g,
            " "
        )
        .trim();

    return cleaned;
}


/* =========================================================
   RACCOLTA TESTI
   ========================================================= */

function getTranslatableTextNodes() {

    const walker =
        document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

    const nodes = [];

    let node;

    while (
        (node = walker.nextNode())
    ) {

        if (
            shouldIgnoreTextNode(node)
        ) {
            continue;
        }

        const text =
            node.nodeValue.trim();

        if (!text) {
            continue;
        }

        nodes.push(node);
    }

    return nodes;
}


/* =========================================================
   TRADUZIONE SINGOLO TESTO
   ========================================================= */

async function translateText(text) {

    if (!text) {
        return text;
    }

    if (
        translationCache[text]
    ) {
        return translationCache[text];
    }

    const url =
        TRANSLATION_API +
        "?q=" +
        encodeURIComponent(text) +
        "&langpair=it|en";

    try {

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Errore API: " +
                response.status
            );
        }

        const data =
            await response.json();

        if (
            data &&
            data.responseData &&
            data.responseData.translatedText
        ) {

            const translated =
                cleanTranslatedText(
                    data.responseData
                        .translatedText
                );

            /*
             * Se la pulizia ha eliminato
             * completamente il testo,
             * manteniamo quello originale.
             */

            if (!translated) {
                return text;
            }

            translationCache[text] =
                translated;

            return translated;
        }

    } catch (error) {

        console.error(
            "Errore traduzione:",
            error
        );
    }

    return text;
}


/* =========================================================
   TRADUZIONE PARALLELA
   ========================================================= */

async function translateNodesInBatches(nodes) {

    for (
        let i = 0;
        i < nodes.length;
        i += TRANSLATION_CONCURRENCY
    ) {

        const batch =
            nodes.slice(
                i,
                i + TRANSLATION_CONCURRENCY
            );

        await Promise.all(
            batch.map(
                async function (node) {

                    if (
                        !node.nodeValue.trim()
                    ) {
                        return;
                    }

                    const originalText =
                        node.nodeValue;

                    const cleanText =
                        originalText.trim();

                    const translated =
                        await translateText(
                            cleanText
                        );

                    if (
                        translated &&
                        translated !== cleanText
                    ) {

                        const leading =
                            originalText.match(
                                /^\s*/
                            )?.[0] || "";

                        const trailing =
                            originalText.match(
                                /\s*$/
                            )?.[0] || "";

                        node.nodeValue =
                            leading +
                            translated +
                            trailing;
                    }
                }
            )
        );
    }
}


/* =========================================================
   TRADUZIONE DELLA PAGINA
   ========================================================= */

async function translatePageToEnglish() {

    if (isTranslating) {
        return;
    }

    isTranslating = true;

    try {

        const nodes =
            getTranslatableTextNodes();

        await translateNodesInBatches(
            nodes
        );

        isEnglishActive = true;

    } catch (error) {

        console.error(
            "Errore durante la traduzione:",
            error
        );

    } finally {

        isTranslating = false;
    }
}


/* =========================================================
   TRADUZIONE DI NUOVI ELEMENTI
   ========================================================= */

async function translateNewContent(
    root
) {

    if (!isEnglishActive) {
        return;
    }

    if (!root) {
        return;
    }

    /*
     * Se viene aggiunta una nuova esperienza,
     * una nuova card o il contenuto della modal,
     * cerchiamo solo i testi nuovi.
     */

    const walker =
        document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT
        );

    const nodes = [];

    let node;

    while (
        (node = walker.nextNode())
    ) {

        if (
            shouldIgnoreTextNode(node)
        ) {
            continue;
        }

        if (
            !node.nodeValue.trim()
        ) {
            continue;
        }

        nodes.push(node);
    }

    if (!nodes.length) {
        return;
    }

    await translateNodesInBatches(
        nodes
    );
}


/* =========================================================
   RIPRISTINO ITALIANO
   ========================================================= */

function restoreItalianPage() {

    window.location.reload();
}


/* =========================================================
   OSSERVATORE CONTENUTI DINAMICI
   ========================================================= */

function setupTranslationObserver() {

    const observer =
        new MutationObserver(
            function (mutations) {

                if (!isEnglishActive) {
                    return;
                }

                mutations.forEach(
                    function (mutation) {

                        mutation.addedNodes.forEach(
                            function (addedNode) {

                                if (
                                    addedNode.nodeType !==
                                    Node.ELEMENT_NODE
                                ) {
                                    return;
                                }

                                /*
                                 * Non osserviamo il
                                 * language switcher.
                                 */

                                if (
                                    addedNode.closest &&
                                    addedNode.closest(
                                        ".language-switcher"
                                    )
                                ) {
                                    return;
                                }

                                translateNewContent(
                                    addedNode
                                );
                            }
                        );
                    }
                );
            }
        );

    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );
}


/* =========================================================
   PULSANTI ITA / ENG
   ========================================================= */

function setupAutomaticTranslation() {

    const buttons =
        document.querySelectorAll(
            ".language-button"
        );

    if (!buttons.length) {
        return;
    }

    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                async function () {

                    const language =
                        button.dataset.language;

                    if (
                        language === "en"
                    ) {

                        if (
                            isEnglishActive ||
                            isTranslating
                        ) {
                            return;
                        }

                        await translatePageToEnglish();

                    } else if (
                        language === "it"
                    ) {

                        restoreItalianPage();
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

        setupAutomaticTranslation();

        setupTranslationObserver();

    }
);