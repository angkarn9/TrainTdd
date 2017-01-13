describe("FizzBuzz", function() {
    it("should be say same input", function() {
        expect(FizzBuzz(1)).toEqual("1");
        expect(FizzBuzz(2)).toEqual("2");
        expect(FizzBuzz(4)).toEqual("4");
        expect(FizzBuzz(7)).toEqual("7");
        expect(FizzBuzz(8)).toEqual("8");
    });

    it("Input 3 Should Be say Fizz", function(){
        expect(FizzBuzz(3)).toEqual("Fizz");
    });

    it("Input 5 Should Be say Buzz", function(){
        expect(FizzBuzz(5)).toEqual("Buzz");
    });

    it("Input 6 Should Be say Fizz", function(){
        expect(FizzBuzz(6)).toEqual("Fizz");
    });

    it("Input 9 Should Be say Fizz", function(){
        expect(FizzBuzz(9)).toEqual("Fizz");
    });

    it("Input 10 Should Be say Buzz", function(){
        expect(FizzBuzz(10)).toEqual("Buzz");
    });
});