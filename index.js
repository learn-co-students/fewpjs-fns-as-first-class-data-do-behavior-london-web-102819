/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hourString = time.split(":")[0];
  const parsedHour = parseInt(hourString);
  if (parsedHour < 12) {
    return "Good Morning";
  } else if (parsedHour > 12 && parsedHour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  debugger;
  let greeting = document.querySelector("#greeting");
  greeting.innerText = `${string}`;
}
