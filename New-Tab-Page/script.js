const date = new Date().toDateString();

const time = () => {
    document.getElementsByClassName("hour")[0].innerHTML = new Date().getHours();
    document.getElementsByClassName("minute")[0].innerText = ": " +new Date().getMinutes();
    document.getElementsByClassName("second")[0].innerText = ": " +new Date().getSeconds();
}

const currentDate = () => {
    document.getElementsByClassName("date")[0].innerText = date;

}

setInterval(time, 1000);
time();
currentDate();

const qouteNo = Math.floor(Math.random() * 10);

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementsByClassName("quote")[0].innerText = '"' + data[qouteNo].text + '"';
  });