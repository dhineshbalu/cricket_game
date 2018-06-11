"use strict";
exports.__esModule = true;
var scorer_1 = require("./scorer");
var obj = [{
        "runScored": 0,
        "isOut": true,
        "dismissalType": 'Run Out',
        "dismissalInfo": {
            "fielderName": "Root",
            "hasBatsmanCrossed": true
        },
        "batsmanName": "Rahul",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 5,
        "isOut": false,
        "isExtra": true,
        "extraInfo": {
            "runsOffered": 5
        },
        "batsmanName": "Rohit",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 3,
        "isOut": false,
        "batsmanName": "koli",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 2,
        "isOut": false,
        "batsmanName": "koli",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 1,
        "isOut": false,
        "batsmanName": "Rohit",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 6,
        "isOut": true,
        "dismissalType": 'Run Out',
        "batsmanName": "koli",
        "bowlerName": "Anderson"
    },
    {
        "runScored": 3,
        "isOut": true,
        "dismissalType": 'catch',
        "batsmanName": "sehwag",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 2,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "sachin",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 2,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "sachin",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 2,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "sachin",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 2,
        "isOut": false,
        "dismissalType": 'catch',
        "batsmanName": "sachin",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 0,
        "isOut": true,
        "dismissalType": 'catch',
        "batsmanName": "sachin",
        "bowlerName": "Ashwin "
    },
    {
        "runScored": 0,
        "isOut": false,
        "dismissalType": 'catch',
        "dismissalInfo": {
            "fielderName": "Root",
            "hasBatsmanCrossed": true
        },
        "batsmanName": "karthik",
        "bowlerName": "Ali    "
    },
    {
        "runScored": 1,
        "isOut": false,
        "batsmanName": "karthik",
        "bowlerName": "Ali    "
    },
    {
        "runScored": 4,
        "isOut": false,
        "batsmanName": "Rohit",
        "bowlerName": "Ali    "
    },
    {
        "runScored": 1,
        "isOut": true,
        "dismissalType": 'Run Out',
        "batsmanName": "Rohit",
        "bowlerName": "Ali    "
    },
    {
        "runScored": 1,
        "isOut": false,
        "batsmanName": "karthik",
        "bowlerName": "Ali    "
    },
    {
        "runScored": 0,
        "isOut": false,
        "isExtra": true,
        "extraInfo": {
            "runsOffered": 5
        },
        "batsmanName": "Dhoni",
        "bowlerName": "Ali    "
    },
];
/*
const scorer = new Scorer();
const batsman1 = new Batsman('K L Rahul');
const batsman2 = new Batsman('Rohit Sharma');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);


scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scorer.printScore();*/
//
//console.log(obj);
var scorer = new scorer_1.Scorer();
scorer.calculateScore(obj);
