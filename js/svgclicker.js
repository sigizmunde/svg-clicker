const svgimage = document.getElementById("patternsvg");
svgimage.addEventListener("load", function () {
  var svgDoc = svgimage.contentDocument;
  var els = svgDoc.querySelectorAll("path");
  for (var i = 0, length = els.length; i < length; i++) {
    els[i].addEventListener("click", onPatternClick);
  }
});

function onPatternClick(event) {
  event.target.style.fill = "#FF8888";
}
