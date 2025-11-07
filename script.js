const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ======================================
   Menuja Mobile (burger menu)
====================================== */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* ======================================
   Kontrolli i zonës sipas kodit postar
   (MODIFIKO sipas zonave reale që dëshiron)
====================================== */

const postalZones = {
  // Zona A
  "1001": { zone: "A", fee: "150 Lekë" }, // Qendër
  "1010": { zone: "A", fee: "150 Lekë" }, // Blloku / Myslym Shyri (shembull)

  // Zona B
  "1023": { zone: "B", fee: "200 Lekë" }, // Don Bosko
  "1019": { zone: "B", fee: "200 Lekë" }, // 21 Dhjetori / Komuna e Parisit

  // Zona C
  "1032": { zone: "C", fee: "250–300 Lekë" }, // Sauk
  "1035": { zone: "C", fee: "250–300 Lekë" }  // Fresku
};

const postalForm = document.getElementById("postal-form");

if (postalForm) {
  postalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("postal");
    const result = document.getElementById("postal-result");

    const code = (input.value || "").trim();

    if (!code) {
      result.textContent = "Shkruaj një kod postar.";
      return;
    }

    const info = postalZones[code];

    if (info) {
      result.innerHTML = `
        Kodi <strong>${code}</strong> bie në 
        <strong>Zonën ${info.zone}</strong> • Tarifa: 
        <strong>${info.fee}</strong>.
      `;
    } else {
      result.innerHTML = `
        Kodi <strong>${code}</strong> nuk gjendet në listë.
        Na telefono për konfirmim. 📞
      `;
    }
  });
}