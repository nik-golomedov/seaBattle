const battlePlayer = document.querySelector(".container-player");
const battleEnemy = document.querySelector(".container-enemy");
const randomArrangeBtn = document.querySelector(".btnRandom");
const start = document.querySelector(".btnStart");
const blockContainer = document.querySelector(".block-container");
const containerPlayerShip = document.querySelector(".container-player-ship");
let counterPlayer = 0;
let counterEnemy = 0;
let turn = "player";
let statusPlayer = "";

const shipsPlayer = {
  oneShip1: false,
  oneShip2: false,
  oneShip3: false,
  oneShip4: false,
  twoShip1: false,
  twoShip2: false,
  twoShip3: false,
  threeShip1: false,
  threeShip1: false,
  fourShip: false,
};
const shipsEnemy = {
  ...shipsPlayer,
};

const generatePlayerField = () => {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("sea-battle__cell-player");
    battlePlayer.append(div);
  }
};
const generateEnemyField = () => {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("sea-battle__cell-enemy");
    battleEnemy.append(div);
  }
};
// const generateContainerPlayerShip = () => {
//   for (let i = 0; i < 100; i++) {
//     let div = document.createElement("div");
//     div.classList.add("sea-battle__cell-player-ship");
//     containerPlayerShip.append(div);
//   }
// };
generatePlayerField();
let battlefieldPlayer = [];
for (let i = 0; i < 100; i++) {
  battlefieldPlayer.push({ status: "free" });
}
generateEnemyField();
const playerField = document.getElementsByClassName("sea-battle__cell-player");
const playerFieldArray = Array.from(playerField);

const enemyField = document.getElementsByClassName("sea-battle__cell-enemy");
const enemyFieldArray = Array.from(enemyField);

// const playerFieldShip = document.getElementsByClassName("sea-battle__cell-player-ship");
// const playerFieldShipArray = Array.from(playerField);
// generateContainerPlayerShip()

let battlefieldEnemy = [];
for (let i = 0; i < 100; i++) {
  battlefieldEnemy.push({ status: "free", ship: "" });
}

