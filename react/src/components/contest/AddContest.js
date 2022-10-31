import React, { Component } from "react";
import ContestService from "../../service/contest.service";
import ContestForm from "./ContestForm";

/**
 * export objects, functions, variables so that it can be used with import
 * Defines the API for the app.

 * component to add contest.
 * change the fields if necessary.
 */
export default class AddContest extends Component {
  state = {
    name: "",
    capacity: "",
    registration_allowed: false,
    message: "",
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleCapacityChange = (event) => {
    // similar to handleNameChange
    this.setState({
      capacity: event.target.value,
    });
  };
  handleRegistrationAllowedChange = (event) => {
    // similar to handleNameChange
    this.setState({
      registration_allowed: event.target.checked,
    });
  };


  handleFormSubmit = (event) => {
    event.preventDefault();
    const contest = {            // This contest will be going to "ContestService.addContest(contest)"
      name: this.state.name,
      capacity: this.state.capacity,
      registrationAllowed: this.state.registration_allowed,
    };


    ContestService.addContest(contest)    // we are using the contest we got from handleFormSubmit
      .then((res) => {
        this.setState({
          message: "contest created: " + res.data.id,
          name: "",
          capacity: "",
          registration_allowed: false,
        });
      })
      .catch((error) => {
        this.setState({
          message: "error: " + error,
        });
      });

      const form = document.getElementById('contest');
      form.reset();
  };

  onCancel = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      capacity: "",
      registration_allowed: false,
      message: "",
    });
  };

  /**
  * Every .js file will have a render function and it can return one thing only
  * This function takes two arguments, HTML code and an HTML element
  **/
  render() {
    return (
      <div>
        <h3>Create Contest</h3>
        <ContestForm
          handleFormSubmit={this.handleFormSubmit}
          handleNameChange={this.handleNameChange}
          handleCapacityChange={this.handleCapacityChange}
          handleRegistrationAllowedChange={this.handleRegistrationAllowedChange}
          // add all the necessary props here
          // hint: every input the form takes
        />
        {this.state.message}
      </div>
    );
  }
}
