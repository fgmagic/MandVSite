"use strict";

import * as selector from "./selector.js";
import { loadReferencePage } from "./view/referenceView.js";
import { loadIndexPage } from "./view/indexView.js";
import { loadContactPage } from "./view/contactView.js";
import { loadServicesPage } from "./view/serviceView.js";
import * as emailjs from "@emailjs/browser";
import * as defaults from "./defaults.js";

selector.indexButton.addEventListener("click", loadIndexPage);
selector.logoButton.addEventListener("click", loadIndexPage);
selector.referenceButton.addEventListener("click", loadReferencePage);
selector.contactButton.addEventListener("click", loadContactPage);

selector.servicesButton.addEventListener("click", loadServicesPage);

const emailJSInit = function () {
  emailjs.init({
    publicKey: defaults.EMAILJS_PUBLIC_KEY,
  });
};
emailJSInit();

const sendEmail = function (e) {
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
};

selector.mainSection.addEventListener("submit", sendEmail);