// Random generator
const randomArrange = (arr, ship) => {
  let randomNumberFour = String(Math.trunc(Math.random() * 100));
  randomNumberFour =
    randomNumberFour.length === 1 ? "0" + randomNumberFour : randomNumberFour;
  let randomNumberThree1 = String(Math.trunc(Math.random() * 100));
  randomNumberThree1 =
    randomNumberThree1.length === 1
      ? "0" + randomNumberThree1
      : randomNumberThree1;
  let randomNumberThree2 = String(Math.trunc(Math.random() * 100));
  randomNumberThree2 =
    randomNumberThree2.length === 1
      ? "0" + randomNumberThree2
      : randomNumberThree2;
  let randomNumberTwo1 = String(Math.trunc(Math.random() * 100));
  randomNumberTwo1 =
    randomNumberTwo1.length === 1 ? "0" + randomNumberTwo1 : randomNumberTwo1;
  let randomNumberTwo2 = String(Math.trunc(Math.random() * 100));
  randomNumberTwo2 =
    randomNumberTwo2.length === 1 ? "0" + randomNumberTwo2 : randomNumberTwo2;
  let randomNumberTwo3 = String(Math.trunc(Math.random() * 100));
  randomNumberTwo3 =
    randomNumberTwo3.length === 1 ? "0" + randomNumberTwo3 : randomNumberTwo3;
  let randomNumberOne1 = String(Math.trunc(Math.random() * 100));
  randomNumberOne1 =
    randomNumberOne1.length === 1 ? "0" + randomNumberOne1 : randomNumberOne1;
  let randomNumberOne2 = String(Math.trunc(Math.random() * 100));
  randomNumberOne2 =
    randomNumberOne2.length === 1 ? "0" + randomNumberOne2 : randomNumberOne2;
  let randomNumberOne3 = String(Math.trunc(Math.random() * 100));
  randomNumberOne3 =
    randomNumberOne3.length === 1 ? "0" + randomNumberOne3 : randomNumberOne3;
  let randomNumberOne4 = String(Math.trunc(Math.random() * 100));
  randomNumberOne4 =
    randomNumberOne4.length === 1 ? "0" + randomNumberOne4 : randomNumberOne4;
  let randomDirection = Math.round(Math.random());
  let direction = randomDirection === 1 ? "horizontal" : "vertical";
  // create four
  if (!ship.fourShip) {
    if (direction === "horizontal") {
      if (
        randomNumberFour.slice(1) === "6" ||
        randomNumberFour.slice(1) === "7" ||
        randomNumberFour.slice(1) === "8" ||
        randomNumberFour.slice(1) === "9"
      ) {
        for (let i = +randomNumberFour; i > randomNumberFour - 4; i--) {
          arr[i].status = "part4Ship";

          arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
          arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
          arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
          arr[i - 11]?.status === "free" ? (arr[i - 11].status = "freeze") : "";
          arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
          if (randomNumberFour.slice(1) !== "9") {
            arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
            arr[i + 11]?.status === "free"
              ? (arr[i + 11].status = "freeze")
              : "";
            arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
          }
        }
      } else {
        for (let i = +randomNumberFour; i < +randomNumberFour + 4; i++) {
          arr[i].status = "part4Ship";
          arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
          arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
          arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";

          if (randomNumberFour.slice(1) !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : "";
            arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
            arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
          }
        }
      }
    }

    if (direction === "vertical") {
      if (
        randomNumberFour.slice(0, 1) === "7" ||
        randomNumberFour.slice(0, 1) === "8" ||
        randomNumberFour.slice(0, 1) === "9"
      ) {
        for (let i = +randomNumberFour; i > randomNumberFour - 40; i--) {
          if (i % 10 !== +randomNumberFour.slice(1)) continue;
          arr[i].status = "part4Ship";
          checkFourShip(arr, i, randomNumberFour);
        }
      } else {
        for (let i = +randomNumberFour; i < +randomNumberFour + 40; i++) {
          if (i % 10 !== +randomNumberFour.slice(1)) continue;
          arr[i].status = "part4Ship";
          checkFourShip(arr, i, randomNumberFour);
        }
      }
    }
    ship.fourShip = true;
  }
  // create three1
  if (!ship.threeShip1) {
    createThreeShip(direction, arr, randomNumberThree1, ship);
    ship.threeShip1 = true;
  }
  if (!ship.threeShip2) {
    createThreeShip(direction, arr, randomNumberThree2, ship);
    ship.threeShip2 = true;
  }

  if (!ship.twoShip1) {
    createTwoShips(direction, arr, randomNumberTwo1, ship);
    ship.twoShip1 = true;
  }
  if (!ship.twoShip2) {
    createTwoShips(direction, arr, randomNumberTwo2, ship);
    ship.twoShip2 = true;
  }
  if (!ship.twoShip3) {
    createTwoShips(direction, arr, randomNumberTwo3, ship);
    ship.twoShip3 = true;
  }
  if (!ship.oneShip1) {
    createOneShip(direction, arr, randomNumberOne1, ship);
    ship.oneShip1 = true;
  }
  if (!ship.oneShip2) {
    createOneShip(direction, arr, randomNumberOne2, ship);
    ship.oneShip2 = true;
  }
  if (!ship.oneShip3) {
    createOneShip(direction, arr, randomNumberOne3, ship);
    ship.oneShip3 = true;
  }
  if (!ship.oneShip4) {
    createOneShip(direction, arr, randomNumberOne4, ship);
    ship.oneShip4 = true;
  }
};

