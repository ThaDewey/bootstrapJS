import * as build from "./HTML_Builder.js";
export var ContainerType;
(function (ContainerType) {
    ContainerType["unstyled"] = "list-unstyled";
    ContainerType["styled"] = "";
})(ContainerType || (ContainerType = {}));
export var ListType;
(function (ListType) {
    ListType[ListType["ordered"] = 0] = "ordered";
    ListType[ListType["unordered"] = 1] = "unordered";
})(ListType || (ListType = {}));
export const exampleList = {
    listType: ListType.unordered,
    container: ContainerType.unstyled,
    listItems: [
        { fire: "Sale" },
        { cold: "hot" },
        { winter: "summer" },
        { spring: "fall" },
        { math: "1" },
    ],
};
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
    phone: ["bi", "bi-telephone-fill"],
    workPhone: ["fa", "fa-phone-square"],
    phd: ["fa", "fa-graduation-cap"],
    mba: ["fa", "fa-graduation-cap"],
    ba: ["fa", "fa-graduation-cap"],
    jd: ["fa", "fa-graduation-cap"],
    bs: ["fa", "fa-graduation-cap"],
    cold: ["bi", "bi-thermometer-snow"],
    winter: ["fa", "fa-snowflake-o"],
    hot: ["bi", "bi-thermometer-sun"],
    fire: ["fa", "fa-fire"],
    spring: ["bi", "bi-thermometer-half"],
    // ... other mappings
};
export function BuildList(list, includeKeys = false, includeIcons = false) {
    //console.log(`BuildList(${includeIcons})`);
    console.log(list);
    let listElementOptions = {
        classes: list.container,
    };
    let listElement = list.listType === ListType.ordered
        ? build.CreateOL(listElementOptions)
        : build.CreateUL(listElementOptions);
    list.listItems.forEach((item) => {
        Object.keys(item).forEach((key) => {
            var _a;
            const value = item[key];
            //console.log(key, value);
            let listItemOptions = {
                parent: listElement,
            };
            let lit = build.CreateLI(listItemOptions);
            if (includeIcons) {
                //console.log("Include Icons");
                let iconClass = iconMapping[key];
                //console.log(iconClass);
                if (iconClass != undefined) {
                    //console.log("ICON");
                    let iconOptions = {
                        parent: lit,
                        classes: iconClass,
                    };
                    console.log((_a = iconOptions.classes) === null || _a === void 0 ? void 0 : _a.toString());
                    build.CreateI(iconOptions);
                }
                else {
                    //	console.log("not Icon");
                }
            }
            lit.innerHTML += ` ${value}`; // or value, depending on what you want to display)
            // listElement.append(lit);
        });
    });
    return listElement;
}
