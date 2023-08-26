
// Validates whether the input is a number
function validateInput(input) {
    return !isNaN(input);
}

function validateIntegerInput(input) {
    return !isNaN(input) && Number.isInteger(input);
}

// Exercise 1
function calculateOddEven(number) {
    return number % 2 === 0 ? `even` : `odd`;
}

function printOddEven() {
    let requestedNumber = Number(prompt(`Please enter an integer number!`));
    if (!validateIntegerInput(requestedNumber)) {
        alert(`You entered an incorrect data! Please enter an integer number.`);
        return;
    }
    let result = `Your number is: ${requestedNumber}, which is an ${calculateOddEven(requestedNumber)} number.`;
    console.log(result);
    document.getElementById(`solution-1`).innerHTML = result;
}

// Exercise 2
function calculateSumDivision(number1, number2) {
    return (number1 + number2) % 3 === 0 && (number1 + number2) % 7 === 0 ? `divisible` : `not divisible`;
}

function printSumDivision() {
    let firstRequestedNumber = Number(prompt(`Please enter a number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));
    if (!validateInput(firstRequestedNumber) && !validateInput(secondRequestedNumber)) {
        alert(`You entered an incorrect data! Please enter a number.`);
        return;
    }
    let result = `Your numbers are ${firstRequestedNumber} and ${secondRequestedNumber}, their sum is ${calculateSumDivision(firstRequestedNumber, secondRequestedNumber)} by 3 and 7 with no remainder.`;
    alert(result);
    document.getElementById(`solution-2`).innerHTML = result;
}

// Exercise 3
function calculateSmallerBigger(number1, number2) {
    if (number1 < number2) {
        return `, from which ${number1} is smaller.`
    } else if (number2 < number1) {
        return `, from which ${number2} is smaller.`
    } else {
        return `, the two numbers are equal.`
    }
}

function printSmallerBigger() {
    let firstRequestedNumber = Number(prompt(`Please enter an number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));
    if (!validateInput(firstRequestedNumber) || !validateInput(secondRequestedNumber)) {
        alert('You entered an incorrect data! Please enter a number.');
        return;
    }
    let result = `Your numbers are ${firstRequestedNumber} and ${secondRequestedNumber} ${calculateSmallerBigger(firstRequestedNumber, secondRequestedNumber)}`;
    document.getElementById(`solution-3`).innerHTML = result;
    console.log(result);
}

// Exercise 4
function calculateAverage(array) {
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    return sum / array.length;
}

function printAverage() {
    let arrayRequestedNumbers = [];
    for (let i = 0; i < 5; i++) {
        let requestedNumber = Number(prompt(`Please enter a number!`));
        arrayRequestedNumbers.push(requestedNumber);
        if (!validateInput(requestedNumber)) {
            alert('You entered an incorrect data! Please enter a number.');
            return;
        }
    }
    let result = `Your numbers are: ${arrayRequestedNumbers}, their average is: ${calculateAverage(arrayRequestedNumbers)}.`;
    alert(result);
    document.getElementById(`solution-4`).innerHTML = result;
}

// Exercise 5
function printWelcome() {
    let firstName = prompt(`Please enter your first name!`);
    let lastName = prompt(`Please enter your last name!`);
    let result = `Welcome ${firstName} ${lastName}! :)`
    alert(result);
    document.getElementById(`solution-5`).innerHTML = result;
}

// Exercise 6
function calculateSum(number1, number2) {
    return number1 + number2;
}

