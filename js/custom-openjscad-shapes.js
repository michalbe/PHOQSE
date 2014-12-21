var customShapesDefinitions = function(){
  var hole = function(base, size, translate){
    return difference(base, sphere({
      r: size,
      center: true
    }).translate(translate));
  };

  var ring = function(radius, width, height){
    var part1 = cylinder({
      r: radius,
      center: true
    });

    var part2 = cube({
      size: [radius*2, radius*2, height],
      center: [true, true, true]
    });

    var circle = intersection(part2, part1);
    return hole(circle, radius-width, [0, 0, 0]);
  };
};

// We don't want those custom shapes defined above to be accesible in the
// global scope, we also don't want to edit them as a plain text or string
// (I kind of live syntax highlighting) so let's just strip the content of
// the function and pass it as a string to the OpenJSCad processor
var customShapes = customShapesDefinitions.toString().split('\n');
customShapes.pop();
customShapes.shift();
customShapes = customShapes.join('\n');
