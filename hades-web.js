// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// silder show
// Start autoplaying automatically
var autoplayInterval = setInterval(function () {

    // Get element via id and click next
    document.getElementById("next").click();
}, 1500); // Do this every 1 second, increase this!

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// hover anh
function hover1() {
    document.summerhinhanh.src = "./image/summer-fashion/summe-product-1.jpg";
}
function hover1_1() {
    document.summerhinhanh.src = "./image/summer-fashion/summe-product-1.1.jpg";
}
function hover2() {
    document.summerhinhanh2.src = "./image/summer-fashion/summe-product-2.jpg";
}
function hover2_1() {
    document.summerhinhanh2.src = "./image/summer-fashion/summe-product-2.1.jpg";
}
function hover3() {
    document.summerhinhanh3.src = "./image/summer-fashion/summe-product-3.jpg";
}
function hover3_1() {
    document.summerhinhanh3.src = "./image/summer-fashion/summe-product-3.1.jpg";
}
function hover4() {
    document.summerhinhanh4.src = "./image/summer-fashion/summe-product-4.jpg";
}
function hover4_1() {
    document.summerhinhanh4.src = "./image/summer-fashion/summe-product-4.1.jpg";
}
//
function hoverwinter1() {
    document.hinhanhwinter1.src = "./image/winter-fashion/winter-fashion-1.jpg";
}
function hoverwinter1_1() {
    document.hinhanhwinter1.src = "./image/winter-fashion/winter-fashion-1.1.jpg";
}
function hoverwinter2() {
    document.hinhanhwinter2.src = "./image/winter-fashion/winter-fashion-2.jpg";
}
function hoverwinter2_1() {
    document.hinhanhwinter2.src = "./image/winter-fashion/winter-fashion-2.1.jpg";
}
function hoverwinter3() {
    document.hinhanhwinter3.src = "./image/winter-fashion/winter-fashion-3.jpg";
}
function hoverwinter3_1() {
    document.hinhanhwinter3.src = "./image/winter-fashion/winter-fashion-3.1.jpg";
}
function hoverwinter4() {
    document.hinhanhwinter4.src = "./image/winter-fashion/winter-fashion-4.jpg";
}
function hoverwinter4_1() {
    document.hinhanhwinter4.src = "./image/winter-fashion/winter-fashion-4.1.jpg";
}


function showhide() {
    var showcart = document.getElementById("giohang");
    showcart.style.display = (showcart.style.display == "none") ? "block" : "none"; // ban đầu gán nó bằng none sau đó click là block. none = false(ẩn) , block = true(hiện)
}
function showlogin() {
    var showlogin = document.getElementById("form");
    showlogin.style.display = (showlogin.style.display == "none") ? "block" : "none";
}

function validate() {
    var password = document.querySelector("#password");
    if (password.value.length < 6) {
        document.getElementById('errorp').innerHTML = '*Lỗi: Gồm chữ và số >6';
    } else {
        document.getElementById('errorp').innerHTML = ' ';
    }

    var pots = confirm("Bạn có muốn gửi");
}