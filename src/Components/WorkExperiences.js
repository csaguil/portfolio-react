import React, { Component } from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Document } from 'react-pdf';
import WorkExperienceItem from './WorkExperienceItem'
import '../styles/Style.css';
import Resume from '../images/resume.pdf';

class WorkExperiences extends Component {
  render() {
    let experiences;
    if (this.props.experiences) {
      experiences = this.props.experiences.map(experience => {
        return (
          <WorkExperienceItem key={experience.company} experience={experience} />
        );
      });
    }

    return (
      <div className="WorkExperiences">
      <Grid stackable columns={4}>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={5}>
          <h2> Work Experience </h2>
          <div className="menu">
            {experiences}
          </div>
          <Button primary href={Resume} target='_blank'>View My Resume</Button>
        </Grid.Column>
        <Grid.Column width={5}>
          <img src={require('../images/TEC.jpg')} className="TECPicture"/>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default WorkExperiences;
