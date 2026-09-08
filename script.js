let test = "testing";

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');



console.log(test);

function setTime() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    console.log(hour)
    hourHand.style.transform = `rotate(${hour*30}deg)`;
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    secondHand.style.transform = `rotate(${second*6}deg)`;
    
    
}


function updateClock() {
    setInterval(setTime, 1000)
}

updateClock();