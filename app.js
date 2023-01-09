const input = document.querySelectorAll("input");
const form = document.getElementById("id-form");
const errorText = document.querySelectorAll(".input-errors");
const sectionInput = document.querySelector(".input-section");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const h1 = document.querySelector(".cardFront h1");
const cvcNum = document.querySelector(".cardBack p");
const complete = document.querySelector(".complete-section");

// functions

// function to check if string contains a value
function containsNumber(str) {
  return /\d/.test(str);
}

// function to check if string contains a letter
function containsLetter(vtr) {
  return /[a-zA-Z]/g.test(vtr);
}

// for cardholder name
function cardholderName(e) {
  if (input[0].value === "" || input[0].value == null) {
    e.preventDefault();
    errorText[0].innerHTML = "name is empty";
    errorText[0].classList.add("show-errors");
    input[0].style.borderColor = "red";
  }
  if (containsNumber(input[0].value) === true) {
    e.preventDefault();
    errorText[0].innerHTML = "wrong input words only";
    errorText[0].classList.add("show-errors");
    input[0].style.borderColor = "red";
  }
  p1.innerHTML = input[0].value;
}

// for cardNumber

// let n = -1;

// input[1].addEventListener("keydown", function (event) {
//   if (n < 4) {
//     n++;
//     console.log(n);
//   }
//   if (n == 4) {
//     console.log(n);
//     input[1].value = input[1].value + " ";
//     n = 0;
//   }
//   if (event.key == "Backspace") {
//     --n;
//     console.log(n);
//   }
// });

input[1].addEventListener("keydown", function (e) {
  e.target.value = e.target.value
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  // str = input[1].value;
  // str = str.replace(/\s/g, "");
  // if (str.length % 5 == 0) {
  //   input[1].value += " ";
});

function cardNumber(e) {
  if (input[1].value === "" || input[1].value == null) {
    e.preventDefault();
    errorText[1].innerHTML = "number is empty";
    errorText[1].classList.add("show-errors");
    input[1].style.borderColor = "red";
  }

  if (input[1].value.length < 12 && input[1].value > 0) {
    console.log(input[1].value.length);
    e.preventDefault();
    errorText[1].innerHTML =
      "input less than required number of numeric values";
    errorText[1].classList.add("show-errors");
    input[1].style.borderColor = "red";
  }

  if (containsLetter(input[1].value) === true) {
    e.preventDefault();
    errorText[1].innerHTML = "only numbers should be here ";
    errorText[1].classList.add("show-errors");
    input[1].style.borderColor = "red";
  }
  h1.innerHTML = input[1].value;
}

// function for EXP.date
function EXP(e) {
  if (input[2].value === "") {
    e.preventDefault();
    errorText[2].innerHTML = "can't be blank";
    errorText[2].classList.add("show-errors");
    input[2].style.borderColor = "red";
  }

  if (input[3].value == "") {
    e.preventDefault();
    errorText[2].innerHTML = "can't be blank";
    errorText[2].classList.add("show-errors");
    input[3].style.borderColor = "red";
  }
  if (input[2].value.length > 2 || input[2].value.length === 0) {
    e.preventDefault();
    errorText[2].innerHTML = "wrong format";
    errorText[2].classList.add("show-errors");
    input[2].style.borderColor = "red";
  }
  if (input[3].value.length > 4 || input[3].value.length === 0) {
    e.preventDefault();
    errorText[2].innerHTML = "wrong format";
    errorText[2].classList.add("show-errors");
    input[3].style.borderColor = "red";
  }
  p2.innerHTML = `${input[2].value}/${input[3].value}`;
}

// function for CVC

function CVC(e) {
  if (input[4].value === "") {
    e.preventDefault();
    errorText[3].innerHTML = "can't be blank";
    errorText[3].classList.add("show-errors");
    input[4].style.borderColor = "red";
  }

  if (input[4].value.length > 3) {
    e.preventDefault();
    errorText[3].innerHTML = "can't be more than 3";
    errorText[3].classList.add("show-errors");
    input[4].style.borderColor = "red";
  }
  cvcNum.innerHTML = input[4].value;
}

// click event listener for input
// click event listener for input
// click event listener for input
// click event listener for input

input[0].addEventListener("click", function () {
  input[0].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[0].classList.remove("show-errors");
  errorText[0].classList.add("input-errors");
});

input[1].addEventListener("click", function () {
  input[1].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[1].classList.remove("show-errors");
  errorText[1].classList.add("input-errors");
});

input[2].addEventListener("click", function () {
  input[2].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[2].classList.remove("show-errors");
  errorText[2].classList.add("input-errors");
});

input[2].addEventListener("click", function () {
  input[2].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[2].classList.remove("show-errors");
  errorText[2].classList.add("input-errors");
});

input[3].addEventListener("click", function () {
  input[3].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[2].classList.remove("show-errors");
  errorText[2].classList.add("input-errors");
});

input[4].addEventListener("click", function () {
  input[4].style.borderColor = "hsl(278, 68%, 11%)";
  errorText[3].classList.remove("show-errors");
  errorText[3].classList.add("input-errors");
});

// form validation
form.addEventListener("submit", (e) => {
  cardholderName(e);
  cardNumber(e);
  EXP(e);
  CVC(e);

  if (
    errorText[0].classList.contains("show-errors") === false &&
    errorText[1].classList.contains("show-errors") === false &&
    errorText[2].classList.contains("show-errors") === false &&
    errorText[3].classList.contains("show-errors") === false
  ) {
    sectionInput.innerHTML = ` <div class="complete-section">
            <img src="images/icon-complete.svg" alt="" />

            <h1>Thank you</h1>
            <p>We've added your card details</p>

            <button onClick="window.location.reload();">Continue</button>
          </div>
          <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a
          >. Coded by Ojomu Damola
          <a href="https://github.com/Damola180"> Github- @Damola180</a>.
        </div>`;
    e.preventDefault();
  } else {
    e.preventDefault;
  }
});
