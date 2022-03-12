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
    name: 'Tonic',
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    description: `
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
    `,
    featuredImage: '/images/Snapshoot-Portfolio.png',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card1',
    liveVersionLink: 'https://github.com/hadi111jafari',
    sourceLink: 'https://github.com/hadi111jafari',
  },

  {
    name: 'Multi-Post Stories',
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    description: `
    Experimental content creation feature that allows users to add to an
    existing story over the course of a day without spamming their
    friends.
    `,
    featuredImage: '/images/Snapshoot-Portfolio1.png',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card2',
    liveVersionLink: 'https://github.com/hadi111jafari',
    sourceLink: 'https://github.com/hadi111jafari',
  },

  {
    name: 'Facebook 360',
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    description: `
    Exploring the future of media in Facebook's first Virtual Reality
    app; a place to discover and enjoy 360 photos and videos on Gear VR. `,
    featuredImage: '/images/Snapshoot-Portfolio2.png',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card3',
    liveVersionLink: 'https://github.com/hadi111jafari',
    sourceLink: 'https://github.com/hadi111jafari',
  },
  {
    name: 'Uber Navigation',
    company: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    description: `
    A smart assistant to make driving more safe, efficient, and fun by
    unlocking your most expensive computer: your car. `,
    featuredImage: '/images/Snapshoot-Portfolio2.png',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javascript',
    tech4: 'github',
    tech5: 'ruby',
    tech6: 'Bootstrap',
    modalId: 'card4',
    liveVersionLink: 'https://github.com/hadi111jafari',
    sourceLink: 'https://github.com/hadi111jafari',
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
    
    <p id="paraP">
    ${card.description}
    </p>
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
<button class="btn-close"><i class="fas fa-times"></i></button>
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