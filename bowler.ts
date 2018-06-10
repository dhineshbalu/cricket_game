import { Player } from './player';
export class Bowler extends Player {
    numberOfRunsGiven: number;
    numberOfWickets: number;
    numberOfMaiden: number;
    numberOfOvers: number;
    constructor(name: string) {
        super(name);
        this.numberOfRunsGiven = 0;
        this.numberOfWickets = 0;
        this.numberOfMaiden = 0;
        this.numberOfOvers =0;
    }
    getnumber_OfRuns() {
        return this.numberOfRunsGiven;
    }
    getnumber_OfWickets() {
        return this.numberOfWickets;
    }
    getnumber_OfOvers()
    {
        return this.numberOfOvers;
    }

    getnumber_OfMaiden()
    {
        return this.numberOfMaiden;
    }


    addRuns(run: number) {
        this.numberOfRunsGiven += run;
    }
    addWickets()
    {
        this.numberOfWickets++;
    }
    addMaiden()
    {
        this.numberOfMaiden++;
    }
    addOver()
    {
        this.numberOfOvers++;
    }

}