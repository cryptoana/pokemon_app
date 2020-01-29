import React from 'react'
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

// function padToThree takes a number as argument. If the number is lower than 999, we're adding two 0s in front of the number, and then slicing the last 3 numbers. If the number is higher than 999, we return the number.
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends React.Component {
  render () {

    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className="data">Type: {this.props.type}</div>
        <div className="data"> XP: {this.props.XP}</div>
      </div>
    )
  }
}

export default Pokecard;