//prettier-ignore
function insertLogo() {
    if (window.innerWidth < 800){
        document.querySelector(".contact-information").innerHTML += "<div class=\"logocontainer-mobile\"><img src=\"https://silkeborgfadoel.dk/wp-content/uploads/2023/03/SF-logo.png\" alt=\"logo\"></img></div>"
    }
}

document.addEventListener("DOMContentLoaded", function () {
  insertLogo();
});
