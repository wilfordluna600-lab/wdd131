const year = document.querySelector("#currentyear");
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;