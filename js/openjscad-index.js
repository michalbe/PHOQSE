var gProcessor = null;
var editor = null;
var _includePath = './';
var key = 'Shift-Return';
var version = '0.018 (2014/10/05)';
var me = 'web-online'; // me: {cli, web-offline, web-online}
var browser = 'unknown';

if (navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)/i)) {
  browser = RegExp.$1.toLowerCase();
}

$(document).ready(function() {
  $('#viewer').height($(window).height());

  $(window).resize(function() { // adjust the relevant divs
    $('#viewer').width($(window).width());
    $('#viewer').height($(window).height());
  });
});

var exec = function(editor) {
  var src = editor.getValue();
  if (src.match(/^\/\/\!OpenSCAD/i)) {
    editor.getSession().setMode('ace/mode/scad');
    src = openscadOpenJscadParser.parse(src);
  } else {
    editor.getSession().setMode('ace/mode/javascript');
  }
  gMemFs = [];
  gProcessor.setJsCad(src);
};

window.onload = function() {
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
  exec(editor);
};
