let url = document.location.search.substring(1);

let ids = url.split("ids=")[1];
ids = ids.replace("[", "").replace("]", "").split(",");

document.addEventListener("DOMContentLoaded", () => {
    let data = JSON.parse(localStorage.getItem("anagrafica"));
    ids.forEach(id => {
        document.getElementById(id + "name").textContent = data[id].name;
        document.getElementById(id + "surname").textContent = data[id].surname;
        document.getElementById(id + "age").textContent = data[id].age;
    });
});