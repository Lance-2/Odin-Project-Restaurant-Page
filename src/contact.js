
export default function createContact() {
  // build the div, fill it, return it
  const contactDiv = document.createElement("div");
  contactDiv.id = "contact";
  contactDiv.classList.add("tab-content");
  contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>We'd love to hear from you!</p>
  `;
  return contactDiv;
}