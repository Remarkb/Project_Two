// Chart Params
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Getting a reference to the different dropdowns & buttons
var dd_IndCat = d3.select("#selIndCat");
var dd_Ind = d3.select("#selInd");
var dd_Year = d3.select("#selYear");
var dd_Sex = d3.select("#selSex");
var dd_RaceEth = d3.select("#selRaceEth");
var dd_IndLoc = d3.select("#selLoc");
var btn_Submit = d3.select("#btn_Submit");

// Unide indicator section
dd_IndCat.on("change", function() {
  document.getElementById("hInd").style.display = "block";
  document.getElementById("selInd").style.display = "block";
  d3.json("/sel_ind").then(function(data) {
    console.log(data);
    // console.log("test")
  });
});

// Unide Year section
dd_Ind.on("change", function() {
  document.getElementById("hYear").style.display = "block";
  document.getElementById("selYear").style.display = "block";
});

// Unide Sex section
dd_Year.on("change", function() {
  document.getElementById("hSex").style.display = "block";
  document.getElementById("selSex").style.display = "block";
});

// Unide Race/Eth section
dd_Sex.on("change", function() {
  document.getElementById("hRaceEth").style.display = "block";
  document.getElementById("selRaceEth").style.display = "block";
});

// Unide Location section
dd_RaceEth.on("change", function() {
  document.getElementById("hLoc").style.display = "block";
  document.getElementById("selLoc").style.display = "block";
});

// Unide Chart Type section
btn_Submit.on("click", function() {
  document.getElementById("hChartType").style.display = "block";
  document.getElementById("selChartType").style.display = "block";
});

function buildMetadata() {
    // Use `d3.json` to fetch the data
  d3.json("/sel_ind").then(function(data) {
    console.log(data);
    console.log("test")
  });
};