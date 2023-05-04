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
  will.src =
    'https://miro.medium.com/v2/resize:fit:2400/1*xf1iURqHSeOjlAt3BvHEaw.jpeg';
  will.style.height = '100%';
  will.style.width = '100%';
  will.style.zIndex = '50';
  const allDivs = Array.from(document.getElementsByTagName('div'));
  allDivs.forEach((div) => {
    div.parentNode.removeChild(div);
  });
  document.body.appendChild(will);
  let timeOut = 20;
  const timeOutTimer = document.createElement('div');
  timeOutTimer.setAttribute('id', 'timeOutTimer');
  timeOutTimer.style.fontSize = '75px';
  timeOutTimer.style.color = 'red';
  timeOutTimer.style.position = 'fixed';
  timeOutTimer.style.left = '50%';
  timeOutTimer.style.top = '50%';
  timeOutTimer.innerText = timeOut.toString();
  document.body.appendChild(timeOutTimer);
  function timeOutCountDown(timeOut) {
    if (timeOut > 0) {
      setTimeout(() => {
        timeOutTimer.innerText = timeOut.toString();
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

  //change the url
  //add more css styling and pictures
  //refactor code

  // realized issues
  // timer will prob reset anytime u click on new link in page
  // the timer persists on youtube because yt does not reload the page, it updates its dom contents on clicks and submits!!!

  // function to create a timer  that displays on the webpage and updates its innertext
  //css styling
  const timer = document.createElement('div');
  timer.setAttribute('id', 'timer');
  timer.style.fontSize = '30px';
  timer.style.color = 'red';
  timer.style.position = 'fixed';
  timer.style.left = '95%';
  timer.style.top = '95%';
  let timeSetByUser = aNumber;
  timer.innerText = timeSetByUser.toString();
  document.body.appendChild(timer);

  //function to count down the timer
  function countDown(timeSetByUser) {
    if (timeSetByUser > 0) {
      setTimeout(() => {
        timer.innerText = timeSetByUser.toString();
        countDown(timeSetByUser - 1);
      }, 1000);
    } else {
      //assigning prop to localStorage to check if user has redirected to website
      localStorage.setItem(window.location.hostname, 'true');
      window.location.replace(links[0]);
    }
  }
  countDown(timeSetByUser);
}
// })
