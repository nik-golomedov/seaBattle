const battleEnemy = document.querySelector(".sea-battle__container-my");
const start = document.querySelector(".sea-battle__btn");
const cell = document.querySelector(".sea-battle__cell");
let myField = document.getElementsByClassName("sea-battle__cell-my");
let enemyField = document.getElementsByClassName("sea-battle__cell-enemy");
let myFieldArray = Array.from(myField);
let enemyFieldArray = Array.from(enemyField);
const makeShoot = (e) => {
  const target = e.target;
  currIndex = enemyFieldArray.indexOf(target);
  if (target.className === "sea-battle__cell-enemy") {
    if (target.innerHTML === ".") {
      return;
    } else if (
      // 4 ship attack crush
      //top target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex + 2].innerHTML === "X" &&
      enemyFieldArray[currIndex + 3].innerHTML === "X" &&
      enemyFieldArray[currIndex + 4].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";
      enemyFieldArray[currIndex - 9].innerHTML = ".";
      enemyFieldArray[currIndex + 12].innerHTML = ".";
      enemyFieldArray[currIndex - 8].innerHTML = ".";
      enemyFieldArray[currIndex + 13].innerHTML = ".";
      enemyFieldArray[currIndex - 7].innerHTML = ".";
      if (currIndex % 10 !== 0) {
        enemyFieldArray[currIndex - 1].innerHTML = ".";
        enemyFieldArray[currIndex + 9].innerHTML = ".";
        enemyFieldArray[currIndex - 11].innerHTML = ".";
      }
      if ((currIndex + 4) % 10 !== 0) {
        enemyFieldArray[currIndex + 4].innerHTML = ".";
        enemyFieldArray[currIndex + 14].innerHTML = ".";
        enemyFieldArray[currIndex - 6].innerHTML = ".";
      }
    } else if (
      // 4 ship attack crush
      //middel 1 target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex + 2].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex + 3].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";
      enemyFieldArray[currIndex - 9].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      enemyFieldArray[currIndex + 12].innerHTML = ".";
      enemyFieldArray[currIndex - 8].innerHTML = ".";
      if ((currIndex - 1) % 10 !== 0) {
        enemyFieldArray[currIndex - 2].innerHTML = ".";
        enemyFieldArray[currIndex + 8].innerHTML = ".";
        enemyFieldArray[currIndex - 12].innerHTML = ".";
      }
      if ((currIndex + 3) % 10 !== 0) {
        enemyFieldArray[currIndex + 3].innerHTML = ".";
        enemyFieldArray[currIndex - 7].innerHTML = ".";
        enemyFieldArray[currIndex + 13].innerHTML = ".";
      }
    } else if (
      // 4 ship attack crush
      //middle 2 target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].innerHTML === "X" &&
      enemyFieldArray[currIndex - 3].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex + 2].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";
      enemyFieldArray[currIndex - 9].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      enemyFieldArray[currIndex + 8].innerHTML = ".";
      enemyFieldArray[currIndex - 12].innerHTML = ".";
      if ((currIndex - 2) % 10 !== 0) {
        enemyFieldArray[currIndex - 3].innerHTML = ".";
        enemyFieldArray[currIndex + 7].innerHTML = ".";
        enemyFieldArray[currIndex - 13].innerHTML = ".";
      }
      if ((currIndex + 2) % 10 !== 0) {
        enemyFieldArray[currIndex + 2].innerHTML = ".";
        enemyFieldArray[currIndex - 8].innerHTML = ".";
        enemyFieldArray[currIndex + 12].innerHTML = ".";
      }
    } else if (
      // 4 ship attack crush
      //bottom target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].innerHTML === "X" &&
      enemyFieldArray[currIndex - 3].innerHTML === "X" &&
      enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex - 4].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 8].innerHTML = ".";
      enemyFieldArray[currIndex - 12].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      enemyFieldArray[currIndex + 7].innerHTML = ".";
      enemyFieldArray[currIndex - 13].innerHTML = ".";
      if ((currIndex - 3) % 10 !== 0) {
        enemyFieldArray[currIndex - 4].innerHTML = ".";
        enemyFieldArray[currIndex + 6].innerHTML = ".";
        enemyFieldArray[currIndex - 14].innerHTML = ".";
      }
      if ((currIndex + 1) % 10 !== 0) {
        enemyFieldArray[currIndex + 1].innerHTML = ".";
        enemyFieldArray[currIndex - 9].innerHTML = ".";
        enemyFieldArray[currIndex + 11].innerHTML = ".";
      }
    } else if (
      // 4 ship attack
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 2].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 3].style.backgroundColor === "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 2].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 2].style.backgroundColor === "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 2].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 3].style.backgroundColor === "brown")
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
    } else if (
      // 3 ship attack crush
      //center target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex + 2].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";
      enemyFieldArray[currIndex - 9].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      if ((currIndex - 1) % 10 !== 0) {
        enemyFieldArray[currIndex - 2].innerHTML = ".";
        enemyFieldArray[currIndex + 8].innerHTML = ".";
        enemyFieldArray[currIndex - 12].innerHTML = ".";
      }
      if ((currIndex + 2) % 10 !== 0) {
        enemyFieldArray[currIndex + 2].innerHTML = ".";
        enemyFieldArray[currIndex - 8].innerHTML = ".";
        enemyFieldArray[currIndex + 12].innerHTML = ".";
      }
    } else if (
      // 3 ship attack crush
      //top target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex + 2].innerHTML === "X" &&
      enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex + 3].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";
      enemyFieldArray[currIndex - 9].innerHTML = ".";
      enemyFieldArray[currIndex + 12].innerHTML = ".";
      enemyFieldArray[currIndex - 8].innerHTML = ".";
      if (currIndex % 10 !== 0) {
        enemyFieldArray[currIndex - 1].innerHTML = ".";
        enemyFieldArray[currIndex + 9].innerHTML = ".";
        enemyFieldArray[currIndex - 11].innerHTML = ".";
      }
      if ((currIndex + 3) % 10 !== 0) {
        enemyFieldArray[currIndex + 3].innerHTML = ".";
        enemyFieldArray[currIndex + 13].innerHTML = ".";
        enemyFieldArray[currIndex - 7].innerHTML = ".";
      }
    } else if (
      // 3 ship attack crush
      //bottom target
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].innerHTML === "X" &&
      enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex - 3].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 12].innerHTML = ".";
      enemyFieldArray[currIndex + 8].innerHTML = ".";
      if ((currIndex + 1) % 10 !== 0) {
        enemyFieldArray[currIndex + 1].innerHTML = ".";
        enemyFieldArray[currIndex + 11].innerHTML = ".";
        enemyFieldArray[currIndex - 9].innerHTML = ".";
      }
      if ((currIndex - 2) % 10 !== 0) {
        enemyFieldArray[currIndex - 3].innerHTML = ".";
        enemyFieldArray[currIndex + 7].innerHTML = ".";
        enemyFieldArray[currIndex - 13].innerHTML = ".";
      }
    } else if (
      // 3 ship attack

      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 2].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 2].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown")
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
    }  else if (
      // 2 ship attack crush

      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex - 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 2].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";

      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex + 9].innerHTML = ".";
      enemyFieldArray[currIndex - 11].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";

      if ((currIndex - 1) % 10 !== 0) {
        enemyFieldArray[currIndex - 2].innerHTML = ".";
        enemyFieldArray[currIndex + 8].innerHTML = ".";
        enemyFieldArray[currIndex - 12].innerHTML = ".";
      }
      if ((currIndex + 1) % 10 !== 0) {
        enemyFieldArray[currIndex + 1].innerHTML = ".";
        enemyFieldArray[currIndex - 9].innerHTML = ".";
        enemyFieldArray[currIndex + 11].innerHTML = ".";
      }
    } else if (
      enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
      enemyFieldArray[currIndex + 2].style.backgroundColor !== "brown" &&
      enemyFieldArray[currIndex + 1].innerHTML === "X" &&
      enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown"
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
      enemyFieldArray[currIndex + 10].innerHTML = ".";
      enemyFieldArray[currIndex - 10].innerHTML = ".";
      enemyFieldArray[currIndex + 11].innerHTML = ".";

      enemyFieldArray[currIndex - 9].innerHTML = ".";
      if (currIndex % 10 !== 0) {
        enemyFieldArray[currIndex - 1].innerHTML = ".";
        enemyFieldArray[currIndex + 9].innerHTML = ".";
        enemyFieldArray[currIndex - 11].innerHTML = ".";
      }
      if ((currIndex + 2) % 10 !== 0) {
        enemyFieldArray[currIndex + 2].innerHTML = ".";
        enemyFieldArray[currIndex - 8].innerHTML = ".";
        enemyFieldArray[currIndex + 12].innerHTML = ".";
      }
    } else if (
      // 2 ship attack
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor === "brown") ||
      (enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown")
    ) {
      enemyFieldArray[currIndex].innerHTML = "X";
    } else if (
        enemyFieldArray[currIndex].style.backgroundColor === "brown" &&
        enemyFieldArray[currIndex + 1].style.backgroundColor !== "brown" &&
        enemyFieldArray[currIndex - 1].style.backgroundColor !== "brown"
      ) {
        // 1 ship
        
        enemyFieldArray[currIndex - 1].innerHTML = ".";
        enemyFieldArray[currIndex].innerHTML = "X";
        enemyFieldArray[currIndex + 1].innerHTML = ".";
        enemyFieldArray[currIndex + 10].innerHTML = ".";
        enemyFieldArray[currIndex + 9].innerHTML = ".";
        enemyFieldArray[currIndex + 11].innerHTML = ".";
      } else {
      target.innerHTML = ".";
    }
  }
  console.log(e.target);
};

let random = Math.round(Math.random() * 100);
console.log(random);
const arrangmentShip = (item, index) => {
  if ((index === 0) | (index === 3) | (index === 5) | (index === 7)) {
    item.style.className = "brown";
  }
  if ((index === 20) | (index === 21) | (index == 28) | (index === 29)) {
    item.style.className = "brown";
  }
  if (
    (index === 40) |
    (index === 41) |
    (index == 42) |
    (index === 46) |
    (index === 47) |
    (index === 48)
  ) {
    item.style.className = "brown";
  }
  if ((index === 60) | (index === 61) | (index == 62) | (index === 63)) {
    item.style.className = "brown";
  }
};
const checkKilledShip = (item) => {
  let currIndex = enemyFieldArray.indexOf(item);

  if (
    (enemyFieldArray[++currIndex].backgroundColor !== "brown") &
    (enemyFieldArray[--currIndex].backgroundColor !== "brown")
  ) {
    return true;
  }
  return false;
};
battleEnemy.addEventListener("click", makeShoot);
const ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
// let field = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
myFieldArray.map(arrangmentShip);
enemyFieldArray.map(arrangmentShip);
console.log(start);
