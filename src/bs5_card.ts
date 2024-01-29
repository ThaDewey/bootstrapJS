import * as build from "./HTML_Builder.js";

export interface BS_Card {
	container?: build.HTMLOptions;
	card?: build.HTMLOptions;
	header?: {
		imgCap?: build.HTMLOptions;
		cardHeader?: build.HTMLOptions;
	};
	body: {
		title?: build.HTMLOptions;
		cardText: build.HTMLOptions;
		readMore?: build.HTMLOptions;
	};
	footer?: {
		ReadMore?: build.HTMLOptions;
	};
}

export function example() {
	const body = document.getElementsByTagName("body");
	const div = document.createElement("div");
	body[0].appendChild(div);

	DisplayCard({
		card: {
			parent: div!,
		},
		body: { cardText: { innerHTML: "fire" } },
	});
}

/**
 * Weird voodoo magic that allows me to provide partial info and overide some of the items for a default
 * @param overrides
 * @returns
 */
function CreateCardData(overrides?: Partial<BS_Card>): BS_Card {
	let bsCardOptions: BS_Card = {
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
				innerHTML:
					"Some quick example text to build on the card title and make up the bulk of the card's content.",
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
	return { ...bsCardOptions, ...overrides };
}

export function DisplayCard(bsCardOptions: BS_Card): HTMLElement {
	return buildBootstrapCard(bsCardOptions);
}
/**
 * Builds the basic bootstrap Card
 *{@link https://getbootstrap.com/docs/5.3/components/card/#example}.
 */
function buildBootstrapCard(card: BS_Card): HTMLElement {
	let container = build.CreateDiv(card.container!);

	card["card"] = {
		parent: container,
		classes: "card",
	};

	let bsCard = build.CreateDiv(card.card!);

	if (card.header?.imgCap) {
		card.header.imgCap.classes = "card-img-top";
		card.header.imgCap.parent = bsCard;
		build.CreateImg(card.header?.imgCap);
	}
	const cardBody = build.CreateDiv({
		parent: bsCard,
		classes: "card-body",
	});

	if (card.body.title) {
		card.body.title.classes = "card-title",
			card.body.title.parent = cardBody;
		build.CreateH5(card.body.title);
	}

	if (card.body.cardText) {
		card.body.cardText.parent = cardBody;
		if (!card.body.cardText.tag) {
			card.body.cardText.tag = "p";
		}
		if (!card.body.cardText.classes) {
			card.body.cardText.classes = "card-text";
		}
		build.CreateDiv(card.body.cardText);
	}

	if (card.body.readMore) {
		card.body.readMore.parent = cardBody;
		const button = build.CreateA(card.body.readMore);
	}

	return container;
}
