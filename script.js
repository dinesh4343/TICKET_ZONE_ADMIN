var button1 = document.getElementById('button1');
var modal1 = document.getElementById("modal1");
var span1 = document.getElementsByClassName("close")[0];

button1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var button2= document.getElementById('button2');
var modal2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close")[1];

button2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var button3 = document.getElementById('button3');
var modal3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close")[2];

button3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


var button4 = document.getElementById('button4');
var modal4 = document.getElementById("modal4");
var span4 = document.getElementsByClassName("close")[3];

button4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}


