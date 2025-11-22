const year = document.querySelector("#currentyear");
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

const currentYear = new Date().getFullYear();
