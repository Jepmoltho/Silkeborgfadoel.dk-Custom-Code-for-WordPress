function insertLogo() {
  if (window.innerWidth < 800) {
    document.querySelector(".contact-information").innerHTML +=
      '<div class="logocontainer-mobile"><img src="https://silkeborgfadoel.dk/wp-content/uploads/2023/03/SF-logo.png" alt="logo"></img></div>';
  }
  if (window.innerWidth >= 800) {
    var logoContainer = document.createElement("div");
    logoContainer.className = "logocontainer-desktop";
    logoContainer.style.position = "absolute";
    logoContainer.style.top = "50px";
    logoContainer.style.right = "40px";

    var logoImg = document.createElement("img");
    logoImg.src =
      "https://silkeborgfadoel.dk/wp-content/uploads/2023/03/SF-logo.png";
    logoImg.alt = "logo";

    logoImg.style.maxWidth = "120px";

    logoContainer.appendChild(logoImg);

    var brandingNavWrapper = document.querySelector(".branding-nav-wrapper");

    brandingNavWrapper.appendChild(logoContainer);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  insertLogo();
});
