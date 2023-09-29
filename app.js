var userName = document.getElementById("userName");
var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");

function login() {
  if (userName.value.trim() !== "") {
    changedName.innerHTML = userName.value;
    signup.style.display = "none";
    post.style.display = "block";
  } else {
    alert("Username can't be empty");
  }
}

function changeBG(event) {
  var clickedImage = event.target; // Get the clicked image element
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    // Get the source (src) attribute of the clicked image
    var newBgColor = getComputedStyle(clickedImage).backgroundImage;

    // Set the background color of the display input to the clicked image's background color
    displayInput.style.backgroundImage = newBgColor;
  }
}

// function changeBG(event) {
//   var clickedImage = event.target; // Get the clicked image element
//   var displayInput = document.getElementById("display");

//   if (clickedImage && displayInput) {
//     // Get the source (src) attribute of the clicked image
//     var newBgImage = clickedImage.getAttribute("src");

//     // Set the value of the display input to the URL of the clicked image
//     displayInput.value = newBgImage;
//   }
// }
