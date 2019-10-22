// from data.js
console.log(data);
var table = d3.select("#ufo-table");

var tableBody = table.select("tbody");
var resetButton = d3.select("#reset-btn");


//=> this is creaing a function
//ecety item in fighters we are looping through, 
function createDefault(){
    data.forEach(sighting => {
        var row = tableBody.append("tr");

        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);
})
}
createDefault();

resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

var dateSearchField = d3.select("#datetime");
var stateSearchField = d3.select("#state");
var dateSearchButton = d3.select("#filter-btn");


//thi is if the button is clicked
dateSearchButton.on("click", () => {
//implements a value for date to search for on what is in the field. 
    var dateToSearchFor = dateSearchField.property("value");
    console.log(dateToSearchFor);
    //var stateToSearchFor = stateSearchField.property("value");
    //console.log(stateToSearchFor);
    
    tableBody.remove();
    tableBody = table.append("tbody");
    //dateToSearchFor = dateToSearchFor.replaceAll("\\s","");
    //this gets rid of annoying spaces after, not working. 


    // filtering the data so each date time is just equal to what we're putting in. 
    data.filter(f => f.datetime == dateToSearchFor)
        //.filter(f => f.state == stateToSearchFor)
        .forEach(sighting => {
            var row = tableBody.append("tr");

            row.append("td").text(sighting.datetime);
            row.append("td").text(sighting.city);
            row.append("td").text(sighting.state);
            row.append("td").text(sighting.country);
            row.append("td").text(sighting.shape);
            row.append("td").text(sighting.durationMinutes);
            row.append("td").text(sighting.comments);
        })
        });
