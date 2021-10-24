function FizzBuzz(numbers, words, countTo){

    let result = [];
    for (let currentNumber = 1; currentNumber <= countTo; currentNumber++) { //start counting from one and go to the countTo value

        // Create an output var and reduce the numbers arr into a single string. If the currentNumber is divisible and there is a corrasponding word, add it to the end of the output
        let output = numbers.reduce((output, testNumber, i) => (currentNumber % testNumber === 0 && i < words.length) ? `${output}${words[i]}` : output, "");
        if (output === "") { //If the output is blank, then the current number was not divisible by any numbers in the numbers array...

            output = currentNumber;//... so we just set the output to the current number.

        }

        result.push(output);
        
    }

    return result;

}

function logFizzBuzz(fbArr, itemsPerLine){

    for (i=0; i<fbArr.length; i+=itemsPerLine) {
        console.log(fbArr.slice(i,i + itemsPerLine).join(", "));
    }

}

// let numbers = [3, 5, 7, 11, 13, 17];
// let words = ["Fizz", "Buzz", "Floop", "Bloop", "Farm", "Barm"];

let numbers = [3, 5];
let words = ["Fizz", "Buzz"];

let countTo = 1000;

logFizzBuzz(FizzBuzz(numbers, words, countTo),15);