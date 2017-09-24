Plotly.d3.csv("https://raw.githubusercontent.com/SyedYousuff145/bike_sensor/master/bike_data_logs/Sun_Sep_24_14%3A27%3A55_2017_M", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

  
var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'Ax',
  x: unpack(rows, 'Time'),
  y: unpack(rows, 'Ax'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Ay',
  x: unpack(rows, 'Time'),
  y: unpack(rows, 'Ay'),
  line: {color: '#7F7F7F'}
}

var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'Az',
  x: unpack(rows, 'Time'),
  y: unpack(rows, 'Az'),
  line: {color: '#107F7F'}
}

var data = [trace1,trace2,trace3];
    
var layout = {
  title: 'Basic Time Series', 
};

Plotly.newPlot('myDiv', data, layout);
})
