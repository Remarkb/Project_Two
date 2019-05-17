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
var dd_Race = d3.select("#selRaceEth");
var dd_Loc = d3.select("#selLoc");
var dd_Chart = d3.select("#selChartType");
var btn_Submit = d3.select("#btn_Submit");
var btn_Clear = d3.select("#btn_Clear");

// Unide indicator section
dd_IndCat.on("change", function() {
  document.getElementById("hInd").style.display = "block";
  document.getElementById("selInd").style.display = "block";
  var dd_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_elm.options[dd_elm.selectedIndex].text;
  dd_Ind.html("")
  dd_Ind.append("option").text("")
  dd_Ind.append("option").text("All")
  d3.json(`/sel_ind/${ind_cat_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Ind.append("option").text(data[i]);
    }
    });
  });

// Unide Year section
dd_Ind.on("change", function() {
  document.getElementById("hYear").style.display = "block";
  document.getElementById("selYear").style.display = "block";
  var dd_cat_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_cat_elm.options[dd_cat_elm.selectedIndex].text;
  var dd_ind_elm = document.getElementById("selInd");
  var ind_text = dd_ind_elm.options[dd_ind_elm.selectedIndex].text;
  if(ind_text == 'All') {
    ind_text = '%%';}
  dd_Year.html("")
  dd_Year.append("option").text("")
  dd_Year.append("option").text("All")
  d3.json(`/sel_year/${ind_cat_text}/${ind_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Year.append("option").text(data[i]);
    }
    });
});

// Unide Sex section
dd_Year.on("change", function() {
  document.getElementById("hSex").style.display = "block";
  document.getElementById("selSex").style.display = "block";
  var dd_cat_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_cat_elm.options[dd_cat_elm.selectedIndex].text;
  var dd_ind_elm = document.getElementById("selInd");
  var ind_text = dd_ind_elm.options[dd_ind_elm.selectedIndex].text;
  var dd_year_elm = document.getElementById("selYear");
  var year_text = dd_year_elm.options[dd_year_elm.selectedIndex].text;
  if(ind_text == 'All') {
    ind_text = '%%';}
  if(year_text == 'All') {
    year_text = '%%';}
  dd_Sex.html("")
  dd_Sex.append("option").text("")
  dd_Sex.append("option").text("All")
  d3.json(`/sel_sex/${ind_cat_text}/${ind_text}/${year_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Sex.append("option").text(data[i]);
    }
    });
});

// Unide Race/Eth section
dd_Sex.on("change", function() {
  document.getElementById("hRaceEth").style.display = "block";
  document.getElementById("selRaceEth").style.display = "block";
  var dd_cat_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_cat_elm.options[dd_cat_elm.selectedIndex].text;
  var dd_ind_elm = document.getElementById("selInd");
  var ind_text = dd_ind_elm.options[dd_ind_elm.selectedIndex].text;
  var dd_year_elm = document.getElementById("selYear");
  var year_text = dd_year_elm.options[dd_year_elm.selectedIndex].text;
  var dd_sex_elm = document.getElementById("selSex");
  var sex_text = dd_sex_elm.options[dd_sex_elm.selectedIndex].text;
  if(ind_text == 'All') {
    ind_text = '%%';}
  if(year_text == 'All') {
    year_text = '%%';}
  if(sex_text == 'All') {
    sex_text = '%%';}
  dd_Race.html("")
  dd_Race.append("option").text("")
  dd_Race.append("option").text("All")
  d3.json(`/sel_race/${ind_cat_text}/${ind_text}/${year_text}/${sex_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Race.append("option").text(data[i]);
    }
    });
});

// Unide Location section
dd_Race.on("change", function() {
  document.getElementById("hLoc").style.display = "block";
  document.getElementById("selLoc").style.display = "block";
  var dd_cat_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_cat_elm.options[dd_cat_elm.selectedIndex].text;
  var dd_ind_elm = document.getElementById("selInd");
  var ind_text = dd_ind_elm.options[dd_ind_elm.selectedIndex].text;
  var dd_year_elm = document.getElementById("selYear");
  var year_text = dd_year_elm.options[dd_year_elm.selectedIndex].text;
  var dd_sex_elm = document.getElementById("selSex");
  var sex_text = dd_sex_elm.options[dd_sex_elm.selectedIndex].text;
  var dd_race_elm = document.getElementById("selRaceEth");
  var race_text = dd_race_elm.options[dd_race_elm.selectedIndex].text;
  if(ind_text == 'All') {
    ind_text = '%%';}
  if(year_text == 'All') {
    year_text = '%%';}
  if(sex_text == 'All') {
    sex_text = '%%';}
  if(race_text == 'All') {
    race_text = '%%';}
  dd_Loc.html("")
  dd_Loc.append("option").text("")
  dd_Loc.append("option").text("All")
  d3.json(`/sel_loc/${ind_cat_text}/${ind_text}/${year_text}/${sex_text}/${race_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Loc.append("option").text(data[i]);
    }
    });
});

// Unide Chart Type section
btn_Submit.on("click", function() {
  document.getElementById("hChartType").style.display = "block";
  document.getElementById("selChartType").style.display = "block";
});

// Clear all dropdowns
btn_Clear.on("click", function() {
  dd_Ind.html("");
  dd_Year.html("");
  dd_Sex.html("");
  dd_Race.html("");
  dd_Loc.html("");
  dd_Chart.html("");
  document.getElementById("hInd").style.display = "none";
  document.getElementById("selInd").style.display = "none";  
  document.getElementById("hYear").style.display = "none";
  document.getElementById("selYear").style.display = "none";  
  document.getElementById("hSex").style.display = "none";
  document.getElementById("selSex").style.display = "none";  
  document.getElementById("hRaceEth").style.display = "none";
  document.getElementById("selRaceEth").style.display = "none";
  document.getElementById("hLoc").style.display = "none";
  document.getElementById("selLoc").style.display = "none";
  document.getElementById("hChartType").style.display = "none";
  document.getElementById("selChartType").style.display = "none";
});

function buildMetadata() {
    // Use `d3.json` to fetch the data
  d3.json("/sel_ind").then(function(data) {
    console.log(data);
    console.log("test")
  });
};