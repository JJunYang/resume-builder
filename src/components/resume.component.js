import React, { Component } from "react";
import ResumeTemplate from "./resumeTemplate.component";
import jsonData from '../data/sample.resume.json'

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,
    };
    console.log(this.state.data); 
  }

  render() {
    return (
      <div>
        <ResumeTemplate data={this.state.data}/>
      </div>
    );
  }
}
