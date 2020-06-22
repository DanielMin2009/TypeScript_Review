"use strict";
(() => {
    // class Avenger {
    //     name: string;
    //     team: string;
    //     realName?: string;
    //     canFight: boolean;
    //     winFights: number;
    //     constructor( name: string, team: string) {
    //         this.name = name;
    //         this.team = team;
    //     }
    // }
    // let antman: Avenger = new Avenger('Antman', 'Captain');
    // console.log(antman);
    class Avenger {
        constructor(name, team, realName, canFight = true, winFights = 0) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.winFights = winFights;
        }
    }
    let antman = new Avenger("Antman", "Captain");
    console.log(antman);
})();
