const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.querySelector('body').classList.toggle('active');
}));

const cards = [
  {
    name: 'Bookstore CMS',
    company: 'Hadi',
    stack: 'Back End Dev',
    year: '2022',
    description: `
    this project is build using React and redux that can do the following.

    Display a list of books.
    Add a book.
    Remove a selected book.
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
    company: 'CANOPY',
    stack: 'Front End Dev',
    year: '2022',
    description: `
    Book car is a platform to book a car that is present in different cities for a given period of time. The user selects the duration of rental per car model type and price range. if a user is an admin he can manage the car resources by updating the list of cars in the database.
    `,
    featuredImage: './images/Screenshotp10.png',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'Tailwindcss',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card2',
    liveVersionLink: 'https://bookcar.onrender.com/',
    sourceLink: 'https://github.com/Hadi111jafari/CarBooking-Frontend',
  },

  {
    name: 'Math Magicians',
    company: 'CANOPY',
    stack: 'Front End Dev',
    year: '2022',
    description: `
    This is a calculator app which I have build using react.
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
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2022',
    description: `
    This web app displays a list of pokemons. Users can like thier favorite pokemons and make comments about them. Comments and likes are posted to Involment API. A couple of test are made posible using the Jest framework for testing.`,
    featuredImage: './images/pokedex.png',
    tech1: 'html',
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

function newCard(card) {
  return `
    <div class="card">
        <img src="${card.featuredImage}" alt="" />
        <div class="card-content">
          <h2>${card.name}</h2>
          <div class="list-1">
            <p>${card.company}</p>
            <ul class="field">
              <li class="backend">${card.stack}</li>
              <li class="year">${card.year}</li>
            </ul>
          </div>

          <p>
          ${card.description}
          </p>
          <ul class="languages">
            <li>${card.tech1}</li>
            <li>${card.tech2}</li>
            <li>${card.tech3}</li>
          </ul>
          <div id="btn-curser">
          <button onclick="openModal('${card.modalId}')" class="btn modal-btn" id="${card.modalId}">See Project</button>
            
          </div>
        </div>
      </div>
  `;
}
// eslint-disable-next-line no-unused-vars
function openModal(modalId) {
  const modalOverlay = document.querySelector('.modal-overlay');

  modalOverlay.classList.add('show-container');

  cards.forEach((card) => {
    if (card.modalId === modalId) {
      const x = document.querySelector('.modal-container');
      x.innerHTML = `
  <div class="cardP">
  <div class="card-contentP">
  <h2>${card.name}</h2>
  <div class="list-1P">
  <p>${card.company}</p>
  <ul class="fieldP">
  <li class="backendP">${card.stack}</li>
  <li class="yearP">${card.year}</li>
  </ul>
  </div>
  <img id="imgP" src="${card.featuredImage}" alt="" />
   <div id="wrapper-item">
   <div id="item1"> 
    <p id="paraP">
    ${card.description}
    </p>
    </div>
    <div id="wrapper2">
    <ul class="languages">
      <li>${card.tech1}</li>
      <li>${card.tech2}</li>
      <li>${card.tech3}</li>
    </ul>
  
    <div id="btn-curser">
    <div style="display:flex;">
    <div class="SLB">
        <a href="${card.liveVersionLink}">See Live </a>
        <img src="images/onoff.png" alt="livevsersionlink" />
    </div>
    <div class="SLB">
        <a href="${card.sourceLink}">source code</a>
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
  });
}
const generatedCard = cards.map((card) => {
  const cardContainer = document.createElement('div');
  cardContainer.innerHTML = newCard(card);
  return cardContainer;
});

const cardsContainer = document.querySelector('#cards');
const cardQuantity = cards.length;
for (let i = 0; i < cardQuantity; i += 1) {
  cardsContainer.appendChild(generatedCard[i]);
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

