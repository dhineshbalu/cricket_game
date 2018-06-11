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
    "runScored": 5,
    "isOut": false,
    "isExtra":true,
    "extraInfo":
    {
    "runsOffered":2
    },
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 3,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 2,
    "isOut": false,
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 1,
    "isOut": false,
    "batsmanName": "Rohit",
    "bowlerName": "Anderson"
}
,
{
    "runScored": 2,
    "isOut": true,
    "dismissalType": 'Run Out',
    "batsmanName": "koli",
    "bowlerName": "Anderson"
}
,
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
    "runsOffered":1
    },
    "batsmanName": "Dhoni",
    "bowlerName": "Ali    "
},



];

const scorer = new Scorer();
scorer.calculateScore(obj);
