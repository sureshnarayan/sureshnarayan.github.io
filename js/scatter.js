Plotly.d3.csv("https://raw.githubusercontent.com/SyedYousuff145/bike_sensor/master/plots/plane_vectors/Bullet_plane_vectors_avg", function(err, rows){

  function unpack1(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
Plotly.d3.csv("https://raw.githubusercontent.com/SyedYousuff145/bike_sensor/master/plots/plane_vectors/Dominor_plane_vectors_avg", function(err, rows){

  function unpack2(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
Plotly.d3.csv("https://raw.githubusercontent.com/SyedYousuff145/bike_sensor/master/plots/plane_vectors/Pep_plane_vectors_avg", function(err, rows){

  function unpack3(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  x: unpack1(rows, 'Ax'),
  y: unpack1(rows, 'Ay'),
  z: unpack1(rows, 'Az'), 
  mode: 'markers',
  type: 'scatter',
  name: 'Bullet Avg',
  marker: { size: 1 }
};
  
var trace2 = {
  x: unpack2(rows, 'Ax'),
  y: unpack2(rows, 'Ay'),
  z: unpack2(rows, 'Az'), 
  mode: 'markers',
  type: 'scatter',
  name: 'Dominar Avg',
  marker: { size: 1 }
};
  
var trace3 = {
  x: unpack3(rows, 'Ax'),
  y: unpack3(rows, 'Ay'),
  z: unpack3(rows, 'Az'), 
  mode: 'markers',
  type: 'scatter',
  name: 'Pep Avg',
  marker: { size: 1 }
};

var data = [trace1,trace2,trace3];
    
var layout: {
        "autosize": true, 
        "yaxis": {
            "title": "Ay"
        }, 
        "scene": {
            "aspectratio": {
                "y": 1, 
                "x": 1, 
                "z": 1
            }, 
            "camera": {
                "eye": {
                    "y": 0.9369593969783191, 
                    "x": 0.9369593969783193, 
                    "z": 0.9369593969783191
                }, 
                "up": {
                    "y": 0, 
                    "x": 0, 
                    "z": 1
                }, 
                "center": {
                    "y": 0, 
                    "x": 0, 
                    "z": 0
                }
            }
        }, 
        "breakpoints": [], 
        "xaxis": {
            "title": "Ax"
        }, 
        "hovermode": "closest"
    },

Plotly.newPlot('myDiv', data, layout);
})
