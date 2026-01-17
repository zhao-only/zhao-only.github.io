const myImg = document.querySelector("img");

myImg.onclick = () => {
  const mySrc = myImg.getAttribute("src");
  if (mySrc === "images/firfox.jpg") {
    myImg.setAttribute("src", "images/firfox2.jpg");
  } else {
    myImg.setAttribute("src", "images/firfox.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please Enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
