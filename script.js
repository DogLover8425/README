function verify() {
    x = document.getElementById("container");
    x.remove();
    x = document.createElement("div");
    document.body.appendChild(x);
    x.setAttribute("id","container");
    x = document.getElementById("container");
}
