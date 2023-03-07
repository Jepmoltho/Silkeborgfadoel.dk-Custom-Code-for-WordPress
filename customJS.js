function removeMissionStatementOnMobile() {
  if (document.location.href.length < 30) {
    document.querySelector(".site-branding").style.paddingBottom = "22px";
  } else if (window.innerWidth < 800) {
    document.querySelector(".site-description").style.display = "none";
    document.querySelector(".entry-header").style.display = "none";
    document.querySelector(".site-branding").style.paddingBottom = "0px";
    document.querySelector(".site-content").style.paddingTop = "0px";
  }
}

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
  if (document.location.href.includes("softice")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
    document.querySelector(".widget-title").style.marginTop = "0px";
  }
}

function hideWidgetsOnTuk() {
  if (document.location.href.includes("tuk-tuk")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnFestAndGames() {
  if (document.location.href.includes("fest")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
  }
}

function hideWidgetsOnContact() {
  if (document.location.href.includes("kontakt")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-7").style.display = "none";
  }
}

function hideWidgetsOnAbout() {
  if (document.location.href.includes("om-os")) {
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
  removeMissionStatementOnMobile();
  hideWidgetsOnNewProductPage();
  hideWidgetsOnOldProductPage();
  hideWidgetsOnSofticePage();
  hideWidgetsOnTuk();
  hideWidgetsOnFestAndGames();
  hideWidgetsOnContact();
  hideWidgetsOnAbout();
  hideWidgetsOnNews();
});
