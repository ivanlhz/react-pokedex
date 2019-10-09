import React, {Component} from 'react';
import './PHome.css';
import { OPokemonList, OTypeList } from '../../organisms';
import { TMain } from '../../templates'
import {getPokemonList, getPokemon, getPokemonTypeInfo} from '../../services/pokeapi'

class PHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType:'',
      pokemonList: [],
      pokemonListFiltered: [],
      typeList: []
    }
  }

  footer = () => (<p>PokedexJS - Made with ReactJS- 2019</p>)

  getWeakness = (typeList) => {
    let damageTypes = typeList.map((type) => type.damage_relations.double_damage_from.map( ({name}) => name )).flat();
    //half_damage_from
    const halfDamageTypes = typeList.map((type) => type.damage_relations.half_damage_from.map( ({name}) => name )).flat();
    //no_damage_from
    const noDamageTypes = typeList.map((type) => type.damage_relations.no_damage_from.map( ({name}) => name )).flat();
    
    damageTypes = damageTypes.filter( type => !noDamageTypes.includes(type));
    halfDamageTypes.map(halfType => {
      const foundIndex = damageTypes.findIndex( (dtype) => dtype === halfType)
      if (foundIndex >= 0) {
        delete damageTypes[foundIndex];
      }
      return halfType;
    });

    // Remove undefined
    return  damageTypes.filter(n => n)
  }

  getStrong = (typeList) => {
    return  typeList.map((type) => type.damage_relations.double_damage_to.map(({name}) => name )).flat();
  }

  selectedHandler = (index) => {
    const pokemonList = this.deselectPokemons(this.state.pokemonList);
    pokemonList[index].selected =  !pokemonList[index].selected;

    if (pokemonList[index].selected) {
     const typeInfoPromises = pokemonList[index].types.map( ({type:{name}}) => getPokemonTypeInfo(name)) ;
     Promise.all(typeInfoPromises).then( (typeList) => {
       // Remove undefined
       const weakTypes = this.getWeakness(typeList);
       const strongTypes = this.getStrong(typeList);

       const newPokeList = pokemonList.map( poke => {
          poke.types = poke.types.map( type => {
            poke.weak = weakTypes.includes(type.type.name)
            poke.strong = strongTypes.includes(type.type.name);
            return type;
          });

          return poke;
       });
       this.setState({pokemonList: newPokeList})
     });
    }
    this.setState({pokemonList});
  }

  deselectPokemons = (pokemonList) => {
    return [...pokemonList.map( (poke) => {
      poke.selected = false;
      return poke;
    })]
  }

  async componentDidMount() {
    const list = await getPokemonList(0, 151);
    const listType = await getPokemonTypeInfo();
    this.setState({typeList: listType.results});

    const pokeListPromises = list.results.map(poke  => {
      return getPokemon(poke.name)
    })

    Promise.all(pokeListPromises).then(values => { 
      this.setState({pokemonList: values, filteredList: values})
    }).catch(reason => { 
      console.error(reason)
    });
  }
  
  filterPokemonByTypeName = (name) => {
    if ( this.state.selectedType === name) {
      this.setState({filteredList: this.state.pokemonList, selectedType: ''})
    } else {
      const filteredList = this.state.pokemonList.filter( (pokemon) => {
        return this.pokemonHasType(pokemon, name)
      });

      this.setState({filteredList, selectedType: name})
    }
  }

  pokemonHasType = (pokemon, typeName) => {
    return pokemon.types.findIndex( ({type}) => type.name === typeName) >= 0 
  }

  render() {
    return (
      <>
        <TMain footer={this.footer}>
          <OTypeList list={this.state.typeList} selected={(name) => this.filterPokemonByTypeName(name)} />
          {
            this.state.pokemonList.length > 0 && <OPokemonList data={this.state.filteredList} selectedHandler={this.selectedHandler} /> 
          }
        </TMain>
      </>
    )
  }
}

export default PHome;
