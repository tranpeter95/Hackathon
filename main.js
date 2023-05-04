// run code after website fully loads
// window.addEventListener("DOMContentLoaded", () => {
console.log("hello")
// links to redirect user to after timer runs out
const links =  ['http://www.w3schools.com', ]

//function to prompt user for timer input 

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
} else {

const aNumber = Number(window.prompt("How long should you be on this website?", ""));


// when you load onto the site, it asks for time you should spend on it,
// when time runs out, you should be locked out of it for x time
// in order to do this, could have a property set on the website
// {canVist : true <--- starting}
// after they get redirected from the site, {canVisit : false};
// when they visit site, if canVisit is false, they see something else (maybe  a timer that shows how long before they can visit again) 

//add timer to when you return to the page
//change the url 
//add more css styling and pictures








// function to create a timer  that displays on the webpage and updates its innertext
//css styling
const timer = document.createElement('div');
timer.setAttribute('id', 'timer');
timer.style.fontSize = '30px';
timer.style.color = 'red';
let timeSetByUser = aNumber;
timer.innerText = timeSetByUser.toString();
document.body.appendChild(timer);
// function that redirects the user
// // function that updates the timer element every second
function countDown(timeSetByUser) {
    if (timeSetByUser > 0) {
        setTimeout(() => {
            console.log(timeSetByUser);
            timer.innerText = timeSetByUser.toString();
            countDown(timeSetByUser - 1);
        }, 1000);
    } else {
        localStorage.setItem('hasRedirected', 'true');
        window.location.replace(links[0])
    }
}
countDown(timeSetByUser);
}
// })