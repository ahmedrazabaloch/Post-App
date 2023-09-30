var userName = document.getElementById("userName");
var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");
var displayInput = document.getElementById("display");
var image = document.getElementById("userImage");

function loadFile(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
}

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

function updateImage() {
  var userpicture = document.getElementById("userpicture");
  userpicture.style.backgroundImage = "src('assests/images/friends.png')";
}

function changeBG(event) {
  var clickedImage = event.target;
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    var newBgImage = clickedImage.getAttribute("src");

    displayInput.style.backgroundImage = 'url("' + newBgImage + '")';
  }
}
