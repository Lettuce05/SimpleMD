import { createElement } from './util';

export function createHeader() {
  const header = createElement("header");

  // create left side of header
  const leftDiv = createElement("div", { classes: ["header-left"] });
  header.appendChild(leftDiv);

  // create middle of header
  const middleDiv = createElement("div", { classes: ["header-middle"] });
  // create filename input
  const filenameInput = createElement("input", { id: "filename" });
  filenameInput.placeholder = "Filename";
  filenameInput.value = localStorage.getItem("currFileName") || "UntitledDocument";
  // save filename changes to local storage
  filenameInput.addEventListener("change", (e) => {
    let filename = e.target.value || "";
    localStorage.setItem("currFileName", filename.trim());
  });
  middleDiv.appendChild(filenameInput);
  header.appendChild(middleDiv);

  // create right side of header
  const rightDiv = createElement("div", { classes: ["header-right"] });
  // create saveBtn
  const saveBtn = createElement("button", { id: "saveBtn" });
  saveBtn.innerText = "Save";
  saveBtn.onclick = function() {
    let modal = document.getElementById("saveModal");
    modal.style.display = "block";
  }
  rightDiv.appendChild(saveBtn);
  header.appendChild(rightDiv);

  return header;
}
