const parentDiv = document.querySelector(".divs");

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const html = data
      .map(
        ({ category, score, icon }) => `
      <div class="div ${category}">
        <div>
          <img src="${icon}" alt="image of ${category}">
          <p>${category}</p>
        </div>
        <p class="par">${score} <span>/ 100</span></p>
      </div>
    `
      )
      .join("");

    parentDiv.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
