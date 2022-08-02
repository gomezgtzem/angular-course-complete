(function () {
  function getEdad() {
    return 100 + 100 + 300;
  }

  const nombre = "Emmanuel";
  const apellido = "Gomez";
  const edad = 29;

  // const salida = nombre + apellido + edad;
  // const salida = nombre + " " + apellido + " ( " + edad + " )";
  const salida = `
        ${nombre}
        ${apellido}
        ( ${getEdad()} )`;
  // Emmanuel Gomez (Edad: 29)

  console.log(salida);
})();
