export function createElement(type, options = {}) {
  let classes = options.classes || [];

  let element = document.createElement(type);

  if (options.id) {
    element.id = options.id;
  }

  classes.forEach((currClass) => { element.classList.add(currClass) });

  return element;
}

export function downloadToFile(content, filename, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
}