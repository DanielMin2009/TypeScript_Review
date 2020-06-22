(() => {
  console.log("Begining");

  // const prom1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Se terminó el timeout');
  //   }, 4000);
  // });

  // prom1.then(message => console.log(message))

  // console.log("End");

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Se terminó el timeout");
    }, 4000);
  });

  prom1
    .then((message) => console.log(message))
    .catch((err) => console.warn(err));

  console.log("End");
})();
