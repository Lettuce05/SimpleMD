import { createElement } from './util';

export function createHeader() {
  const header = createElement("header");

  const leftDiv = createElement("div", { classes: ["header-left"] });
  header.appendChild(leftDiv);

  const middleDiv = createElement("div", { classes: ["header-middle"] });
  const filenameInput = createElement("input", { id: "filename" });
  filenameInput.placeholder = "Filename";
  filenameInput.value = "UntitledDocument";
  middleDiv.appendChild(filenameInput);
  header.appendChild(middleDiv);

  const rightDiv = createElement("div", { classes: ["header-right"] });
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
