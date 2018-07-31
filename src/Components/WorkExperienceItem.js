import React, { Component } from 'react';
import '../styles/Style.css';

class WorkExperienceItem extends Component {
  render() {
    return (
      <div className="WorkExperienceItem">
        <div className="projectTitle">{this.props.experience.title} - {this.props.experience.company}</div>
        <div className="projectSubtitle">{this.props.experience.season} - {this.props.experience.location}</div>
      </div>
    );
  }
}

export default WorkExperienceItem;
