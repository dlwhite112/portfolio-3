//Movement Animation to happen
const card = document.querySelector(".contact-card");
const container = document.querySelector(".container");
//Items
const heading = document.querySelector(".img-heading");
const bioPic = document.querySelector(".bio-img img");
const resume = document.querySelector(".resume");
// const description = document.querySelector(".info h3");
// const icons = document.querySelectorAll(".icons a");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  heading.style.transform = "translateZ(150px)";
  bioPic.style.transform = "translateZ(200px) rotateZ(-10deg)";
  description.style.transform = "translateZ(125px)";
//   icons.style.transform = "translateZ(100px)";
  resume.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  heading.style.transform = "translateZ(0px)";
  bioPic.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
//   icons.style.transform = "translateZ(0px)";
  resume.style.transform = "translateZ(0px)";
});