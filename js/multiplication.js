let input = 10;

while (input < 2 || input > 9) {
    input = prompt('please enter a number between 2 and 9') || 10;
}

for (let i = 0; i <= input; i++) {
    for (let j = 0; j <= input; j++) {
        console.log(`${i} * ${j} = ${Number(i) * Number(j)}`);
    }
}