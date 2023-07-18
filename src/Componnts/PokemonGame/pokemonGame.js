import React, { Component } from 'react'
import { PokemonTeam } from '../PokemonTeam/pokemonTeam'
import data from "../../data/pokemon.json"
import style from "./pokemonGame.module.css"

export class PokemonGame extends Component {


  pokemons = data

  constructor() {
    super()
    this.state = {
      team1: [],
      team2: [],
    };

    this.handlePlay=this.handlePlay.bind(this)
  }

  handlePlay() {
    let hand1 = []
    let hand2 = [...this.pokemons]

    while (hand1.length < hand2.length) {
      let randomPokemon = Math.floor(Math.random() * hand2.length)
      let ranPokemon = hand2.splice(randomPokemon, 1)[0]
      hand1.push(ranPokemon)
    }

    this.setState({team1:hand1, team2:hand2})
  }

  render() {

    const team1Point = this.state.team1.reduce(
      (sum, pokemons) => sum + pokemons.base_experience,
      0
    );
    const team2Point = this.state.team2.reduce(
      (sum, pokemons) => sum + pokemons.base_experience,
      0
    );

    return (
      <div className={style.pokemonGame}>
        <button onClick={this.handlePlay}>Play</button>
        <div>
          <PokemonTeam
            teamName="Team1"
            isWinner={team1Point > team2Point}
            teamData={this.state.team1}
            point={team1Point}
          />
          <PokemonTeam
            teamName="Team2"
            isWinner={team2Point > team1Point}
            point={team2Point}
            teamData={this.state.team2}
          />
        </div>
      </div>
    );
  }
}
