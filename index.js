const battlePlayer = document.querySelector(".container-player");
const battleEnemy = document.querySelector(".container-enemy");
const randomArrangeBtn = document.querySelector(".btnRandom");
const start = document.querySelector(".btnStart");
const enemyButton = document.querySelector(".btnEnemy");
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
generatePlayerField();
let battlefieldPlayer = [];
for (let i = 0; i < 100; i++) {
  battlefieldPlayer.push({ status: "free", ship: "" });
}
console.log(battlefieldPlayer);
generateEnemyField();
const playerField = document.getElementsByClassName("sea-battle__cell-player");
const playerFieldArray = Array.from(playerField);
const enemyField = document.getElementsByClassName("sea-battle__cell-enemy");
const enemyFieldArray = Array.from(enemyField);

let battlefieldEnemy = [];
for (let i = 0; i < 100; i++) {
  battlefieldEnemy.push({ status: "free", ship: "" });
}

// Random generator
const randomArrange = (arr, ship) => {
  let randomNumberFour = String(Math.trunc(Math.random() * 100));
  console.log("gf");
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
  randomArrange(arr, ship);

  arrBattle.map((item) => {
    item.classList.add(arr[j++].status);
  });
};
const arrangeEnemy = (arr, arrBattle, ship) => () => {
  let y = 0;
  randomArrange(arr, ship);
  arrBattle.map((item) => item.classList.add(arr[y++].status));
};
enemyButton.addEventListener(
  "click",
  arrange(battlefieldEnemy, enemyFieldArray, shipsEnemy)
);
console.log(enemyFieldArray);
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
  } else if (battlefieldEnemy[currentIndexArr].status === "oneShip") {
    battlefieldEnemy[currentIndexArr].status = "crush";
  } else if (battlefieldEnemy[currentIndexArr].status === "part2Ship") {
    if (
      battlefieldEnemy[currentIndexArr].status === "part2Ship" &&
      (battlefieldEnemy[currentIndexArr + 1]?.status === "hit" ||
        battlefieldEnemy[currentIndexArr - 1]?.status === "hit" ||
        battlefieldEnemy[currentIndexArr + 10]?.status === "hit" ||
        battlefieldEnemy[currentIndexArr - 10]?.status === "hit")
    ) {
      battlefieldEnemy[currentIndexArr].status = "crush";
      battlefieldEnemy[currentIndexArr + 1]?.status === "hit"
        ? (battlefieldEnemy[currentIndexArr + 1].status = "crush")
        : "";
      battlefieldEnemy[currentIndexArr - 1]?.status === "hit"
        ? (battlefieldEnemy[currentIndexArr - 1].status = "crush")
        : "";
      battlefieldEnemy[currentIndexArr + 10]?.status === "hit"
        ? (battlefieldEnemy[currentIndexArr + 10].status = "crush")
        : "";
      battlefieldEnemy[currentIndexArr - 10]?.status === "hit"
        ? (battlefieldEnemy[currentIndexArr - 10].status = "crush")
        : "";
    } else if (
      battlefieldEnemy[currentIndexArr].status === "part2Ship" &&
      (battlefieldEnemy[currentIndexArr + 1]?.status === "part2Ship" ||
        battlefieldEnemy[currentIndexArr - 1]?.status === "part2Ship" ||
        battlefieldEnemy[currentIndexArr + 10]?.status === "part2Ship" ||
        battlefieldEnemy[currentIndexArr - 10]?.status === "part2Ship")
    ) {
      battlefieldEnemy[currentIndexArr].status = "hit";
    }
  }
  battlefieldEnemy.forEach((item, index) => {
    item.status === "miss" ? enemyFieldArray[index].classList.add("miss") : "";
    if (item.status === "crush") {
      blockAttack(battlefieldEnemy, index);
      enemyFieldArray[index].classList.add("crush");
    }
    item.status === "hit" ? enemyFieldArray[index].classList.add("hit") : "";
  });
};
battleEnemy.addEventListener("click", firePlayer);

const fireEnemy = () => {
  let random = Math.trunc(Math.random() * 100);
  playerFieldArray[random].click();
  if (
    battlefieldPlayer[random].status === "miss" ||
    battlefieldPlayer[random].status === "hit"
  ) {
    fireEnemy();
  } else if (
    battlefieldPlayer[random].status === "freeze" ||
    battlefieldPlayer[random].status === "free"
  ) {
    playerFieldArray[random].classList.add("miss");
    battlefieldPlayer[random].status = "miss";
  } else if (battlefieldPlayer[random].status === "oneShip") {
    playerFieldArray[random].classList.add("crush");
    battlefieldPlayer[random].status = "crush";
    fireEnemy();
  } else {
    playerFieldArray[random].classList.add("hit");
    fireEnemy();
  }
};
start.addEventListener("click", fireEnemy);
document.addEventListener("click", handleClick, true);
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
    arr[index - 1] && arr[index + 9].status !== "hit"
      ? (arr[index - 1].status = "miss")
      : "";
    arr[index - 11] && arr[index - 11].status !== "hit"
      ? (arr[index - 11].status = "miss")
      : "";
    arr[index + 9] && arr[index + 9].status !== "hit"
      ? (arr[index + 9].status = "miss")
      : "";
    arr[index + 10] && arr[index + 10].status !== "hit"
      ? (arr[index + 10].status = "miss")
      : "";
    arr[index - 10] && arr[index - 10].status !== "hit"
      ? (arr[index - 10].status = "miss")
      : "";
  } else if (String(index).slice(1) === "0") {
    index = +index;
    arr[index + 10] && arr[index + 10].status !== "hit"
      ? (arr[index + 10].status = "miss")
      : "";
    arr[index + 1] && arr[index + 1].status !== "hit"
      ? (arr[index + 1].status = "miss")
      : "";
    arr[index - 10] && arr[index - 10].status !== "hit"
      ? (arr[index - 10].status = "miss")
      : "";
    arr[index + 11] && arr[index + 11].status !== "hit"
      ? (arr[index + 11].status = "miss")
      : "";
    arr[index - 9] && arr[index - 9].status !== "hit"
      ? (arr[index - 9].status = "miss")
      : "";
  } else {
    index = +index;
    arr[index - 1] && arr[index - 11].status !== "hit"
      ? (arr[index - 1].status = "miss")
      : "";
    arr[index - 11] && arr[index - 11].status !== "hit"
      ? (arr[index - 11].status = "miss")
      : "";
    arr[index + 9] && arr[index + 9].status !== "hit"
      ? (arr[index + 9].status = "miss")
      : "";
    arr[index + 10] && arr[index + 10].status !== "hit"
      ? (arr[index + 10].status = "miss")
      : "";
    arr[index - 10] && arr[index - 10].status !== "hit"
      ? (arr[index - 10].status = "miss")
      : "";
    arr[index - 9] && arr[index - 9].status !== "hit"
      ? (arr[index - 9].status = "miss")
      : "";
    arr[index + 1] && arr[index + 1].status !== "hit"
      ? (arr[index + 1].status = "miss")
      : "";
    arr[index + 11] && arr[index + 11].status !== "hit"
      ? (arr[index + 11].status = "miss")
      : "";
  }
};
