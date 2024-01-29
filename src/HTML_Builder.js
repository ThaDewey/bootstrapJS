/**
 * Creates an HTMLElement in process as opposed to the multiples
 * @param {HTMLOptions} options
 * @returns {HTMLElement}
 */
export function CreateElement(options) {
    //console.log("CreateElement");
    //console.log(options);
    let element = document.createElement(options.tag);
    if (options.id)
        element.id = options.id;
    if (options.classes)
        AddClassToElement(element, options.classes);
    if (options.attributes)
        AddAttributes(element, options.attributes);
    if (options.parent)
        options.parent.append(element);
    if (options.innerHTML)
        element.innerHTML = options.innerHTML;
    return element;
}
export function AddClassToElement(element, classesToAdd) {
    if (!classesToAdd)
        return;
    if (Array.isArray(classesToAdd)) {
        // If classesToAdd is an array, add each class individually
        classesToAdd.forEach((cls) => element.classList.add(cls));
    }
    else {
        // If classesToAdd is a string, add it directly
        element.classList.add(classesToAdd);
    }
}
export function AddAttributes(element, attributes) {
    if (!attributes)
        return;
    for (let attributeKey in attributes) {
        if (attributes.hasOwnProperty(attributeKey)) {
            const value = attributes[attributeKey];
            element.setAttribute(attributeKey, value);
        }
    }
}
export function CreateImg(imgCap) {
    imgCap.tag = "img";
    if (imgCap.parent) {
        imgCap.parent = imgCap.parent;
    }
    return CreateElement(imgCap);
}
export function CreateSection(htmlOptions) {
    htmlOptions.tag = "section";
    return CreateElement(htmlOptions);
}
export function CreateDiv(htmlOptions) {
    htmlOptions.tag = "div";
    return CreateElement(htmlOptions);
}
export function CreateA(htmlOptions) {
    htmlOptions.tag = "a";
    return CreateElement(htmlOptions);
}
export function CreateP(htmlOptions) {
    htmlOptions.tag = "p";
    return CreateElement(htmlOptions);
}
export function CreateH1(htmlOptions) {
    htmlOptions.tag = "h1";
    return CreateElement(htmlOptions);
}
export function CreateH2(htmlOptions) {
    htmlOptions.tag = "h2";
    return CreateElement(htmlOptions);
}
export function CreateH3(htmlOptions) {
    htmlOptions.tag = "h3";
    return CreateElement(htmlOptions);
}
export function CreateH4(htmlOptions) {
    htmlOptions.tag = "h4";
    return CreateElement(htmlOptions);
}
export function CreateH5(htmlOptions) {
    htmlOptions.tag = "h5";
    return CreateElement(htmlOptions);
}
export function CreateH6(htmlOptions) {
    htmlOptions.tag = "h6";
    return CreateElement(htmlOptions);
}
export function CreateOL(htmlOptions) {
    htmlOptions.tag = "ol";
    return CreateElement(htmlOptions);
}
export function CreateUL(htmlOptions) {
    htmlOptions.tag = "ul";
    return CreateElement(htmlOptions);
}
export function CreateLI(htmlOptions) {
    htmlOptions.tag = "li";
    return CreateElement(htmlOptions);
}
