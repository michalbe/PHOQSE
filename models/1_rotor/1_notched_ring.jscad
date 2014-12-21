// title: PHOQSE / 1. Rotor / 1. Notched Ring
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var holeSize = 0.7;
  var mainRing = ring(10, 2, 0.5);
  mainRing = hole(mainRing, holeSize, [9, 0, 0]);
  mainRing = hole(mainRing, holeSize, [-9, 0, 0]);
  mainRing = hole(mainRing, holeSize, [0, 9, 0]);
  mainRing = hole(mainRing, holeSize, [0, -9, 0]);
  var wholePart = mainRing;
  return wholePart;
}
