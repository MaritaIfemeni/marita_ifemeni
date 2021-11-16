//Menubar

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

//Gallery
var modal = document.getElementById('myModal');

var images = document.querySelectorAll(".gallerypic");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i < images.length; i++){
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
} 