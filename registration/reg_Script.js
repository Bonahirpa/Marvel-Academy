//phone number validation
document.getElementById("phone").addEventListener("input", function () {
  let phoneInput = this;
  let phoneError = document.getElementById("phone-error");
  if (/\D/.test(phoneInput.value)) {
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});
// grade validation
document.getElementById("grade").addEventListener("input", function () {
  let phoneInput = this;
  let phoneError = document.getElementById("grade-error");
  if (/\D/.test(phoneInput.value)) {
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});
// email validation
document.getElementById("email").addEventListener("input", function () {
  let emailInput = this;
  let emailError = document.getElementById("email-error");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});
