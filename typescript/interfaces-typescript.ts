(() => {

  interface Xmen {
      name: string;
      age: number;
      power?: string;
  }

  const sendMission = (xmen: Xmen) => {
    console.log(`sending ${xmen.name} to the mission`);
  };

  const backHome = (xmen: Xmen) => {
    console.log(`sending back ${xmen.name} to home`);
  };

  const wolverine : Xmen = {
    name: "Logan",
    age: 60,
  };

  sendMission(wolverine);
  backHome(wolverine);

})();
