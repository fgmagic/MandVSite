import { removeHtml, insertHtml } from "../helpers.js";
import * as selector from "../selector.js";

export const loadIndexPage = function () {
  removeHtml(selector.mainSection);
  const htmlText = `<h1>Üdvözlünk a weboldaladon!</h1>
      <p>Segítünk kiemelkedni a digitális térben.</p>`;
  insertHtml(selector.mainSection, htmlText);
};
