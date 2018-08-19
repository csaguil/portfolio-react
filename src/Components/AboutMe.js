import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import '../styles/Style.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <Grid stackable columns={4}>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <div className="Headshot">
              <img src={require('../images/dp.jpg')} className="profilePicture"/>
            </div>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="Summary">
              <h2> Cristian Saguil </h2>
              <p>
                Raised in the Philippines and educated at The Lawrenceville
                School, I am now a senior at Colgate
                University. I have interned at a silicon valley startup, and worked on a few cool side projects.
                When Im not working, I like exercising, listening to music, and cooking good food.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
