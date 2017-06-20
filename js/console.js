console.log = function(log, dom) { 
  return function (text) {
    log(text);
    dom.value += text;
    dom.value += "\n";
  };
}(console.log, document.getElementById("console"));
