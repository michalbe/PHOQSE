// title: PHOQSE / 1. Rotor / 1. Notched Ring
// author: Michal Budzynski <michal@virtualdesign.pl>

function main() {
  var mainRing = ring(10, 2, 0.5);
  var wholePart = hole(mainRing, 0.5, [9, 0, 0]);
  return wholePart;
}
