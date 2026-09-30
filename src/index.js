import "./styles.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

showTab(createHome);

document.addEventListener("DOMContentLoaded", () => {
  homeButton.addEventListener("click", () => {
    showTab(createHome);
  });
  menuButton.addEventListener("click", () => {
    showTab(createMenu);
  });
  contactButton.addEventListener("click", () => {
    showTab(createContact);
  });
});

function showTab(createTab) {
  document.querySelector("#content").textContent = "";
  const tabContent = createTab();
  document.querySelector("#content").appendChild(tabContent);
}
