let url = document.location.search.substring(1);

let ids = url.split("ids=")[1];
ids = ids.replace("[", "").replace("]", "").split(",");

document.addEventListener("DOMContentLoaded", () => {
    let data = JSON.parse(localStorage.getItem("anagrafica"));
    ids.forEach(id => {
        document.getElementById("0" + id + "name").textContent = data[id].name;
        document.getElementById("0" + id + "surname").textContent = data[id].surname;
        document.getElementById("0" + id + "age").textContent = data[id].age;
    });
});