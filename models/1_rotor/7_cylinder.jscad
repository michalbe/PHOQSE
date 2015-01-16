// title: PHOQSE / 1. Rotor / 7. Cylinder
// author: Michal Budzynski <michal@virtualdesign.pl>

// This object's heights is equal to height of Objects 1A + 1B + 3 (upper
// part) and Object 9 (lower part) what is ~ (0.5 + 0.5 + 3) + (2) = 6
var objectHeight = 6;
function main() {
  var mainRing = ring(alphabetHoleSize, cylinderThickness, objectHeight);
  var frontFace = includeModel('/models/1_rotor/3_alphabet_ring.jscad');

  var wholePart = union(mainRing, frontFace);
  return wholePart;
}
