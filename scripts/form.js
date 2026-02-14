document.getElementById("lastModified").innerHTML = document.lastModified;

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

createOptions(products);

function createOptions(showOptions) {
  document.querySelector("#product").innerHTML = "";
  showOptions.forEach(option => {
    let option = document.createElement("option");

    option.textContent = option.name;
    option.setAttribute("value", option.id);
    
    document.querySelector("#product").appendChild(option);
  });
}