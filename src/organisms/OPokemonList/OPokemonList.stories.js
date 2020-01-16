import React from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import OPokemonList from './OPokemonList'

export default {
  component: OPokemonList,
  title: 'Organisms/OPokemonList',
  decorators: [withKnobs],
}

export const Normal = () => {
  const handleClick = () => action('Action click!!')
  const data = [
    {
      id: 1,
      name: 'bulbasaur',
      types: [
        {slot: 2, type: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'}},
        {slot: 1, type: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}},
      ],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
        front_shiny_female: null,
      },
      stats: [
        {base_stat: 45, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
        {
          base_stat: 65,
          effort: 0,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 45, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
    {
      id: 2,
      name: 'ivysaur',
      types: [
        {slot: 2, type: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'}},
        {slot: 1, type: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}},
      ],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
        front_shiny_female: null,
      },
      stats: [
        {base_stat: 60, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
        {
          base_stat: 80,
          effort: 1,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 63,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 62,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 60, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
    {
      id: 3,
      name: 'venusaur',
      types: [
        {slot: 2, type: {name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'}},
        {slot: 1, type: {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}},
      ],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
        back_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png',
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png',
        back_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/3.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        front_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/3.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png',
        front_shiny_female:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/3.png',
      },
      stats: [
        {base_stat: 80, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
        {
          base_stat: 100,
          effort: 1,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 100,
          effort: 2,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 83,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 82,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 80, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
    {
      id: 4,
      name: 'charmander',
      types: [{slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}}],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
        front_shiny_female: null,
      },
      stats: [
        {base_stat: 65, effort: 1, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
        {
          base_stat: 50,
          effort: 0,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 60,
          effort: 0,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 43,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 52,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 39, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
    {
      id: 5,
      name: 'charmeleon',
      types: [{slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}}],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png',
        front_shiny_female: null,
      },
      stats: [
        {base_stat: 80, effort: 1, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
        {
          base_stat: 65,
          effort: 0,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 80,
          effort: 1,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 58,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 64,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 58, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
    {
      id: 6,
      name: 'charizard',
      types: [
        {slot: 2, type: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}},
        {slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}},
      ],
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',
        front_shiny_female: null,
      },
      stats: [
        {
          base_stat: 100,
          effort: 0,
          stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'},
        },
        {
          base_stat: 85,
          effort: 0,
          stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
        },
        {
          base_stat: 109,
          effort: 3,
          stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
        },
        {
          base_stat: 78,
          effort: 0,
          stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'},
        },
        {
          base_stat: 84,
          effort: 0,
          stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'},
        },
        {base_stat: 78, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
      ],
    },
  ]

  return <OPokemonList data={data} clickedType={handleClick()} />
}
