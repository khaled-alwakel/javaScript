

let CurrencyUnit = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let totalCash = 0;
  let valuesOfChange = [];

  for (let element of cid) totalCash += element[1];

  if (change > totalCash) return { status: "INSUFFICIENT_FUNDS", change: [] };
  else if (change === totalCash) return { status: "CLOSED", change: cid };
  else {
    cid = cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      let unit = cid[i][0];
      let numberOfMyCoins = (cid[i][1] / CurrencyUnit[unit]).toFixed(2);

      if (change >= CurrencyUnit[unit]) {
        let index = cid.length - i;
        let subCash = countSlicedCash(index, cid);
        if (change <= subCash) {
          let ClassCount = calculate(
            change,
            CurrencyUnit[unit],
            numberOfMyCoins
          );
          change = change - ClassCount * CurrencyUnit[unit];
          valuesOfChange.push([unit, ClassCount * CurrencyUnit[unit]]);
        } else return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
    return { status: "OPEN", change: valuesOfChange };
  }
}

function calculate(change, CurrencyUnitValue, num) {
  let counter = 0;
  while (change.toFixed(2) >= CurrencyUnitValue && counter < num) {
    change -= CurrencyUnitValue;
    counter++;
  }
  return counter;
}

function countSlicedCash(index, cid) {
  let cash = 0;
  for (let element of cid.slice(0, index)) cash += element[1];
  return cash;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
