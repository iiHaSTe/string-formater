var input = document.getElementById("input");
var copy = document.getElementById("copy");
var run = document.getElementById("run");
var output = document.getElementById("output");
var option = document.getElementById("opt");

var result = "";



async function convert(){
  
  let opt = {
    es6: [
      [/\"/ig, '\\"'.fontcolor("#00FF9B")],
      [/\'/ig, "\\'".fontcolor("#00FF9B")],
      [/\`/ig, "\\`".fontcolor("#99FF9B")],
      [/\$\{/ig, "\\$".fontcolor("#9819FF")],
      [/\[/ig, "[".fontcolor("#13FFFE")],
      [/\]/ig, "]".fontcolor("#13FFFE")],
      [/\{/ig, "{".fontcolor("#FFA513")],
      [/\}/ig, "}".fontcolor("#FFA513")],
    ],
    normal: [
      [/\"/ig, '\\"'.fontcolor("#00FF9B")],
      [/\'/ig, "\\'".fontcolor("#00FF9B")],
      [/\n/ig, "\\n".fontcolor("#FF4207")],
      [/\t/ig, "\\t".fontcolor("#FF4207")],
      [/\[/ig, "[".fontcolor("#13FFFE")],
      [/\]/ig, "]".fontcolor("#13FFFE")],
      [/\{/ig, "{".fontcolor("#FFA513")],
      [/\}/ig, "}".fontcolor("#FFA513")],
    ],
    csharp: [
      [/\"/ig, '""'.fontcolor("#00FF9B")],
      [/\'/ig, "''".fontcolor("#00FF9B")],
      [/\{/ig, "{{".fontcolor("#FFA513")],
      [/\}/ig, "}}".fontcolor("#FFA513")],
      [/\[/ig, "[".fontcolor("#13FFFE")],
      [/\]/ig, "]".fontcolor("#13FFFE")],
    ]
  }
  result = input.value;
  for (let i of opt[option.value])
    result = result.replace(i[0], i[1]);
  
  output.innerHTML = result;
  result = output.innerText;
}

function copyToClipboard(text) {
  if (window.clipboardData) { // Internet Explorer
    window.clipboardData.setData("Text", text);
  } else {
    unsafeWindow.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
    clipboardHelper.copyString(text);
  }
}

run.addEventListener('click', convert);
copy.addEventListener('click', el => {
  navigator.clipboard.writeText(result);
});
