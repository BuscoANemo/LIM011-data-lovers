import data from './data/pokemon/pokemon.js';

import {
  filtraTipo,
  filtraDebilidad,
  ordenaAlfaAscendente,
  ordenaAlfaDescendente,
  ordenaNumAscendente,
  ordenaNumDescendente,
} from './data.js';

const mostrarLista = (array) => {
  const listaPokemon = document.getElementById('pokemones');
  let infoPokemon = '';

  for (let i = 0; i < array.length; i += 1) {
    infoPokemon += `<div class = "cajaPersonaje">
                        <div class = "flip-conteiner">
                            <img class="estiloImg" id="myImg" src='${array[i].img}'> 
                            <div class="front">
                                <div class="back">
                                  <p>Tipo: ${array[i].type}</p>
                                  <p>Altura: ${array[i].height}</p>
                                  <p>Peso: ${array[i].weight}</p>
                                  <p>Caramelo: ${array[i].candy}</p>`;

    if (array[i].candy_count) {
      infoPokemon += `<p>Número de caramelos: ${array[i].candy_count}</p>`;
    } else {
      infoPokemon += '<p>Número de caramelos: None</p>';
    }

    infoPokemon += `<p>Debilidades: </br> ${array[i].weaknesses}</p>`;

    infoPokemon += '<p> Next-Evolución:</br>';

    if (array[i].next_evolution) {
      // eslint-disable-next-line no-loop-func
      array[i].next_evolution.forEach((evolucion) => {
        infoPokemon += `${evolucion.name},`;
      });
    } else {
      infoPokemon += 'None';
    }

    infoPokemon += '</p>';
    infoPokemon += '<p> Prev-Evolución:</br>';

    if (array[i].prev_evolution) {
      // eslint-disable-next-line no-loop-func
      array[i].prev_evolution.forEach((evolucion) => {
        infoPokemon += `${evolucion.name},`;
      });
    } else {
      infoPokemon += 'None';
    }

    infoPokemon += '</p>';
    infoPokemon += `</div>
                        </div>
                    </div>
                    <p class= "estiloName" id="myName">${array[i].name}</p>
                    <p class= "estiloNum" id="myNum">${array[i].num}</p> 
                </div>`;
  }

  listaPokemon.innerHTML = infoPokemon;
};

mostrarLista(data);

const mostrarTipo = () => {
  document.getElementById('tipo').addEventListener('change', () => {
    const idTipo = document.getElementById('tipo').value;
    let arrayTipo = [];
    switch (idTipo) {
      case 'grass':
        arrayTipo = filtraTipo(data, 'Grass');
        mostrarLista(arrayTipo);
        break;
      case 'poison':
        arrayTipo = filtraTipo(data, 'Poison');
        mostrarLista(arrayTipo);
        break;
      case 'fire':
        arrayTipo = filtraTipo(data, 'Fire');
        mostrarLista(arrayTipo);
        break;
      case 'flying':
        arrayTipo = filtraTipo(data, 'Flying');
        mostrarLista(arrayTipo);
        break;
      case 'water':
        arrayTipo = filtraTipo(data, 'Water');
        mostrarLista(arrayTipo);
        break;
      case 'bug':
        arrayTipo = filtraTipo(data, 'Bug');
        mostrarLista(arrayTipo);
        break;
      case 'normal':
        arrayTipo = filtraTipo(data, 'Normal');
        mostrarLista(arrayTipo);
        break;
      case 'electric':
        arrayTipo = filtraTipo(data, 'Electric');
        mostrarLista(arrayTipo);
        break;
      case 'ground':
        arrayTipo = filtraTipo(data, 'Ground');
        mostrarLista(arrayTipo);
        break;
      case 'fighting':
        arrayTipo = filtraTipo(data, 'Fighting');
        mostrarLista(arrayTipo);
        break;
      case 'psychic':
        arrayTipo = filtraTipo(data, 'Psychic');
        mostrarLista(arrayTipo);
        break;
      case 'rock':
        arrayTipo = filtraTipo(data, 'Rock');
        mostrarLista(arrayTipo);
        break;
      case 'ice':
        arrayTipo = filtraTipo(data, 'Ice');
        mostrarLista(arrayTipo);
        break;
      case 'ghost':
        arrayTipo = filtraTipo(data, 'Ghost');
        mostrarLista(arrayTipo);
        break;
      case 'dragon':
        arrayTipo = filtraTipo(data, 'Dragon');
        mostrarLista(arrayTipo);
        break;
      default:
        break;
    }
  });
};

