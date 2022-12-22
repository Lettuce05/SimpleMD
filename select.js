import { createElement } from './util';

const themes = [
  "standard",
  "standard-alt",
  "standard1",
];

export function createSelect() {
  let selectContainer = createElement("div", { id: "select-container" });

  let select = createElement("div", { id: "selected", classes: ["select-item"] });
  select.innerText = "standard";

  selectContainer.append(select);

  let selectItems = createElement("div", { id: "select-items", classes: ["select-hide"] });
  for (let i = 0; i < themes.length; i++) {
    let selectItem = createElement("div", { classes: ["select-item"] });
    selectItem.innerText = themes[i];
    selectItem.onclick = function() {
      // update selected
      select.innerText = themes[i];
      // hide select-items
      selectItems.classList.toggle("select-hide");
      // update css file
      let themeLink = document.getElementById('themeLink');
      themeLink.href = themes[i] + ".css";
      // update preview theme class
      let preview = document.getElementById("preview");
      preview.className = "";
      preview.classList.add(themes[i]);
    }
    selectItems.appendChild(selectItem);
  }
  selectContainer.append(selectItems);

  select.onclick = function() {
    selectItems.classList.toggle("select-hide");
  }

  return selectContainer;
}