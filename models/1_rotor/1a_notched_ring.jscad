// title: PHOQSE / 1. Rotor / 1A. Notched Ring
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var mainRing = ring(10, 2, 0.5);
  mainRing = hole(mainRing, screwHoleSize, [9, 0, 0]);
  mainRing = hole(mainRing, screwHoleSize, [-9, 0, 0]);
  mainRing = hole(mainRing, screwHoleSize, [0, 9, 0]);
  mainRing = hole(mainRing, screwHoleSize, [0, -9, 0]);

  var notch = cube({
    size: [10, 10, 1],
    center: true
  }).rotateZ(20).translate([10, 12, 0]);
  var wholePart = difference(mainRing, notch);
  return wholePart;
}