var express = require('express');
var app = express();


app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


var tableRecords = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

var detailsRecords = {
    1: {
        id: 1,
        name: "Игорь Клечковский",
        prof: "Web Designer / UI",
        hobbies: ["Read", "out with friends", "listen to music"],
        skills: ["html5", "css3", "react", 'java8']
    },
    2: {
        id: 2,
        name: "John Doe",
        prof: "Nice guy",
        hobbies: ["Likes drinking wine"],
        skills: ["html", "javascript", "redux"]
    },
    3: {
        id: 3,
        name: "Mary Moe",
        prof: "Cute girl",
        hobbies: ["Likes playing xbox whole days long"],
        skills: ["Fortran", "Lua", "R#"]
    }
};

var id = 3;

function generateData() {
    id++;
    recordsSource.push({firstName: "Generated", lastName: "Randomly", active: false, id: id});
    detailsRecords.push({
        id: id,
        name: "GeneratedRandomly",
        about: "Generated About",
        hobby: "Generated Hobby",
        skills: ["G", "E", "N", "E", "R", "A", "T", "E", "D", id]
    });
}

app.get('/', function (req, res) {
    //generateData();
    res.json({
        tableRecords: tableRecords,
        detailsRecords: detailsRecords
    });
});

app.listen(process.env.PORT || 4730);