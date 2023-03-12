function addBackgroundImageFrontpageMobile() {
  if (document.location.href.length < 30 && window.innerWidth < 800) {
    document.getElementById("#content").style.backgroundImage =
      "url(https://silkeborgfadoel.dk/wp-content/uploads/2023/03/Oelbillede-baggrund-cropped-2601602454-e1678527379750.jpeg) !important";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addBackgroundImageFrontpageMobile();
});
