
export default function createHome() {
  // build the div, fill it, return it
  const homeDiv = document.createElement("div");
  homeDiv.id = "home";
  homeDiv.classList.add("tab-content");
  homeDiv.innerHTML = `
    <h1>Welcome to My Restaurant</h1>
    <p>Experience the best dining in town!</p>
  `;
  return homeDiv;
}