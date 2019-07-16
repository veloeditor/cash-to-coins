//We need to take a dollar amount and break it down to the appropriate number of coins. We have to convert the dollar amount to total coins, then divide by 25, 10, 5, and 1. 


//I want a function that will figure out how many quarters, then dimes, then nickels and finally pennies are in my totalCents variable. It will need to figure out how many dimes are needed from what's leftover after quarters and so on.

// const piggyBank = {}
// let quarters = 0
// let dimes = 0
// let nickels = 0
// let pennies = 0
// let remainingCoins = 0

// const bankCalculator = (bankObj) => {
    
// let dollarAmount = 13.24
// let totalCents = dollarAmount * 100
// console.log("Cents =", totalCents)

// quarters = Math.floor(totalCents / 25)
// piggyBank.quarters = quarters
// console.log("Quarters=", quarters)

// dimes = Math.floor((totalCents - quarters) / 10)
// piggyBank.dimes = dimes
// console.log("Dimes=", dimes)

// nickels = Math.floor( (totalCents - quarters - dimes) / 5)
// piggyBank.nickels = nickels
// console.log("Nickels=", nickels)

// pennies = totalCents - quarters - dimes - nickels
// piggyBank.pennies = pennies
// console.log("pennies=", pennies)

// piggyBank.quarters = Math.floor(dollarAmount / .25)
// dollarAmount -= piggyBank.quarters * .25

// console.log(piggyBank)

//while 


const reverseCalc = (totalToReverse) => {

    let dollarAmount = totalToReverse * 100
    const newWallet = {}
  
    newWallet.quarters = Math.floor(dollarAmount / 25);
    dollarAmount -= newWallet.quarters * 25;
    newWallet.dimes = Math.floor(dollarAmount / 10);
    dollarAmount -= newWallet.dimes * 10;
    newWallet.nickels = Math.floor(dollarAmount / 5);
    dollarAmount -= newWallet.nickels * 5;
    newWallet.pennies = Math.floor(dollarAmount / 1);
    dollarAmount -= newWallet.pennies * 1;
  
    console.log("You gave me", totalToReverse)
  
    return newWallet
  }
  
  const testWallet = reverseCalc(45.24)
  console.log("What's in YOUR Wallet??", testWallet)