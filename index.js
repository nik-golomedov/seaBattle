const battlePlayer = document.querySelector(".container-player");
const battleEnemy = document.querySelector(".container-enemy");
const randomArrangeBtn = document.querySelector(".btnRandom");
const manualArrangeBtn = document.querySelector(".btnManual");
const cancelBtn = document.querySelector(".btnCancel");
const start = document.querySelector(".btnStart");
const containerPlayerShip = document.querySelector(".container-player-ship");
const showTurn = document.querySelector(".showTurn");
let startFlag = false;
let counterPlayer = 0;
let counterEnemy = 0;
let turn = "Игрок";
let statusPlayer = null;
const shipsPlayer = {
  oneShip1: null,
  oneShip2: null,
  oneShip3: null,
  oneShip4: null,
  twoShip1: null,
  twoShip2: null,
  twoShip3: null,
  threeShip1: null,
  threeShip1: null,
  fourShip: null,
};
const shipsEnemy = {
  ...shipsPlayer,
};

const generateField = (battleField, cellClass) => {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add(`sea-battle__cell-${cellClass}`);
    battleField.append(div);
  }
};

generateField(battlePlayer, "player");

generateField(battleEnemy, "enemy");

const generateContainerPlayerShip = () => {
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
        {
          div.draggable = true;
          div.classList.add("oneShip");
        }
        break;
      case 4:
      case 5:
      case 6:
        {
          div.draggable = true;
          div.style.width = "120px";
          div.style.height = "60px";
          div.classList.add("part2Ship");
        }
        break;
      case 7:
      case 8:
        {
          div.draggable = true;
          div.style.width = "180px";
          div.style.height = "60px";
          div.classList.add("part3Ship");
        }
        break;
      case 9:
        {
          div.draggable = true;
          div.style.width = "240px";
          div.style.height = "60px";
          div.classList.add("part4Ship");
        }
        break;
    }
    div.direction = 0;
    div.classList.add("sea-battle__cell-player-ship");
    let widthH = div.style.width;
    let widthV = div.style.height;
    let heightH = div.style.height;
    let heightV = div.style.width;
    div.addEventListener("dblclick", () => {
      div.direction = div.direction === 0 ? 1 : 0;

      div.style.width = div.direction === 0 ? widthH : widthV;
      div.style.height = div.direction === 0 ? heightH : heightV;
    });
    containerPlayerShip.append(div);
  }
};

let dragged;

const dragStart = (event) => {
  dragged = event.target;
  event.target.style.opacity = 0.5;
};

const dragEnd = (event) => {
  dragged = event.target;
  event.target.style.opacity = 1;
};

const dragOver = (event) => {
  event.preventDefault();
};

document.addEventListener("dragstart", dragStart, false);

document.addEventListener("dragend", dragEnd, false);

document.addEventListener("dragover", dragOver, false);

const checkDropShip = (index, n, ship, directionCoeff) => {
  let isCellsFreeForShip = true;

  for (let i = 1; i < n; i++) {
    if (battlefieldPlayer[index + i * directionCoeff].status !== "free")
      isCellsFreeForShip = false;
  }
  if (isCellsFreeForShip) {
    for (let i = 0; i < n; i++) {
      battlefieldPlayer[index + i * directionCoeff].status = ship;
      checkRandomArrangeShip(
        battlefieldPlayer,
        index + i * directionCoeff,
        String(index + i * directionCoeff)
      );
    }
    return true;
  }
  return false;
};

