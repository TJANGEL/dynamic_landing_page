// DOM Elements
const time = document.getElementById('time');
greeting = document.getElementById('greeting');
name = document.getElementById('name');
focus = document.getElementById('focus');

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //   Set AM or PM syntax
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //   12hr format
  hour = hour % 12 || 12;

  //   Output Time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);

  //   Add Zeros
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }
}

// Set background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour > 12) {
    // morning
    document.body.style.backgroundImage = 'url(../img/morning.jpg)';
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = 'url(../img/afternoon.jpg)';
    greeting.textContent = 'Good Afternoon';
  } else {
    // evening
    document.body.style.backgroundImage = 'url(../img/night.jpg)';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Run
showTime();
setBgGreet();
