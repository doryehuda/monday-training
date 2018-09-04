import React, { Component } from "react";
import PropTypes from "prop-types";
class ItemForm extends Component {
  constructor(props) {
    super(props);
    let titleValue = props.item ? props.item.title : "";

    this.state = {
      id: props.item.id,
      title: titleValue,
      titleValid: false,
      formValid: false,
      isChanged: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.validateField("title", this.state.title);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.id !== this.state.id) {
      let titleValue = nextProps.item ? nextProps.item.title : "";
      this.setState(
        {
          id: nextProps.item.id,
          title: titleValue,
          titleValid: false,
          formValid: false,
          isChanged: false
        },
        () => {
          this.validateField("title", titleValue);
        }
      );
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
        isChanged: true
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
      () => {
        this.validateForm();
      }
    );
  }
  errorClass(isInvalid) {
    return isInvalid === true ? "is-invalid" : "";
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValid && this.state.isChanged
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      title: this.state.title
    });
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.onDelete({
      id: this.state.id,
      title: this.state.title
    });
  }
  renderDeleteButton() {
    return (
      <button
        onClick={this.handleDelete}
        className="btn btn-danger"
        disabled={!this.props.onDelete}
      >
        Delete
      </button>
    );
  }
  render() {
    return (
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
          <div className="invalid-feedback">Please provide a valid title.</div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formValid || !this.props.onSubmit}
        >
          submit
        </button>
        {this.state.id ? this.renderDeleteButton() : null}
      </form>
    );
  }
}
ItemForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
export default ItemForm;
