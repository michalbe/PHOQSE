// All the parts of the rotor should be loaded here.

function main() {
  var ring1 = require('models/1_rotor/1a_notched_ring.jscad');
  var ring2 = require('models/1_rotor/1b_notched_ring.jscad');

  ring2.translate([0, 0, 1]);
  return union(ring1, ring2);
};
