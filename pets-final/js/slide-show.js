var numSlides1 = 0;
startSlideShow1();

function startSlideShow1() {
    var allSlides = document.getElementsByClassName("slideShow1");
    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    numSlides1++;
    if (numSlides1 > allSlides.length) {
        numSlides1 = 1;
    }
    allSlides[numSlides1 - 1].style.display = "block";
    setTimeout(startSlideShow1, 1000);
}

/**************************************************************/

var numSlides2 = 0;
startSlideShow2();

function startSlideShow2() {
    var allSlides = document.getElementsByClassName("slideShow2");
    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    numSlides2++;
    if (numSlides2 > allSlides.length) {
        numSlides2 = 1;
    }
    allSlides[numSlides2 - 1].style.display = "block";
    setTimeout(startSlideShow2, 1000);
}

/**************************************************************/

var numSlides3 = 0;
startSlideShow3();

function startSlideShow3() {
    var allSlides = document.getElementsByClassName("slideShow3");
    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    numSlides3++;
    if (numSlides3 > allSlides.length) {
        numSlides3 = 1;
    }
    allSlides[numSlides3 - 1].style.display = "block";
    setTimeout(startSlideShow3, 1000);
}

var numSlides4 = 0;
startSlideShow4();

function startSlideShow4() {
    var allSlides = document.getElementsByClassName("slideShow4");
    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    numSlides4++;
    if (numSlides4 > allSlides.length) {
        numSlides4 = 1;
    }
    allSlides[numSlides4 - 1].style.display = "block";
    setTimeout(startSlideShow4, 1000);
}