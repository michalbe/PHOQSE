var gProcessor = null;
var editor = null;
var _includePath = './';

var version = '0.018 (2014/10/05)';
//$(function() { $("#parametersdiv").draggable(); }); // doesn't work well, disabled
var me = document.location.toString().match(/^file:/)?'web-offline':'web-online'; // me: {cli, web-offline, web-online}
var browser = 'unknown';
if(navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)/i))
  browser = RegExp.$1.toLowerCase();

  $(document).ready(function() {
    $("#viewer").height($(window).height());

    $(window).resize(function() {                // adjust the relevant divs
      $("#viewer").width($(window).width());
      $("#viewer").height($(window).height());
    });
  });

  function onload() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().on('change', function(e) {
      ;
    });
    ['Shift-Return'].forEach(function(key) {
      editor.commands.addCommand({
        name: 'myCommand',
        bindKey: { win: key, mac: key },
        exec: function(editor) {
          var src = editor.getValue();
          if(src.match(/^\/\/\!OpenSCAD/i)) {
            editor.getSession().setMode("ace/mode/scad");
            src = openscadOpenJscadParser.parse(src);
          } else {
            editor.getSession().setMode("ace/mode/javascript");
          }
          gMemFs = [];
          gProcessor.setJsCad(src);
        },
      });
    });

    gProcessor = new OpenJsCad.Processor(document.getElementById("viewer"));
    (function(editor) {
      var src = editor.getValue();
      if(src.match(/^\/\/\!OpenSCAD/i)) {
        editor.getSession().setMode("ace/mode/scad");
        src = openscadOpenJscadParser.parse(src);
      } else {
        editor.getSession().setMode("ace/mode/javascript");
      }
      gMemFs = [];
      gProcessor.setJsCad(src);
    })(editor);
  }
