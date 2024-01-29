import * as build from "./HTML_Builder.js";
export function example() {
    const body = document.getElementsByTagName("body");
    const div = document.createElement("div");
    body[0].appendChild(div);
    DisplayCard({
        card: {
            parent: div,
        },
        body: { cardText: { innerHTML: "fire" } },
    });
}
/**
 * Weird voodoo magic that allows me to provide partial info and overide some of the items for a default
 * @param overrides
 * @returns
 */
function CreateCardData(overrides) {
    let bsCardOptions = {
        card: {
            tag: "div",
            classes: "card",
            attributes: { style: "width: 18rem;" },
        },
        header: {
            imgCap: {
                attributes: { src: "https://picsum.photos/200/300", alt: "..." },
                classes: ["card-img-top"],
            },
        },
        body: {
            title: {
                tag: "h5",
                classes: "card-title",
                innerHTML: "Card title",
            },
            cardText: {
                tag: "p",
                classes: "card-text",
                innerHTML: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            },
            readMore: {
                tag: "a",
                classes: ["btn", "btn-[primary"],
                attributes: {
                    src: "#",
                },
                innerHTML: "Go somewhere",
            },
        },
    };
    return Object.assign(Object.assign({}, bsCardOptions), overrides);
}
export function DisplayCard(bsCardOptions) {
    return buildBootstrapCard(bsCardOptions);
}
/**
 * Builds the basic bootstrap Card
 *{@link https://getbootstrap.com/docs/5.3/components/card/#example}.
 */
function buildBootstrapCard(card) {
    var _a, _b;
    const container = build.CreateElement(card.container);
    if (card.card) {
        card.card.parent = container;
    }
    const bsCard = build.CreateElement(card.card);
    if ((_a = card.header) === null || _a === void 0 ? void 0 : _a.imgCap) {
        card.header.imgCap.classes = "card-img-top";
        build.CreateImg((_b = card.header) === null || _b === void 0 ? void 0 : _b.imgCap);
    }
    const cardBody = build.CreateElement({
        tag: "div",
        parent: bsCard,
        classes: "card-body",
    });
    if (card.body.title) {
        (card.body.title.classes = "card-title"),
            (card.body.title.parent = cardBody);
        build.CreateElement(card.body.title);
    }
    if (card.body.cardText) {
        card.body.cardText.parent = cardBody;
        if (!card.body.cardText.tag) {
            card.body.cardText.tag = "p";
        }
        if (!card.body.cardText.classes) {
            card.body.cardText.classes = "card-text";
        }
        build.CreateElement(card.body.cardText);
    }
    if (card.body.readMore) {
        card.body.readMore.parent = cardBody;
        const button = build.CreateElement(card.body.readMore);
    }
    return bsCard;
}
