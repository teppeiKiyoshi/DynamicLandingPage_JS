//select elements
const time = document.getElementById('currentTime');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// FUNCTION TO GET TIME
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // DETER IF AM OR PM
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // CONVERT 24 HOUR TIME TO 12 HOUR TIME
  hour = hour % 12 || 12;

  //OUTPUT TIME
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${ampm}`;

  setTimeout(showTime, 1000);
}

function addZero(sec, min) {
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (min < 10) {
    min = '0' + min;
  }
  return sec;
}

//SET BACKGROUND AND GREETING
function setBackground_Greet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.background =
      'url(img/morning.jpg) center center/cover no-repeat';
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    document.body.style.background =
      'url(img/afternoon.jpg) center center/cover no-repeat';
    greeting.textContent = 'Good Afternoon, ';
  } else {
    document.body.style.background =
      'url(img/night.jpg) center center/cover no-repeat';
    greeting.textContent = 'Good Evening, ';
  }
}

//GET NAME FUNCTION
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = 'Enter Name';
  } else {
    name.textContent = localStorage.getItem('name');
    document.title = localStorage.getItem('name') + "'s Focus";
  }
}

//SET NAME FUNCTION
function setName(e) {
  if (e.type === 'keypress') {
    if (e.key === 'Enter' || e.keyCode === 13) {
      localStorage.setItem('name', e.target.innerText);
      document.title = localStorage.getItem('name') + "'s Focus";
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//GET NAME FUNCTION
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = 'Enter your goal';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

//SET FOCUS FUNCTION
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

//event listeners to update name
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//event listeners to update focus
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// RUN THE FUNCTIONS
showTime();
setBackground_Greet();
getName();
getFocus();
