// title: PHOQSE / 1. Rotor / 2. Front Face
// author: Michal Budzynski <michal@virtualdesign.pl>
//

var objectHeight = 3;

var addLetter = function(letter){
  var l = vector_text(0,0, letter);
  var o = [];
  l.forEach(function(pl) {
    o.push(rectangular_extrude(pl, {w: 4, h: 4}));
  });
  return union(o).scale(0.08).rotateY(90);
};

var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var generateLetters = function() {
  var numberOfLetters = letters.length;
  var angle = 0;
  var distanceFromCenter = 9.8;
  var output = [];
  var step = (2*Math.PI) / numberOfLetters;
  for(var i = 0; i < numberOfLetters; i++) {
    var x = distanceFromCenter * Math.cos(angle);
    var y = distanceFromCenter * Math.sin(angle);
    output.push(addLetter(letters[i]).rotateZ(angle*360/(2*Math.PI)).translate([x, y, 0.8]));
    angle += step;
  }

  return output;
};

function main() {
  var mainRing = ring(bigRingSize, bigRingSize - alphabetHoleSize, objectHeight);
  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 4,
    holeRadius: screwHoleSize,
    distanceFromCenter: bigRingScrewRadius,
    objectHeight: objectHeight
  });

  var wholePart = union(mainRing, generateLetters());
  return wholePart;
}
