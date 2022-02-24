$(".main-carousel").flickity({
  cellAlign: "left",
  contain: true
});

var flkty = new Flickity( '.main-carousel', {

});

// Function to toggle the navigation menu
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



var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

