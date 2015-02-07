var customShapesDefinitions = function() {

  /**
  *
  * Globals
  *
  */

  // size of the 1 & 3 parts (notched & alphabet rings)
  var bigRingSize = 10;

  // size of the hole for the screw
  var screwHoleSize = 0.7;

  // size of the pinhole
  var pinHoleSize = 0.3;

  // alphabet wheel's hole size
  var alphabetHoleSize = 7;

  // cylinder ring's (7) wall thickness
  // front face ring needs to fit inside, and both need to fit
  // in the alphabet wheel (element 3)
  var cylinderThickness = 0.5;

  // hole needed to put element nr 8
  var hubRadius = 0.75;
  var hubDiameter = hubRadius * 2;

  // radius for positioning screws in elements 1AB & 3
  var bigRingScrewRadius = 9;

  // radius for positioning screws in elements 2 & 10
  var fontScrewRadius = 3;

  // radius for positioning pins in elements 2 & 10 (and 11)
  var pinRadius = 5.5;
 /**
  *
  * Shapes
  *
  **/
  var hole = function(base, size, translate, objectHeight){
    return difference(base, cylinder({
      r: size,
      h: objectHeight,
      center: true
    }).translate(translate));
  };

  var ring = function(radius, width, height){
    var part1 = cylinder({
      r: radius,
      h: height,
      center: true
    });

    var part2 = cube({
      size: [radius*2, radius*2, height],
      center: [true, true, true]
    });

    var circle = intersection(part2, part1);
    return hole(circle, radius-width, [0, 0, 0], height);
  };

  var circularHoles = function(options) {
    var base = options.base;
    var numberOfHoles = options.numberOfHoles;
    var holeRadius = options.holeRadius;
    var distanceFromCenter = options.distanceFromCenter;
    var objectHeight = options.objectHeight;
    var angle = 0;
    var step = (2*Math.PI) / numberOfHoles;
    for(var i = 0; i < numberOfHoles; i++) {
      var x = distanceFromCenter * Math.cos(angle);
      var y = distanceFromCenter * Math.sin(angle);
      base = hole(base, holeRadius, [x, y, 0], objectHeight);
      angle += step;
    }

    return base;
  };
};

// We don't want those custom shapes defined above to be accesible in the
// global scope, we also don't want to edit them as a plain text or string
// (I kind of love syntax highlighting) so let's just strip the content of
// the function and pass it as a string to the OpenJSCad processor
var customShapes = customShapesDefinitions.toString().split('\n');
customShapes.pop();
customShapes.shift();
customShapes = customShapes.join('\n');
