const selectTag = document.getElementById("drivinglicense");
const drivingLicenseContainer = document.querySelector(
  ".driving-license-container"
);

selectTag.addEventListener("change", (e) => {
  if (e.target.value == "" || e.target.value == "no") {
    drivingLicenseContainer.style.display = "none";
    return;
  }
  drivingLicenseContainer.removeAttribute("style");
  drivingLicenseContainer.classList.add("driving-license-container");
  return;
});
