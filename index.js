/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const time = timeString.split(':')
  const inputTime = parseInt(time)
  if (inputTime < 12) return 'Good Morning'
  if (inputTime > 17) return 'Good Evening'
  return 'Good Afternoon'
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}
