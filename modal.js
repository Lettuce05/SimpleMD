import { createElement, downloadToFile } from './util';

export function createSaveModal() {
  // create modal (backdrop)
  let modal = createElement("div", {
    classes: ["modal"],
    id: "saveModal"
  });

  // create modalContent
  let modalContent = createElement("div", { classes: ["modal-content"] });
  let closeBtn = createElement("span", {
    id: "closeBtn",
    classes: ["close"]
  });
  closeBtn.innerHTML = "&times;";
  modalContent.appendChild(closeBtn);

  // create export markdown button
  let exportMDBtn = createElement("button");
  exportMDBtn.innerText = "Export as Markdown";
  exportMDBtn.onclick = function() {
    let filenameInput = document.getElementById("filename");
    if (filenameInput && filenameInput.value.trim() && localStorage.getItem("currDoc")) {
      downloadToFile(localStorage.getItem("currDoc"), filenameInput.value.trim() + ".md", "text/plain");
    }
  }
  modalContent.appendChild(exportMDBtn);

  // create export pdf button
  let exportPDFBtn = createElement("button");
  exportPDFBtn.innerText = "Export as PDF";
  exportPDFBtn.onclick = function() {
    window.print();
  }
  modalContent.appendChild(exportPDFBtn);

  // insert modal-content into modal
  modal.appendChild(modalContent);

  return modal;
}