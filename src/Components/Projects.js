import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectItem from './ProjectItem'
import '../styles/Style.css';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        <Grid stackable width={4}>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={5}>
            <h2> Projects </h2>
            <div className="menu">
              {projectItems}
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <img src={require("../images/PigeonAppPreview.png")} className="pigeonPreview"/>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Projects;
