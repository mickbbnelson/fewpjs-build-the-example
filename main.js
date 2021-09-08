// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.like')
const errorDisplay = document.querySelector('#modal.hidden')

for (let heart of hearts) {
  heart.addEventListener("click", liker)
}
  
function liker(event) {
  event.preventDefault();
  let heartTarget = event.target;
  mimicServerCall()
  .then(function(message) {
    heartTarget.innerHTML = '♥';
    heartTarget.classList.add('activated-heart');
  })
  .catch(function(error){
    errorDisplay.classList.remove('hidden');
    errorDisplay.innerHTML = error;
    setTimeout(() => {errorDisplay.classList.add('hidden')}, 3000);
  })
  if (heartTarget.className === 'activated-heart') {
    debugger
    heartTarget.innerHTML = '♡';
    heartTarget.classList.remove('activated-heart');
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
