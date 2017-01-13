describe("FizzBuzz", function() {
    it("should be say same input", function() {
        expect(FizzBuzz(1)).toEqual("1");
        expect(FizzBuzz(2)).toEqual("2");
        expect(FizzBuzz(4)).toEqual("4");
        expect(FizzBuzz(7)).toEqual("7");
        expect(FizzBuzz(8)).toEqual("8");
        expect(FizzBuzz(11)).toEqual("11");
        expect(FizzBuzz(13)).toEqual("13");
        expect(FizzBuzz(14)).toEqual("14");
    });

    it("Should Be say Fizz", function(){
        expect(FizzBuzz(3)).toEqual("Fizz");
        expect(FizzBuzz(6)).toEqual("Fizz");
        expect(FizzBuzz(9)).toEqual("Fizz");
        expect(FizzBuzz(12)).toEqual("Fizz");
    });

    it("Should Be say Buzz", function(){
        expect(FizzBuzz(5)).toEqual("Buzz");
        expect(FizzBuzz(10)).toEqual("Buzz");
    });

    it("Should Be say FizzBuzz", function(){
        expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });
});