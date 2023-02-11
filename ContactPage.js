function hideContactSidebarOnConctack() {
  if (document.location.href.includes("kontakt")) {
    document.getElementById("block-2").style.display = "none";
    document.getElementById("block-7").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  hideContactSidebarOnConctack();
});