const dropShip = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("sea-battle__cell-player")) {
    return;
  }
  let target = event.target;

  let currentIndexField = playerFieldArray.indexOf(target);
  if (battlefieldPlayer[currentIndexField].status !== "free") {
    return;
  }
  if (dragged.classList.contains("oneShip")) {
    battlefieldPlayer[currentIndexField].status = "oneShip";
    checkRandomArrangeShip(
      battlefieldPlayer,
      currentIndexField,
      String(currentIndexField)
    );
  }
  if (dragged.direction === 0) {
    if (dragged.classList.contains("part2Ship")) {
      currentIndexField =
        String(currentIndexField).length === 2
          ? currentIndexField
          : "0" + currentIndexField;
      if (String(currentIndexField)[1] === "9") {
        return;
      } else {
        currentIndexField = +currentIndexField;
        const checkDropTwoHor = checkDropShip(
          currentIndexField,
          2,
          "part2Ship",
          1
        );
        if (!checkDropTwoHor) {
          return;
        }
      }
    }
    if (dragged.classList.contains("part3Ship")) {
      currentIndexField =
        String(currentIndexField).length === 2
          ? currentIndexField
          : "0" + currentIndexField;
      if (
        String(currentIndexField)[1] === "8" ||
        String(currentIndexField)[1] === "9"
      ) {
        return;
      } else {
        currentIndexField = +currentIndexField;
        const checkDropThreeHor = checkDropShip(
          currentIndexField,
          3,
          "part3Ship",
          1
        );
        if (!checkDropThreeHor) {
          return;
        }
      }
    }
    if (dragged.classList.contains("part4Ship")) {
      currentIndexField =
        String(currentIndexField).length === 2
          ? currentIndexField
          : "0" + currentIndexField;
      if (
        String(currentIndexField)[1] === "7" ||
        String(currentIndexField)[1] === "8" ||
        String(currentIndexField)[1] === "9"
      ) {
        return;
      } else {
        currentIndexField = +currentIndexField;
        const checkDropFourHor = checkDropShip(
          currentIndexField,
          4,
          "part4Ship",
          1
        );
        if (!checkDropFourHor) {
          return;
        }
      }
    }
  } else {
    if (dragged.classList.contains("part2Ship")) {
      if (
        String(currentIndexField).length !== 1 &&
        String(currentIndexField)[0] === "9"
      ) {
        return;
      } else {
        const checkDropTwoVer = checkDropShip(
          currentIndexField,
          2,
          "part2Ship",
          10
        );
        if (!checkDropTwoVer) {
          return;
        }
      }
    }
    if (dragged.classList.contains("part3Ship")) {
      currentIndexField =
        String(currentIndexField).length === 2
          ? currentIndexField
          : "0" + currentIndexField;
      if (
        String(currentIndexField)[0] === "8" ||
        String(currentIndexField)[0] === "9"
      ) {
        return;
      } else {
        currentIndexField = +currentIndexField;
        const checkDropThreeVer = checkDropShip(
          currentIndexField,
          3,
          "part3Ship",
          10
        );
        if (!checkDropThreeVer) {
          return;
        }
      }
    }
    if (dragged.classList.contains("part4Ship")) {
      if (
        String(currentIndexField).length !== 1 &&
        (String(currentIndexField)[0] === "7" ||
          String(currentIndexField)[0] === "8" ||
          String(currentIndexField)[0] === "9")
      ) {
        return;
      } else {
        const checkDropFourVer = checkDropShip(
          currentIndexField,
          4,
          "part4Ship",
          10
        );
        if (!checkDropFourVer) {
          return;
        }
      }
    }
  }
  dragged.draggable = false;
  dragged.remove();

  let y = 0;
  playerFieldArray.forEach((item) => {
    item.classList.add(battlefieldPlayer[y++].status);
  });

  statusPlayer =
    battlefieldPlayer.filter(
      (item) =>
        item.status === "oneShip" ||
        item.status === "part2Ship" ||
        item.status === "part3Ship" ||
        item.status === "part4Ship"
    ).length === 20
      ? "ready"
      : null;
  if (statusPlayer === "ready") {
    start.disabled = false;
    manualArrangeBtn.innerHTML = "Расстановка завершена";
    manualArrangeBtn.disabled = true;
  } else {
    start.disabled = true;
  }
  y = 0;
  event.target = dragged;
};

document.addEventListener("drop", dropShip, false);

const battlefieldPlayer = [];
const battlefieldEnemy = [];

for (let i = 0; i < 100; i++) {
  battlefieldPlayer.push({ status: "free" });
  battlefieldEnemy.push({ status: "free" });
}

const playerField = document.getElementsByClassName("sea-battle__cell-player");
const playerFieldArray = Array.from(playerField);

const enemyField = document.getElementsByClassName("sea-battle__cell-enemy");
const enemyFieldArray = Array.from(enemyField);

