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
  const splitBtn = createElement("button", { id: "splitBtn", classes: ["header-btn"] });
  splitBtn.innerText = "Split";
  splitBtn.onclick = function() {
    if (document.getElementById("previewContainer") && document.getElementById("editor")) {
      let preview = document.getElementById("previewContainer");
      let editor = document.getElementById("editor");

      if (preview.style.display === "none" || (preview.style.display === "block" && editor.style.display === "none")) {
        preview.style.display = "block";
        preview.style.width = "50%";
        editor.style.display = "block";
        editor.style.width = "50%";
      } else {
        preview.style.display = "none";
        editor.style.display = "block";
        editor.style.width = "100%";
      }
    }
  }
  rightDiv.appendChild(splitBtn);

  // create preview button
  const previewBtn = createElement("button", { id: "previewBtn", classes: ["header-btn"] });
  previewBtn.innerText = "Preview";
  previewBtn.onclick = function() {
    if (document.getElementById("previewContainer") && document.getElementById("editor")) {
      let preview = document.getElementById("previewContainer");
      let editor = document.getElementById("editor");

      if (preview.style.display !== "none" && editor.style.display !== "none") {
        return;
      } else if (editor.style.display === "none") {
        preview.style.display = "none";
        editor.style.display = "block";
        editor.style.width = "100%";
      } else {
        editor.style.display = "none";
        preview.style.display = "block";
        preview.style.width = "100%";
      }
    }
  }
  rightDiv.appendChild(previewBtn);
  // create saveBtn
  const saveBtn = createElement("button", { id: "saveBtn", classes: ["header-btn"] });
  saveBtn.innerText = "Save";
  saveBtn.onclick = function() {
    let modal = document.getElementById("saveModal");
    modal.style.display = "block";
  }
  rightDiv.appendChild(saveBtn);
  header.appendChild(rightDiv);

  return header;
}
