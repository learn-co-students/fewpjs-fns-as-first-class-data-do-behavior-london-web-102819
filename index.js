/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(arg){
  const el=document.querySelector("#greeting");
  el.innerText=arg;
}


function greet(time){
  let t=time.split(":");
  let realT= parseInt((t[0]+t[1]), 10);
  if (realT<1200){
    return "Good Morning";
  } else if (realT>1200 && realT<1700){
    return "Good Afternoon";
  } else if (realT>=1700){
    return "Good Evening";
  }
}

