
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
        alert('You entered incorrect data! Please enter a number.');
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
            alert('You entered incorrect data! Please enter a number.');
            return;
        }
    }
    let result = `Your numbers are: ${arrayRequestedNumbers}, their average is: ${calculateAverage(arrayRequestedNumbers)}.`;
    alert(result);
    document.getElementById(`solution-4`).innerHTML = result;
}
