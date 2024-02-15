let Name = localStorage.getItem("Name")

if (Name == null) {
    location.href = "index.html"
}

let title = document.getElementById("title")
title.innerHTML = "ברוך הבא," + Name

let total = 0
let amount = document.getElementById("amount")
let nnnn = localStorage.getItem("total")

if (nnnn) {
    total = Number(nnnn)
    amount.innerHTML = total
}

function change(num) {
total = total + num
amount.innerHTML = total
localStorage.setItem("total", total)
}

function disconnection() {
    location.href = "index.html"
}