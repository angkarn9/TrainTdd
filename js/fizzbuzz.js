function FizzBuzz(number){
    return fizz(number) + buzz(number) || number.toString();
}

function fizz(number){
    return {true: "Fizz", false: ""}[(number % 3 === 0)];
}

function buzz(number){
    return {true: "Buzz", false: ""}[(number % 5 === 0)];
}
