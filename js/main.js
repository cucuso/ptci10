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


// memes
for (var i = 1, j = 21; i < j; i++) {
    var image = new Image; //This is a placeholder
    image.src = 'img/memes/' + i + '.jpg';
    image.setAttribute("class","img-fluid meme");
    image.setAttribute("data-aos","fade-in");
    document.getElementById( "memes" ).appendChild(image);
}