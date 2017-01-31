//execute function when window is loaded
function initialize(){

    cities();
};




function cities(){
    var citiesObj = {
        'Madison' : 233209,
        'Milwaukee' : 594833,
        'Green Bay' : 104057,
        'Superior' : 27244
    };

    $('#mydiv').append('<table><tr id = "headerRow">');
    $('#headerRow').append('<th>City</th>');
    $('#headerRow').append('<th>Population</th>');
  
    // //array to define city names
    // var cities = [
    //     'Madison',
    //     'Milwaukee',
    //     'Green Bay',
    //     'Superior'
    // ];
    // console.log(cities);
    // //array to define populations
    // var population = [
    //     233209,
    //     594833,
    //     104057,
    //     27244
    // ];
    //create html table element
    // var table = document.createElement("table");
    // //create html row element
    // var headerRow = document.createElement("tr");
    // //create html header cell element
    // var cityHeader = document.createElement("th");
    // cityHeader.innerHTML = "City";
    // headerRow.appendChild(cityHeader);
    // //create header cell for population string
    // var popHeader = document.createElement("th");
    // popHeader.innerHTML = "Population";
    // headerRow.appendChild(popHeader);

    // table.appendChild(headerRow);

    for (var cityKey in citiesObj){
        var htmlString = '<tr><td>' + cityKey + '</td><td>' +citiesObj[cityKey] +'</td></tr>';
        $('#mydiv').append(htmlString);

    //     //creates table row 
    //     var tr = document.createElement("tr");
    //     //create table cell
    //     var city = document.createElement("td");
    //     city.innerHTML = cityKey;
    //     tr.appendChild(city);

    //     var pop = document.createElement("td");
    //     pop.innerHTML = citiesObj[city];
    //     tr.appendChild(pop);

    //     table.appendChild(tr);
    };
    //looking for ID attribut "mydiv" in html file
    // var mydiv = document.getElementById("mydiv");
    // mydiv.appendChild(table);

};

window.onload = initialize();