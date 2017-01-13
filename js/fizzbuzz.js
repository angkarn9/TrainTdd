function FizzBuzz(number){
    return fizz(number) + buzz(number) || number.toString();
}

function fizz(number){
    return number % 3 === 0 ? "Fizz" : "";
}

function buzz(number){
    return number % 5 === 0 ? "Buzz" : "";
}