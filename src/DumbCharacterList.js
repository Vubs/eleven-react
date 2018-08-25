import React, {Component} from "react";
import DumbCharacterRow from "./DumbCharacterRow";

class DumbCharacterList extends React.Component {
  render() {
    const dumbCharaList = this.props.dumbCharaList;

    if(dumbCharaList !== null) {
        const items = dumbCharaList.map((dumbChara) => {<DumbCharacterRow value={dumbChara} key={dumbChara.id}/>} );
    }

    return (
      <div className="container">
        
      </div>
    )
  }
}

export default DumbCharacterList;
