var i = 0;

for (let i = 1; i < 1000; i++) {
    if ( i%3 == 0 && i%5 == 0) {
        console.log("fizz buzz");
    } else if ( i%3 == 0) {
        console.log("fizz");
    } else if (i%5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
    
}
