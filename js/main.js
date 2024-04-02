

function copyToClipboard() {
  // Get the text field
    var copyText = document.getElementById("my_ca");
    console.log(copyText.innerText)
  
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);

     var tooltip = document.getElementById("myTooltip")

     tooltip.innerHTML = "Copied: " + copyText.value;
  
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click to Copy CA";
  }
  
  function myHam() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 document.addEventListener('mousemove',(e) => {
    console.log(e)
    const mouseX = e.clientX; 
    const mouseY = e.clientY; 
    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width /2 ; 
    const anchorY = rekt.top + rekt.height / 2; 

    const angleDeg  = angle(mouseX,mouseY, anchorX, anchorY); 
    console.log(angleDeg)
    const eyesL = document.querySelectorAll('.eyeL')
    const eyesR = document.querySelectorAll('.eyeR')


    eyesL.forEach(eye=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)` ;

    })
    eyesR.forEach(eye=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)` ;
    })

 })

 function angle(cx, cy, ex, ey) {
    const dy = ey - cy ; 
    const dx = ex -cx ; 
    const rad =  Math.atan2(dy, dx) ; 
    const deg = rad * 180 / Math.PI ; 
    return deg ; 


 }