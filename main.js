import './style.css'
import './standard.css';
import { basicSetup, EditorView } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from '@codemirror/theme-one-dark';
import showdown from 'showdown';
import { createHeader } from "./header";
import { createElement } from './util';

let converter = new showdown.Converter();

const app = document.getElementById("app");
let previewTheme = "standard";

const header = createHeader();
app.appendChild(header);

const main = createElement("main");
const editor = createElement("div", { id: "editor" });
const previewContainer = createElement("div", { id: "previewContainer" });
const preview = createElement("div", {id: "preview"});
preview.classList.add(previewTheme);
previewContainer.appendChild(preview);

function handleChange(e) {
  let text = e.state.doc.toString();
  let html = converter.makeHtml(text);
  console.log(html);
  preview.innerHTML = html;
}

main.appendChild(editor);
main.appendChild(previewContainer);
app.appendChild(main);

let view = new EditorView({
  doc: "",
  extensions: [
    basicSetup,
    markdown({ codeLanguages: languages }),
    oneDark,
    EditorView.updateListener.of(handleChange)
  ],
  parent: editor
})
