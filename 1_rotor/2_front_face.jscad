// title: PHOQSE / 1. Rotor / 2. Front Face
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var objectHeight = 1;
  var ringSize = alphabetHoleSize - cylinderThickness;
  var mainRing = ring(ringSize, ringSize - hubDiameter, objectHeight);
  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 3,
    holeRadius: screwHoleSize,
    distanceFromCenter: fontScrewRadius,
    objectHeight: objectHeight
  });

  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 26,
    holeRadius: pinHoleSize,
    distanceFromCenter: pinRadius,
    objectHeight: objectHeight
  });

  var depth = cylinder({
    r:  alphabetHoleSize * 0.6,
    h:  1,
    center: true
  }).translate([0, 0, objectHeight * 0.7]);

  var wholePart = difference(mainRing, depth);
  return wholePart;
}