const checkFourShip = (arr, i, number) => {
  if (number.slice(1) === "0") {
    arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
    arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
    arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
  } else if (number.slice(1) === "9") {
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
    arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
    arr[i - 11]?.status === "free" ? (arr[i - 11].status = "freeze") : "";
    arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
  } else {
    arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
    arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
    arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
    arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
    arr[i - 11]?.status === "free" ? (arr[i - 11].status = "freeze") : "";
    arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
  }
};
const createOneShip = (direction, arr, number, ship) => {
  if (direction === "horizontal") {
    if (number.slice(1) === "9") {
      if (arr[+number].status === "free") {
        for (let i = +number; i > number - 1; i--) {
          arr[i].status = "oneShip";

          arr[i + 10]?.status === "free" || arr[i + 10]?.status === "freeze"
            ? (arr[i + 10].status = "freeze")
            : "";
          arr[i - 10]?.status === "free" || arr[i - 10]?.status === "freeze"
            ? (arr[i - 10].status = "freeze")
            : "";
          arr[i - 1]?.status === "free" || arr[i - 1]?.status === "freeze"
            ? (arr[i - 1].status = "freeze")
            : "";
          arr[i - 11]?.status === "free" || arr[i - 11]?.status === "freeze"
            ? (arr[i - 11].status = "freeze")
            : "";
          arr[i + 9]?.status === "free" || arr[i + 9]?.status === "freeze"
            ? (arr[i + 9].status = "freeze")
            : "";
          if (number.slice(1) !== "9") {
            arr[i + 1]?.status === "free" || arr[i + 1]?.status === "freeze"
              ? (arr[i + 1].status = "freeze")
              : "";
            arr[i + 11]?.status === "free" || arr[i + 11]?.status === "freeze"
              ? (arr[i + 11].status = "freeze")
              : "";
            arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (arr[+number].status === "free") {
        for (let i = +number; i < +number + 1; i++) {
          arr[i].status = "oneShip";
          arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
          arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
          arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";

          if (number.slice(1) !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : "";
            arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
            arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }

  if (direction === "vertical") {
    if (number.slice(0, 1) === "9") {
      if (arr[+number].status === "free") {
        for (let i = +number; i > number - 10; i--) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "oneShip";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (arr[+number].status === "free") {
        for (let i = +number; i < +number + 10; i++) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "oneShip";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
};
const createTwoShips = (direction, arr, number, ship) => {
  if (direction === "horizontal") {
    if (number.slice(1) === "8" || number.slice(1) === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 1].status === "free"
      ) {
        for (let i = +number; i > number - 2; i--) {
          arr[i].status = "part2Ship";

          arr[i + 10]?.status === "free" || arr[i + 10]?.status === "freeze"
            ? (arr[i + 10].status = "freeze")
            : "";
          arr[i - 10]?.status === "free" || arr[i - 10]?.status === "freeze"
            ? (arr[i - 10].status = "freeze")
            : "";
          arr[i - 1]?.status === "free" || arr[i - 1]?.status === "freeze"
            ? (arr[i - 1].status = "freeze")
            : "";
          arr[i - 11]?.status === "free" || arr[i - 11]?.status === "freeze"
            ? (arr[i - 11].status = "freeze")
            : "";
          arr[i + 9]?.status === "free" || arr[i + 9]?.status === "freeze"
            ? (arr[i + 9].status = "freeze")
            : "";
          if (number.slice(1) !== "9") {
            arr[i + 1]?.status === "free" || arr[i + 1]?.status === "freeze"
              ? (arr[i + 1].status = "freeze")
              : "";
            arr[i + 11]?.status === "free" || arr[i + 11]?.status === "freeze"
              ? (arr[i + 11].status = "freeze")
              : "";
            arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (
        arr[+number].status === "free" &&
        arr[+number + 1].status === "free"
      ) {
        for (let i = +number; i < +number + 2; i++) {
          arr[i].status = "part2Ship";
          arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
          arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
          arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";

          if (number.slice(1) !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : "";
            arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
            arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }

  if (direction === "vertical") {
    if (number.slice(0, 1) === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 10].status === "free"
      ) {
        for (let i = +number; i > number - 20; i--) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "part2Ship";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (
        arr[+number].status === "free" &&
        arr[+number + 10].status === "free"
      ) {
        for (let i = +number; i < +number + 20; i++) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "part2Ship";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
};
const createThreeShip = (direction, arr, number, ship) => {
  if (direction === "horizontal") {
    if (
      number.slice(1) === "7" ||
      number.slice(1) === "8" ||
      number.slice(1) === "9"
    ) {
      if (
        arr[+number].status === "free" &&
        arr[+number - 1].status === "free" &&
        arr[+number - 2].status === "free"
      ) {
        for (let i = +number; i > number - 3; i--) {
          arr[i].status = "part3Ship";

          arr[i + 10]?.status === "free" || arr[i + 10]?.status === "freeze"
            ? (arr[i + 10].status = "freeze")
            : "";
          arr[i - 10]?.status === "free" || arr[i - 10]?.status === "freeze"
            ? (arr[i - 10].status = "freeze")
            : "";
          arr[i - 1]?.status === "free" || arr[i - 1]?.status === "freeze"
            ? (arr[i - 1].status = "freeze")
            : "";
          arr[i - 11]?.status === "free" || arr[i - 11]?.status === "freeze"
            ? (arr[i - 11].status = "freeze")
            : "";
          arr[i + 9]?.status === "free" || arr[i + 9]?.status === "freeze"
            ? (arr[i + 9].status = "freeze")
            : "";
          if (number.slice(1) !== "9") {
            arr[i + 1]?.status === "free" || arr[i + 1]?.status === "freeze"
              ? (arr[i + 1].status = "freeze")
              : "";
            arr[i + 11]?.status === "free" || arr[i + 11]?.status === "freeze"
              ? (arr[i + 11].status = "freeze")
              : "";
            arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (
        arr[+number].status === "free" &&
        arr[+number + 1].status === "free" &&
        arr[+number + 2].status === "free"
      ) {
        for (let i = +number; i < +number + 3; i++) {
          arr[i].status = "part3Ship";
          arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : "";
          arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : "";
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
          arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : "";
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";

          if (number.slice(1) !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : "";
            arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : "";
            arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : "";
          }
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }

  if (direction === "vertical") {
    if (number.slice(0, 1) === "8" || number.slice(0, 1) === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 10].status === "free" &&
        arr[+number - 20].status === "free"
      ) {
        for (let i = +number; i > number - 30; i--) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "part3Ship";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    } else {
      if (
        arr[+number].status === "free" &&
        arr[+number + 10].status === "free" &&
        arr[+number + 20].status === "free"
      ) {
        for (let i = +number; i < +number + 30; i++) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "part3Ship";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
};

const arrange = (arr, arrBattle, ship) => () => {
  let j = 0;
  statusPlayer = "ready";
  randomArrange(arr, ship);

  arrBattle.map((item) => {
    item.classList.add(arr[j++].status);
  });
};

randomArrangeBtn.addEventListener(
  "click",
  arrange(battlefieldPlayer, playerFieldArray, shipsPlayer)
);
const firePlayer = (e) => {
  const target = e.target;
  let currentIndexField = enemyFieldArray.indexOf(target);
  let currentIndexArr = currentIndexField;

  if (
    battlefieldEnemy[currentIndexField].status === "freeze" ||
    battlefieldEnemy[currentIndexField].status === "free"
  ) {
    battlefieldEnemy[currentIndexArr].status = "miss";
    turn = "enemy";
  } else if (battlefieldEnemy[currentIndexArr].status === "oneShip") {
    battlefieldEnemy[currentIndexArr].status = "crush";
  } else if (battlefieldEnemy[currentIndexArr].status === "part2Ship") {
    fireTwoShip(battlefieldEnemy, currentIndexArr);
  } else if (battlefieldEnemy[currentIndexArr].status === "part3Ship") {
    fireThreeShip(battlefieldEnemy, currentIndexArr);
  } else if (battlefieldEnemy[currentIndexArr].status === "part4Ship") {
    fireFourShip(battlefieldEnemy, currentIndexArr);
  }
  checkMiss();
};

const fireEnemy = () => {
  if (turn !== "enemy") {
    return;
  }
  let randomIndex = Math.trunc(Math.random() * 100);
  playerFieldArray[randomIndex].click();
  if (
    battlefieldPlayer[randomIndex].status === "miss" ||
    battlefieldPlayer[randomIndex].status === "hit" ||
    battlefieldPlayer[randomIndex].status === "crush"
  ) {
    fireEnemy();
  } else if (
    battlefieldPlayer[randomIndex].status === "freeze" ||
    battlefieldPlayer[randomIndex].status === "free"
  ) {
    battlefieldPlayer[randomIndex].status = "miss";
    turn = "player";
  } else if (battlefieldPlayer[randomIndex].status === "oneShip") {
    battlefieldPlayer[randomIndex].status = "crush";
  } else if (battlefieldPlayer[randomIndex].status === "part2Ship") {
    fireTwoShip(battlefieldPlayer, randomIndex);
  } else if (battlefieldPlayer[randomIndex].status === "part3Ship") {
    fireThreeShip(battlefieldPlayer, randomIndex);
  } else if (battlefieldPlayer[randomIndex].status === "part4Ship") {
    fireFourShip(battlefieldPlayer, randomIndex);
  }
  checkMissEnemy();
};

document.addEventListener("click", handleClick, true);
function checkMiss() {
  battlefieldEnemy.forEach((item, index) => {
    item.status === "miss" ? enemyFieldArray[index].classList.add("miss") : "";
    if (item.status === "crush") {
      blockAttack(battlefieldEnemy, index);
      enemyFieldArray[index].classList.add("crush");
    }
    item.status === "hit" ? enemyFieldArray[index].classList.add("hit") : "";
  });
}
function checkMissEnemy() {
  battlefieldPlayer.forEach((item, index) => {
    item.status === "miss" ? playerFieldArray[index].classList.add("miss") : "";
    if (item.status === "crush") {
      blockAttack(battlefieldPlayer, index);
      playerFieldArray[index].classList.add("crush");
    }
    item.status === "hit" ? playerFieldArray[index].classList.add("hit") : "";
  });
}

function handleClick(e) {
  if (
    e.target.classList.contains("miss") ||
    e.target.classList.contains("crush") ||
    e.target.classList.contains("hit")
  ) {
    e.stopPropagation();
    e.preventDefault();
  }
}

const blockAttack = (arr, index) => {
  index = String(index).length === 1 ? "0" + String(index) : index;

  if (String(index).slice(1) === "9") {
    index = +index;
    arr[index - 1] &&
    (arr[index - 1]?.status === "miss" || arr[index - 1]?.status === "freeze")
      ? (arr[index - 1].status = "miss")
      : "";
    (arr[index - 11] && arr[index - 11]?.status === "miss") ||
    arr[index - 11]?.status === "freeze"
      ? (arr[index - 11].status = "miss")
      : "";
    (arr[index + 9] && arr[index + 9]?.status === "miss") ||
    arr[index + 9]?.status === "freeze"
      ? (arr[index + 9].status = "miss")
      : "";
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : "";
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : "";
  } else if (String(index).slice(1) === "0") {
    index = +index;
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : "";
    (arr[index + 1] && arr[index + 1]?.status === "miss") ||
    arr[index + 1]?.status === "freeze"
      ? (arr[index + 1].status = "miss")
      : "";
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : "";
    (arr[index + 11] && arr[index + 11]?.status === "miss") ||
    arr[index + 11]?.status === "freeze"
      ? (arr[index + 11].status = "miss")
      : "";
    (arr[index - 9] && arr[index - 9]?.status === "miss") ||
    arr[index - 9]?.status === "freeze"
      ? (arr[index - 9].status = "miss")
      : "";
  } else {
    index = +index;
    (arr[index - 1] && arr[index - 1]?.status === "miss") ||
    arr[index - 1]?.status === "freeze"
      ? (arr[index - 1].status = "miss")
      : "";
    (arr[index - 11] && arr[index - 11]?.status === "miss") ||
    arr[index - 11]?.status === "freeze"
      ? (arr[index - 11].status = "miss")
      : "";
    (arr[index + 9] && arr[index + 9]?.status === "miss") ||
    arr[index + 9]?.status === "freeze"
      ? (arr[index + 9].status = "miss")
      : "";
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : "";
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : "";
    (arr[index - 9] && arr[index - 9]?.status === "miss") ||
    arr[index - 9]?.status === "freeze"
      ? (arr[index - 9].status = "miss")
      : "";
    (arr[index + 1] && arr[index + 1]?.status === "miss") ||
    arr[index + 1]?.status === "freeze"
      ? (arr[index + 1].status = "miss")
      : "";
    (arr[index + 11] && arr[index + 11]?.status === "miss") ||
    arr[index + 11]?.status === "freeze"
      ? (arr[index + 11].status = "miss")
      : "";
  }
};
document.addEventListener("click", checkMiss);
document.addEventListener("click", checkMissEnemy);

function gameOver() {
  let counterPlayer = battlefieldPlayer.filter(
    (item) => item.status === "crush"
  );
  let counterEnemy = battlefieldEnemy.filter((item) => item.status === "crush");

  if (counterPlayer.length === 20) {
    battleEnemy.removeEventListener("click", firePlayer);
    start.removeEventListener("click", startGame);
    document.removeEventListener("click", turnFire);
    alert("Computer win");
  }
  if (counterEnemy.length === 20) {
    battleEnemy.removeEventListener("click", firePlayer);
    start.removeEventListener("click", startGame);
    document.removeEventListener("click", turnFire);
    alert("Player win");
  }
}

const fireTwoShip = (arr, index) => {
  if (
    arr[index].status === "part2Ship" &&
    (arr[index + 1]?.status === "hit" ||
      arr[index - 1]?.status === "hit" ||
      arr[index + 10]?.status === "hit" ||
      arr[index - 10]?.status === "hit")
  ) {
    arr[index].status = "crush";
    arr[index + 1]?.status === "hit" ? (arr[index + 1].status = "crush") : "";
    arr[index - 1]?.status === "hit" ? (arr[index - 1].status = "crush") : "";
    arr[index + 10]?.status === "hit" ? (arr[index + 10].status = "crush") : "";
    arr[index - 10]?.status === "hit" ? (arr[index - 10].status = "crush") : "";
  } else if (
    arr[index].status === "part2Ship" &&
    (arr[index + 1]?.status === "part2Ship" ||
      arr[index - 1]?.status === "part2Ship" ||
      arr[index + 10]?.status === "part2Ship" ||
      arr[index - 10]?.status === "part2Ship")
  ) {
    arr[index].status = "hit";
  }
};
const fireThreeShip = (arr, index) => {
  if (
    arr[index].status === "part3Ship" &&
    (arr[index + 1]?.status === "hit" ||
      arr[index - 1]?.status === "hit" ||
      arr[index + 10]?.status === "hit" ||
      arr[index - 10]?.status === "hit") &&
    (arr[index + 2]?.status === "hit" ||
      arr[index - 2]?.status === "hit" ||
      arr[index + 20]?.status === "hit" ||
      arr[index - 20]?.status === "hit")
  ) {
    arr[index].status = "crush";
    arr[index + 1]?.status === "hit" ? (arr[index + 1].status = "crush") : "";
    arr[index - 1]?.status === "hit" ? (arr[index - 1].status = "crush") : "";
    arr[index + 10]?.status === "hit" ? (arr[index + 10].status = "crush") : "";
    arr[index - 10]?.status === "hit" ? (arr[index - 10].status = "crush") : "";
    arr[index + 2]?.status === "hit" ? (arr[index + 2].status = "crush") : "";
    arr[index - 2]?.status === "hit" ? (arr[index - 2].status = "crush") : "";
    arr[index + 20]?.status === "hit" ? (arr[index + 20].status = "crush") : "";
    arr[index - 20]?.status === "hit" ? (arr[index - 20].status = "crush") : "";
  } else if (
    arr[index].status === "part3Ship" &&
    ((arr[index + 1]?.status === "hit" && arr[index - 1]?.status === "hit") ||
      (arr[index + 10]?.status === "hit" && arr[index - 10]?.status === "hit"))
  ) {
    arr[index].status = "crush";
    arr[index + 1]?.status === "hit" ? (arr[index + 1].status = "crush") : "";
    arr[index - 1]?.status === "hit" ? (arr[index - 1].status = "crush") : "";
    arr[index + 10]?.status === "hit" ? (arr[index + 10].status = "crush") : "";
    arr[index - 10]?.status === "hit" ? (arr[index - 10].status = "crush") : "";
  } else if (
    arr[index].status === "part3Ship" &&
    (arr[index + 1]?.status === "hit" ||
      arr[index - 1]?.status === "hit" ||
      arr[index + 10]?.status === "hit" ||
      (arr[index - 10]?.status === "hit" &&
        (arr[index + 1]?.status !== "hit" ||
          arr[index - 1]?.status !== "hit" ||
          arr[index + 10]?.status !== "hit" ||
          arr[index - 10]?.status !== "hit")))
  ) {
    arr[index].status = "hit";
  } else {
    arr[index].status = "hit";
  }
};
const fireFourShip = (arr, index) => {
  if (
    arr[index].status === "part4Ship" &&
    (arr[index + 1]?.status === "hit" ||
      arr[index - 1]?.status === "hit" ||
      arr[index + 10]?.status === "hit" ||
      arr[index - 10]?.status === "hit") &&
    (arr[index + 2]?.status === "hit" ||
      arr[index - 2]?.status === "hit" ||
      arr[index + 20]?.status === "hit" ||
      arr[index - 20]?.status === "hit") &&
    (arr[index + 3]?.status === "hit" ||
      arr[index - 3]?.status === "hit" ||
      arr[index + 30]?.status === "hit" ||
      arr[index - 30]?.status === "hit")
  ) {
    arr[index].status = "crush";
    arr[index + 1]?.status === "hit" ? (arr[index + 1].status = "crush") : "";
    arr[index - 1]?.status === "hit" ? (arr[index - 1].status = "crush") : "";
    arr[index + 10]?.status === "hit" ? (arr[index + 10].status = "crush") : "";
    arr[index - 10]?.status === "hit" ? (arr[index - 10].status = "crush") : "";
    arr[index + 2]?.status === "hit" ? (arr[index + 2].status = "crush") : "";
    arr[index - 2]?.status === "hit" ? (arr[index - 2].status = "crush") : "";
    arr[index + 20]?.status === "hit" ? (arr[index + 20].status = "crush") : "";
    arr[index - 20]?.status === "hit" ? (arr[index - 20].status = "crush") : "";
    arr[index + 3]?.status === "hit" ? (arr[index + 3].status = "crush") : "";
    arr[index - 3]?.status === "hit" ? (arr[index - 3].status = "crush") : "";
    arr[index + 30]?.status === "hit" ? (arr[index + 30].status = "crush") : "";
    arr[index - 30]?.status === "hit" ? (arr[index - 30].status = "crush") : "";
  } else if (
    (arr[index].status === "part4Ship" &&
      arr[index + 1]?.status === "hit" &&
      arr[index - 1]?.status === "hit" &&
      (arr[index + 2]?.status === "hit" || arr[index - 2]?.status === "hit")) ||
    (arr[index + 10]?.status === "hit" &&
      arr[index - 10]?.status === "hit" &&
      (arr[index + 20]?.status === "hit" || arr[index - 20]?.status === "hit"))
  ) {
    arr[index].status = "crush";
    arr[index + 1]?.status === "hit" ? (arr[index + 1].status = "crush") : "";
    arr[index - 1]?.status === "hit" ? (arr[index - 1].status = "crush") : "";
    arr[index + 10]?.status === "hit" ? (arr[index + 10].status = "crush") : "";
    arr[index - 10]?.status === "hit" ? (arr[index - 10].status = "crush") : "";
    arr[index + 2]?.status === "hit" ? (arr[index + 2].status = "crush") : "";
    arr[index - 2]?.status === "hit" ? (arr[index - 2].status = "crush") : "";
    arr[index + 20]?.status === "hit" ? (arr[index + 20].status = "crush") : "";
    arr[index - 20]?.status === "hit" ? (arr[index - 20].status = "crush") : "";
  } else if (
    arr[index].status === "part4Ship" &&
    (arr[index + 1]?.status === "hit" ||
      arr[index - 1]?.status === "hit" ||
      arr[index + 10]?.status === "hit" ||
      (arr[index - 10]?.status === "hit" &&
        (arr[index + 1]?.status !== "hit" ||
          arr[index - 1]?.status !== "hit" ||
          arr[index + 10]?.status !== "hit" ||
          arr[index - 10]?.status !== "hit")))
  ) {
    arr[index].status = "hit";
  } else {
    arr[index].status = "hit";
  }
};

const startGame = () => {
  battleEnemy.addEventListener("click", firePlayer);

  if (statusPlayer === "ready") {
    arrange(battlefieldEnemy, enemyFieldArray, shipsEnemy)();
    enemyFieldArray.forEach((item) => (item.classList.add ("white")));
  }
};
const turnFire = () => {
  if (turn === "enemy") {
    setTimeout(fireEnemy, 400);
  }
};
start.addEventListener("click", startGame);
document.addEventListener("click", turnFire);
document.addEventListener("click", gameOver);
