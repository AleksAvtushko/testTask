const fizzBuzz = (n: number) => {
    if (n % 3 === 0) {
        return "fizz";
    } else if (n % 5 === 0) {
        return "buzz";
    } else {
        return "fizzBuzz";
    }
};

console.log(fizzBuzz(61));
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
