// Code sorced from https://flickity.metafizzy.co/ to initialize carousel
$(".main-carousel").flickity({
  cellAlign: "left",
  contain: true
});

var flkty = new Flickity( '.main-carousel', {
});

// Custom function to toggle navigation menu
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// Custom function to show art work when mouse moves over artist names
function showArt() {
  const show = document.querySelector('.show-art');
  show.style.display = "block"
}

function removeArt() {
  const show = document.querySelector('.show-art');
  show.style.display = "none"
}

// Code sorced from https://getbootstrap.com/ to collapse searchbar
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

