import './style.css'
import './standard.css';
import { basicSetup, EditorView } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from '@codemirror/theme-one-dark';
import showdown from 'showdown';
import { createHeader } from "./header";
import { createElement } from './util';
import { createSaveModal } from "./modal";

let converter = new showdown.Converter();

const app = document.getElementById("app");
let previewTheme = "standard";

const header = createHeader();
app.appendChild(header);

const main = createElement("main");
const editor = createElement("div", { id: "editor" });
const previewContainer = createElement("div", { id: "previewContainer" });
const preview = createElement("div", { id: "preview" });
preview.classList.add(previewTheme);

if (localStorage.getItem("currDoc")) {
  let previewHtml = converter.makeHtml(localStorage.getItem("currDoc"));
  preview.innerHTML = previewHtml;
}

previewContainer.appendChild(preview);

function handleChange(e) {
  let text = e.state.doc.toString();
  let html = converter.makeHtml(text);
  preview.innerHTML = html;
  localStorage.setItem("currDoc", text);
}

main.appendChild(editor);
main.appendChild(previewContainer);
app.appendChild(main);

let saveModal = createSaveModal();
app.appendChild(saveModal);

const closeBtn = document.getElementById("closeBtn");
closeBtn.onclick = function(){
  saveModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == saveModal) {
    saveModal.style.display = "none";
  }
} 

const filenameInput = document.getElementById("filename");
filenameInput.value = localStorage.getItem("currFileName") || "UntitledDocument";
filenameInput.addEventListener("change", (e) => {
  let filename = e.target.value || "";
  localStorage.setItem("currFileName", filename.trim());
})

let view = new EditorView({
  doc: localStorage.getItem("currDoc") || "",
  extensions: [
    basicSetup,
    markdown({ codeLanguages: languages }),
    oneDark,
    EditorView.updateListener.of(handleChange)
  ],
  parent: editor
})
