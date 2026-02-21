document.addEventListener("DOMContentLoaded", () => {

  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  document.getElementById("lastModified").innerHTML = document.lastModified;


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
    subtitles: "Our last Competition",
    contents: "Among the many competitions we had in the past, this was our last competition that we held for the club's anniversary.",
    locations: "Pisco City - District San Andres",
    distances: "10Km",
    dates: "November 24th 2025",
    images: "images/image-running-three.jpg",
    imageNames: "third image running",
    },
    {
    subtitles: "Our next Competition",
    contents: "We will soon participate in this great competition in the capital of the country, everyone and, of course, our club are invited to take part.",
    locations: "State Lima - Huaura City - Huacho District",
    distances: "15Km",
    dates: "March 15th 2026",
    images: "images/image-running-four.jpg",
    imageNames: "fourth image running",
    },
  ];



  function createSecondContentCard(showSecondContent) {
    document.querySelector(".second-content").innerHTML = "";
    showSecondContent.forEach(secondContents => {
      let cards = document.createElement("section");
      let eachSubtitle = document.createElement("h2");
      let eachContent = document.createElement("p");
      let eachLocation = document.createElement("p");
      let eachDistance = document.createElement("p");
      let eachDate = document.createElement("p");
      let imgs = document.createElement("img");

      eachSubtitle.textContent = secondContents.subtitles;
      eachContent.textContent = secondContents.contents;
      eachLocation.textContent = `Location: ${secondContents.locations}`;
      eachDistance.textContent = `Distance: ${secondContents.distances}`;
      eachDate.textContent = `Date: ${secondContents.dates}`;
      imgs.src = secondContents.images;
      imgs.alt = secondContents.imageNames;
      imgs.setAttribute("loading", "lazy");    

      cards.appendChild(eachSubtitle);
      cards.appendChild(eachContent);
      cards.appendChild(eachLocation);
      cards.appendChild(eachDistance);
      cards.appendChild(eachDate);
      cards.appendChild(imgs);

      document.querySelector(".second-content").appendChild(cards);
    });
  };

  const firstContainer = document.querySelector(".first-content");
  if (firstContainer) {
    createContentCard(firstPage);
  }

  const secondContainer = document.querySelector(".second-content");
  if (secondContainer) {
    createSecondContentCard(secondPage);
  }

});