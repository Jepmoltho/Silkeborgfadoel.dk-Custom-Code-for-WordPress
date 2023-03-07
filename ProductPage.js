function hideMapAndImageSidebarOnConctack() {
  if (document.location.href.includes("page_id=1856")) {
    document.getElementById("widget_contact_info-3").style.display = "none";
    document.getElementById("media_gallery-3").style.display = "none";
  }
}

function hideWidgetsOnProductPage() {
  if (document.location.href.includes("produkter")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  hideMapAndImageSidebarOnConctack();
});
