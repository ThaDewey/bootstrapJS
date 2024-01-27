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
	let element = document.createElement(options.tag!);

	if (options.id) element.id = options.id;
	if (options.classes) AddClassToElement(element, options.classes);
	if (options.attributes) AddAttributes(element, options.attributes);
	if (options.parent) options.parent.append(element);
	if (options.innerHTML) element.innerHTML = options.innerHTML;
	return element;
}

export function AddClassToElement(element: HTMLElement, classesToAdd: string[] | string) {
    if (!classesToAdd) return;

    if (Array.isArray(classesToAdd)) {
        // If classesToAdd is an array, add each class individually
        classesToAdd.forEach(cls => element.classList.add(cls));
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
export function CreateImg(
	parent: HTMLElement,
	imgCap: HTMLOptions
): HTMLElement {
	if (parent) {
		imgCap.parent = parent;
		imgCap.tag = "img";
	}
	return CreateElement(imgCap);
}
