"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var player_1 = require("./player");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(name) {
        var _this = _super.call(this, name) || this;
        _this.numberOfRunsGiven = 0;
        _this.numberOfWickets = 0;
        _this.numberOfMaiden = 0;
        _this.numberOfOvers = 0;
        return _this;
    }
    Bowler.prototype.getnumber_OfRuns = function () {
        return this.numberOfRunsGiven;
    };
    Bowler.prototype.getnumber_OfWickets = function () {
        return this.numberOfWickets;
    };
    Bowler.prototype.getnumber_OfOvers = function () {
        return this.numberOfOvers;
    };
    Bowler.prototype.getnumber_OfMaiden = function () {
        return this.numberOfMaiden;
    };
    Bowler.prototype.addRuns = function (run) {
        this.numberOfRunsGiven += run;
    };
    Bowler.prototype.addWickets = function () {
        this.numberOfWickets++;
    };
    Bowler.prototype.addMaiden = function () {
        this.numberOfMaiden++;
    };
    Bowler.prototype.addOver = function () {
        this.numberOfOvers++;
    };
    return Bowler;
}(player_1.Player));
exports.Bowler = Bowler;
