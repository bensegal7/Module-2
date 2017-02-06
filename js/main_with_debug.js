//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);
    addEvents();
    
};

function addColumns(cityPop){
    
    $("tr").each(function(i){

    	if (i == 0){
    		//appends 'City Size'
    		$(this).append('<th>City Size</th>');
    	} else {
    		//holds the size of the city for cityPop
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
    		//adds city size to the city size row
    		$(this).append('<td>' + citySize + '</td>');
    		
    		
    	};
    });
};

function addEvents(){
	//creates mouseover function on the table 

	$('table').mouseover(function(){
		
		
		//assigns the var color to rgb color
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			//assigns random color 
			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
		//assigns the color of this to var color 
		$(this).css('color', color);

	};



});
	function clickme(){
		//when table is clicked, alert pops up
		alert('Hey, you clicked me!');
		
	};
	//assigns alert when table is clicked
	$('table').on('click', clickme);

};

//function responds with map.geojson data appended under city
function debugCallback(response){
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(response));
};

//jquery function aquires map data and calls debugCallback 
function debugAjax(){

	$.ajax("data/map.geojson", {
		dataType: "json",

		success: function(response){
			
			debugCallback(response);
		}
	});

	
};






window.onload = initialize();
window.onload = debugAjax();
