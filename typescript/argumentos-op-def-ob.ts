(function () {
    // el argumento por defecto tiene que ir último porque si no lo mando no hará falta esctibirlo
  function activate(who: string, moment?: string, object: string = "batlight") {
    if (moment) {
      console.log(`${who} had activate ${object} in the ${moment}.`);
    } else {
      console.log(`${who} had activate ${object}.`);
    }
  }

  activate("Gordon", "afternoon");
})();
