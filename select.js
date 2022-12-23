import { createElement } from './util';

const themes = [
  "standard",
  "standard-alt",
  "standard-dark",
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
      // update preview theme class
      let preview = document.getElementById("preview");
      preview.className = "";
      preview.classList.add(themes[i]);

      // give body class dark if it is a dark theme (make background match for printing)
      if (themes[i].includes("dark")){
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
    selectItems.appendChild(selectItem);
  }
  selectContainer.append(selectItems);

  select.onclick = function() {
    selectItems.classList.toggle("select-hide");
  }

  return selectContainer;
}