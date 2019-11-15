/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withRouter } from "react-router-dom";
import EmployeeRow from "./EmployeeRow";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      employees: [],
      error: ""
    };

    this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/employees")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong ...");
      })
      .then(data => this.setState({ employees: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { employees, isLoading, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (isLoading) {
      return (
        <div>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading...
        </div>
      );
    }
    return (
      <div className="list-group">
        {employees.map(employee => (
          <EmployeeRow key={employee._id} employeeData={employee} refresh={this.refreshPage} />
        ))}
        <button
          type="button"
          onClick={() => this.props.history.push("/AddEmployee")}
          className="btn btn-primary mt-2"
        >
          Add employee
        </button>
      </div>
    );
  }
}

export default withRouter(Employees);
