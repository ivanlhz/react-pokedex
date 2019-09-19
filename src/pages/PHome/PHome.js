import React, {Component} from 'react';
import './PHome.css';
import logo from '../../logo.svg';
import { OHeader, OPokemonList } from '../../organisms';
import { TMain } from '../../templates'
import {getPokemonList, getPokemon} from '../../services/pokeapi'


class PHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    }
  }

  content = () => (<OHeader blocks={this.state.blocks}/>)
  
  footer = () => (<p>React Atomic design Template - 2019</p>)

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
        <TMain>
          {
            this.state.pokemonList.length > 0 && <OPokemonList data={this.state.pokemonList} /> 
          }
        </TMain>
      </>
    )
  }
}

export default PHome;
