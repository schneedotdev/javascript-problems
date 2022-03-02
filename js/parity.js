let initial = prompt('please enter an initial value for the loop') || 1;

for (let i = initial; i <= Number(initial) + 9; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}