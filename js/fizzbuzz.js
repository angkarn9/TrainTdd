function FizzBuzz(number){
    //return fizz(number) + buzz(number) || number.toString();
    return fizzOrBuzz(number, 3) + fizzOrBuzz(number, 5) || number.toString();
}

function fizzOrBuzz(number, key){
    var fizzBuzzMap = {3:'Fizz', 5:'Buzz'};
    return number % key === 0 ? fizzBuzzMap[key] : "";
}

/*function buzz(number){
    return number % 5 === 0 ? "Buzz" : "";
}*/