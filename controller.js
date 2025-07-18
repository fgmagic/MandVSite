"use strict";

import * as selector from "./selector.js";
import { loadReferencePage } from "./view/referenceView.js";
import { loadIndexPage } from "./view/indexView.js";
import { emailJSInit, loadContactPage, sendEmail } from "./view/contactView.js";
import { loadServicesPage } from "./view/serviceView.js";

selector.indexButton.addEventListener("click", loadIndexPage);
selector.logoButton.addEventListener("click", loadIndexPage);

selector.referenceButton.addEventListener("click", loadReferencePage);

selector.contactButton.addEventListener("click", loadContactPage);

emailJSInit();
selector.mainSection.addEventListener("submit", sendEmail);
selector.servicesButton.addEventListener("click", loadServicesPage);
