// title: PHOQSE / 1. Rotor / 3. Front Face
// author: Michal Budzynski <michal@virtualdesign.pl>

//
var objectHeight = 1;
function main() {
  var ringSize = alphabetHoleSize - cylinderThickness;
  var mainRing = ring(ringSize, ringSize - hubDiameter, objectHeight);
  mainRing = circularHoles(mainRing, 3, screwHoleSize, fontScrewRadius);
  mainRing = circularHoles(mainRing, 26, pinHoleSize, pinRadius);
  var wholePart = mainRing;
  return wholePart;
}
