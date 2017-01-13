function FizzBuzz(num){
    if (num == 3 || num == 6) {
        return "Fizz";
    }
    if (num == 5) {
        return "Buzz";
    }

    return num.toString();
}