mostrarTipo();

const mostrarDebilidad = () => {
  document.getElementById('debilidad').addEventListener('change', () => {
    const idDebilidad = document.getElementById('debilidad').value;
    let arrayDebilidad = [];
    switch (idDebilidad) {
      case 'fairy':
        arrayDebilidad = filtraDebilidad(data, 'Fairy');
        mostrarLista(arrayDebilidad);
        break;
      case 'dark':
        arrayDebilidad = filtraDebilidad(data, 'Dark');
        mostrarLista(arrayDebilidad);
        break;
      case 'steel':
        arrayDebilidad = filtraDebilidad(data, 'Steel');
        mostrarLista(arrayDebilidad);
        break;
      case 'grass':
        arrayDebilidad = filtraDebilidad(data, 'Grass');
        mostrarLista(arrayDebilidad);
        break;
      case 'poison':
        arrayDebilidad = filtraDebilidad(data, 'Poison');
        mostrarLista(arrayDebilidad);
        break;
      case 'fire':
        arrayDebilidad = filtraDebilidad(data, 'Fire');
        mostrarLista(arrayDebilidad);
        break;
      case 'flying':
        arrayDebilidad = filtraDebilidad(data, 'Flying');
        mostrarLista(arrayDebilidad);
        break;
      case 'water':
        arrayDebilidad = filtraDebilidad(data, 'Water');
        mostrarLista(arrayDebilidad);
        break;
      case 'bug':
        arrayDebilidad = filtraDebilidad(data, 'Bug');
        mostrarLista(arrayDebilidad);
        break;
      case 'electric':
        arrayDebilidad = filtraDebilidad(data, 'Electric');
        mostrarLista(arrayDebilidad);
        break;
      case 'ground':
        arrayDebilidad = filtraDebilidad(data, 'Ground');
        mostrarLista(arrayDebilidad);
        break;
      case 'fighting':
        arrayDebilidad = filtraDebilidad(data, 'Fighting');
        mostrarLista(arrayDebilidad);
        break;
      case 'psychic':
        arrayDebilidad = filtraDebilidad(data, 'Psychic');
        mostrarLista(arrayDebilidad);
        break;
      case 'rock':
        arrayDebilidad = filtraDebilidad(data, 'Rock');
        mostrarLista(arrayDebilidad);
        break;
      case 'ice':
        arrayDebilidad = filtraDebilidad(data, 'Ice');
        mostrarLista(arrayDebilidad);
        break;
      case 'ghost':
        arrayDebilidad = filtraDebilidad(data, 'Ghost');
        mostrarLista(arrayDebilidad);
        break;
      case 'dragon':
        arrayDebilidad = filtraDebilidad(data, 'Dragon');
        mostrarLista(arrayDebilidad);
        break;
      default:
        break;
    }
  });
};

mostrarDebilidad();

const mostrarEnOrden = () => {
  document.getElementById('ordenar').addEventListener('change', () => {
    const idOrden = document.getElementById('ordenar').value;
    let arrayOrdenado = [];
    switch (idOrden) {
      case 'alfaAscendente':
        arrayOrdenado = ordenaAlfaAscendente(data);
        mostrarLista(arrayOrdenado);
        break;
      case 'alfaDescendente':
        arrayOrdenado = ordenaAlfaDescendente(data);
        mostrarLista(arrayOrdenado);
        break;
      case 'numAscendente':
        arrayOrdenado = ordenaNumAscendente(data);
        mostrarLista(arrayOrdenado);
        break;
      case 'numDescendente':
        arrayOrdenado = ordenaNumDescendente(data);
        mostrarLista(arrayOrdenado);
        break;
      default:
        break;
    }
  });
};

mostrarEnOrden();
