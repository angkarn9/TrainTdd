describe("FizzBuzz", function() {
    it("should be say same input", function() {
        expect(FizzBuzz(2)).toEqual("2");
        expect(FizzBuzz(4)).toEqual("4");
        expect(FizzBuzz(1)).toEqual("1");
    });

    it("Input 3 Should Be say Fizz", function(){
        expect(FizzBuzz(3)).toEqual("Fizz");
    });

    it("Input 5 Should Be say Buzz", function(){
        expect(FizzBuzz(5)).toEqual("Buzz");
    });

});