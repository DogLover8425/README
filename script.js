function verify() {
    x = document.getElementById("container");
    x.remove();
    x = document.createElement("div");
    x.setAttribute("id","container");
    x = document.getElementById("container");
}
