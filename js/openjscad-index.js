var _includePath = './';
var key = 'Shift-Return';
var me = 'web-online';
var gMemFs = [];
var gProcessor = null;
var editor = null;

var browser = 'unknown';
if (navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)/i)) {
  browser = RegExp.$1.toLowerCase();
}

var includeFile = function(fileUrl) {
  
};

window.onload = function() {
  $('#viewer').height($(window).height());

  $(window).resize(function() { // adjust the relevant divs
    $('#viewer').width($(window).width());
    $('#viewer').height($(window).height());
  });

  var exec = function(editor) {
    var src = editor.getValue();
    if (src.match(/^\/\/\!OpenSCAD/i)) {
      editor.getSession().setMode('ace/mode/scad');
      src = openscadOpenJscadParser.parse(src);
    } else {
      editor.getSession().setMode('ace/mode/javascript');
    }
    gProcessor.setJsCad(customShapes + src);
  };

  editor = ace.edit('editor');
  editor.setTheme('ace/theme/chrome');
  editor.getSession().setMode('ace/mode/javascript');
  editor.commands.addCommand({
    name: 'myCommand',
    bindKey: {
      win: key,
      mac: key
    },
    exec: exec
  });

  gProcessor = new OpenJsCad.Processor($('#viewer')[0]);

  if (document.location.search) {
    var modelUrl = document.location.search.split('=').pop();
    $.ajax({
      url: 'models/' + modelUrl
    }).done(function(data) {
      editor.setValue(data, 1);
      exec(editor);
      editor.blur();
    });
    var cameraSettings = window.sessionStorage.getItem('camera');
    if (cameraSettings) {
      cameraSettings = JSON.parse(cameraSettings);
      for (var attr in cameraSettings) {
        gProcessor.viewer[attr] = cameraSettings[attr];
      }
      gProcessor.viewer.onDraw();
    }
  } else {
    // rund efault project
    exec(editor);
  }
};

document.body.addEventListener('mouseup', function(e) {
  window.sessionStorage.setItem('camera', JSON.stringify({
    angleX: gProcessor.viewer.angleX,
    angleY: gProcessor.viewer.angleY,
    angleZ: gProcessor.viewer.angleZ,
    viewpointX: gProcessor.viewer.viewpointX,
    viewpointY: gProcessor.viewer.viewpointY,
    viewpointZ: gProcessor.viewer.viewpointZ
  }));
});
