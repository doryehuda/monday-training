import React, { Component } from "react";
import "./item-details.css";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.item ? props.item.title : "",
      titleValid: false,
      formValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  }
  validateField(fieldName, value) {
    let titleValid = this.state.titleValid;
    switch (fieldName) {
      case "title":
        titleValid = value.length >= 3;
        break;
      default:
        break;
    }
    this.setState(
      {
        titleValid: titleValid
      },
      this.validateForm()
    );
  }
  errorClass(isInvalid) {
    return isInvalid === true ? "is-invalid" : "";
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValid
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title
    });
  }

  render() {
    return (
      <div className="item-details container">
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="title">Title:</label>
            <input
              className={`form-control ${this.errorClass(
                !this.state.titleValid
              )}`}
              placeholder="Enter Title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid title.
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid || !this.props.onSubmit}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default ItemDetails;
