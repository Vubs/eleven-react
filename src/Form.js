import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Best quote:</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label>Image Link:</label>
          <input type="text" class="form-control" />
        </div>
      </form>
    )
  }
}


export default Form;
