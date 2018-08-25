import React, {Component} from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Liste des personnages :</h1>

        <div className="card" style={{width: "300px"}}>
          <img class={"card-img-top img-fluid"} style={{width: "300px", height: "auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf89bSwCrwRx7KKMYdZgU5BL8MkXph4259Le16KHj9BTE4aOpX" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p className="card-text">Best quote best quote best quote</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: "300px"}}>
          <img class={"card-img-top img-fluid"} style={{width: "300px", height: "auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf89bSwCrwRx7KKMYdZgU5BL8MkXph4259Le16KHj9BTE4aOpX" alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Best quote best quote best quote</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card" style={{width: "300px"}}>
          <img class={"card-img-top img-fluid"} style={{width: "300px", height: "auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf89bSwCrwRx7KKMYdZgU5BL8MkXph4259Le16KHj9BTE4aOpX" alt="Card cap" />
          <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Best quote best quote best quote</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
