var userName = document.getElementById("userName"); // username
var signup = document.querySelector(".signup-container"); // signup page container
var post = document.querySelector(".post-container"); // post page container
var changedName = document.getElementById("changedName"); // inside page showing username
var displayInput = document.getElementById("display"); // display area

// <<<<<< User upload a picture >>>>>>

function loadFile(event) {
  var image = document.getElementById("userImage");
  var userPicture = document.getElementById("userPicture");
  var file = event.target.files[0];
  if (file) {
    image.src = URL.createObjectURL(file);
    userPicture.src = URL.createObjectURL(file);
  }
}

// >>>>>> Page change , update username & placeholder <<<<<<

// function login() {
//   if (userName.value.trim() !== "") {
//     displayInput.placeholder = "What's on your mind, " + userName.value;
//     changedName.innerHTML = userName.value;
//     signup.style.display = "none";
//     post.style.display = "block";
//   } else {
//     alert("Username can't be empty");
//   }
// }

// <<<<<< Post button color chnage >>>>>>

function changeColors(event) {
  if (event) {
    var changeColor = document.querySelector(".btn-post");
    changeColor.style.backgroundColor = "#0861F2";
    changeColor.style.color = "#fff";
  }
}

// <<<<<< Changing post backgroundImage >>>>>>

function changeBG(event) {
  var clickedImage = event.target;
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    var newBgImage = clickedImage.getAttribute("src");
    displayInput.style.backgroundImage = 'url("' + newBgImage + '")';
    displayInput.color = "pink";
  }
}

function posted() {
  var postUpdate = document.getElementById("postUpdate");
  var createDiv = document.createElement("div");
  var postUpdating = document.querySelector("#postUpdating");
  postUpdate.appendChild(createDiv);
  createDiv.setAttribute("id", "postUpdating");
  postUpdating.style.backgroundColor = "black";
  displayInput.value = "";
}
