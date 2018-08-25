import React, {Component} from "react";
import DataFetcher from "./DataFetcher";

// can home call a dataFetcher, case fromHome (return all) / case fromSinglePage (return fetch with id?)

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Liste des personnages :</h1>

        <div>
          <DataFetcher />
        </div>

      </div>
    )
  }
}

export default Home;
