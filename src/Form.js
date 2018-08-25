import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    // Initiating the state for my 3 inputs.
    this.state = {
      name: '',
      best_quote: '',
      image_url: '',
      hasError: false
    }
    // binding the this to my eventHandler
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    // We want all 3 input to be at leat one character
    if (this.state.name && this.state.best_quote && this.state.image_url) {
      fetch('http://127.0.0.1:8000/api/characters', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          best_quote: this.state.best_quote,
          image_url: this.state.image_url
        })
      })
    } else {
      this.setState({ hasError: true });
    }
    event.preventDefault();
  }


  render() {
    //const {error} = this.state.hasError;
    const hasError = this.state.hasError;
    let error;

    if (hasError) {
      error = <Error value={hasError}/>
    } else {
      error = <Error value={hasError}/>
    }

    return (


      <form onSubmit={this.handleSubmit}>
        {error}
        <div className="form-group">
          <label>Name:</label>
          <input name="name" type="text" className="form-control" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Best quote:</label>
          <input name="best_quote" type="text" className="form-control" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Image Link:</label>
          <input name="image_url" type="text" className="form-control" onChange={this.handleChange}/>
        </div>
        <input type="submit" className="btn btn-default" value="submit" />

      </form>
    )
  }
}

function Error(props) {
  if(props.value) {
    return (
      <p>All input are required</p>
    )
  } else {
    return null;
  }

}


export default Form;