const manuallyArrange = () => {
  randomArrangeBtn.disabled = true;
  manualArrangeBtn.innerHTML = "Идет расстановка";
  cancelBtn.disabled = false;
  Array.from(containerPlayerShip.children).forEach((item) => item.remove());
  containerPlayerShip.style.opacity = 1;
  playerFieldArray.forEach(
    (item) => (item.className = "sea-battle__cell-player")
  );
  battlefieldPlayer.forEach((item) => (item.status = "free"));
  statusPlayer = null;
  generateContainerPlayerShip();
};

manualArrangeBtn.addEventListener("click", manuallyArrange);

const playerFieldShip = document.getElementsByClassName(
  "sea-battle__cell-player-ship"
);
const playerFieldShipArray = Array.from(playerField);

const randomArrange = (arr, ship) => {
  let randomNumberFour = String(Math.trunc(Math.random() * 100));
  randomNumberFour =
    randomNumberFour.length === 1 ? "0" + randomNumberFour : randomNumberFour;
  let randomDirection = Math.round(Math.random());
  let direction = randomDirection === 1 ? "horizontal" : "vertical";
  if (!ship.fourShip) {
    if (direction === "horizontal") {
      if (
        randomNumberFour[1] === "6" ||
        randomNumberFour[1] === "7" ||
        randomNumberFour[1] === "8" ||
        randomNumberFour[1] === "9"
      ) {
        for (let i = +randomNumberFour; i > randomNumberFour - 4; i--) {
          arr[i].status = "part4Ship";

          checkHorizontal(randomNumberFour, arr, i);
        }
      } else {
        for (let i = +randomNumberFour; i < +randomNumberFour + 4; i++) {
          arr[i].status = "part4Ship";
          arr[i + 10]?.status === "free"
            ? (arr[i + 10].status = "freeze")
            : null;
          arr[i - 10]?.status === "free"
            ? (arr[i - 10].status = "freeze")
            : null;
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : null;
          arr[i + 11]?.status === "free"
            ? (arr[i + 11].status = "freeze")
            : null;
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : null;

          if (randomNumberFour[1] !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : null;
            arr[i - 1]?.status === "free"
              ? (arr[i - 1].status = "freeze")
              : null;
            arr[i + 9]?.status === "free"
              ? (arr[i + 9].status = "freeze")
              : null;
          }
        }
      }
    }

    if (direction === "vertical") {
      if (
        randomNumberFour[0] === "7" ||
        randomNumberFour[0] === "8" ||
        randomNumberFour[0] === "9"
      ) {
        for (let i = +randomNumberFour; i > randomNumberFour - 40; i--) {
          if (i % 10 !== +randomNumberFour[1]) continue;
          arr[i].status = "part4Ship";
          checkRandomArrangeShip(arr, i, randomNumberFour);
        }
      } else {
        for (let i = +randomNumberFour; i < +randomNumberFour + 40; i++) {
          if (i % 10 !== +randomNumberFour[1]) continue;
          arr[i].status = "part4Ship";
          checkRandomArrangeShip(arr, i, randomNumberFour);
        }
      }
    }
    ship.fourShip = true;
  }
  if (!ship.threeShip1) {
    createThreeShip(direction, arr, randomNumberFour, ship);
    ship.threeShip1 = true;
  }
  if (!ship.threeShip2) {
    createThreeShip(direction, arr, randomNumberFour, ship);
    ship.threeShip2 = true;
  }

  if (!ship.twoShip1) {
    createTwoShips(direction, arr, randomNumberFour, ship);
    ship.twoShip1 = true;
  }
  if (!ship.twoShip2) {
    createTwoShips(direction, arr, randomNumberFour, ship);
    ship.twoShip2 = true;
  }
  if (!ship.twoShip3) {
    createTwoShips(direction, arr, randomNumberFour, ship);
    ship.twoShip3 = true;
  }
  if (!ship.oneShip1) {
    createOneShip(arr, randomNumberFour, ship);
    ship.oneShip1 = true;
  }
  if (!ship.oneShip2) {
    createOneShip(arr, randomNumberFour, ship);
    ship.oneShip2 = true;
  }
  if (!ship.oneShip3) {
    createOneShip(arr, randomNumberFour, ship);
    ship.oneShip3 = true;
  }
  if (!ship.oneShip4) {
    createOneShip(arr, randomNumberFour, ship);
    ship.oneShip4 = true;
  }
};

