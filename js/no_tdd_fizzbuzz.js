function PlayFizzBuzz(num){
    var returnStr = '';
    if(num%3==0 && num%5==0){
        returnStr = "FizzBuzz";
    }else if(num%3==0){
        returnStr = "Fizz";
    }else if(num%5==0){
        returnStr = "Buzz";
    }else{
        returnStr = num.toString();
    }
    return returnStr;
}