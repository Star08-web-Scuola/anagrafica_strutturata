let o1name = document.getElementById("01name");
let o1surname = document.getElementById("01surname");
let o1age = document.getElementById("01age");
let o2name = document.getElementById("02name");
let o2surname = document.getElementById("02surname");
let o2age = document.getElementById("02age");
let o3name = document.getElementById("03name");
let o3surname = document.getElementById("03surname");
let o3age = document.getElementById("03age");
let o4name = document.getElementById("04name");
let o4surname = document.getElementById("04surname");
let o4age = document.getElementById("04age");

function send() {
    let data = {
        1: {
            name: o1name.value,
            surname: o1surname.value,
            age: o1age.value
        },
        2: {
            name: o2name.value,
            surname: o2surname.value,
            age: o2age.value
        },
        3: {
            name: o3name.value,
            surname: o3surname.value,
            age: o3age.value
        },
        4: {
            name: o4name.value,
            surname: o4surname.value,
            age: o4age.value
        }
    };
    localStorage.setItem("anagrafica", JSON.stringify(data));
    alert("Dati salvati nel localStorage!");
    window.location.href = "receive.html?ids=[1,2,3,4]";
}