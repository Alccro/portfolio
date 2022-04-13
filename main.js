
function hamburgerNav() {
    const navBar = document.getElementById("navBar")

    if (navBar.className === "nav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "nav";
    }
}

// set up text to print, each item in array is new line
var aText = new Array(
    '"Everything should be made as simple as possible,',
     'but not simpler."'
    );
    var iSpeed = 75; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 25; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typewriter");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 2000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
        
    typewriter();
