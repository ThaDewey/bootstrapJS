declare enum ContainerType {
    unstyled = "list-unstyled",
    styled = ""
}
declare enum ListType {
    ordered = 0,
    unordered = 1
}
export interface List {
    listType: ListType;
    container: ContainerType;
    listItems: Array<any | List | Record<string, any>>;
}
export declare function buildListFromJSON(jsonData: any): List;
export declare function createExampleList(): void;
export declare function BuildList(list: List, includeKeys?: boolean): HTMLElement;
export {};
