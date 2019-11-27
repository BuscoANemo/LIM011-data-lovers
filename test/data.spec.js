import {
  filtraTipo, filtraDebilidad, ordenaAlfaAscendente, ordenaAlfaDescendente,
  ordenaNumAscendente, ordenaNumDescendente,
} from '../src/data.js';

describe('Filtrando por tipos', () => {
  it('Debería ser una función', () => {
    expect(typeof filtraTipo).toBe('function');
  });

  it('Debería retornar un nuevo array de acuerdo al tipo seleccionado', () => {
    const inputTipo = [{
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    }, {
      name: 'Charmander',
      type: ['Fire'],
    }, {
      name: 'Butterfree',
      type: ['Bug', 'Flying'],
    }, {
      name: 'Ivysaur',
      type: ['Grass', 'Poison'],
    }];
    const outputTipo = [{
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    }, {
      name: 'Ivysaur',
      type: ['Grass', 'Poison'],
    }];

    expect(filtraTipo(inputTipo, 'Grass')).toEqual(outputTipo);
  });
});

describe('Filtrando por debilidad', () => {
  it('Debería ser una función', () => {
    expect(typeof filtraDebilidad).toBe('function');
  });

  it('Debería retornar un nuevo array de acuerdo a la debilidad seleccionada', () => {
    const inputDebilidad = [{
      name: 'Bulbasaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Venusaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Fearow',
      weaknesses: ['Electric', 'Rock'],
    }];
    const outputDebilidad = [{
      name: 'Bulbasaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Venusaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }];

    expect(filtraDebilidad(inputDebilidad, 'Fire')).toEqual(outputDebilidad);
  });
});

describe('Ordenando la data alfabéticamente y de forma ascendente', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenaAlfaAscendente).toBe('function');
  });

  it('Debería retornar un array ordenado alfabéticamente y de forma ascendente', () => {
    const inputArray = [{ name: 'Venusaur' }, { name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Blastoise' }];
    const outputArray = [{ name: 'Blastoise' }, { name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }];
    expect(ordenaAlfaAscendente(inputArray)).toEqual(outputArray);
  });
});

describe('Ordenando la data alfabéticamente y de forma descendente', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenaAlfaDescendente).toBe('function');
  });

  it('Debería retornar un array ordenado alfabéticamente y de forma descendente', () => {
    const inputArray = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Blastoise' }, { name: 'Venusaur' }];
    const outputArray = [{ name: 'Venusaur' }, { name: 'Ivysaur' }, { name: 'Bulbasaur' }, { name: 'Blastoise' }];

    expect(ordenaAlfaDescendente(inputArray)).toEqual(outputArray);
  });
});

describe('Ordenando la data númericamente y de forma ascendente', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenaNumAscendente).toBe('function');
  });

  it('Debería retornar un array ordenado númericamente y de forma ascendente', () => {
    const inputArray = [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '001',
      name: 'Bulbasaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }, {
      num: '001',
      name: 'Bulbasaur',
    }];
    const outputArray = [{
      num: '001',
      name: 'Bulbasaur',
    }, {
      num: '001',
      name: 'Bulbasaur',
    }, {
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }];

    expect(ordenaNumAscendente(inputArray)).toEqual(outputArray);
  });
});

describe('Ordenando la data númericamente y de forma descendente', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenaNumDescendente).toBe('function');
  });

  it('Debería retornar un array ordenado númericamente y de forma descendente', () => {
    const inputArray = [{
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '003',
      name: 'Venusaur',
    }, {
      num: '001',
      name: 'Bulbasaur',
    }];
    const outputArray = [{
      num: '003',
      name: 'Venusaur',
    }, {
      num: '002',
      name: 'Ivysaur',
    }, {
      num: '001',
      name: 'Bulbasaur',
    }];

    expect(ordenaNumDescendente(inputArray)).toEqual(outputArray);
  });
});
