const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.querySelector('body').classList.toggle('active');
  })
);

const projects = [
  {
    name: 'Bookstore CMS',
    company: 'MICROVERSE',
    stack: 'Front End Dev',
    year: '2022',
    description: `
    The Online Book Store is a web application that displays a list of books,
    allows users to add and edit books by title or author, remove a selected book, and make comments. 
    `,
    featuredImage: './images/BookStore.png',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card1',
    liveVersionLink: 'https://cheerful-klepon-025bfa.netlify.app/',
    sourceLink: 'https://github.com/Hadi111jafari/bookstore',
  },

  {
    name: 'Book Car',
    company: 'MICROVERSE',
    stack: 'Full Stack Dev',
    year: '2022',
    description: `
    Book car is a platform to book a car that is present in different cities for a given period of time.
    The user selects the duration of rental per car model type and price range. If a user is an admin,
    he can manage the car resources by updating the list of cars in the database.
    `,
    featuredImage: './images/Screenshotp10.png',
    tech1: 'React',
    tech2: 'ROR',
    tech3: 'Tailwindcss',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Redux',
    modalId: 'card2',
    liveVersionLink: 'https://fbookcar.netlify.app/',
    sourceLink: 'https://github.com/Hadi111jafari/CarBooking-Frontend',
  },

  {
    name: 'Math Magicians',
    company: 'MICROVERSE',
    stack: 'Front End Dev',
    year: '2022',
    description: `
    Math magicians is a calculator that provides simple and advanced mathematical functions in a beautifully designed app.
    Perform basic calculations such as addition, subtraction, multiplication, and division.
    That I have built using React and CSS3 for styling. In order to deliver a bag-free product, I used Jest for testing this app.
 `,
    featuredImage: './images/calculator.png',
    tech1: 'React',
    tech2: 'css',
    tech3: 'Javascrip',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card3',
    liveVersionLink: 'https://remarkable-starship-783528.netlify.app/',
    sourceLink: 'https://github.com/Hadi111jafari/Math-Magicians',
  },
  {
    name: 'Pokedex',
    company: 'MICROVERSE',
    stack: 'Front End Dev',
    year: '2022',
    description: `
    This web app displays a list of Pokémon. Users can "like" their favorite Pokémon and make comments about them.
    Comments and likes are posted to the Involvement API. A couple of tests are made possible using the JEST framework for testing.
    `,
    featuredImage: './images/pokedex.png',
    tech1: 'webpack',
    tech2: 'css',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card4',
    liveVersionLink: 'https://hadi111jafari.github.io/capstone2-API-webapp/',
    sourceLink: 'https://github.com/Hadi111jafari/capstone2-API-webapp ',
  },
];

