import React, { Component } from 'react'
import style from "./pokemonCard.module.css"

const pokemonImage = (id) => {
    
    
    const newId = id < 10 ? "00" + id : id < 100 ? "0" + id : id;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
}

export class PokemonCard extends Component {
    render() {
      
        const { id, name, type, base_experience } = this.props
        
    return (
      <div className={style.card}>
        <div className={style.card_title}>{name}</div>
        <img src={pokemonImage(id)} alt={name } />
        <div>type: {type}</div>
        <div>EXP: {base_experience}</div>
      </div>
    );
  }
}
