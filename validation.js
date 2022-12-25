var email = document.getElementById("mail");

email.addEventListener("invalid", function(event){
  if (event.target.validity.typeMismatch){
    // console.log("this is invalid.");
    document.querySelector("form img").classList.remove("showError");
    document.getElementById("err1").classList.remove("showError");
    document.querySelector("form").classList.add("email-div-error");
    //event.target.setCustomValidity("xxxxxxxxxx");
    event.target.setCustomValidity(" ");

  }
})
