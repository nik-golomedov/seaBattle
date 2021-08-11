const checkDropShip = (index, n, ship) => {
    let isCellsFreeForShip = true;
  
    for (let i = 1; i < n; i++) {
      if (battlefieldPlayer[index + i].status !== "free") {
        isCellsFreeForShip = false;
        debugger;
      }
  
      console.log(isCellsFreeForShip);
    }
    if (isCellsFreeForShip) {
      for (let i = 0; i < n; i++) {
        battlefieldPlayer[index + i].status = ship;
        checkRandomArrangeShip(battlefieldPlayer, index + i, String(index + i));
        debugger;
      }
    } 
  };