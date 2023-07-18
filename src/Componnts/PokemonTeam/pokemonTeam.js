import React, { Component } from 'react'
import style from "./pokemonTeam.module.css"
import { PokemonCard } from '../PokemonCard/pokemonCard';

export class PokemonTeam extends Component {
  static defaultProps = {
    teamName: "Default Team",
    teamData: []
  };

  render() {
    const { teamName, isWinner, teamData, point } = this.props;
    return (
      <div>
        <h1 className={style.teamText}>{teamName}</h1>
        <h3 className={style.teamText}>{point}</h3>
        <h2
          className={[
            isWinner ? style.textGreen : style.textRed,
            style.teamText,
          ].join(" ")}
        >
          {isWinner ? "Winner" : "Lose"}
        </h2>

        <div className={style.content}>
          {teamData?.map((item) => (
            <PokemonCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
