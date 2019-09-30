import React, {Component} from 'react';
import './PHome.css';
import { OPokemonList } from '../../organisms';
import { TMain } from '../../templates'
import {getPokemonList, getPokemon} from '../../services/pokeapi'


class PHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      types:[]
    }
  }

  footer = () => (<p>PokedexJS - Made with ReactJS- 2019</p>)

  selectedHandler = (index) => {
    const _state =  Object.assign({}, this.state);
    _state.pokemonList[index].selected =  !_state.pokemonList[index].selected;
    this.setState({pokemonList:_state.pokemonList});
  }

  async componentDidMount() {
    const list = await getPokemonList(0, 151);
    const pokeListPromises = list.results.map(poke  => {
      return getPokemon(poke.name)
    })

    Promise.all(pokeListPromises).then(values => { 
      this.setState({pokemonList: values})
    }).catch(reason => { 
      console.error(reason)
    });
  }


  render() {
    return (
      <>
        <TMain footer={this.footer}>
          {
            this.state.pokemonList.length > 0 && <OPokemonList data={this.state.pokemonList} selectedHandler={this.selectedHandler} /> 
          }
        </TMain>
      </>
    )
  }
}

export default PHome;
