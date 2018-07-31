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
                School, I am now a rising senior at Colgate
                University. I am spending this summer interning at Directly, a startup
                in San Francisco that is using the gig economy to transform
                customer service. I plan to pursue software engineering as a career
                after graduation.
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
