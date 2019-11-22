/* Manejo de data */

export const filtraTipo = (data, value) => {
  const array = [];

  data.forEach((objeto) => {
    objeto.type.forEach((tipo) => {
      if (tipo === value) {
        array.push(objeto);
      }
    });
  });

  return array;
};

export const filtraDebilidad = (data, value) => {
  const array = [];

  data.forEach((objeto) => {
    objeto.weaknesses.forEach((weaknesses) => {
      if (weaknesses === value) {
        array.push(objeto);
      }
    });
  });

  return array;
};

export const ordenaAlfaAscendente = (data) => {
  const array = data.sort((objeto1, objeto2) => {
    if (objeto1.name > objeto2.name) {
      return 1;
    }
    if (objeto1.name < objeto2.name) {
      return -1;
    }
    return 0;
  });

  return array;
};

export const ordenaAlfaDescendente = (data) => {
  const array = data.sort((objeto1, objeto2) => {
    if (objeto1.name > objeto2.name) {
      return -1;
    }
    if (objeto1.name < objeto2.name) {
      return 1;
    }
    return 0;
  });

  return array;
};

export const ordenaNumAscendente = (data) => {
  const array = data.sort((objeto1, objeto2) => {
    if (objeto1.num > objeto2.num) {
      return 1;
    }
    if (objeto1.num < objeto2.num) {
      return -1;
    }
    return 0;
  });

  return array;
};

export const ordenaNumDescendente = (data) => {
  const array = data.sort((objeto1, objeto2) => {
    if (objeto1.num > objeto2.num) {
      return -1;
    }
    if (objeto1.num < objeto2.num) {
      return 1;
    }
    return 0;
  });

  return array;
};