function newProject(project) {
  return `
    <div class="project-container reveal">
      <img src="${project.featuredImage}" alt=${project.name} />
      <div class="project-content">
        <h2>${project.name}</h2>
        <div class="project-info">
          <p id="project-company">${project.company}</p>
          <ul class="project-field">
            <li class="project-backend">${project.stack}</li>
            <li class="project-year">${project.year}</li>
          </ul>
        </div>
        <p>
        ${project.description}
        </p>
        <ul class="project-technologies">
          <li>${project.tech1}</li>
          <li>${project.tech2}</li>
          <li>${project.tech3}</li>
        </ul>
        <div id="js-modal-btn-container">
        <button onclick="openModal('${project.modalId}')" class="js-btn js-modal-btn" id="${project.modalId}">See Project</button>
        <div style="display:flex;">
          <div class="js-modal-links">
            <a href="${project.liveVersionLink}" target="_blank" rel="noreferrer noopener">See Live </a>
            <img src="images/onoff.png" alt="livevsersionlink" />
          </div>
          <div class="js-modal-links">
            <a href="${project.sourceLink}" target="_blank" rel="noreferrer noopener">source code</a>
            <img src="images/github1.png" alt="github" />
          </div>
        </div>      
        </div>
      </div>
    </div>
  `;
}
// eslint-disable-next-line no-unused-vars
function openModal(modalId) {
  const modalOverlay = document.querySelector('.modal-overlay');
  html.style.overflow = 'hidden';
  modalOverlay.classList.add('show-container');
  projects.forEach((project) => {
    if (project.modalId === modalId) {
      const x = document.querySelector('.modal-container');
      x.innerHTML = `
      <div class="js-modal-container">
        <div class="js-modal-content">
          <h2>${project.name}</h2>
          <div class="js-modal-content-top">
            <p id="js-modal-company">${project.company}</p>
            <ul class="js-modal-field">
              <li class="js-modal-backend">${project.stack}</li>
              <li class="js-modal-year">${project.year}</li>
            </ul>
          </div>
          <img id="js-modal-image" src="${project.featuredImage}" alt="${project.name}" />
          <div id="js-modal-content-bottom">
            <div id="js-modal-content-bottom-description">
              <p id="js-modal-description">
              ${project.description}
              </p>
            </div>
            <div id="js-modal-tech-and-links">
              <ul class="js-modal-technologies">
                <li>${project.tech1}</li>
                <li>${project.tech2}</li>
                <li>${project.tech3}</li>
              </ul>
              <div id="js-modal-links-container">
                <div style="display:flex;">
                  <div class="js-modal-links">
                    <a href="${project.liveVersionLink}" target="_blank" rel="noreferrer noopener">See Live </a>
                    <img src="images/onoff.png" alt="livevsersionlink" />
                  </div>
                  <div class="js-modal-links">
                    <a href="${project.sourceLink}" target="_blank" rel="noreferrer noopener">source code</a>
                    <img src="images/github1.png" alt="github" />
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </div>
        <button class="btn-close"><i class="fas fa-times"></i></button>
      </div>
`;
    }
  });
  const closeBtn = document.querySelector('.btn-close');
  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show-container');
    html.style.overflowY = 'auto';
  });
}
const generatedProject = projects.map((project) => {
  const projectContainer = document.createElement('div');
  projectContainer.innerHTML = newProject(project);
  return projectContainer;
});

const projectsContainer = document.querySelector('#projects');
const projectQuantity = projects.length;
for (let i = 0; i < projectQuantity; i += 1) {
  projectsContainer.appendChild(generatedProject[i]);
}

// Get Data
const form = document.querySelector('form');
const nameInput = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');
form.addEventListener('submit', (ev) => {
  function validateForm() {
    // clear error / success messages
    function clearMessage() {
      for (let i = 0; i < errorNodes.length; i += 1) {
        errorNodes[i].innerText = '';
      }
      success.innerText = '';
    }
    clearMessage();
    let errorFlag = false;
    if (nameInput.value.length < 1) {
      ev.preventDefault();
      errorNodes[0].innerText = 'Name can not be blank';
      errorFlag = true;
    }
    if (email.value.length === 0 || email.value !== email.value.toLowerCase()) {
      ev.preventDefault();
      errorNodes[1].innerText = 'Invalid Email Address';
      errorFlag = true;
    }
    if (message.value.length < 5) {
      ev.preventDefault();
      errorNodes[2].innerText = 'Please Enter Message';
      errorFlag = true;
    }
    if (!errorFlag) {
      success.innerText = 'Success!';
    }
  }
  validateForm();
});

const usrD = {};
function saveD(usrD) {
  const fName = document.querySelector('.name').value;
  const fEmail = document.querySelector('.email').value;
  const fMessage = document.querySelector('#message').value;
  usrD = {
    name: fName,
    email: fEmail,
    message: fMessage,
  };
  localStorage.setItem('user', JSON.stringify(usrD));
  let dataRecord = [];
  dataRecord = JSON.parse(localStorage.getItem('dUser'));
  dataRecord.push({
    name: fName,
    email: fEmail,
    message: fMessage,
  });
  localStorage.setItem('dUser', JSON.stringify(dataRecord));
}

form.addEventListener('change', () => {
  saveD(usrD);
});

window.addEventListener('load', () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  if (storage) {
    Object.entries(storage).forEach((inputForm) => {
      const [key, value] = inputForm;
      document.getElementById(key).value = value;
    });
  }
});

let acc = document.getElementsByClassName('accordion');
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