const checkRandomArrangeShip = (arr, i, number) => {
  number = number.length === 2 ? number : "0" + number;
  if (number[1] === "0") {
    arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : null;
    arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : null;
    arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : null;
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : null;
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : null;
  } else if (number[1] === "9") {
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : null;
    arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : null;
    arr[i - 11]?.status === "free" ? (arr[i - 11].status = "freeze") : null;
    arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : null;
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : null;
  } else {
    arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : null;
    arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : null;
    arr[i + 11]?.status === "free" ? (arr[i + 11].status = "freeze") : null;
    arr[i - 10]?.status === "free" ? (arr[i - 10].status = "freeze") : null;
    arr[i - 1]?.status === "free" ? (arr[i - 1].status = "freeze") : null;
    arr[i - 11]?.status === "free" ? (arr[i - 11].status = "freeze") : null;
    arr[i + 9]?.status === "free" ? (arr[i + 9].status = "freeze") : null;
    arr[i + 10]?.status === "free" ? (arr[i + 10].status = "freeze") : null;
  }
};

const createOneShip = (arr, number, ship) => {
  if (number[1] === "9") {
    if (arr[+number].status === "free") {
      for (let i = +number; i > number - 1; i--) {
        arr[i].status = "oneShip";
        checkHorizontal(number, arr, i);
      }
    } else {
      randomArrange(arr, ship);
    }
  } else {
    if (arr[+number].status === "free") {
      for (let i = +number; i < +number + 1; i++) {
        arr[i].status = "oneShip";
        checkRandomArrangeShip(arr, i, number);
      }
    } else {
      randomArrange(arr, ship);
    }
  }
};

