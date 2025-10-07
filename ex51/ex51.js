document.addEventListener("DOMContentLoaded", function() {
  const registerBtn = document.getElementById("register");

  registerBtn.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Registration Successful!");
  });
});
