// run code after website fully loads
// window.addEventListener("DOMContentLoaded", () => {
console.log("hello")
// links to redirect user to after timer runs out
const links =  ['http://www.w3schools.com' ]

//code to check if user has returned to the site

if (localStorage.getItem('hasRedirected') === 'true') {
    alert('You have already visited this page, you will be locked out for 1 hour!');
    const will = document.createElement('img');
    will.src = 'https://miro.medium.com/v2/resize:fit:2400/1*xf1iURqHSeOjlAt3BvHEaw.jpeg'
    will.style.height = '100%';
    will.style.width = '100%';
    will.style.zIndex = '50';
    const allDivs =  Array.from(document.getElementsByTagName('div'));
    allDivs.forEach(div => {
        div.parentNode.removeChild(div);
    })
    document.body.appendChild(will);
    let timeOut = 60000;
    const timeOutTimer = document.createElement('div');
    timeOutTimer.setAttribute('id', 'timeOutTimer');
    timeOutTimer.style.fontSize = '30px';
    timeOutTimer.style.color = 'red';
    timeOutTimer.innerText = timeOut.toString();
    document.body.appendChild(timeOutTimer);
    function timeOutCountDown (timeOut) {
    if (timeOut > 0) {
        setTimeout(() => {
            timeOutTimer.innerText = timeOut.toString();
            timeOutCountDown(timeOut - 1);
        }, 1000);
    } else {
        localStorage.setItem('hasRedirected', 'false');
    alert('You have served your time! Refresh');
    }
}
timeOutCountDown(timeOut);
} else {

const aNumber = Number(window.prompt("How long should you be on this website?", ""));


//change the url 
//add more css styling and pictures
//refactor code

// realized issues
// timer will prob reset anytime u click on new link in page
// need to change key in localstorage to be specifically the website,
// since the lockout should be active for some sites but not others






// function to create a timer  that displays on the webpage and updates its innertext
//css styling
const timer = document.createElement('div');
timer.setAttribute('id', 'timer');
timer.style.fontSize = '30px';
timer.style.color = 'red';
let timeSetByUser = aNumber;
timer.innerText = timeSetByUser.toString();
document.body.appendChild(timer);

//function to count down the timer
function countDown(timeSetByUser) {
    if (timeSetByUser > 0) {
        setTimeout(() => {
            console.log(timeSetByUser);
            timer.innerText = timeSetByUser.toString();
            countDown(timeSetByUser - 1);
        }, 1000);
    } else {
        //assigning prop to localStorage to check if user has redirected to website
        localStorage.setItem('hasRedirected', 'true');
        window.location.replace(links[0])
    }
}
countDown(timeSetByUser);
}
// })


//add styling to timer alert 
//edit picture 
//refactor
//add emoji? 