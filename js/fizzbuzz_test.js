describe("FizzBuzz", function() {
    it("Input 1 Should be say 1", function() {
        expect(FizzBuzz(1)).toEqual("1");
    });

    it("Input 2 Should Be say 2", function(){
        expect(FizzBuzz(2)).toEqual("2");
    });

    it("Input 3 Should Be say 3", function(){
        expect(FizzBuzz(3)).toEqual("Fizz");
    });

    it("Input 4 Shoule Be say 4", function() {
        expect(FizzBuzz(4)).toEqual("4");
    });
});