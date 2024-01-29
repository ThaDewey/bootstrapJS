export interface Attribute {
    [key: string]: string;
}
export interface HTMLOptions {
    tag?: string;
    parent?: HTMLElement;
    id?: string;
    classes?: string[] | string;
    attributes?: Attribute;
    innerHTML?: string;
}
/**
 * Creates an HTMLElement in process as opposed to the multiples
 * @param {HTMLOptions} options
 * @returns {HTMLElement}
 */
export declare function CreateElement(options: HTMLOptions): HTMLElement;
export declare function AddClassToElement(element: HTMLElement, classesToAdd: string[] | string): void;
export declare function AddAttributes(element: HTMLElement, attributes: {
    [key: string]: string;
}): void;
export declare function CreateImg(imgCap: HTMLOptions): HTMLElement;
export declare function CreateSection(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateDiv(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH1(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH2(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH3(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH4(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH5(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateH6(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateOL(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateUL(htmlOptions: HTMLOptions): HTMLElement;
export declare function CreateLI(htmlOptions: HTMLOptions): HTMLElement;
