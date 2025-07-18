import { removeHtml, insertHtml } from "../helpers.js";
import * as selector from "../selector.js";

export const loadContactPage = function () {
  removeHtml(selector.mainSection);
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
  insertHtml(selector.mainSection, htmlText);
};
