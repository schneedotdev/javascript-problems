let input = String(prompt('type "yes" or "no" to end the game')).toLowerCase()

while (input != "yes" && input != "no") {
    console.log("neither yes, nor no");
    input = String(prompt('type "yes" or "no" to end the game')).toLowerCase();
}

if (input === "yes") {
    console.log("'yes', the program WAS ended")
} else {
    console.log("'no', the program was NOT NOT ended")
}