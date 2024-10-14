var project = [
    {
        name: "Uifry",
        desc: "This is an internship assignment that I received. In this, I created a responsive webpage that showcased the work and functionality of the organization Uifry.",
        link: "https://uifry-inky.vercel.app/"
    },
    {
        name: "Netart",
        desc: "This application showcased the achievements of C.R.I. pumps and provided information about the company.This application was created in React.",
        link: "https://netartcriassignment.netlify.app/"
    },
    {
        name: "Car seller application",
        desc: "This is a car-selling application.It is created using ReactJS, Bootstrap. In this project I implemented pagination, and React Material UI",
        link: "https://carsellerapplication.netlify.app/"
    }
];
var mainContainer = document.querySelector("#projectsList");

project.forEach((item) => {
    var container = document.createElement("div");
    container.setAttribute("class", "card col-sm mx-2 mt-3");
    container.innerHTML = `

  <img src="./assets/dummy.jpg" class="card-img-top" alt="dummy">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.desc}</p>
  </div>
  <div class="card-body">
    <a href="${item.link}" target="_blank" class="card-link text-decoration-none">Visit</a>
  </div>
</div>
    `;
    mainContainer.appendChild(container)
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('floatingTextarea').value = '';
  alert('Your message has been sent!'); 
});