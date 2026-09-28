import "./styles.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

console.log("Webpack is running!");

const homeButton = document.getElementById("home-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

document.addEventListener("DOMContentLoaded", () => {
    homeButton.addEventListener("click", () => {
        document.querySelector("#content").textContent = "";
        document.querySelector("#content").appendChild(createHome());
    });
    menuButton.addEventListener("click", () => {
        document.querySelector("#content").textContent = "";
        document.querySelector("#content").appendChild(createMenu());
    });
    contactButton.addEventListener("click", () => {
        document.querySelector("#content").textContent = "";
        document.querySelector("#content").appendChild(createContact());
    });
});



