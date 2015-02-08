// All the parts of the rotor should be loaded here.

function main() {
  var ring1 = require('models/1_rotor/2_front_face.jscad');
  var ring2 = require('models/1_rotor/7_cylinder.jscad');

  //ring2.scale(2);
  return union(ring1, ring2);
};
