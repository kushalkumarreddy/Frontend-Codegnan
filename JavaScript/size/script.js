let count = 0;
let refElem=document.querySelector("#ref");
function inc() {
    count++;
    refElem.innerText=count
}
function dec() {
    count--;
    refElem.innerText=count
}
function reset() {
    count=0;
    refElem.innerText=count
}





// function big() {
//     document.getElementById("text").style.fontSize="50px";
// }
// function small() {
//     document.getElementById("text").style.fontSize="20px";
// }
// function reset() {
//     document.getElementById("text").style.fontSize="32px";
// }
// function capital(){
//     document.getElementById("text").innerText=document.getElementById("text").innerText.toUpperCase();
// }
// function lower(){
//     document.getElementById("text").innerText=document.getElementById("text").innerText.toLowerCase
// }