let parentDiv = document.querySelector(".divs");

fetch("data.json")
  .then((response) => response.json())
  .then((json) =>
  // consoe.log(json)
    json
      .map(({category, score, icon}) => {
        return (parentDiv.innerHTML += `
        <div class="div ${category}">
              <div><img src="${icon}">
              <p>${category}</p></div>
              <p class="par">${score}  <span>/ 100</span></p>
            </div>
        `);
      })
      .join("")
  );


