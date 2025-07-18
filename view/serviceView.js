import { removeHtml, insertHtml } from "../helpers.js";
import * as selector from "../selector.js";

export const loadServicesPage = function () {
  removeHtml(selector.mainSection);
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
  insertHtml(selector.mainSection, htmlText);

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
};
