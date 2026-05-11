// Add future products here to expand the landing page without changing the layout.
const products = [
  {
    name: "Countdown Event",
    status: "Featured release",
    image: "assets/logo2.png",
    alt: "Countdown Event app icon",
    summary:
      "A simple mobile app for counting down to special dates, personal milestones, and meaningful moments.",
    audience: "Users who want a cleaner way to track upcoming events",
    experience: "Warm visuals, easy navigation, and a straightforward countdown flow",
    platforms: ["Android", "iOS"],
    highlights: [
      "Beautiful countdown cards",
      "Milestone reminders",
      "Personal event tracking"
    ]
  }
];

const productGrid = document.querySelector("[data-product-grid]");
const productCount = document.querySelector("#product-count");

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.alt}" />
          <div class="product-copy">
            <header>
              <div>
                <p class="eyebrow">Mobile app</p>
                <h3>${product.name}</h3>
              </div>
              <span class="product-status">${product.status}</span>
            </header>

            <p>${product.summary}</p>

            <div class="product-platforms" aria-label="${product.name} platforms">
              ${product.platforms.map((platform) => `<span>${platform}</span>`).join("")}
            </div>

            <div class="product-meta">
              <div>
                <strong>Best for</strong>
                <p>${product.audience}</p>
              </div>
              <div>
                <strong>Experience</strong>
                <p>${product.experience}</p>
              </div>
            </div>

            <ul class="product-highlights" aria-label="${product.name} highlights">
              ${product.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

if (productCount) {
  productCount.textContent = String(products.length).padStart(2, "0");
}
