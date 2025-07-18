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

servicesButton.addEventListener("click", function () {
  removeHtml(mainSection);
  const htmlText = `<div class="websitelist-container">
        <h2>Webfejlesztési Szolgáltatásaink</h2>

        <div class="accordion">
          <div class="accordion-header">
            Statikus weboldalak <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Gyors betöltésű, költséghatékony megoldás kisvállalkozásoknak vagy
              kampányoldalakhoz. Ideális választás, ha nincs szükség gyakori
              tartalomfrissítésre.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Dinamikus weboldalak <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Tartalomkezelő rendszerrel (CMS) ellátott, könnyen frissíthető
              weboldalak. Alkalmas blogok, híroldalak, vállalati portálok
              kialakítására.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            E-kereskedelmi rendszerek (webshopok) <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Teljes funkcionalitású online áruházak egyedi vagy szabványos
              platformokra építve (pl. Shopify, WooCommerce, Magento).
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Üzleti webportálok <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Személyre szabott megoldások cégek számára – ügyfélkapuk, belső
              információs rendszerek, partnereknek szóló felületek kialakítása.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Reszponzív weboldalak <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Minden eszközre (mobil, tablet, asztali gép) optimalizált
              felhasználói élmény, modern dizájnnal és letisztult felépítéssel.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Webes alkalmazások (Web Apps) <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Interaktív, funkciókban gazdag alkalmazások fejlesztése üzleti
              vagy egyedi igényekre – például időpontfoglaló, kalkulátor,
              CRM-felület.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            SAP UI5 / Fiori applikációk <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Vállalati szintű üzleti alkalmazások fejlesztése az SAP
              ökoszisztémában. Modern, reszponzív felhasználói felületek SAP
              rendszerekhez.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Egyedi szoftvermegoldások <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Teljesen testreszabott fejlesztések – az ötlettől a
              megvalósításig. Ideális különleges üzleti folyamatok
              digitalizálására.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Landing oldalak és kampányfelületek <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Konverzióra optimalizált oldalak marketingkampányokhoz,
              eseményekhez vagy termékbevezetésekhez.
            </p>
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-header">
            Weboldal újratervezés és modernizálás <span class="icon">▶</span>
          </div>
          <div class="accordion-body">
            <p>
              Meglévő oldalak teljes átalakítása technikai és vizuális
              szempontból, naprakész trendekhez és eszközökhöz igazítva.
            </p>
          </div>
        </div>
      </div>`;
  insertHtml(mainSection, htmlText);

  // Now that accordion HTML is in the DOM, select and initialize them
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((acc) => {
    const header = acc.querySelector(".accordion-header");
    const body = acc.querySelector(".accordion-body");

    header.addEventListener("click", () => {
      const isOpen = acc.classList.contains("open");

      accordions.forEach((a) => {
        a.classList.remove("open");
        a.querySelector(".accordion-body").style.maxHeight = null;
      });

      if (!isOpen) {
        acc.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
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
