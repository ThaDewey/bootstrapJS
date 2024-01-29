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
let exampleList = {
    listType: ListType.ordered,
    container: ContainerType.unstyled,
    listItems: [
        "A string",
        42,
        { key1: "value1", key2: 3 }, // Object as Record
        [1, 2, 3], // Array
        {
            // Nested list
            listType: ListType.unordered,
            container: ContainerType.styled,
            listItems: ["Nested item 1", "Nested item 2"],
        },
    ],
};
export function buildListFromJSON(jsonData) {
    let listItems = [];
    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            const value = jsonData[key];
            if (typeof value === 'object' && !Array.isArray(value)) {
                // If the value is an object, recursively build a nested list
                listItems.push({
                    listType: ListType.unordered,
                    container: ContainerType.styled,
                    listItems: buildListFromJSON(value).listItems
                });
            }
            else {
                // Otherwise, add the value directly
                listItems.push(`${key}: ${value}`);
            }
        }
    }
    return {
        listType: ListType.unordered,
        container: ContainerType.unstyled,
        listItems: listItems
    };
}
export function createExampleList() {
    const body = document.getElementsByTagName("body");
    const div = document.createElement("div");
    body[0].appendChild(div);
    let list = BuildList(exampleList);
    div.appendChild(list);
}
function buildListItemForPrimitive(item) {
    let listItemOptions = { tag: "li" };
    let listItem = build.CreateLI(listItemOptions);
    listItem.textContent = item.toString();
    return listItem;
}
function buildListItemsForArray(array) {
    return array.map(element => {
        return buildListItemForPrimitive(element);
    });
}
function buildListItemForObject(item, includeKeys = false) {
    let listItemOptions = { tag: "li" };
    let listItem = build.CreateLI(listItemOptions);
    let innerListOptions = { tag: "ul" };
    let innerList = build.CreateUL(innerListOptions);
    if ('listType' in item && 'container' in item && 'listItems' in item) {
        listItem.appendChild(BuildList(item));
    }
    else {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                let innerListItemOptions = { tag: "li" };
                let innerListItem = build.CreateLI(innerListItemOptions);
                innerListItem.textContent = includeKeys ? `${key}: ${item[key]}` : `${item[key]}`;
                innerList.appendChild(innerListItem);
            }
        }
        listItem.appendChild(innerList);
    }
    return listItem;
}
export function BuildList(list, includeKeys = false) {
    let listElementOptions = {
        classes: list.container
    };
    let listElement = list.listType === ListType.ordered
        ? build.CreateOL(listElementOptions)
        : build.CreateUL(listElementOptions);
    list.listItems.forEach(item => {
        if (Array.isArray(item)) {
            buildListItemsForArray(item).forEach(listItem => {
                listElement.appendChild(listItem);
            });
        }
        else if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
            listElement.appendChild(buildListItemForPrimitive(item));
        }
        else if (item && typeof item === "object") {
            // Pass includeKeys parameter to buildListItemForObject
            listElement.appendChild(buildListItemForObject(item, includeKeys));
        }
    });
    return listElement;
}
