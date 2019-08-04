import React, { Component } from "react";
import baseApi from "../api";

class App extends Component {
  
  fetchDataAll = async () => {
    try {
      const response = await baseApi.getAll();
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchDataOne = async () => {
    try {
      const response = await baseApi.getOne(1);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  createNewEntity = async () => {
    try {
      const response = await baseApi.create({ id: 1, name: 'mehran'});
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  updateEntity = async () => {
    try {
      const response = await baseApi.update(101, { id: 1, name: 'mehran2'});
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  deleteEntity = async () => {
    try {
      const response = await baseApi.delete(1);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.fetchDataAll}>getAll</button>
        <button onClick={this.fetchDataOne}>getOne</button>
        <button onClick={this.createNewEntity}>createNewEntity</button>
        <button onClick={this.updateEntity}>updateEntity</button>
        <button onClick={this.deleteEntity}>delete</button>
      </React.Fragment>
    );
  }
}

export default App;
