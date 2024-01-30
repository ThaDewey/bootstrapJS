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
export function CreateElement(options: HTMLOptions): HTMLElement {
	//console.log("CreateElement");
	//console.log(options);
	let element = document.createElement(options.tag!);

	if (options.id) element.id = options.id;
	if (options.classes) AddClassToElement(element, options.classes);
	if (options.attributes) AddAttributes(element, options.attributes);
	if (options.parent) options.parent.append(element);
	if (options.innerHTML) element.innerHTML = options.innerHTML;
	return element;
}

export function AddClassToElement(
	element: HTMLElement,
	classesToAdd: string[] | string
) {
	if (!classesToAdd) return;

	if (Array.isArray(classesToAdd)) {
		// If classesToAdd is an array, add each class individually
		classesToAdd.forEach((cls) => element.classList.add(cls));
	} else {
		// If classesToAdd is a string, add it directly
		element.classList.add(classesToAdd);
	}
}

export function AddAttributes(
	element: HTMLElement,
	attributes: { [key: string]: string }
) {
	if (!attributes) return;

	for (let attributeKey in attributes) {
		if (attributes.hasOwnProperty(attributeKey)) {
			const value = attributes[attributeKey];
			element.setAttribute(attributeKey, value);
		}
	}
}

export function CreateImg(imgCap: HTMLOptions): HTMLElement {
	imgCap.tag = "img";
	if (imgCap.parent) {
		imgCap.parent = imgCap.parent;
	}
	return CreateElement(imgCap);
}
export function CreateSection(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "section";
	return CreateElement(htmlOptions);
}
export function CreateDiv(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "div";
	return CreateElement(htmlOptions);
}
export function CreateA(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "a";
	return CreateElement(htmlOptions);
}
export function CreateP(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "p";
	return CreateElement(htmlOptions);
}
export function CreateSpan(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "span";
	return CreateElement(htmlOptions);
}
export function CreateH1(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h1";
	return CreateElement(htmlOptions);
}
export function CreateH2(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h2";
	return CreateElement(htmlOptions);
}
export function CreateH3(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h3";
	return CreateElement(htmlOptions);
}
export function CreateH4(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h4";
	return CreateElement(htmlOptions);
}
export function CreateH5(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h5";
	return CreateElement(htmlOptions);
}
export function CreateH6(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "h6";
	return CreateElement(htmlOptions);
}

export function CreateOL(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "ol";
	return CreateElement(htmlOptions);
}
export function CreateUL(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "ul";
	return CreateElement(htmlOptions);
}
export function CreateLI(htmlOptions: HTMLOptions): HTMLElement {
	htmlOptions.tag = "li";
	return CreateElement(htmlOptions);
}
