// title: PHOQSE / 1. Rotor / 3. Front Face
// author: Michal Budzynski <michal@virtualdesign.pl>
var objectHeight = 1;
function main() {
  var mainRing = ring(8, 7, objectHeight);
  //mainRing = circularHoles(mainRing, 3, screwHoleSize, 2);
  mainRing = circularHoles(mainRing, 26, pinHoleSize, 6);
  var wholePart = mainRing;
  return wholePart;
}
