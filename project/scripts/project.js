const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

const firstPage = [
    {
    subtitle: "Club Members",
    content: "Our club has 60 members, with a president along with nine other members who run this club. We accept people who are of legal age and want to participate.",
    image: "../images/image-running-one.jpg",
    imageName: ,
  },
    {
    subtitle: "Weekly Practices",
    content: "We have weekly practices at Pisco Beach and Paracas Beach, which are located in the city of Pisco; all members are invited to come and practice with the group while enjoying the relaxing view of the sea.",
    image: "../images/image-running-two.jpg",
  },
];

console.log(productos);

// Insertar dinámicamente en el DOM
productos.forEach(producto => {
  // Crear un contenedor
  const div = document.createElement("div");
  div.className = "producto";

  // Crear título
  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  // Crear imagen
  const img = document.createElement("img");
  img.src = producto.imagen; // Asignar la ruta
  img.alt = producto.nombre;
  img.width = 200; // Opcional

  // Crear precio
  const precio = document.createElement("p");
  precio.textContent = `Precio: $${producto.precio}`;

  // Añadir elementos al contenedor
  div.appendChild(titulo);
  div.appendChild(img);
  div.appendChild(precio);

  // Insertar en el body o en un contenedor específico
  document.body.appendChild(div);
});



createContentCard(firstPage);

function createContentCard(showContent) {
  document.querySelector(".first-content").innerHTML = "";
  showContent.forEach(content => {
    let card = document.createElement("section");
    let eachSubtitle = document.createElement("h2");
    let eachContent = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".nine-images").appendChild(card);
  });
}