const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

const firstPage = [
  {
  subtitle: "Club Members",
  content: "Our club has 60 members, with a president along with nine other members who run this club. We accept people who are of legal age and want to participate.",
  image: "images/image-running-one.jpg",
  imageName: "first image running",
  },
  {
  subtitle: "Weekly Practices",
  content: "We have weekly practices at Pisco Beach and Paracas Beach, which are located in the city of Pisco; all members are invited to come and practice with the group while enjoying the relaxing view of the sea.",
  image: "images/image-running-two.jpg",
  imageName: "second image running",
  },
];


createContentCard(firstPage);

function createContentCard(showContent) {
  document.querySelector(".first-content").innerHTML = "";
  showContent.forEach(contents => {
    let card = document.createElement("section");
    let eachSubtitle = document.createElement("h2");
    let eachContent = document.createElement("p");
    let img = document.createElement("img");

    eachSubtitle.textContent = contents.subtitle;
    eachContent.textContent = contents.content;
    img.src = contents.image;
    img.alt = contents.imageName;
    img.setAttribute("loading", "lazy");    

    card.appendChild(eachSubtitle);
    card.appendChild(eachContent);
    card.appendChild(img);

    document.querySelector(".first-content").appendChild(card);
  });
};



const secondPage = [
  {
  subtitle: "Our last Competition",
  content: "Among the many competitions we had in the past, this was our last competition that we held for the club's anniversary.",
  location: "Pisco City, District San Andres",
  distance: "10Km",
  date: "November 24th 2025",
  image: "images/image-running-three.jpg",
  imageName: "third image running",
  },
  {
  subtitle: "Our next Competition",
  content: "We will soon participate in this great competition in the capital of the country, everyone and, of course, our club are invited to take part.",
  location: "State Lima, Huaura City, Huacho District",
  distance: "15Km",
  date: "March 15th 2026",
  image: "images/image-running-four.jpg",
  imageName: "fourth image running",
  },
];


createSecondContentCard(secondPage);

function createSecondContentCard(showSecondContent) {
  document.querySelector(".second-content").innerHTML = "";
  showSecondContent.forEach(contents => {
    let card = document.createElement("section");
    let eachSubtitle = document.createElement("h2");
    let eachContent = document.createElement("p");
    let eachLocation = document.createElement("p");
    let eachDistance = document.createElement("p");
    let eachDate = document.createElement("p");
    let img = document.createElement("img");

    eachSubtitle.textContent = contents.subtitle;
    eachContent.textContent = contents.content;
    eachLocation.innerHTML = `<span class="label">Location:</span> ${contents.location}`;
    eachDistance.innerHTML = `<span class="label">Distance:</span> ${contents.distance}`;
    eachDate.innerHTML = `<span class="label">Date:</span> ${contents.date}`;
    img.src = contents.image;
    img.alt = contents.imageName;
    img.setAttribute("loading", "lazy");    

    card.appendChild(eachSubtitle);
    card.appendChild(eachContent);
    card.appendChild(img);

    document.querySelector(".second-content").appendChild(card);
  });
};