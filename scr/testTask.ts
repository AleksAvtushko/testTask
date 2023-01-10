const fizzBuzz = (n: number) => {
    if (n % 3 === 0 && n % 5 !== 0) {
        return "fizz";
    } else if (n % 5 === 0 && n % 3 !== 0) {
        return "buzz";
    } else if (n % 3 === 0 && n % 5 === 0) {
        return "fizzBuzz";
    } else {
        return n;
    }
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(14));
console.log(fizzBuzz(6));
