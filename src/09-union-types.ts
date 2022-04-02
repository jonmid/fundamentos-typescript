(() => {
  // forma explicita
  let userId: string | number;
  userId = 1212;
  userId = 'asasa';

  function greeting(myText: string | number) {
    // verifica si es de tipo string
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Nicolas');
  greeting(12.1212121212);
})();
