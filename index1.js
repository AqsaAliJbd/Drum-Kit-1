for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      let switchCase = this.innerHTML;
      makeSound(switchCase);
      buttonAnimation(switchCase);
    })
  
    // Handle touch events for Mobile Device
    document.querySelectorAll(".drum")[i].addEventListener("touchstart", function () {
      let switchCase = this.innerHTML;
  
      makeSound(switchCase);
      buttonAnimation(switchCase);
    })
  
  }
  
  // Keydown Events for Desktop
  document.addEventListener("keydown", function (event) {
    //  console.log(event);
    //  console.log(event.key);
    let press = event.key;
    makeSound(press);
    buttonAnimation(press);
  })
  
  function makeSound(key) {
    switch (key) {
      case "w":
        let audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        let audio1 = new Audio("./sounds/kick-bass.mp3");
        audio1.play();
        break;
      case "s":
        let audio2 = new Audio("./sounds/snare.mp3");
        audio2.play();
        break;
      case "d":
        let audio3 = new Audio("./sounds/tom-1.mp3");
        audio3.play();
        break;
      case "j":
        let audio4 = new Audio("./sounds/tom-2.mp3");
        audio4.play();
        break;
      case "k":
        let audio5 = new Audio("./sounds/tom-3.mp3");
        audio5.play();
        break;
      case "l":
        let audio6 = new Audio("./sounds/tom-4.mp3");
        audio6.play();
        break;
      default:
        alert("Not in the range");
    }
  }
  function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function () {
      document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
  
    
    
  
  }