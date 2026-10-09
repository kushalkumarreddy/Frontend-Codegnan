function abc() {
    let n = prompt("Enter a value");
    let sum = 0;

    for(let i=0; i<=Number(n); i++){
        sum += i;
    }

    console.log(sum);
}