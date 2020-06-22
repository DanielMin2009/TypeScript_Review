(function () {
  const myFunction = function (a: string) {
    return a;
  };

  // esto es lo mismo que lo de arriba
  function myFunction2(a: string) {
    return a;
  }

  const myFunctionF = (a: string) => a.toUpperCase();

  console.log(myFunction("Normal"));
  console.log(myFunctionF("Arrow"));

  const additionN = function (a: number, b: number) {
    return a + b;
  };

  const additionA = (a: number, b: number) => a + b;

  //   console.log(additionN(5, 5));
  //   console.log(additionA(10, 10));

  // Con función autoinvocada daría error de typescript porque la función modifica el this
  // const hulk = {
  //   name: "Hulk",
  //   smash() {
  //     setTimeout(function () {
  //       console.log(`${this.name} smash!!!`);
  //     }, 1000);
  //   },
  // };

  // Con función flecha NO daría error de typescript porque la función flecha NO modifica el this
  const hulk = {
    name: "Hulk",
    smash() {
      setTimeout( () => {
        // this para apuntar el objeto
        console.log(`${this.name} smash!!!`);
      }, 1000);
    },
  };

  hulk.smash();
})();
