// run code after website fully loads
// window.addEventListener("DOMContentLoaded", () => {
console.log('hello');
// links to redirect user to after timer runs out
const links = ['http://www.w3schools.com'];

//code to check if user has returned to the site

if (localStorage.getItem(window.location.hostname) === 'true') {
  alert(
    'You have already used up your time on this website, you will be locked out!'
  );
  const will = document.createElement('img');

  will.setAttribute('src', 'https://i.ibb.co/xgLXqCx/Will.jpg');
  will.style.height = '100%';
  will.style.width = '100%';
  will.style.zIndex = '50';

  //removing all divs in body element
  const allDivs = Array.from(document.getElementsByTagName('div'));
  allDivs.forEach((div) => {
    div.parentNode.removeChild(div);
  });
  document.body.appendChild(will);

  let timeOut = 10;
  const timeOutTimer = document.createElement('div');
  timeOutTimer.setAttribute('id', 'timeOutTimer');
  timeOutTimer.style.fontSize = '60px';
  timeOutTimer.style.fontFamily = 'Open Sans';
  timeOutTimer.style.color = 'black';
  timeOutTimer.style.position = 'fixed';
  timeOutTimer.style.left = '50%';
  timeOutTimer.style.top = '50%';
  timeOutTimer.style.border = '3px solid black';
  timeOutTimer.style.backgroundColor = '#f2f2f2';
  timeOutTimer.style.borderRadius = '25px';
  timeOutTimer.style.padding = '20px';
  timeOutTimer.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';
  timeOutTimer.style.display = 'flex';
  timeOutTimer.style.alignItems = 'center';
  timeOutTimer.style.justifyContent = 'center';
  timeOutTimer.innerText = 'Time Left: ' + timeOut.toString();
  document.body.appendChild(timeOutTimer);
  function timeOutCountDown(timeOut) {
    if (timeOut > 0) {
      setTimeout(() => {
        timeOutTimer.innerText = 'Time Left: ' + timeOut.toString();
        timeOutCountDown(timeOut - 1);
      }, 1000);
    } else {
      localStorage.setItem(window.location.hostname, 'false');
      alert('You have served your time!');
      window.location.reload();
    }
  }

  timeOutCountDown(timeOut);
} else {
  const aNumber = Number(
    window.prompt('How long should you be on this website?', '')
  );

  // realized issues
  // timer will prob reset anytime u click on new link in page
  // the timer persists on youtube because yt does not reload the page, it updates its dom contents on clicks and submits!!!

  // function to create a timer  that displays on the webpage and updates its innertext
  //css styling
  const timer = document.createElement('div');
  timer.setAttribute('id', 'timer');

  timer.style.fontSize = '20px';
  timer.style.fontFamily = 'Open Sans';
  timer.style.color = 'black';
  timer.style.position = 'fixed';
  timer.style.left = '95%';
  timer.style.top = '12%';
  timer.style.border = '3px solid black';
  timer.style.backgroundColor = 'white';
  timer.style.borderRadius = '25px';
  timer.style.padding = '10px';
  timer.style.boxShadow = '12px 12px 2px 1px rgba(0, 0, 255, .2)';
  timer.style.display = 'flex';
  timer.style.alignItems = 'center';
  timer.style.justifyContent = 'center';

  let timeSetByUser = aNumber;
  timer.innerText = 'Time Left: ' + timeSetByUser.toString();
  document.body.appendChild(timer);

  //function to count down the timer
  function countDown(timeSetByUser) {
    if (timeSetByUser > 0) {
      const timerDec = setTimeout(() => {
        timer.innerText = 'Time Left: ' + timeSetByUser.toString();
        timeSetByUser--;
        countDown(timeSetByUser);
      }, 1000);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          clearTimeout(timerDec);
        } else {
          countDown(timeSetByUser);
        }
      });
    } else {
      //assigning prop to localStorage to check if user has redirected to website
      localStorage.setItem(window.location.hostname, 'true');
      window.location.replace(links[0]);
    }
  }
  countDown(timeSetByUser);
}
