// title: PHOQSE / 1. Rotor / 1B. Notched Ring
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var objectHeight = 0.5;
  var mainRing = ring(bigRingSize, 2, objectHeight);
  mainRing = circularHoles({
    base: mainRing,
    numberOfHoles: 4,
    holeRadius: screwHoleSize,
    distanceFromCenter: bigRingScrewRadius,
    objectHeight: objectHeight
  });

  var notch = cube({
    size: [10, 10, 1],
    center: true
  }).rotateZ(12).translate([10.6, 10.6, 0]);
  var wholePart = difference(mainRing, notch);
  return wholePart;
}
