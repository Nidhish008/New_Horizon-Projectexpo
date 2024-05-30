import { hideRevealOpenAllLinks } from "../Links functions/openAllLinks.js";

const linksNameInput = document.querySelector(".links-name-input");
const linksLinkInput = document.querySelector(".links-link-input");
const addLinkButton = document.querySelector(".links-add-button");
const linksList = document.querySelector(".links-list");

document.addEventListener("DOMContentLoaded", getLinks);
addLinkButton.addEventListener("click", addLink);
linksList.addEventListener("click", deleteLink);

function addLink(event) {
  event.preventDefault();

  if (!linksNameInput.value || !linksLinkInput.value) {
    return;
  }

  //Link DIV
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("link");

  //Create LI
  const newLinkLi = document.createElement("li");
  newLinkLi.classList.add("link-block");
  linkDiv.appendChild(newLinkLi);

  //ADD LINK TO LOCALSTORAGE
  saveLocalLinks({ name: linksNameInput.value, link: linksLinkInput.value });

  //Create Link Button
  const newLink = document.createElement("a");
  newLink.classList.add("link-item", "button");
  newLink.innerText = linksNameInput.value;
  newLink.href = linksLinkInput.value;
  newLinkLi.appendChild(newLink);

  //Create Trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add(
    "links-list-trash-button",
    "trash-button",
    "button"
  );
  newLinkLi.appendChild(trashButton);

  //APPEND TO LIST
  linksList.appendChild(linkDiv);

  //Clear Inputs
  linksNameInput.value = "";
  linksLinkInput.value = "";

  hideRevealOpenAllLinks();
}

function deleteLink(element) {
  const item = element.target;

  if (item.classList[0] === "links-list-trash-button") {
    const link = item.parentElement;
    removeLocalLinks(link.innerText);
    link.remove();

    hideRevealOpenAllLinks();
  }
}

function saveLocalLinks(linkItem) {
  let links;
  if (localStorage.getItem("links") === null) {
    links = [];
  } else {
    links = JSON.parse(localStorage.getItem("links"));
  }

  links.push(linkItem);
  localStorage.setItem("links", JSON.stringify(links));
}

function getLinks() {
  let links;
  if (localStorage.getItem("links") === null) {
    links = [];
  } else {
    links = JSON.parse(localStorage.getItem("links"));
  }

  links.forEach(function (link) {
    //Link DIV
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link");

    //Create LI
    const newLinkLi = document.createElement("li");
    newLinkLi.classList.add("link-block");
    linkDiv.appendChild(newLinkLi);

    //Create Link Button
    const newLink = document.createElement("a");
    newLink.classList.add("link-item", "button");
    newLink.innerText = link.name;
    newLink.href = link.link;
    newLinkLi.appendChild(newLink);

    //Create Trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add(
      "links-list-trash-button",
      "trash-button",
      "button"
    );
    newLinkLi.appendChild(trashButton);

    //APPEND TO LIST
    linksList.appendChild(linkDiv);
  });
}

function removeLocalLinks(link) {
  let links;
  if (localStorage.getItem("links") === null) {
    links = [];
  } else {
    links = JSON.parse(localStorage.getItem("links"));
  }

  links.splice(
    links.findIndex((n) => n.name === link),
    1
  );

  localStorage.setItem("links", JSON.stringify(links));
}
