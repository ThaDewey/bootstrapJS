import * as build from "../src/HTML_Builder.js";
interface BS_Card {
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
export declare function example(): void;
export declare function DisplayCard(bsCardOptions: BS_Card): void;
export {};
