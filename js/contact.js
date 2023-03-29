const contactForm = document.querySelector(".contact-form");
const message = document.querySelector(".message");
const name = document.querySelector("#name");
const nameReq = document.querySelector("#name-req");
const subject = document.querySelector("#subject");
const subjectReq = document.querySelector("#subject-req");
const email = document.querySelector("#email");
const emailReq = document.querySelector("#email-req");
const address = document.querySelector("#address");
const addressReq = document.querySelector("#address-req");

function validateForm() {
  event.preventDefault();

  if (name.value.length > 0) {
    nameReq.style.display = "none";
  } else {
    nameReq.style.display = "block";
  }

  if (subject.value.length < 9) {
    subjectReq.style.display = "block";
  } else {
    subjectReq.style.display = "none";
  }

  if (checkMail(email.value) === true) {
    emailReq.style.display = "none";
  } else {
    emailReq.style.display = "block";
  }

  if (address.value.length < 25) {
    addressReq.style.display = "block";
  } else {
    addressReq.style.display = "none";
  }
}

function checkMail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const mailPattern = regEx.test(email);
  return mailPattern;
}

function submit(event) {
  event.preventDefault();

  if (
    checkInputs(name.value, 1) &&
    checkInputs(subject.value, 10) &&
    checkInputs(email.value, true) &&
    checkInputs(address.value, 25)
  ) {
    message.innerHTML = `<div class="message">Submission success<div>`;
    contactForm.reset();
  } else {
    message.innerHTML = `<div class="error">Please insert valid info<div>`;
  }
}

function checkInputs(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", submit);
