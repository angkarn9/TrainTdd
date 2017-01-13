describe("FizzBuzz", function() {
    it("should be say same input", function() {
        var dataTest = [1, 2, 4, 7, 8, 11, 13, 14];

        dataTest.forEach(function(input){
            expect(FizzBuzz(input)).toEqual(input.toString());
        });
    });

    it("Should Be say Fizz", function(){
        var inputData = [3, 6, 9, 12];

        inputData.forEach(function(input){
            expect(FizzBuzz(input)).toEqual("Fizz");
        });
    });

    it("Should Be say Buzz", function(){
        expect(FizzBuzz(5)).toEqual("Buzz");
        expect(FizzBuzz(10)).toEqual("Buzz");
    });

    it("Should Be say FizzBuzz", function(){
        expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });
});