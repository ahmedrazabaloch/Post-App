var userName = document.getElementById("userName");
var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");
var displayInput = document.getElementById("display");

function login() {
  if (userName.value.trim() !== "") {
    displayInput.placeholder = "What's on your mind, " + userName.value;
    changedName.innerHTML = userName.value;
    signup.style.display = "none";
    post.style.display = "block";
  } else {
    alert("Username can't be empty");
  }
}

function changeBG(event) {
  var clickedImage = event.target;
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    var newBgImage = clickedImage.getAttribute("src");

    displayInput.style.backgroundImage = 'url("' + newBgImage + '")';
  }
}
