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

  if (contactInformation) {
    var openingHoursSpan = document.createElement("span");
    openingHoursSpan.className = "opening-hours";

    var clockIcon = document.createElement("i");
    clockIcon.className = "fa fa-clock-o";
    clockIcon.setAttribute("aria-hidden", "true");
    clockIcon.style.paddingRight = "3px";

    openingHoursSpan.appendChild(clockIcon);

    var openingHoursTextSpan = document.createElement("span");
    openingHoursTextSpan.textContent = "Alle dage 08-22";

    openingHoursSpan.appendChild(openingHoursTextSpan);

    contactInformation.appendChild(openingHoursSpan);
  }
}

function addSecondPhoneNumber() {
  var contactInformation = document.querySelector(".contact-information");

  if (contactInformation) {
    var telephoneSpan = document.createElement("span");
    telephoneSpan.className = "telephone fa fa-phone";
    telephoneSpan.setAttribute("itemprop", "telephone");

    var telephoneLink = document.createElement("a");
    telephoneLink.href = "tel:+30326664";

    var screenReaderText = document.createElement("span");
    screenReaderText.className = "screen-reader-text";
    screenReaderText.textContent = "Telephone number";

    telephoneLink.appendChild(screenReaderText);

    var telephoneNumber = document.createElement("span");
    telephoneNumber.textContent = "30326664";
    telephoneNumber.style.paddingLeft = "3px";

    telephoneLink.appendChild(telephoneNumber);

    telephoneSpan.appendChild(telephoneLink);

    if (contactInformation.children.length >= 2) {
      contactInformation.insertBefore(
        telephoneSpan,
        contactInformation.children[1]
      );
    } else {
      contactInformation.appendChild(telephoneSpan);
    }
  }
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
  addSecondPhoneNumber();
});
