var num = Math.floor(Math.random() * 3) + 1;

var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

if (num == 1) {
    image1.src = "img/blog-puppy.jpg";
    image2.src = "img/blog-bunny.jpg";
    image3.src = "img/blog-parrots.jpg";
} else if (num == 2) {
    image1.src = "img/blog-bunny.jpg";
    image2.src = "img/blog-parrots.jpg";
    image3.src = "img/blog-puppy.jpg";
} else {
    image1.src = "img/blog-parrots.jpg";
    image2.src = "img/blog-puppy.jpg";
    image3.src = "img/blog-bunny.jpg";
}