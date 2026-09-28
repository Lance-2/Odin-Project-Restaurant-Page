export default function createMenu() {
  // build the div, fill it, return it
  const menuDiv = document.createElement("div");
  menuDiv.id = "menu";
  menuDiv.classList.add("tab-content");
  menuDiv.innerHTML = `
    <h1>Our Menu</h1>
    <p>Check out our delicious dishes!</p>
  `;
  return menuDiv;
}