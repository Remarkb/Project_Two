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
var dd_PieComp = d3.select("#selPieComp");

// Unhide indicator section
dd_IndCat.on("change", function() {
  document.getElementById("hInd").style.display = "block";
  document.getElementById("selInd").style.display = "block";
  document.getElementById("selInd").style.width = "300px";
  var dd_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_elm.options[dd_elm.selectedIndex].text;
  dd_Ind.html("");
  dd_Ind.append("option").text("");
  dd_Ind.append("option").text("All");
  d3.json(`/sel_ind/${ind_cat_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Ind.append("option").text(data[i]);
    }
    });
  });

// Unhide Year section
dd_Ind.on("change", function() {
  document.getElementById("hYear").style.display = "block";
  document.getElementById("selYear").style.display = "block";
  document.getElementById("selYear").style.width = "300px";
  var dd_cat_elm = document.getElementById("selIndCat");
  var ind_cat_text = dd_cat_elm.options[dd_cat_elm.selectedIndex].text;
  var dd_ind_elm = document.getElementById("selInd");
  var ind_text = dd_ind_elm.options[dd_ind_elm.selectedIndex].text;
  if(ind_text == 'All') {
    ind_text = '%%';}
  dd_Year.html("");
  dd_Year.append("option").text("");
  dd_Year.append("option").text("All");
  d3.json(`/sel_year/${ind_cat_text}/${ind_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Year.append("option").text(data[i]);
    }
    });
});

// Unhide Sex section
dd_Year.on("change", function() {
  document.getElementById("hSex").style.display = "block";
  document.getElementById("selSex").style.display = "block";
  document.getElementById("selSex").style.width = "300px";
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
  dd_Sex.html("");
  dd_Sex.append("option").text("");
  dd_Sex.append("option").text("All");
  d3.json(`/sel_sex/${ind_cat_text}/${ind_text}/${year_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Sex.append("option").text(data[i]);
    }
    });
});

// Unhide Race/Eth section
dd_Sex.on("change", function() {
  document.getElementById("hRaceEth").style.display = "block";
  document.getElementById("selRaceEth").style.display = "block";
  document.getElementById("selRaceEth").style.width = "300px";
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
  dd_Race.html("");
  dd_Race.append("option").text("");
  d3.json(`/sel_race/${ind_cat_text}/${ind_text}/${year_text}/${sex_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Race.append("option").text(data[i]);
    }
    });
});

// Unhide Location section
dd_Race.on("change", function() {
  document.getElementById("hLoc").style.display = "block";
  document.getElementById("selLoc").style.display = "block";
  document.getElementById("selLoc").style.width = "300px";
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
  dd_Loc.html("");
  dd_Loc.append("option").text("");
  dd_Loc.append("option").text("All");
  d3.json(`/sel_loc/${ind_cat_text}/${ind_text}/${year_text}/${sex_text}/${race_text}`).then((data) => {
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
      dd_Loc.append("option").text(data[i]);
    }
    });
});

// Unhide Chart Type section
btn_Submit.on("click", function() {
  document.getElementById("hChartType").style.display = "block";
  document.getElementById("selChartType").style.display = "block";
  document.getElementById("selChartType").style.width = "300px";
});

// Clear all dropdowns
btn_Clear.on("click", function() {
  dd_Ind.html("");
  dd_Year.html("");
  dd_Sex.html("");
  dd_Race.html("");
  dd_Loc.html("");
  dd_PieComp.html("");
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
  document.getElementById("hPieComp").style.display = "none";
  document.getElementById("selChartType").style.display = "none";
  document.getElementById("selPieComp").style.display = "none";
});

