var email = document.getElementById("mail");

email.addEventListener("invalid", function(event){
  if (event.target.validity.typeMismatch || email.value.length === 0){
    document.querySelector("form img").classList.remove("showError");
    document.getElementById("err1").classList.remove("showError");
    document.querySelector("form").classList.add("email-div-error");
    event.target.setCustomValidity(" ");

    setTimeout(function () {
      document.querySelector("form img").classList.add("showError");
      document.getElementById("err1").classList.add("showError");
      document.querySelector("form").classList.remove("email-div-error");
    }, 5000);
  }
})
