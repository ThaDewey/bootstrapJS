import * as bs from "./bootstrap.js";
bs.createExampleList();
let myfire = document.getElementsByTagName("body");
fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    // Process and display the data
    const fred = document.getElementById("fred");
    //container.innerHTML = JSON.stringify(data, null, 2);
    let json = data;
    let faculty = json.studyTour.faculty;
    let listData = {};
    for (let key in faculty) {
        let member = faculty[key];
        for (let info in member.contactInfo) {
            let contact = member.contactInfo[info];
            listData[member.name] = bs.buildListFromJSON(member.contactInfo);
        }
    }
    for (let thing in listData) {
        let fire = bs.BuildList(listData[thing]);
        myfire[0].appendChild(fire);
    }
});
