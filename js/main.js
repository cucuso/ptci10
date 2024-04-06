var eyeBall = document.querySelector('#eyeBall');
var eyeBall2 = document.querySelector('#eyeBall2');


window.addEventListener("resize", reportWindowSize);


function reportWindowSize() {
    if (window.innerWidth < 768) {
        eyeBall.style.display = 'none';
        eyeBall2.style.display = 'none';
    } else {
        eyeBall.style.display = '';
        eyeBall2.style.display = '';
    }
}




eyeBall.style.display = '';
eyeBall2.style.display = '';

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

    console.log(x);
    console.log(y);

    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;

    eyeBall2.style.transition = "0s";
    eyeBall2.style.left = x;
    eyeBall2.style.top = y;
}


function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("ca");
    // Select the text field
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
}