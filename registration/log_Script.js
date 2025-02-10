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
