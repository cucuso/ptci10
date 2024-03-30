var eyeBall = document.querySelector('#eyeBall');
var eyeBall2 = document.querySelector('#eyeBall2');

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth;
    var y = event.clientY * 100 / window.innerHeight;

    if (x > 55) {
        x = 55;
    }

    if (y > 55) {
        y = 55;
    }

    x = x + "%";
    y = y + "%";


    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;

    eyeBall2.style.transition = "0s";
    eyeBall2.style.left = x;
    eyeBall2.style.top = y;
}

document.onmouseout = (event) => {
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "90%";
    eyeBall.style.top = "90%";

    eyeBall2.style.transition = "0.7s";
    eyeBall2.style.left = "90%";
    eyeBall2.style.top = "90%";
}

function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("ca");
    console.log(copyText.innerText)
  
    // Select the text field
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
  
  }