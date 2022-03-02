let input;

do {
    input = prompt('please enter a number that is less than or equal to 100') || 101;
} while (input > 100)

console.log('success');