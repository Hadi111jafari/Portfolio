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
    // check if email is valid
    function emailIsValid(email) {
      const pattern = /\S+@\S+\.\S+/;
      return pattern.test(email);
    }
    if (!emailIsValid(email.value)) {
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