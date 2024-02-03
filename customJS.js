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

function hideWidgetsOnProductPage() {
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
    document.querySelector(".widget-title").style.marginTop = "0px";
    document.querySelectorAll(".wp-block-media-text")[0].style.paddingTop =
      "0px";
    document.querySelectorAll(".wp-block-media-text")[0].style.paddingBottom =
      "0px";
    document.querySelectorAll(".wp-block-media-text")[1].style.paddingTop =
      "0px";
  }
}

function hideWidgetsOnTuk() {
  if (document.location.href.includes("tuk-tuk")) {
    document.querySelector(".widget_media_gallery").style.display = "none";
    document.querySelector(".widget_contact_info").style.display = "none";
    document.querySelector(".entry-title").style.marginTop = "40px";
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

function addOpeningHours() {
  var contactInformation = document.querySelector(".contact-information");

  // Check if the element is found
  if (contactInformation) {
    // Create a new span element
    var openingHoursSpan = document.createElement("span");
    openingHoursSpan.className = "opening-hours";

    // Create an 'i' element with Font Awesome classes
    var clockIcon = document.createElement("i");
    clockIcon.className = "fa fa-clock-o";
    clockIcon.setAttribute("aria-hidden", "true");

    // Append the 'i' element to the 'span' element
    openingHoursSpan.appendChild(clockIcon);

    // Append the 'span' element to the 'contact-information' element
    contactInformation.appendChild(openingHoursSpan);
  }
  // <span class="opening-hours">
  //   <i class="fa fa-clock-o" aria-hidden="true"></i>
  // </span>
}

document.addEventListener("DOMContentLoaded", function () {
  removeMissionStatementOnMobile();
  hideWidgetsOnProductPage();
  hideWidgetsOnSofticePage();
  hideWidgetsOnTuk();
  hideWidgetsOnFestAndGames();
  hideWidgetsOnContact();
  hideWidgetsOnAbout();
  hideWidgetsOnNews();
  addOpeningHours();
});
