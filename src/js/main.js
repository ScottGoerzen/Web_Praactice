var today = new Date();
var hourNow = today.getHours();
var greeting;

var seconds = today.getSeconds();
var num = 0;
var pictures = ['IMG1.JPG', 'IMG2.JPG', 'IMG3.JPG', 'IMG4.jpg', 'IMG5.jpg', 'IMG6.JPG', 'IMG7.jpg', 'IMG8.JPG']

function greet() {
  if (hourNow > 18) {
    greeting = 'Good evening';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon';
  } else if (hourNow > 0) {
    greeting = 'Good Morning';
  } else {
    greeting = 'Welcome';
  }

  document.getElementById('greeting').innerText = greeting;
}

function timer() {
  num++;
  document.getElementById('counter').innerText = num.toString();
  document.getElementById('picture').src = 'imgs/' + pictures[num%pictures.length]
  if (num >= pictures.length-1) num = 0;
}

