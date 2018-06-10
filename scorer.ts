import { Batsman } from './batsman';
import { datatype } from './datatype';
import { Bowler } from './bowler';

export class Scorer {
 
    constructor() {
    }

    calculateScore(obj: Array<datatype>) {

      let  bats = new Map();
      let   bow = new Map();
      let   totalScore = 0;
      let batsman: any ;
      let bowler: any;
      let totalWickets = 0;
      let count=0;
      let overs = 0;
      let oneOver = 0;
        obj.forEach(function(ball: datatype)
   {
    count++;
    totalScore +=ball.runScored;
    oneOver += ball.runScored;
    if(ball.isExtra)
    {
        if(ball.extraInfo)
        {
           totalScore += ball.extraInfo.runsOffered;
        }
       
    }

    //batsman run calculating
    if(!bats.has(ball.batsmanName))
    {
        batsman = new Batsman(ball.batsmanName);

        if(!bow.has(ball.bowlerName))
        {
            bowler = new Bowler(ball.bowlerName);
            bow.set(ball.bowlerName,bowler);
        }
        else
        {
            bowler = bow.get(ball.bowlerName);
        } 
       bats.set(ball.batsmanName,batsman);
       bow.set(ball.bowlerName,bowler);
    }
    else
    {
     batsman = bats.get(ball.batsmanName);
     bowler = bow.get(ball.bowlerName);
    }

//batsman calculation
    batsman.addBalls();   
    if(ball.isOut==true)
   {
    if(ball.dismissalType == "Run Out")
    {
       batsman.addRuns(ball.runScored);
       totalWickets++;
    }
    else
    {
        bowler.addWickets();
        totalWickets++;
    }

    
    console.log(batsman.name + "       " + ball.dismissalType + "     " + batsman.numberOfRunsScored + "   (" + batsman.numberOfBallsFaced + ")");
    bats.delete(ball.batsmanName);   
   }
   else
   {
        batsman.addRuns(ball.runScored); 
   }


// bowler calculation
   if(ball.isOut == false)
     bowler.addRuns(ball.runScored);

     if(count%6==0)
     {
         overs++;
         bowler.addOver();
        if(oneOver==0)
        {
            bowler.addMaiden();
            oneOver = 0;
        }
         
         count=0;
     }
  //   console.log(bowler);
    
});
// printing batsman table 

  let keys = Array.from( bats.keys() );
  let values = Array.from( bats.values() );

  for(var i=0;i<keys.length;i++)
  {
      batsman = values[i];
    console.log(batsman.name + "*    Not Out     " + batsman.numberOfRunsScored + "    (" + batsman.numberOfBallsFaced + ")");
  }
  console.log("\n");
     console.log("Total Score " + totalScore +  "  for " + totalWickets + " in " + overs + "  overs");
  console.log("\n");

keys = Array.from( bow.keys() );
 values = Array.from( bow.values() );
console.log("Name          R    W    O    M");
for(var i=0;i<keys.length;i++)
{
    bowler = values[i];
  console.log(bowler.name + "      " +  bowler.getnumber_OfRuns() +  "    " +  bowler.getnumber_OfWickets() + "    " + bowler.getnumber_OfOvers() + "     " + bowler. getnumber_OfMaiden());
}
    }
}
