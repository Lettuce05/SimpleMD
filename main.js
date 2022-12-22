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

// get reference to app
const app = document.getElementById("app");
// set preview theme
let previewTheme = "standard";

// create and render header
const header = createHeader();
app.appendChild(header);

// create main section with editor and preview panels
const main = createElement("main");
const editor = createElement("div", { id: "editor" });
const previewContainer = createElement("div", { id: "previewContainer" });
const preview = createElement("div", { id: "preview" });
preview.classList.add(previewTheme);

// if there is anything in local storage show it in preview so that editor and preview are in sync
if (localStorage.getItem("currDoc")) {
  let previewHtml = converter.makeHtml(localStorage.getItem("currDoc"));
  preview.innerHTML = previewHtml;
}

previewContainer.appendChild(preview);

// handle changes in editor
function handleChange(e) {
  let text = e.state.doc.toString();
  let html = converter.makeHtml(text);
  preview.innerHTML = html;
  localStorage.setItem("currDoc", text);
}

main.appendChild(editor);
main.appendChild(previewContainer);
app.appendChild(main);

// create and render saveModal
let saveModal = createSaveModal();
app.appendChild(saveModal);



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
