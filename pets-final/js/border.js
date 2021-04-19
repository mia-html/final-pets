var cat = document.getElementById("blog-cat");
var dog = document.getElementById("blog-dog");


cat.addEventListener("mouseover", function (){
    cat.style.border = "5px solid #d66f14";
});

cat.addEventListener("mouseout", function (){
    cat.style.border = "5px solid white";
});


dog.addEventListener("mouseover", function (){
    dog.style.border = "5px solid #d66f14";
});

dog.addEventListener("mouseout", function (){
    dog.style.border = "5px solid white";
});

