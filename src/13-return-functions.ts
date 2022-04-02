(() => {
  // function returns a string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    // convertir el total a string
    return total.toString();
  };

  // function not returning anything (void)
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 1, 1, 1]);
})();
