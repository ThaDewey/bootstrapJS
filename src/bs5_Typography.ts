import * as build from "./HTML_Builder.js";

enum ContainerType {
	unstyled = "list-unstyled",
	styled = "",
}
enum ListType {
	ordered,
	unordered,
}
export interface List {
	listType: ListType;
	container: ContainerType;
	listItems: Array<any | List | Record<string, any>>;
}

let exampleList: List = {
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


export function buildListFromJSON(jsonData: any): List {
    let listItems: Array<any | List | Record<string, any>> = [];

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
            } else {
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

function buildListItemForPrimitive(item: any): HTMLElement {
    let listItemOptions: build.HTMLOptions = { tag: "li" };
    let listItem = build.CreateLI(listItemOptions);
    listItem.textContent = item.toString();
    return listItem;
}

function buildListItemsForArray(array: any[]): HTMLElement[] {
    return array.map(element => {
        return buildListItemForPrimitive(element);
    });
}

function buildListItemForObject(item: any, includeKeys: boolean = false): HTMLElement {
    let listItemOptions: build.HTMLOptions = { tag: "li" };
    let listItem = build.CreateLI(listItemOptions);
    let innerListOptions: build.HTMLOptions = { tag: "ul" };
    let innerList = build.CreateUL(innerListOptions);

    if ('listType' in item && 'container' in item && 'listItems' in item) {
        listItem.appendChild(BuildList(item));
    } else {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                let innerListItemOptions: build.HTMLOptions = { tag: "li" };
                let innerListItem = build.CreateLI(innerListItemOptions);
                innerListItem.textContent = includeKeys ? `${key}: ${item[key]}` : `${item[key]}`;
                innerList.appendChild(innerListItem);
            }
        }
        listItem.appendChild(innerList);
    }

    return listItem;
}

export function BuildList(list: List, includeKeys: boolean = false): HTMLElement {
    let listElementOptions: build.HTMLOptions = {
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
        } else if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
            listElement.appendChild(buildListItemForPrimitive(item));
        } else if (item && typeof item === "object") {
            // Pass includeKeys parameter to buildListItemForObject
            listElement.appendChild(buildListItemForObject(item, includeKeys));
        }
    });

    return listElement;
}