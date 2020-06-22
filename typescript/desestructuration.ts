(() => {
  const avenger = {
    name: "Steve",
    key: "Captain America",
    power: "Drugs",
  };

  const extract = ({ name, key, power }: any) => {
    // const { name, key, power } = avenger;
    console.log(avenger.name);
    console.log(avenger.key);
    console.log(avenger.power);
  };

  extract(avenger);

  const avengers: string[] = ["Batman", "Ironman", "Spiderman"];

  const [Spider, Batman, Ironman] = avengers;

  // const [, , Ironman] = avengers;

  // console.log(avengers[0]);
  // console.log(avengers[1]);
  // console.log(avengers[2]);
  console.log(Spider);
  console.log(Batman);
  console.log(Ironman);

  const extractArr = ([batman, ironman, spiderman]: string[]) => {
    console.log(batman);
    console.log(ironman);
    console.log(spiderman);
  };

  extractArr(avengers);
})();
