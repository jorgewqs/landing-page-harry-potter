import React, { Component } from "react";

export default class Characters extends Component {
  render() {
    return (
      <div className="character-box">
        <div className="character-image">
          <img src={this.props.image} alt={this.props.name} draggable="false" />
          {this.props.alive ? <div className="alive">Vivo</div> : <div className="dead">Morto</div>}
        </div>
        <div className="character-name">
          <h2><b>Nome:</b> {this.props.name}</h2>
        </div>
        <div className="character-dateOfBirth">
          <h2><b>Data de Nascimente:</b> {this.props.dateOfBirth}</h2>
        </div>
        <div className="character-house">
          <h2><b>Casa:</b> {this.props.house}</h2>
        </div>
        <div className="character-patronus">
          <h2><b>Patrono:</b> {this.props.patronus}</h2>
        </div>
        <div className="character-actor">
          <h2><b>Ator:</b> {this.props.actor}</h2>
        </div>
      </div>
    );
  }
}
