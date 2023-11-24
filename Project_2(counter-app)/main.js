const value = document.getElementById("value");

const badhao =() => {
    value.innerText =  ++value.innerText
}
const ghatao = () => {
    value.innerText = --value.innerText;
}
const reset = () => {
    value.innerText = 0;
}