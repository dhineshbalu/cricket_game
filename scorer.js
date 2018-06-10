"use strict";
exports.__esModule = true;
var batsman_1 = require("./batsman");
var bowler_1 = require("./bowler");
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.listOfBatsman = [];
    }
    // changeStrike() {
    //     if (playerOnStrike === this.listOfBatsman[0]) {
    //         playerOnStrike = this.listOfBatsman[1];
    //     } else {
    //         playerOnStrike = this.listOfBatsman[0];
    //     }
    // }
    Scorer.prototype.changeStrike = function (currentPlayerOnStrike) {
        var newPlayerOnStrike;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        }
        else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    };
    Scorer.prototype.calculateScore = function (obj) {
        var bats = new Map();
        var bow = new Map();
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        /* let playerOnStrike = this.listOfBatsman[0];
         arr.forEach((runScored, ballNumber) => {
             if (runScored % 2 === 1) {
                 if (playerOnStrike) {
                     playerOnStrike.addRuns(runScored);
                     // Change strike
                     playerOnStrike = this.changeStrike(playerOnStrike);
                 }
             } else {
                 if (playerOnStrike) {
                     playerOnStrike.addRuns(runScored);
                 }
             }
             this.totalScore += runScored;
             if ((ballNumber + 1) % 6 === 0) {
                 if (playerOnStrike) {
                     playerOnStrike = this.changeStrike(playerOnStrike);
                 }
             }
         })*/
        var totalScore = 0;
        var batsman;
        var bowler;
        var totalWickets = 0;
        var count = 0;
        var overs = 0;
        var oneOver = 0;
        obj.forEach(function (ball) {
            count++;
            totalScore += ball.runScored;
            oneOver += ball.runScored;
            if (ball.isExtra) {
                if (ball.extraInfo) {
                    totalScore += ball.extraInfo.runsOffered;
                }
            }
            //batsman run calculating
            if (!bats.has(ball.batsmanName)) {
                batsman = new batsman_1.Batsman(ball.batsmanName);
                if (!bow.has(ball.bowlerName)) {
                    bowler = new bowler_1.Bowler(ball.bowlerName);
                    bow.set(ball.bowlerName, bowler);
                }
                else {
                    bowler = bow.get(ball.bowlerName);
                }
                bats.set(ball.batsmanName, batsman);
                bow.set(ball.bowlerName, bowler);
            }
            else {
                batsman = bats.get(ball.batsmanName);
                bowler = bow.get(ball.bowlerName);
            }
            //batsman calculation
            batsman.addBalls();
            if (ball.isOut == true) {
                if (ball.dismissalType == "Run Out") {
                    batsman.addRuns(ball.runScored);
                    totalWickets++;
                }
                else {
                    bowler.addWickets();
                    totalWickets++;
                }
                console.log(batsman.name + "       " + ball.dismissalType + "     " + batsman.numberOfRunsScored + "   (" + batsman.numberOfBallsFaced + ")");
                bats["delete"](ball.batsmanName);
            }
            else {
                batsman.addRuns(ball.runScored);
            }
            // bowler calculation
            if (ball.isOut == false)
                bowler.addRuns(ball.runScored);
            if (count % 6 == 0) {
                overs++;
                bowler.addOver();
                if (oneOver == 0) {
                    bowler.addMaiden();
                    oneOver = 0;
                }
                count = 0;
            }
            //   console.log(bowler);
        });
        // printing batsman table 
        var keys = Array.from(bats.keys());
        var values = Array.from(bats.values());
        for (var i = 0; i < keys.length; i++) {
            batsman = values[i];
            console.log(batsman.name + "*    Not Out     " + batsman.numberOfRunsScored + "    (" + batsman.numberOfBallsFaced + ")");
        }
        console.log("\n");
        console.log("Total Score " + totalScore + "  for " + totalWickets + " in " + overs + "  overs");
        console.log("\n");
        keys = Array.from(bow.keys());
        values = Array.from(bow.values());
        console.log("Name          R    W    O    M");
        for (var i = 0; i < keys.length; i++) {
            bowler = values[i];
            console.log(bowler.name + "      " + bowler.getnumber_OfRuns() + "    " + bowler.getnumber_OfWickets() + "    " + bowler.getnumber_OfOvers() + "     " + bowler.getnumber_OfMaiden());
        }
    };
    return Scorer;
}());
exports.Scorer = Scorer;
