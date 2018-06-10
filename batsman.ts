import { Player } from './player';
export class Batsman extends Player {
    numberOfRunsScored: number;
   numberOfBallsFaced: number
    constructor(name: string) {
        super(name);
        this.numberOfRunsScored = 0;
        this.numberOfBallsFaced = 0;
    }
    numberOfRuns() {
        return this.numberOfRunsScored;
    }
     numberOfBallsBatted() {
        return this.numberOfBallsFaced;
    }
    addRuns(run: number) {
        this.numberOfRunsScored += run;
    }
    addBalls()
    {
        this.numberOfBallsFaced++;
    }
    getRuns()
    {
        return this.numberOfRunsScored;
    }
    getBalls()
    {
        return this.numberOfBallsFaced;
    }
}