function printSum() {
    let firstRequestedNumber = Number(prompt(`Please enter an number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));
    if (!validateInput(firstRequestedNumber) || !validateInput(secondRequestedNumber)) {
        alert('You entered an incorrect data! Please enter a number.');
        return;
    }
    let result = `Your numbers are ${firstRequestedNumber} and ${secondRequestedNumber}, their sum is: ${calculateSum(firstRequestedNumber, secondRequestedNumber)}.`;
    console.log(result);
    document.getElementById(`solution-6`).innerHTML = result;
}

// Exercise 7
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

function printPower() {
    let firstRequestedNumber = Number(prompt(`Please enter a base!`));
    let secondRequestedNumber = Number(prompt(`Please enter an exponent!`));
    if (!validateInput(firstRequestedNumber) || !validateInput(secondRequestedNumber)) {
        alert('You entered an incorrect data! Please enter a number.');
        return;
    }
    let result = `Your base number is ${firstRequestedNumber} raised to the power of ${secondRequestedNumber}, the result of which is ${calculatePower(firstRequestedNumber, secondRequestedNumber)}.`;
    alert(result);
    document.getElementById(`solution-7`).innerHTML = result;
}

// Exercise 8
function calculateSumOfSquares(number1, number2) {
    return (Math.pow(number1, 2)) + (Math.pow(number2, 2));
}

function printSumOfSquares() {
    let firstRequestedNumber = Number(prompt(`Please enter an number!`));
    let secondRequestedNumber = Number(prompt(`Please enter another number!`));
    if (!validateInput(firstRequestedNumber) || !validateInput(secondRequestedNumber)) {
        alert('You entered an incorrect data! Please enter a number.');
        return;
    }
    let result = `Your numbers are ${firstRequestedNumber} and ${secondRequestedNumber}, the sum of their squares is ${calculateSumOfSquares(firstRequestedNumber, secondRequestedNumber)}.`;
    document.getElementById(`solution-8`).innerHTML = result;
}

// Exercise 9
function calculateSquareRoot(number1) {
    return Math.sqrt(number1);
}

function printSquareRoot() {
    let requestedNumber = Number(prompt(`Please enter a not negative number!`));
    if (!validateInput(requestedNumber) || requestedNumber < 0) {
        alert('You entered an incorrect data! Please enter a not negative number.');
        return;
    }
    let result = `Your number is: ${requestedNumber}, the square roots of it are ${calculateSquareRoot(requestedNumber)} or -${calculateSquareRoot(requestedNumber)}.`;
    document.getElementById(`solution-9`).innerHTML = result;
}

// Exercise 10
function calculateGrossPrice(netPrice, vatRatePersantage) {
    let vatRate = vatRatePersantage / 100;
    return (netPrice + (netPrice * vatRate));
}

function printGrossPrice() {
    let netPrice = Number(prompt(`Please enter the net price of the product!`));
    let vatRatePersantage = Number(prompt(`Please enter the VAT rate of the product (%) !`));
    if (!validateInput(netPrice) || !validateInput(vatRatePersantage) || netPrice < 0 || vatRatePersantage < 0) {
        alert('You entered an incorrect data! Please enter a not negative number.');
        return;
    }
    let result = `The net price of your product is: ${netPrice}, the VAT rate of your product is: ${vatRatePersantage}%,  the gross price is: ${calculateGrossPrice(netPrice, vatRatePersantage)}.`;
    document.getElementById(`solution-10`).innerHTML = result;
}

// Exercise 11
function calculateConstrustTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return `constructable`;
    } else {
        return `not constructable`;
    }
}

function printConstrustTriangle() {
    let aSide = Number(prompt(`Please enter a positive number!`));
    let bSide = Number(prompt(`Please enter another positive number!`));
    let cSide = Number(prompt(`Please enter another positive number!`));
    if (!validateInput(aSide) || !validateInput(bSide) || !validateInput(cSide) || aSide <= 0 || bSide <= 0 || cSide <= 0) {
        alert('You entered an incorrect data! Please enter a not negative number.');
        return;
    }
    let result = `The sides of the triangle are: ${aSide}, ${bSide} and ${cSide}, therefor the triangle is ${calculateConstrustTriangle(aSide, bSide, cSide)}.`;
    document.getElementById(`solution-11`).innerHTML = result;
}

// Exercise 12

function printDiceRoll() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`solution-12`).innerHTML = `The result of the dice roll is: ${diceRoll}.`;
}

// Exercise 13
function generateRandomNumber(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit + 1 - lowerLimit)) + lowerLimit;
}

function printRandomNumber() {
    let lowerLimit = Number(prompt(`Please enter an integer number as the lower limit of your range!`));
    let upperLimit = Number(prompt(`Please enter an integer number as the upper limit of your range!`));
    if (!validateIntegerInput(lowerLimit) || !validateIntegerInput(upperLimit) || upperLimit <= lowerLimit) {
        alert('You entered an incorrect data! Please enter an integer number. The upper limit has to be higher than the lower limit.');
        return;
    }
    let result = `The random number within the range of ${lowerLimit}-${upperLimit} is: ${generateRandomNumber(lowerLimit, upperLimit)}`;
    document.getElementById(`solution-13`).innerHTML = result;
}

// Exercise 14
function fillArray() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        let randomNumber = Math.floor(Math.random() * (100) + 1);
        array.push(randomNumber);
    }
    let joinArray = array.join(', ');
    return joinArray;
}

function printFillArray() {
    let result = `The elements of the array are: ${fillArray()}.`;
    console.log(result);
    document.getElementById(`solution-14`).innerHTML = result;
}

// Exercise 15
function printCustomArray() {
    let customArray = [];
    for (let i = 0; i < 5; i++) {
        let requestedNumber = Number(prompt(`Please enter a number!`));
        customArray.push(requestedNumber);
        if (!validateInput(requestedNumber)) {
            alert('You entered an incorrect data! Please enter a number.');
            return;
        };
    };
    let joinCustomArray = customArray.join(', ');
    let result = `Your numbers are: ${joinCustomArray}.`;
    console.log(result);
    document.getElementById(`solution-15`).innerHTML = result;
}
