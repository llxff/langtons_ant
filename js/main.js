function random(max) {
  return Math.floor((Math.random() * max) + 1);
}

function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[random(16)];
  }
  return color;
}

$(function() {
  var canvas = document.querySelector('canvas');
  canvas.width = 300;
  canvas.height = 300;

  var map = new Map(canvas.getContext("2d"), [canvas.width, canvas.height]);

  for(var i = 0; i < 100; i++) {
    new Ant(canvas.getContext("2d"), randomColor(), map, [random(170), random(170)]).move();
  }
});