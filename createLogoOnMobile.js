//prettier-ignore
function insertLogo() {
    if (window.innerWidth < 800){
        document.querySelector(".contact-information").innerHTML += "<div class=\"logocontainer-mobile\"><img src=\"https://silkeborgfadoel.dk/wp-content/uploads/2023/03/SF-logo.png\" alt=\"logo\"></img></div>"
    }
    if (window.innerWidth >= 800) {
      // Create a new div for the logo container
      var logoContainer = document.createElement("div");
      logoContainer.className = "logocontainer-desktop";
      logoContainer.style.position = "absolute";
      logoContainer.style.top = "50px";
      logoContainer.style.right = "40px";

  
      // Create an img element for the logo
      var logoImg = document.createElement("img");
      logoImg.src = "https://silkeborgfadoel.dk/wp-content/uploads/2023/03/SF-logo.png";
      logoImg.alt = "logo";
  
      // Set max width for the logo
      logoImg.style.maxWidth = "120px";
  
      // Append the img element to the logo container
      logoContainer.appendChild(logoImg);
  
      // Get the branding-nav-wrapper element
      var brandingNavWrapper = document.querySelector(".branding-nav-wrapper");
  
      // Insert the logo container as the last child of branding-nav-wrapper
      brandingNavWrapper.appendChild(logoContainer);
    }
}

document.addEventListener("DOMContentLoaded", function () {
  insertLogo();
});
