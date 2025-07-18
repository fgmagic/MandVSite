import { removeHtml, insertHtml } from "../helpers.js";
import * as selector from "../selector.js";

export const loadReferencePage = function () {
  removeHtml(selector.mainSection);
  const htmlText = `<div class="reference--container">
        <h1 class="reference--title">Our Website References</h1>
        <div class="reference--grid">
          <div class="reference--card">
            <img
              src="https://placehold.jp/bcbcbd/ffffff/300x150.png?text=Website"
              alt="Website 1"
              class="reference--image"
            />
            <h2 class="reference--card-title">Website One</h2>
            <p class="reference--description">
              A modern portfolio showcasing design and UX/UI principles.
            </p>
          </div>
          <div class="reference--card">
            <img
              src="https://placehold.jp/bcbcbd/ffffff/300x150.png?text=Website"
              alt="Website 2"
              class="reference--image"
            />
            <h2 class="reference--card-title">Website Two</h2>
            <p class="reference--description">
              An e-commerce platform built for speed and scalability.
            </p>
          </div>
          <div class="reference--card">
            <img
              src="https://placehold.jp/bcbcbd/ffffff/300x150.png?text=Website"
              alt="Website 3"
              class="reference--image"
            />
            <h2 class="reference--card-title">Website Three</h2>
            <p class="reference--description">
              A blog that delivers insightful articles and user-friendly
              navigation.
            </p>
          </div>
          <div class="reference--card">
            <img
              src="https://placehold.jp/bcbcbd/ffffff/300x150.png?text=Website"
              alt="Website 4"
              class="reference--image"
            />
            <h2 class="reference--card-title">Website Four</h2>
            <p class="reference--description">
              An event management site with smooth booking and scheduling
              features.
            </p>
          </div>
        </div>
      </div>`;
  insertHtml(selector.mainSection, htmlText);
};
