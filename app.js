var userName = document.getElementById("userName");
var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");

function login() {
  if (userName.value !== "") {
    changedName.innerHTML = userName.value;
    signup.style.display = "none";
    post.style.display = "block";
    console.log("if working");
  } else {
    alert("User not be empty");
    console.log("else work");
  }
}
