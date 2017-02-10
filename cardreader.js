"use strict";

var keys = '';

function GetDescriptionFor(e)
{
  var result, code;
  if ((e.charCode) && (e.keyCode==0))
  {
    code = e.charCode;
  } else {
    code = e.keyCode;
  }
  if ((code >= 41) && (code <=126)) result = String.fromCharCode(code);

  return result;
}

function MonitorKey(e)
{
  if (!e) e=window.event;
  var d = GetDescriptionFor(e);
  if(d != '?'){
    if(d != undefined){
      keys += d;
    }
  }
  else{
    keys = keys.slice(3);
    keys = keys.substring(0, keys.length - 25);
    keys = 'A' + keys;
    document.getElementById("scan-code").value = keys;
    keys = '';
  }
  return true;
}

document.getElementById("scan-code").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("?".indexOf(chr) >= 0)
        return false;
};

document.addEventListener('keypress', MonitorKey, true);