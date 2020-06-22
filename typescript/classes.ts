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
    constructor(
      public name: string,
      public team: string,
      public realName?: string,
      public canFight: boolean = true,
      public winFights: number = 0
    ) {}
  }

  let antman: Avenger = new Avenger("Antman", "Captain");

  console.log(antman);
})();
