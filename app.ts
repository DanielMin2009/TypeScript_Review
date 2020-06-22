(() => {
  const addition = (a: number, b: number): number => a + b;

  const name = (): string => "Hello Daniel";

  const getSalary = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve('Daniel');
    });
  };
  getSalary().then((a) => console.log(a.toUpperCase()));
})();
