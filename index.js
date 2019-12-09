/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {

  let hourTime = parseInt(timeString.substring(0,2));

  if (hourTime < 12)
  {
    return 'Good Morning';
  }
  else if (hourTime < 17)
  {
    return 'Good Afternoon';
  }
  else
  {
    return 'Good Evening';
  }
}



function displayMessage(message){
  const greeting = document.querySelector('#greeting');
  greeting.innerText = message;
}