function hideWidgetsOnNewProductPage() {
  if (document.location.href.includes("page_id=1856")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
    /*
    document.getElementById("widget_contact_info-3").style.display = "none";
    document.getElementById("media_gallery-3").style.display = "none";
    */
  }
}

function hideWidgetsOnOldProductPage() {
  if (document.location.href.includes("produkter")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnSofticePage() {
  if (document.location.href.includes("tuk-tuk")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnTuk() {
  if (document.location.href.includes("fest")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnFestAndGames() {
  if (document.location.href.includes("kontakt")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnContact() {
  if (document.location.href.includes("om-os")) {
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-7").style.display = "none";
  }
}

function hideWidgetsOnAbout() {
  if (document.location.href.includes("nyheder")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnNews() {
  if (document.location.href.includes("nyheder")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  hideWidgetsOnNewProductPage();
  hideWidgetsOnOldProductPage();
  hideWidgetsOnSofticePage();
  hideWidgetsOnTuk();
  hideWidgetsOnFestAndGames();
  hideWidgetsOnContact();
  hideWidgetsOnAbout();
  hideWidgetsOnNews();
});
