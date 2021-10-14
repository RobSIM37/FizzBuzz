let numbers = [3, 5, 7, 11];
let words = ["Fizz", "Buzz", "Floop", "Bloop"];

// let numbers = [3, 5];
// let words = ["Fizz", "Buzz"];

let countTo = 50;

FizzBuzz(numbers, words, countTo);

function FizzBuzz(numbers, words, countTo){

    for (let currentNumber = 1; currentNumber <= countTo; currentNumber++){

        let output = "";

        for (let i = 0; i < numbers.length; i++){

            if (currentNumber % numbers[i] === 0 && i<words.length){

                output = `${output}${words[i]}`;

            }
        }

        if (output === ""){

            output = currentNumber;

        }

        console.log(output);
        
    }
}