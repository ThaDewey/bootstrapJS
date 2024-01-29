import * as build from "./HTML_Builder.js";
var ContainerType;
(function (ContainerType) {
    ContainerType["unstyled"] = "list-unstyled";
    ContainerType["styled"] = "";
})(ContainerType || (ContainerType = {}));
var ListType;
(function (ListType) {
    ListType[ListType["ordered"] = 0] = "ordered";
    ListType[ListType["unordered"] = 1] = "unordered";
})(ListType || (ListType = {}));
export const exampleList = {
    listType: ListType.unordered,
    container: ContainerType.unstyled,
    listItems: [
        { fire: "Sale" },
        { col: "hot" },
        { winter: "summer" },
        { spring: "fall" },
        { math: "1" },
    ],
};
/* export let exampleList: List = {
    listType: ListType.ordered,
    container: ContainerType.unstyled,
    listItems: [
        [1, 2, 3], // Array
        "A string",
        { fire: "Sale" },
        { key1: "value1", key2: 3 }, // Object as Record
        42,
        {
            // Nested list
            listType: ListType.unordered,
            container: ContainerType.styled,
            listItems: ["Nested item 1", "Nested item 2"],
        },
    ],
}; */
function determineType(listItems) {
    console.log("determineType");
    console.log(listItems);
    for (let item in listItems) {
        console.log("----- item --- ");
        console.log(listItems[item]);
        // Assuming 'List' objects have a unique property 'listType'
        if (typeof listItems[item] === "object" &&
            listItems[item] !== null &&
            "listType" in listItems[item]) {
            console.log("List object");
            return "List";
        }
    }
    return "";
    /* 	if (typeof listItem === "object") {
        console.log("is primitive");
        return"";
    } else {
        console.log("NOT is primitive");
    }

    if (checkIsPrimitive(listItem)) {
        console.log("is primitive");
        return"";
    } else {
        console.log("NOT is primitive");
    } */
    /* 	// Check if value is an array
    if (Array.isArray(listItem)) {
        console.log("isArray");

        // Check if it's an array of primitives
        if (listItem.every((item) => item !== Object(item))) {
            console.log("array of primitives");
        }
        // Check if the array contains List objects (adjust based on unique List property)
        else {
            console.log("array");
        }
    }

    // Check if value is a plain JSON object
    if (typeof listItems === "object" && listItems !== null) {
        console.log("JSON object");
    } */
    console.log("END determineType");
}
function whatKindOfObject(item) {
    let isArray = Array.isArray(item);
    if (isArray)
        return Array;
    //console.log(itemType);
}
export function buildListFromJSON(jsonData) {
    //let fire: List = exampleList;
    return exampleList;
}
export function createExampleList() {
    const body = document.getElementsByTagName("body");
    const div = document.createElement("div");
    body[0].appendChild(div);
    let list = BuildList(exampleList);
    div.appendChild(list);
}
const iconMapping = {
    email: ["fa", "fa-envelope"], // Example for font icon classes
    phone: ["fa", "fa-phone-square"],
    "work-phone": ["fa", "fa-phone-square"],
    phd: ["fa", "fa-graduation-cap"],
    jd: ["fa", "fa-graduation-cap"],
    bs: ["fa", "fa-graduation-cap"],
    // ... other mappings
};
function buildListItemForObject(item, includeKeys = false, includeIcons = false) {
    console.log("buildlistitem for object");
    let listItemOptions = { tag: "li" };
    let listItem = build.CreateLI(listItemOptions);
    console.log(item);
    /*
    const processItem = (key: string, value: any) => {
        let innerListItemOptions: build.HTMLOptions = { tag: "li" };
        let innerListItem = build.CreateLI(innerListItemOptions);



        let textContent = includeKeys ? `${key}: ${value}` : `${value}`;
        let textNode = document.createTextNode(textContent);
        innerListItem.appendChild(textNode);

        return innerListItem;
    };
*/
    /*
    if ("listType" in item && "container" in item && "listItems" in item) {
        // Handle nested lists
        listItem.appendChild(BuildList(item));
    } else if (typeof item === "object" && item !== null) {
        // Handle simple objects
        let innerListOptions: build.HTMLOptions = { tag: "ul" };
        let innerList = build.CreateUL(innerListOptions);

        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                innerList.appendChild(processItem(key, item[key]));
            }
        }
        listItem.appendChild(innerList);
    } else {
        // Handle non-object items (e.g., strings, numbers)
        listItem.textContent = item.toString();
    }
*/
    return listItem;
}
export function BuildList(list, includeKeys = false, includeIcons = false) {
    console.log("BuildList");
    let listElementOptions = {
        classes: list.container,
    };
    let listElement = list.listType === ListType.ordered
        ? build.CreateOL(listElementOptions)
        : build.CreateUL(listElementOptions);
    list.listItems.forEach((item) => {
        //let lit = buildListItemForObject(item);
        let listItemOptions = {
            parent: listElement,
            tag: "li",
            innerHTML: item[0],
        };
        let lit = build.CreateLI(listItemOptions);
        // listElement.append(lit);
    });
    return listElement;
}
