import React, {Component} from "react";

class DumbCharacterRow extends React.Component {

  render() {
    const dumbCharacter = this.props.value;
    if (dumbCharacter !== null) {
      return (
        <div className="card" style={{width: "300px"}}>
          <img className="card-img-top img-fluid" style={{width: "300px", height: "auto"}} src={dumbCharacter.image_url} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{dumbCharacter.name}</h5>
            <p className="card-text">{dumbCharacter.best_quote}</p>
            <a href={"#/characters/" + dumbCharacter.id} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      );
    } else {
      return (
        <div>Null</div>
      )
    }

  }
}

export default DumbCharacterRow;
