//HEADER HTML
// header-inject.js
document.addEventListener('DOMContentLoaded', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var headerContainer = document.getElementById('header-container');
          headerContainer.innerHTML = xhr.responseText;
      }
  };

  xhr.send();
});


//FOOTER HTML
// footer-inject.js
document.addEventListener('DOMContentLoaded', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var footerContainer = document.getElementById('footer-container');
          footerContainer.innerHTML = xhr.responseText;
      }
  };

  xhr.send();
});




//BOOKING ALL VALIDATIONS
document.addEventListener("DOMContentLoaded", function () {
  // Referências aos elementos do formulário
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const bookingDateInput = document.getElementById("booking_date");
  const bookingTimeSelect = document.getElementById("booking_time");
  const numberOfPeopleInput = document.getElementById("number_of_people");

  // REAL TIME VALIDATION
  nameInput.addEventListener("input", validateName);
  phoneInput.addEventListener("input", validatePhone);
  emailInput.addEventListener("input", validateEmail);
  bookingDateInput.addEventListener("input", validateBookingDate);

  // NAME VALIDATION
  function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      nameInput.setCustomValidity("Please enter your name.");
    } else {
      nameInput.setCustomValidity("");
    }
  }

  // PHONE VALIDATION
  function validatePhone() {
    const phoneValue = phoneInput.value.trim();
    if (!/^\d{10}$/.test(phoneValue)) {
      phoneInput.setCustomValidity("Please enter a valid 10-digit phone number.");
    } else {
      phoneInput.setCustomValidity("");
    }
  }

  // EMAIL VALIDATION
  function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }
  }

  // BOOKING TABLE VALIDATION
  function validateBookingDate() {
    const selectedDate = new Date(bookingDateInput.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      bookingDateInput.setCustomValidity("Please choose a future date.");
    } else {
      bookingDateInput.setCustomValidity("");
    }
  }
});

 
 
 // BOOKING POLICY
// Checkbox
document.addEventListener("DOMContentLoaded", function() {
    function enableCheckbox() {
        const checkbox = document.getElementById("data_protection");
        const popup = document.getElementById("popup");

        if (checkbox.disabled) {
            return;
        }

        if (popup.style.display === "none") {
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    }

    const showPolicies = document.getElementById("showPolicies");
    const popup = document.getElementById("popup");
    const close = document.getElementById("closePopup");
    const checkbox = document.getElementById("data_protection");

    showPolicies.addEventListener("click", () => {
        popup.style.display = "block";
        enableCheckbox();
        checkbox.checked = false;
        checkbox.disabled = true;
    });

    close.addEventListener("click", () => {
        popup.style.display = "none";
        enableCheckbox();
        checkbox.checked = true;
        checkbox.disabled = true;
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
            enableCheckbox();
            checkbox.checked = true;
            checkbox.disabled = true;
        }
    });

    checkbox.addEventListener("click", enableCheckbox);

    window.addEventListener("load", enableCheckbox);
});


