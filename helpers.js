export const removeHtml = function (section) {
  section.innerHTML = "";
};

export const insertHtml = function (section, htmlText) {
  section.insertAdjacentHTML("beforeend", htmlText);
};
