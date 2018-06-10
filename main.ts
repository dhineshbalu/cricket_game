import { Batsman } from './batsman';

import { Scorer } from './scorer';
import { datatype } from './datatype';



let obj: Array<datatype> =  [{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'Run Out',
    "dismissalInfo": {
        "fielderName": "Root",
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "Rahul",
    "bowlerName": "Anderson"
},
{
    "runScored": 0,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":5
    },
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
    "isOut": false,
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 0,
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
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Ashwin "
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Ashwin "
}
,
{
    "runScored": 2,
    "isOut": false,
    "dismissalType": 'catch',
    "batsmanName": "sachin",
    "bowlerName": "Ashwin "
}
,
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
        "hasBatsmanCrossed": true,
    },
    "batsmanName": "karthik",
    "bowlerName": "Ali    "
},
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "karthik",
    "bowlerName": "Ali    "
}
,
{
    "runScored": 4,
    "isOut": false,
    
    "batsmanName": "Rohit",
    "bowlerName": "Ali    "
    
}
,
{
    "runScored": 1,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "Rohit",
    "bowlerName": "Ali    "
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "karthik",
    "bowlerName": "Ali    "
}
,
{
    "runScored": 0,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":5
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
const scorer = new Scorer();
scorer.calculateScore(obj);
