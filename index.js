const battlePlayer = document.querySelector(".container-player");

const generateField = () => {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("sea-battle__cell-special");
    battlePlayer.append(div);
  }
};
let battlefieldPlayer = [];
for (let i = 0; i < 100; i++) {
  battlefieldPlayer.push({ status: "free", ship: "" });
}

const battlefieldEnemy = [...battlefieldPlayer];

let newArr = [...battlefieldPlayer];
const ship = {
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
// Random generator
const randomArrange = (arr) => {
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
  console.log(`4 : ${randomNumberFour}`);
  console.log(`31 : ${randomNumberThree1}`);
  console.log(`32 : ${randomNumberThree2}`);
  console.log(`21 : ${randomNumberTwo1}`);
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
    createThreeShip(direction,arr,randomNumberThree1)
    ship.threeShip1 = true;
  }
  if (!ship.threeShip2) {
    createThreeShip(direction,arr,randomNumberThree2)
    ship.threeShip2 = true;
  }

  if (!ship.twoShip1) {
    createTwoShips(direction, arr, randomNumberTwo1);
    ship.twoShip1 = true;
  }
  if (!ship.twoShip2) {
    createTwoShips(direction, arr, randomNumberTwo2);
    ship.twoShip2 = true;
  }
  if (!ship.twoShip3) {
    createTwoShips(direction, arr, randomNumberTwo3);
    ship.twoShip3 = true;
  }
  if (!ship.oneShip1) {
    createOneShip(direction, arr, randomNumberOne1);
    ship.oneShip1 = true;
  }
  if (!ship.oneShip2) {
    createOneShip(direction, arr, randomNumberOne2);
    ship.oneShip2 = true;
  }
  if (!ship.oneShip3) {
    createOneShip(direction, arr, randomNumberOne3);
    ship.oneShip3 = true;
  }
  if (!ship.oneShip4) {
    createOneShip(direction, arr, randomNumberOne4);
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
const createOneShip = (direction, arr, number) => {
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
        randomArrange(arr);
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
        randomArrange(arr);
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
        randomArrange(arr);
      }
    } else {
      if (arr[+number].status === "free") {
        for (let i = +number; i < +number + 10; i++) {
          if (i % 10 !== +number.slice(1)) continue;
          arr[i].status = "oneShip";
          checkFourShip(arr, i, number);
        }
      } else {
        randomArrange(arr);
      }
    }
  }
};
const createTwoShips = (direction, arr, number) => {
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
        randomArrange(arr);
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
        randomArrange(arr);
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
        randomArrange(arr);
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
        randomArrange(arr);
      }
    }
  }
};
const createThreeShip = (direction,arr,number) => {
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
            arr[i - 9]?.status === "free"
              ? (arr[i - 9].status = "freeze")
              : "";
          }
        }
      } else {
        randomArrange(arr);
      }
    } else {
      if (
        arr[+number].status === "free" &&
        arr[+number + 1].status === "free" &&
        arr[+number + 2].status === "free"
      ) {
        for (let i = +number; i < +number + 3; i++) {
          arr[i].status = "part3Ship";
          arr[i + 10]?.status === "free"
            ? (arr[i + 10].status = "freeze")
            : "";
          arr[i - 10]?.status === "free"
            ? (arr[i - 10].status = "freeze")
            : "";
          arr[i + 1]?.status === "free" ? (arr[i + 1].status = "freeze") : "";
          arr[i + 11]?.status === "free"
            ? (arr[i + 11].status = "freeze")
            : "";
          arr[i - 9]?.status === "free" ? (arr[i - 9].status = "freeze") : "";

          if (number.slice(1) !== "0") {
            arr[i - 11]?.status === "free"
              ? (arr[i - 11].status = "freeze")
              : "";
            arr[i - 1]?.status === "free"
              ? (arr[i - 1].status = "freeze")
              : "";
            arr[i + 9]?.status === "free"
              ? (arr[i + 9].status = "freeze")
              : "";
          }
        }
      } else {
        randomArrange(arr);
      }
    }
  }

  if (direction === "vertical") {
    if (
      number.slice(0, 1) === "8" ||
      number.slice(0, 1) === "9"
    ) {
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
        randomArrange(arr);
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
        randomArrange(arr);
      }
    }
  }
}
generateField();
let playerField = document.getElementsByClassName("sea-battle__cell-special");
let playerFieldArray = Array.from(playerField);

randomArrange(newArr);
let j = 0;

playerFieldArray.map((item) => {
  item.classList.add(newArr[j++].status);
});

const fireEnemy = (arrDiv, arrNum) => {
  let random = Math.round(Math.random() * 100);
  // const target = e.target;
  // const currentIndexField = arrDiv.indexOf(target)
  // const currentIndexArr = currentIndexField
  arrDiv[random].click();
  if (arrNum[random].status === "hit") {
    fireEnemy();
  }
  if (arrNum[random].status === "free") {
    arrDiv[random].innerHTML = ".";
  }
  if (arrNum[random].status === "ship") {
    if (arrNum.ship === "1-deck") {
      arrNum[random].status = "destroyed";
    }
    if (arrNum.ship === "2-deck") {
      if (
        arrNum[random + 1].status === "hit" ||
        arrNum[random - 1].status === "hit" ||
        arrNum[random + 10].status === "hit" ||
        arrNum[random - 10].status === "hit"
      ) {
        arrNum[random].status = "destroyed";
        fireEnemy();
      }
      arrNum[random].status = "hit";
      fireEnemy();
    }
  }
};
//three

//two

// one
