(() => {
  // forma explicita
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  // casting to string
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  // casting to number
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
