"use strict";

import * as emailjs from "@emailjs/browser";
import * as defaults from "./defaults.js";

const indexButton = document.querySelector(".links--index");
const servicesButton = document.querySelector(".links--services");
const referenceButton = document.querySelector(".links--reference");
const contactButton = document.querySelector(".links--contact");
const logoButton = document.querySelector(".logo");

const mainSection = document.querySelector(".hero");

const removeHtml = function (section) {
  section.innerHTML = "";
};

const insertHtml = function (section, htmlText) {
  section.insertAdjacentHTML("beforeend", htmlText);
};

const loadIndexPage = function () {
  removeHtml(mainSection);
  const htmlText = `<h1>Üdvözlünk a weboldaladon!</h1>
      <p>Segítünk kiemelkedni a digitális térben.</p>`;
  insertHtml(mainSection, htmlText);
};

indexButton.addEventListener("click", loadIndexPage);
logoButton.addEventListener("click", loadIndexPage);

servicesButton.addEventListener("click", function () {
  removeHtml(mainSection);
  const htmlText = `Services`;
  insertHtml(mainSection, htmlText);
});

referenceButton.addEventListener("click", function () {
  removeHtml(mainSection);
  const htmlText = `References`;
  insertHtml(mainSection, htmlText);
});

contactButton.addEventListener("click", function () {
  removeHtml(mainSection);
  const htmlText = `<div class="container">
        <h1>Kapcsolatfelvétel</h1>
        <form id="contactForm">
          <label for="type">Típus:</label>
          <select id="type" name="type" required>
          <option value="" disabled selected>Üzenet típusa</option>
          <option value="Árajánlat kérés">Árajánlat kérés</option>
          <option value="Érdeklődés">Érdeklődés</option>
          <option value="Egyéb">Egyéb</option>
            </select>

          <label for="name">Név:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email cím:</label>
          <input type="text" id="email" name="email" required />

          <label for="subject">Tárgy:</label>
          <input type="text" id="subject" name="subject" required />

          <label for="message">Üzenet:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Küldés</button>
        </form>
        <p id="status"></p>
      </div>`;
  insertHtml(mainSection, htmlText);
});

(function () {
  emailjs.init({
    publicKey: defaults.EMAILJS_PUBLIC_KEY,
  });
})();

mainSection.addEventListener("submit", function (e) {
  if (e.target && e.target.id === "contactForm") {
    e.preventDefault();
    const { type, name, email, subject, message } = Object.fromEntries(
      new FormData(e.target)
    );

    emailjs
      .send(defaults.EMAILJS_SERVICE_ID, defaults.EMAILJS_TEMPLATE_ID_REQUEST, {
        type,
        name,
        email,
        subject,
        message,
      })
      .then(
        () => {
          document.getElementById("status").textContent =
            "Üzenet sikeresen elküldve! 24 órán belül felvesszük Önnel a kapcsolatot.";
          e.target.reset();

          emailjs
            .send(
              defaults.EMAILJS_SERVICE_ID,
              defaults.EMAILJS_TEMPLATE_ID_AUTOREP,
              {
                name,
                email,
                subject,
              }
            )
            .then(
              () => {
                console.log("Autoreply sent successfully.");
              },
              (error) => {
                console.error("Autoreply failed:", error);
              }
            );
        },
        (error) => {
          document.getElementById("status").textContent =
            "Hiba történt az üzenet küldése közben: " + error.text;
        }
      );
  }
});
