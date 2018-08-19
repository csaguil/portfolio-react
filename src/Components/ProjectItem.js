import React, { Component } from 'react';
import '../styles/Style.css';

class ProjectItem extends Component {
  render() {
    let linkMap = {
      "Pigeon Carpooling": "https://github.com/csaguil/pigeon-ios",
      "Blockchain Application": "https://github.com/csaguil/p2p-blockchain",
      "Threads Library": "https://github.com/csaguil/thread-lib",
      "Flash Hang": "flashhang.com"
    }
    return (
      <div className="ProjectItem">
        <a href={linkMap[this.props.project.title]}>
          <div className="projectTitle">{this.props.project.title}</div>
        </a>
        <div className="projectSubtitle">{this.props.project.year} - Built w/ {this.props.project.tech}</div>
      </div>
    );
  }
}

export default ProjectItem;
