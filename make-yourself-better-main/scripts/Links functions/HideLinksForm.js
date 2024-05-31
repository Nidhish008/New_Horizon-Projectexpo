const HideLinksForm = document.getElementById("hide-links-form");
const linksAddContainer = document.querySelector(".links-add-container");
const linksAddMinus = document.querySelector(".links-add-minus");
const linksAddPlus = document.querySelector(".links-add-plus");

HideLinksForm.addEventListener("click", hideLinksForm);

function hideLinksForm() {
  if (!linksAddContainer.classList.contains("hidden")) {
    linksAddContainer.classList.add("hidden");

    linksAddMinus.classList.add("hidden");
    linksAddPlus.classList.remove("hidden");
  } else {
    linksAddContainer.classList.remove("hidden");

    linksAddPlus.classList.add("hidden");
    linksAddMinus.classList.remove("hidden");
  }
}
