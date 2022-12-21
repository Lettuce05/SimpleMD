export function createElement(type, options = {}) {
  let classes = options.classes || [];

  let element = document.createElement(type);

  if (options.id) {
    element.id = options.id;
  }

  classes.forEach((currClass) => { element.classList.add(currClass) });

  return element;
}