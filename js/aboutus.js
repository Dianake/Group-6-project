



/* newsletter */
function revealMessage() {
  var text = document.getElementById("hiddenMessage");
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

/*button to change background */
function color(value){
  document.getElementById("aboutus").style.background=value
  document.getElementById("aboutus").style.backgroundSize = "cover";
}