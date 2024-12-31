//detecting button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    // switch (buttonInnerHtml) {
    //   case "w":
    //     var tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play();
    //     break;
    //   case "a":
    //     var tom2 = new Audio("sounds/tom-2.mp3");
    //     tom2.play();
    //     break;
    //   case "s":
    //     var tom3 = new Audio("sounds/tom-3.mp3");
    //     tom3.play();
    //     break;
    //   case "d":
    //     var tom4 = new Audio("sounds/tom-4.mp3");
    //     tom4.play();
    //     break;
    //   case "j":
    //     var snare = new Audio("sounds/snare.mp3");
    //     snare.play();
    //     break;
    //   case "k":
    //     var crash = new Audio("sounds/crash.mp3");
    //     crash.play();
    //     break;
    //   case "l":
    //     var kick = new Audio("sounds/kick-bass.mp3");
    //     kick.play();
    //     break;
    //   default:
    //     console.log(buttonInnerHtml);
    // }

    // console.log((this.style.color = "white")); //this make when we clicked a particular btn it will change its text color to white
  });
}

document.addEventListener("keypress", function (event) {
  //added to the entire document instead of specific button or specific element
  // console.log(event); //gives all the properties and the key we pressed on key board like {key:"l" ,code: ,loc:}
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Audio constructor can assumed to be like
// function Audio(fileLocation) {
//   this.fileLocation = fileLocation;
//   this.play = function () {
//     // tap in to the audio hardware and look there weather taht audio file exits and paly
//   };
// }

//detecting key board press

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // after waiting 0.1 sec we r removing that class "pressed from the class list"
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
