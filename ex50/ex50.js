document.addEventListener("DOMContentLoaded", function() {
  const nutSubmit = document.getElementById("submit");
  const form = document.getElementById("travelForm");

  nutSubmit.addEventListener("click", function(e) {
    e.preventDefault();

    const firstNameEl = document.getElementById("firstName");
    const lastNameEl = document.getElementById("lastName");
    const ssnEl = document.getElementById("ssnumer");
    const describeEl = document.getElementById("describe-purpose");

    const firstName = firstNameEl.value.trim();
    const lastName = lastNameEl.value.trim();
    const ssn = ssnEl.value.trim();
    const describe = describeEl.value.trim();

    if (!firstName) {
      alert("First Name is required");
      firstNameEl.focus();
      return;
    }

    if (!lastName) {
      alert("Last Name is required");
      lastNameEl.focus();
      return;
    }

    if (!ssn) {
      alert("Social Security Number is required");
      ssnEl.focus();
      return;
    }

    if (!describe) {
      alert("Please describe the purpose of your trip");
      describeEl.focus();
      return;
    }

    alert("Form submitted successfully!");
  });
});
