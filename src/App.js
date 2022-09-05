import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

let stylesOflI = {
  padding: "10px",
  borderRadius: "10px",
  margin: "10px",
  fontSize: "20px",
};
let tasks;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newTask: "",
    });
    localStorage.task += this.state.newTask + ",";
  };
  handleDelete = (event) => {
  event.preventDefault();
  localStorage.task = "" && window.location.reload()
  }
  render() {
    if (Boolean(localStorage["task"])) {
      tasks = localStorage.getItem("task").split(",");
      tasks = tasks.filter((task) => task !== "");
      return (
        <div className="container text-center mt-5">
          <h1 className="text-white">
            To-do list <span className="badge badge-secondary">{tasks.length}</span>
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.newTask}
              onChange={this.handleTaskChange}
              type="text"
              className="new-task mt-4 mb-4"
            />
          </form>

          <h2 className="text-white" style={{ fontFamily: "Oxygen Mono" }}>
            {this.state.newTask}
          </h2>

          <span
            className="text-white bg-danger"
            style={{
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
              fontSize: "20px",
            }}
            onClick={this.handleDelete}}
          >
            Borrar Todo
          </span>

          <ul className="list-group">
            {tasks.map((task) => (
              <li
                style={stylesOflI}
                className="list-group-item d-flex justify-content-between"
              >
                {tasks.indexOf(task) + 1}. {task}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="container text-center mt-5">
          <h1 className="text-white">
            To-do list <i className="fas fa-fire-alt"></i>
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.newTask}
              onChange={this.handleTaskChange}
              type="text"
              className="new-task mt-4 mb-4"
            />
          </form>

          <h2 className="text-white" style={{ fontFamily: "Oxygen Mono" }}>
            {this.state.newTask}
          </h2>
        </div>
      );
    }
  }
}

export default App;
