function keeping() {
    let Name = document.getElementById("Name")
    localStorage.setItem("Name",Name.value)
    location.href = "bank.html"
}