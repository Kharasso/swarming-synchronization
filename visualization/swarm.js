d3.json("time_series2_two_sided.json", function(error, rows){
  if(error) throw error;

  var width = 700;
  var height = 800;
  var scale = 180.0;
  var index = 0;
  var offsetX = 200;
  var offsetY = 175;
  var data = rows[index];
  var dataLength = rows.length;

  console.log(dataLength);

  var colorScale = d3.scaleSequential(d3.interpolateRainbow)
                     .domain([0,2 * Math.PI]);

  var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)

  var circle = svg.selectAll("circle")
                  .data(data)
                  .enter().append("circle")
                  .attr("cx", function(d){ return d[0] * scale + scale + offsetX; })
                  .attr("cy", function(d){ return d[1] * scale + scale + offsetY; })
                  .attr("fill", function(d) {return colorScale(d[2]%(2*Math.PI));})
                  .attr("r", 1.5);

  d3.interval(function(){
    var sub;
    index += 1;
    if (index === dataLength){
      index = 0;
    }
    // data = rows[sub];
    circle.data(rows[index]);

    circle.attr("cx", function(d){ return d[0] * scale + scale + offsetX; })
          .attr("cy", function(d){ return d[1] * scale + scale + offsetY; })
          .attr("fill", function(d) {return colorScale(d[2]%(2*Math.PI));})

  }, 28);

});

d3.json("time_series_two_sided.json", function(error, rows){
  if(error) throw error;

  var width = 700;
  var height = 800;
  var scale = 180.0;
  var index = 0;
  var offsetX = 200;
  var offsetY = 175;
  var data = rows[index];
  var dataLength = rows.length;

  console.log(dataLength);

  var colorScale = d3.scaleSequential(d3.interpolateRainbow)
                     .domain([0,2 * Math.PI]);

  var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)

  var circle = svg.selectAll("circle")
                  .data(data)
                  .enter().append("circle")
                  .attr("cx", function(d){ return d[0] * scale + scale + offsetX; })
                  .attr("cy", function(d){ return d[1] * scale + scale + offsetY; })
                  .attr("fill", function(d) {return colorScale(d[2]%(2*Math.PI));})
                  .attr("r", 1.5);

  d3.interval(function(){
    var sub;
    index += 1;
    if (index === dataLength){
      index = 0;
    }
    // data = rows[sub];
    circle.data(rows[index]);

    circle.attr("cx", function(d){ return d[0] * scale + scale + offsetX; })
          .attr("cy", function(d){ return d[1] * scale + scale + offsetY; })
          .attr("fill", function(d) {return colorScale(d[2]%(2*Math.PI));})

  }, 28);

});
