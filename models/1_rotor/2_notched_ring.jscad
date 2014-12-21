// title: PHOQSE / 1. Rotor / 2. Notched Ring
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var holeSize = 0.7;
  var mainRing = ring(10, 2, 0.5);
  mainRing = hole(mainRing, holeSize, [9, 0, 0]);
  mainRing = hole(mainRing, holeSize, [-9, 0, 0]);
  mainRing = hole(mainRing, holeSize, [0, 9, 0]);
  mainRing = hole(mainRing, holeSize, [0, -9, 0]);

  var notch = cube({
    size: [10, 10, 1],
    center: true
  }).rotateZ(12).translate([10.6, 10.6, 0]);
  var wholePart = difference(mainRing, notch);
  return wholePart;
}
