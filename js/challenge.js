
console.log(document.getElementById('counter').textContent);

// 1. See the timer increment every second once the page has loaded. Yay it works!
const counterDisplay = document.getElementById('counter');

let interval = setInterval(addIncrement, 1000);

function addIncrement(){
    counterDisplay.innerHTML++;
}

// 2. Manually increment and decrement the counter using the plus and minus buttons. Yay it works, too!
const counterMinusButton = document.getElementById('minus');
const counterPlusButton = document.getElementById('plus');

counterMinusButton.addEventListener('click', function () {
    counterDisplay.innerHTML--;    
     })

counterPlusButton.addEventListener('click', function () {
    counterDisplay.innerHTML++;
})


// 3. "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
let count;
let clickedNumbers = [];
const likeButton = document.getElementById('heart');

console.log(document.querySelector('.likes'))

function appendLi() {
    const ul = document.querySelector('.likes');
    const likeCounterText = counterDisplay.innerText
    console.log(likeCounterText);
    if (clickedNumbers.includes(likeCounterText)) {
        document.getElementById(likeCounterText).innerText = `${likeCounterText} has been liked ${count += 1} times`;
    } else {
        const li = document.createElement('li');
        li.innerText = `${likeCounterText} has been liked ${count = 1} times`;
        ul.appendChild(li);
        li.setAttribute('id', likeCounterText);
    }
    clickedNumbers.push(likeCounterText);
    console.log(clickedNumbers);
}

likeButton.addEventListener('click', appendLi);


// 4. Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons NOTE: I think "restart" is supposed to say "resume"
pauseButton = document.getElementById('pause');
let paused = false;

function pauseCounter() {
    paused = !paused;
    if (paused === true) {
        clearInterval(interval);
        pauseButton.innerText = 'resume';
        counterMinusButton.disabled = true;
        counterPlusButton.disabled = true;
        likeButton.disabled = true;
    } else {
        interval = setInterval(addIncrement, 1000);
        pause.innerText = 'pause';
        counterMinusButton.disabled = false;
        counterPlusButton.disabled = false;
        likeButton.disabled = false;
        
    }
}

pauseButton.addEventListener('click', pauseCounter);

// 6. Leave comments on my gameplay, such as: "Wow, what a fun game this is."
const commentForm = document.querySelector('form');

function leaveComment (event) {
    event.preventDefault();
    const div = document.getElementById('list');
    const paragraph = document.createElement('p');
    paragraph.innerText = document.getElementById('comment-input').value;
    console.log(document.getElementById('comment-input').value);
    div.appendChild(paragraph);
    commentForm.reset();
}

commentForm.addEventListener('submit', leaveComment);


