// <!-- >>>>>> User Form Page <<<<<< -->

var formContainer = document.querySelector(".formContainer");

function create() {
  formContainer.style.display = "block";
  setTimeout(function () {
    formContainer.style.display = "none";
  }, 4000);
}

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

var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");
var password = document.getElementById("password");

function login() {
  if (userName.value.trim() !== "") {
    if (password.value.trim() !== "") {
      displayInput.placeholder = "What's on your mind, " + userName.value;
      changedName.innerHTML = userName.value;
      signup.style.display = "none";
      post.style.display = "block";
    } else {
      Swal.fire({
        title: "Password can't be empty",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  } else {
    Swal.fire({
      title: "UserName can't be empty",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

// <<<<<< Post button color chnage >>>>>>

var changeColor = document.querySelector(".btn-post");

function changeColors() {
  if (displayInput) {
    changeColor.style.backgroundColor = "#0861F2";
    changeColor.style.color = "#fff";
  }
}

// <<<<<< Changing post backgroundImage >>>>>>

var displayInput = document.getElementById("display");

function changeBG(event) {
  var clickedImage = event.target;
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    var newBgImage = clickedImage.getAttribute("src");
    displayInput.style.backgroundImage = 'url("' + newBgImage + '")';
  }
}

// <<<<<< Update Post & Changing foreColor>>>>>>

var foreColor = document.getElementById("color");

function colorChaning() {
  displayInput.style.color = foreColor.value;
}

function posted() {
  var createDiv = document.createElement("div");
  if (displayInput.value === "") {
    Swal.fire({
      title: "Empty post can't be generated",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    var backgroundImage = displayInput.style.backgroundImage;
    createDiv.textContent = displayInput.value;
    createDiv.style.color = foreColor.value;
    createDiv.style.backgroundImage = backgroundImage;
    displayInput.value = "";
    postUpdate.appendChild(createDiv);
  }
}
