// document.querySelectorAll("button")[0].addEventListener("click" , buttonClick);
// function buttonClick () {
// alert("I got clicked");
// }
// document.querySelectorAll("button")[1].addEventListener("click" , buttonClick);
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         // alert("I got clicked");
// let audio = new Audio("./sounds/crash.mp3");
// audio.play();
// console.log(this.style.color = "blue");
// let switchCase = this.innerHTML;
// console.log(switchCase);
// let buttonAudio;
// makeSound(switchCase)
//   switch (switchCase) {
//     case "w":
//       let audio = new Audio("./sounds/crash.mp3");
//       audio.play();
//       break;
//     case "a":
//       let audio1 = new Audio("./sounds/kick-bass.mp3");
//       audio1.play();
//       break;
//     case "s":
//       let audio2 = new Audio("./sounds/snare.mp3");
//       audio2.play();
//       break;
//     case "d":
//       let audio3 = new Audio("./sounds/tom-1.mp3");
//       audio3.play();
//       break;
//     case "j":
//       let audio4 = new Audio("./sounds/tom-2.mp3");
//       audio4.play();
//       break;
//     case "k":
//       let audio5 = new Audio("./sounds/tom-3.mp3");
//       audio5.play();
//       break;
//     case "l":
//       let audio6 = new Audio("./sounds/tom-4.mp3");
//       audio6.play();
//       break;
//     default:
//       "Not in the range";
//   }
// });
// }
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let switchCase = this.innerHTML;
    makeSound(switchCase);
  });
}
document.addEventListener("keydown", function (event) {
  //  console.log(event);
  //  console.log(event.key);
  let press = event.key;
  makeSound(press);
});

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

// document.querySelector(".a").addEventListener("click" ,function () {
//     let audio = new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// });
// document.querySelector(".s").addEventListener("click" , function () {
//     let audio = new Audio("./sounds/snare.mp3");
//     audio.play();
// });
// document.querySelector(".d").addEventListener("click" , function () {
//     let audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// });
// document.querySelector(".j").addEventListener("click" , function () {
//     let audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();
// });
// document.querySelector(".k").addEventListener("click" , function () {
//     let audio = new Audio("./sounds/tom-3.mp3");
//     audio.play();
// });
// document.querySelector(".l").addEventListener("click" , function () {
//     let audio = new Audio("./sounds/tom-4.mp3");
//     audio.play();
// });
// }

// function add(num1,num2) {
//   return num1+num2;
// }
// function multiply(num1,num2) {
//   return num1*num2;
// }
// function divide(num1,num2) {
//   return num1/num2;
// }
// function subtract(num1,num2) {
// return num1-num2;
//    }

// function calculator(num1,num2,operator) {
//   return operator(num1,num2);
// }

// calculator(4,5,add);
// 9
// calculator(4,5,multiply);
// 20

//    debugger;
//    calculator(4,5,add);
//1.a simple
// let bellBoy1Name = "timmy";
// let bellBoy1Age = 2;
// let bellBoy1Permet = true;
// let bellBoy1Language = ["English" , "french"];
// console.log(bellBoy1Permet);
// b
// let bellBoy2Name = "Travis";
// let bellBoy2Age = 4;
// let bellBoy2Permet = false;
// let bellBoy2Language = ["french"];
// console.log(bellBoy2Name);
// 2. javascript objects(table form)
// a
// let bellBoy1 = {
// name : "timmy" ,
// age : 2 ,
// permet : true ,
// language : ["English" , "french"]
// }
// console.log(bellBoy1.permet);
// b
// let bellBoy2 = {
// name : "Travis" ,
// age : 4 ,
// permet : false ,
// language : ["french"]
// }
// console.log(bellBoy2.name);

//3. constructor function
// a.bellboy
// function BellBoy(name,age,permet,language) {
// this.name = name;
// this.age = age;
// this.permet = permet;
// this.language = language;

// }
// let bellBoy1 = new BellBoy("timmy" , 2 , true , ["english" , "french"]);
// console.log(bellBoy1.permet);

// let bellBoy2 = new BellBoy("Travis" , 4 , false , ["english"]);
// console.log(bellBoy2.name);
// b. housekeeper
// function HouseKeeper(name,age,permet,language) {
// this.name = name;
// this.age = age;
// this.permet = permet;
// this.language = language;
// }
// let houseKeeper1 = new HouseKeeper("Jonson" , 3 , true , ["english"]);
// console.log(houseKeeper1.age);
// let houseKeeper2 = new HouseKeeper("head" , 5 , false , ["french"]);
// console.log(houseKeeper2.name);
//c. manager
// function Manager(name, age, permit, language) {
//   this.name = name;
//   this.age = age;
//   this.permit = permit;
//   this.language = language;
// }
// let manager1 = new Manager("jay", 25, true, ["english"]);
// console.log(manager1.name);
// let manager2 = new Manager("nick", 20, false, ["english"]);
// console.log(manager2.age);

// function moveSuitCase() {
//     alert("greet all peoples");
// }
