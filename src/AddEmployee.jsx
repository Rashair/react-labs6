/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withRouter } from "react-router-dom";
import newId from "./utils/newid";

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSaving: true });
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: newId(),
        name: this.name.value,
        company: this.company.value,
        age: this.age.value,
        email: this.email.value,
        isActive: this.isActive.checked
      })
    })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { isSaving, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (isSaving) {
      return (
        <div>
          <div className="spinner-border" role="status">
            <span className="sr-only">Saving...</span>
          </div>
          Saving...
        </div>
      );
    }
    return (
      <div className="container">
        {/* "isActive": false, "age": 39, "name": "Hobbs Sullivan", "company": "VURBO", "email":
          "hobbssullivan@vurbo.com" */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              id="name"
              ref={ref => {
                this.name = ref;
              }}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              id="company"
              ref={ref => {
                this.company = ref;
              }}
              type="text"
              className="form-control"
              placeholder="Company"
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              ref={ref => {
                this.email = ref;
              }}
              type="email"
              className="form-control"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group">
            <input
              id="age"
              ref={ref => {
                this.age = ref;
              }}
              type="number"
              className="form-control"
              placeholder="Age"
            />
          </div>
          <div className="form-check float-left form-check-inline">
            <input
              id="isActive"
              ref={ref => {
                this.isActive = ref;
              }}
              type="checkbox"
              defaultChecked={false}
              className="form-check-input"
            />
            <label htmlFor="isActive" className="form-check-label">
              Active{" "}
            </label>
          </div>
          <br />
          <div className="list-group">
            <button type="submit" className="btn btn-primary m-1">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => this.props.history.push("/")}
            >
              Back to list
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddEmployee);