// Unhide Pie Chart DropDown
dd_Chart.on("change", function() {
  var dd_chart_elm = document.getElementById("selChartType");
  var ind_chart_text = dd_chart_elm.options[dd_chart_elm.selectedIndex].text;  

  if(ind_chart_text == 'Pie'){
    document.getElementById("hPieComp").style.display = "block";
    document.getElementById("selPieComp").style.display = "block";
    document.getElementById("selPieComp").style.width = "300px";
    dd_PieComp.append("option").text("");
    dd_PieComp.append("option").text("Indicator");
    dd_PieComp.append("option").text("Year");
    dd_PieComp.append("option").text("Sex");
    dd_PieComp.append("option").text("Race/Ethnicity");
    dd_PieComp.append("option").text("Location");
  } else if (ind_chart_text == 'Bar') {
    document.getElementById("hPieComp").style.display = "block";
    document.getElementById("selPieComp").style.display = "block";
    dd_PieComp.append("option").text("");
    dd_PieComp.append("option").text("Indicator");
    dd_PieComp.append("option").text("Year");
    dd_PieComp.append("option").text("Sex");
    dd_PieComp.append("option").text("Race/Ethnicity");
    dd_PieComp.append("option").text("Location");
  }else if (ind_chart_text == 'Line') {
    document.getElementById("hPieComp").style.display = "block";
    document.getElementById("selPieComp").style.display = "block";
    dd_PieComp.append("option").text("");
    dd_PieComp.append("option").text("Indicator");
    dd_PieComp.append("option").text("Year");
    dd_PieComp.append("option").text("Sex");
    dd_PieComp.append("option").text("Race/Ethnicity");
    dd_PieComp.append("option").text("Location");
  }else if (ind_chart_text == 'Scatter') {
  }
});

// Pull data once selections are finalized
dd_PieComp.on("change", function() {
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
  var dd_loc_elm = document.getElementById("selLoc");
  var loc_text = dd_loc_elm.options[dd_loc_elm.selectedIndex].text;
  var dd_chart_elm = document.getElementById("selChartType");
  var ind_chart_text = dd_chart_elm.options[dd_chart_elm.selectedIndex].text;  
  var dd_data_elm = document.getElementById("selPieComp");
  var data_text = dd_data_elm.options[dd_data_elm.selectedIndex].text;  

  if(ind_text == 'All') {
    ind_text = '%%';}
  if(year_text == 'All') {
    year_text = '%%';}
  if(sex_text == 'All') {
    sex_text = '%%';}
  if(race_text == 'All') {
    race_text = '%%';}  
  if(loc_text == 'All') {
    loc_text = '%%';}
  d3.json(`/sel_pie/${ind_cat_text}/${ind_text}/${year_text}/${sex_text}/${race_text}/${loc_text}/${data_text}`).then((data) => {
    var un_zip = _.unzip(data);
    var y = un_zip[0];
    var string_num = un_zip[1];
    console.log(string_num)
    var x = string_num.map(v => +v );
    if(data_text == 'Pie') {
      create_pie_chart(x,y);
    } else if (data_text == 'Bar') {
      create_bar_chart(x,y);
    } else if (data_text == 'Line') {
      create_line_chart(x,y);
    } else {
      create_scatter_chart(x,y);
    }
    });
});

function create_pie_chart(x,y) {
     var trace1 = {
       labels: y,
       values: x,
       type: 'pie',
     };
     
     var data_pnt = [trace1];
     
     var layout = {
       size: "auto",
       showlegend: true
     };
     
     Plotly.newPlot("pie", data_pnt, layout);
  }

  function create_bar_chart(x,y) {
    var trace1 = {
      labels: y,
      values: x,
      type: 'pie',
    };
    
    var data_pnt = [trace1];
    
    var layout = {
      size: "auto",
      showlegend: true
    };
    
    Plotly.newPlot("pie", data_pnt, layout);
 }

 function create_line_chart(x,y) {
  var trace1 = {
    labels: y,
    values: x,
    type: 'pie',
  };
  
  var data_pnt = [trace1];
  
  var layout = {
    size: "auto",
    showlegend: true
  };
  
  Plotly.newPlot("pie", data_pnt, layout);
}

function create_scatter_chart(x,y) {
  var trace1 = {
    labels: y,
    values: x,
    type: 'pie',
  };
  
  var data_pnt = [trace1];
  
  var layout = {
    size: "auto",
    showlegend: true
  };
  
  Plotly.newPlot("pie", data_pnt, layout);
}
