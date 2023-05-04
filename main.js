// run code after website fully loads
// window.addEventListener("DOMContentLoaded", () => {
console.log("hello")
// links to redirect user to after timer runs out
// const links =  ['http://www.w3schools.com', ]

// create a timer  that displays on the webpage and updates its innertext
// every second
//css styling
const timer = document.createElement('div');
timer.setAttribute('id', 'timer');
timer.style.fontSize = '30px';
timer.style.color = 'red';
let timeSetByUser = 60;
timer.innerText = timeSetByUser.toString();
document.body.appendChild(timer);
// function that redirects the user
    // may refactor to make it pause  when user is not  tabbed onto website
// setTimeout(() => {
//     window.location.replace(links[0]);
// }, timeSetByUser * 1000);
// // function that updates the timer element every second
function countDown(timeSetByUser) {
    if (timeSetByUser > 0) {
        setTimeout(() => {
            console.log(timeSetByUser);
            timer.innerText = timeSetByUser.toString();
            countDown(timeSetByUser - 1);
        }, 1000);
    }
}
countDown(timeSetByUser);
// })