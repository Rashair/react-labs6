/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

class EmployeeRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      employee: this.props.employeeData,
      error: ""
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(_id) {
    this.setState({ isDeleting: true });
    fetch(`http://localhost:3000/employees/${_id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" }
    }).then(this.props.refresh());
  }

  render() {
    const { isDeleting, employee, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (isDeleting) {
      return (
        <div>
          <div className="spinner-border" role="status">
            <span className="sr-only"> Deleting....</span>
          </div>
          Deleting...
        </div>
      );
    }

    return (
      <div key={employee._id} className="row">
        {employee.name} {employee.company} {employee.email} {employee.isActive.toString()}{" "}
        {employee.age}
        <button
          type="button"
          className="btn btn-secondary offset-1"
          onClick={() => this.handleDelete(employee.id === undefined ? employee._id : employee.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default EmployeeRow;