const createTwoShips = (direction, arr, number, ship) => {
  if (direction === "horizontal") {
    if (number[1] === "8" || number[1] === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 1].status === "free"
      ) {
        for (let i = +number; i > number - 2; i--) {
          arr[i].status = "part2Ship";
          checkHorizontal(number, arr, i);
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
          checkRandomArrangeShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
  if (direction === "vertical") {
    if (number[0] === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 10].status === "free"
      ) {
        for (let i = +number; i > number - 20; i--) {
          if (i % 10 !== +number[1]) continue;
          arr[i].status = "part2Ship";
          checkRandomArrangeShip(arr, i, number);
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
          if (i % 10 !== +number[1]) continue;
          arr[i].status = "part2Ship";
          checkRandomArrangeShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
};

const createThreeShip = (direction, arr, number, ship) => {
  if (direction === "horizontal") {
    if (number[1] === "7" || number[1] === "8" || number[1] === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 1].status === "free" &&
        arr[+number - 2].status === "free"
      ) {
        for (let i = +number; i > number - 3; i--) {
          arr[i].status = "part3Ship";
          checkHorizontal(number, arr, i);
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
          checkRandomArrangeShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }

  if (direction === "vertical") {
    if (number[0] === "8" || number[0] === "9") {
      if (
        arr[+number].status === "free" &&
        arr[+number - 10].status === "free" &&
        arr[+number - 20].status === "free"
      ) {
        for (let i = +number; i > number - 30; i--) {
          if (i % 10 !== +number[1]) continue;
          arr[i].status = "part3Ship";
          checkRandomArrangeShip(arr, i, number);
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
          if (i % 10 !== +number[1]) continue;
          arr[i].status = "part3Ship";
          checkRandomArrangeShip(arr, i, number);
        }
      } else {
        randomArrange(arr, ship);
      }
    }
  }
};

const checkHorizontal = (number, arr, i) => {
  arr[i + 10]?.status === "free" || arr[i + 10]?.status === "freeze"
    ? (arr[i + 10].status = "freeze")
    : null;
  arr[i - 10]?.status === "free" || arr[i - 10]?.status === "freeze"
    ? (arr[i - 10].status = "freeze")
    : null;
  arr[i - 1]?.status === "free" || arr[i - 1]?.status === "freeze"
    ? (arr[i - 1].status = "freeze")
    : null;
  arr[i - 11]?.status === "free" || arr[i - 11]?.status === "freeze"
    ? (arr[i - 11].status = "freeze")
    : null;
  arr[i + 9]?.status === "free" || arr[i + 9]?.status === "freeze"
    ? (arr[i + 9].status = "freeze")
    : null;
  if (number[1] !== "9") {
    arr[i + 1]?.status === "free" || arr[i + 1]?.status === "freeze"
      ? (arr[i + 1].status = "freeze")
      : null;
    arr[i + 11]?.status === "free" || arr[i + 11]?.status === "freeze"
      ? (arr[i + 11].status = "freeze")
      : null;
    arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : null;
  }
};

const arrangePlayer = (arr, arrBattle, ship) => () => {
  manualArrangeBtn.disabled = true;
  cancelBtn.disabled = false;
  containerPlayerShip.style.opacity = 0;
  let j = 0;
  arrBattle.forEach((item) => (item.className = "sea-battle__cell-player"));
  for (key in ship) {
    shipsPlayer[key] = false;
  }
  arr.forEach((item) => (item.status = "free"));
  statusPlayer = "ready";
  randomArrange(arr, ship);
  arrBattle.map((item) => {
    item.classList.add(arr[j++].status);
  });
};

const arrangeEnemy = (arr, arrBattle, ship) => () => {
  let y = 0;
  randomArrange(arr, ship);
  arrBattle.forEach((item) => {
    item.classList.add(arr[y++].status);
  });
};

randomArrangeBtn.addEventListener(
  "click",
  arrangePlayer(battlefieldPlayer, playerFieldArray, shipsPlayer)
);

const firePlayer = (e) => {
  const target = e.target;
  let currentIndexField = enemyFieldArray.indexOf(target);
  switch (battlefieldEnemy[currentIndexField]?.status) {
    case "freeze":
    case "free":
      {
        battlefieldEnemy[currentIndexField].status = "miss";
        turn = "Компьютер";
        showTurn.innerHTML = turn;
        battleEnemy.removeEventListener("click", firePlayer);
      }
      break;
    case "oneShip":
      {
        battlefieldEnemy[currentIndexField].status = "crush";
      }
      break;
    case "part2Ship":
      {
        fireTwoShip(battlefieldEnemy, currentIndexField);
      }
      break;
    case "part3Ship":
      {
        fireThreeShip(battlefieldEnemy, currentIndexField);
      }
      break;
    case "part4Ship":
      {
        fireFourShip(battlefieldEnemy, currentIndexField);
      }
      break;
  }
  checkMiss();
};

const fireEnemy = () => {
  if (turn !== "Компьютер") {
    return;
  }
  let randomIndex = Math.trunc(Math.random() * 100);
  playerFieldArray[randomIndex].click();
  switch (battlefieldPlayer[randomIndex].status) {
    case "miss":
    case "hit":
    case "crush":
      {
        fireEnemy();
      }
      break;
    case "freeze":
    case "free":
      {
        battlefieldPlayer[randomIndex].status = "miss";
        turn = "Игрок";
        showTurn.innerHTML = turn;
        battleEnemy.addEventListener("click", firePlayer);
      }
      break;
    case "oneShip":
      {
        battlefieldPlayer[randomIndex].status = "crush";
      }
      break;
    case "part2Ship":
      {
        fireTwoShip(battlefieldPlayer, randomIndex);
      }
      break;
    case "part3Ship":
      {
        fireThreeShip(battlefieldPlayer, randomIndex);
      }
      break;
    case "part4Ship":
      {
        fireFourShip(battlefieldPlayer, randomIndex);
      }
      break;
  }
  checkMissEnemy();
};

const checkMiss = () => {
  battlefieldEnemy.forEach((item, index) => {
    item.status === "miss"
      ? enemyFieldArray[index].classList.add("miss")
      : null;
    if (item.status === "crush") {
      blockAttack(battlefieldEnemy, index);
      enemyFieldArray[index].classList.add("crush");
    }
    item.status === "hit" ? enemyFieldArray[index].classList.add("hit") : null;
  });
};

const checkMissEnemy = () => {
  battlefieldPlayer.forEach((item, index) => {
    item.status === "miss"
      ? playerFieldArray[index].classList.add("miss")
      : null;
    if (item.status === "crush") {
      blockAttack(battlefieldPlayer, index);
      playerFieldArray[index].classList.add("crush");
    }
    item.status === "hit" ? playerFieldArray[index].classList.add("hit") : null;
  });
};

const blockRepeatAttack = (e) => {
  if (
    e.target.classList.contains("miss") ||
    e.target.classList.contains("crush") ||
    e.target.classList.contains("hit")
  ) {
    e.stopPropagation();
    e.preventDefault();
  }
};

const blockAttack = (arr, index) => {
  index = String(index).length === 1 ? "0" + String(index) : index;

  if (String(index)[1] === "9") {
    index = +index;
    arr[index - 1] &&
    (arr[index - 1]?.status === "miss" || arr[index - 1]?.status === "freeze")
      ? (arr[index - 1].status = "miss")
      : null;
    (arr[index - 11] && arr[index - 11]?.status === "miss") ||
    arr[index - 11]?.status === "freeze"
      ? (arr[index - 11].status = "miss")
      : null;
    (arr[index + 9] && arr[index + 9]?.status === "miss") ||
    arr[index + 9]?.status === "freeze"
      ? (arr[index + 9].status = "miss")
      : null;
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : null;
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : null;
  } else if (String(index)[1] === "0") {
    index = +index;
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : null;
    (arr[index + 1] && arr[index + 1]?.status === "miss") ||
    arr[index + 1]?.status === "freeze"
      ? (arr[index + 1].status = "miss")
      : null;
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : null;
    (arr[index + 11] && arr[index + 11]?.status === "miss") ||
    arr[index + 11]?.status === "freeze"
      ? (arr[index + 11].status = "miss")
      : null;
    (arr[index - 9] && arr[index - 9]?.status === "miss") ||
    arr[index - 9]?.status === "freeze"
      ? (arr[index - 9].status = "miss")
      : null;
  } else {
    index = +index;
    (arr[index - 1] && arr[index - 1]?.status === "miss") ||
    arr[index - 1]?.status === "freeze"
      ? (arr[index - 1].status = "miss")
      : null;
    (arr[index - 11] && arr[index - 11]?.status === "miss") ||
    arr[index - 11]?.status === "freeze"
      ? (arr[index - 11].status = "miss")
      : null;
    (arr[index + 9] && arr[index + 9]?.status === "miss") ||
    arr[index + 9]?.status === "freeze"
      ? (arr[index + 9].status = "miss")
      : null;
    (arr[index + 10] && arr[index + 10]?.status === "miss") ||
    arr[index + 10]?.status === "freeze"
      ? (arr[index + 10].status = "miss")
      : null;
    (arr[index - 10] && arr[index - 10]?.status === "miss") ||
    arr[index - 10]?.status === "freeze"
      ? (arr[index - 10].status = "miss")
      : null;
    (arr[index - 9] && arr[index - 9]?.status === "miss") ||
    arr[index - 9]?.status === "freeze"
      ? (arr[index - 9].status = "miss")
      : null;
    (arr[index + 1] && arr[index + 1]?.status === "miss") ||
    arr[index + 1]?.status === "freeze"
      ? (arr[index + 1].status = "miss")
      : null;
    (arr[index + 11] && arr[index + 11]?.status === "miss") ||
    arr[index + 11]?.status === "freeze"
      ? (arr[index + 11].status = "miss")
      : null;
  }
};

document.addEventListener("click", checkMiss);
document.addEventListener("click", checkMissEnemy);

function gameOver() {
  let counterPlayer = battlefieldPlayer.filter(
    (item) => item.status === "crush"
  );
  let counterEnemy = battlefieldEnemy.filter((item) => item.status === "crush");
  if (counterPlayer.length === 20 || counterEnemy.length === 20) {
    battleEnemy.removeEventListener("click", firePlayer);
    start.removeEventListener("click", startGame);
    document.removeEventListener("click", blockRepeatAttack, true);
    document.removeEventListener("click", turnFire);
    document.removeEventListener("click", checkStatusBtn);
    document.removeEventListener("click", checkMiss);
    document.removeEventListener("click", checkMissEnemy);
  }
  if (counterPlayer.length === 20) {
    alert("Компьютер победил");
  }
  if (counterEnemy.length === 20) {
    alert("Игрок победил");
  }
}

const checkCell = (arr, index, coeff = 1) => {
  if (
    arr[index + 1 * coeff]?.status === "hit" ||
    arr[index - 1 * coeff]?.status === "hit" ||
    arr[index + 10 * coeff]?.status === "hit" ||
    arr[index - 10 * coeff]?.status === "hit"
  ) {
    return true;
  }
  return false;
};

const fireTwoShip = (arr, index) => {
  if (arr[index].status === "part2Ship" && checkCell(arr, index)) {
    checkCrush(arr, index, 2);
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
    checkCell(arr, index, 1) &&
    checkCell(arr, index, 2)
  ) {
    checkCrush(arr, index, 3);
  } else if (
    arr[index].status === "part3Ship" &&
    ((arr[index + 1]?.status === "hit" && arr[index - 1]?.status === "hit") ||
      (arr[index + 10]?.status === "hit" && arr[index - 10]?.status === "hit"))
  ) {
    checkCrush(arr, index, 2);
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
    checkCell(arr, index) &&
    checkCell(arr, index, 2) &&
    checkCell(arr, index, 3)
  ) {
    checkCrush(arr, index, 4);
  } else if (
    (arr[index].status === "part4Ship" &&
      arr[index + 1]?.status === "hit" &&
      arr[index - 1]?.status === "hit" &&
      (arr[index + 2]?.status === "hit" || arr[index - 2]?.status === "hit")) ||
    (arr[index + 10]?.status === "hit" &&
      arr[index - 10]?.status === "hit" &&
      (arr[index + 20]?.status === "hit" || arr[index - 20]?.status === "hit"))
  ) {
    checkCrush(arr, index, 3);
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

const checkCrush = (arr, index, n) => {
  for (let i = 1; i < n; i++) {
    arr[index + i * 0].status = "crush";
    arr[index + i]?.status === "hit" ? (arr[index + i].status = "crush") : null;
    arr[index - i]?.status === "hit" ? (arr[index - i].status = "crush") : null;
    arr[index + i * 10]?.status === "hit"
      ? (arr[index + i * 10].status = "crush")
      : null;
    arr[index - i * 10]?.status === "hit"
      ? (arr[index - i * 10].status = "crush")
      : null;
  }
};

const startGame = () => {
  battleEnemy.addEventListener("click", firePlayer);

  if (statusPlayer === "ready") {
    cancelBtn.disabled = true;
    showTurn.innerHTML = turn;
    cancelBtn.removeEventListener("click", cancel);
    randomArrangeBtn.removeEventListener(
      "click",
      arrangePlayer(battlefieldPlayer, playerFieldArray, shipsPlayer)
    );
    manualArrangeBtn.removeEventListener("click", manuallyArrange);
    document.removeEventListener("dragstart", dragStart, false);
    document.removeEventListener("dragend", dragEnd, false);
    document.removeEventListener("dragover", dragOver, false);
    document.removeEventListener("drop", dropShip, false);
    arrangeEnemy(battlefieldEnemy, enemyFieldArray, shipsEnemy)();
    enemyFieldArray.forEach((item) => item.classList.add("white"));
    startFlag = true;

    startFlag === true
      ? (randomArrangeBtn.disabled = true)
      : (randomArrangeBtn.disabled = false);
    startFlag === true
      ? (manualArrangeBtn.disabled = true)
      : (manualArrangeBtn.disabled = false);
  }
};

const turnFire = () => {
  if (turn === "Компьютер") {
    setTimeout(fireEnemy, 400);
  }
};

document.addEventListener("click", blockRepeatAttack, true);
start.addEventListener("click", startGame);

const checkStatusBtn = () => {
  if (statusPlayer === "ready") {
    start.disabled = false;
  } else {
    start.disabled = true;
  }
};
const cancel = () => {
  randomArrangeBtn.disabled = false;
  manualArrangeBtn.disabled = false;
  manualArrangeBtn.innerHTML = "Ручная расстановка";
  playerFieldArray.forEach(
    (item) => (item.className = "sea-battle__cell-player")
  );
  for (key in shipsPlayer) {
    shipsPlayer[key] = false;
  }
  battlefieldPlayer.forEach((item) => (item.status = "free"));
  Array.from(containerPlayerShip.children).forEach((item) => item.remove());
  cancelBtn.disabled = true;
};

document.addEventListener("click", checkStatusBtn);
document.addEventListener("click", turnFire);
document.addEventListener("click", gameOver);
cancelBtn.addEventListener("click", cancel);
