// Forcings
// https://api.myjson.com/bins/lwh21

// Temp
// https://api.myjson.com/bins/1e04t5



// ************** Data Collection *****************







// *************** Graph Setup *****************

// select svg element
let svg = d3.select("svg");

const margin = 120;
const width = svg.attr("width") - margin;
const height = svg.attr("height") - margin;


let yScale = d3.scaleLinear()                                   //linear scale for y axis
    .range([height, 0]);

let xScale = d3.scaleBand()                                     //band scale for x axis
    .range([0, width])
    .padding(0.2);

let chart = svg.append('g')
    .attr('transform', "translate(" + 100 + "," + 100 + ")");




d3.json("https://api.myjson.com/bins/tr95d")
    .then(function(data){
        xScale.domain(data.map(function (d){ return d.year; }));            //map x and y values to data
        yScale.domain([d3.min(data, function(d) {return d.data_mean_global; }), 
            d3.max(data, function(d) {return d.data_mean_global; })]);
        
        chart.append('g')
            .call(d3.axisLeft(yScale));

        chart.append('g')
            .attr('transform', "translate(0," + height + ")")       // have to move x axis to bottom
            .call(d3.axisBottom(xScale));

        chart.selectAll(".bar")                                 //no .bar elements to begin with
        .data(data)
        .enter().append("rect")                               // enter creates new element for each
        .attr("class", "bar")                                 //  data point with no matching .bar
        .attr("x", function(d) {return xScale(d.year); })                         //x & y coordinates
        .attr("y", function(d) {return yScale(d.data_mean_global); })
        .attr("width", xScale.bandwidth())                                      //width of each bar
        .attr("height", function(d) { return (height - (yScale(d.data_mean_global))) });   //height of each bar

        
});



   

// function showData(jsonObj) {
//     for (let i = 0; i < jsonObj.length; i++) {
//         let newData = document.createElement('p');
//         newData.textContent = jsonObj[i].Year;
//         body.appendChild(newData);
//     }
    
// }




