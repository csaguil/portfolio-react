import React, { Component } from 'react';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import IconGroup from './Components/IconGroup';
import Projects from './Components/Projects';
import WorkExperiences from './Components/WorkExperiences';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      experiences: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Flash Hang",
          year: "2018",
          tech: "Swift, React Native"
        },
        {
          title: "Pigeon Carpooling",
          year: "2017",
          tech: "Swift"
        },
        {
          title: "Blockchain Application",
          year: "2017",
          tech: "Java"
        },
        {
          title: "Threads Library",
          year: "2018",
          tech: "C"
        }
      ],
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Directly",
          season: "Summer 2018",
          location: "San Francisco, CA"
        },
        {
          title: "TEC Fellow",
          company: "True Ventures",
          season: "Summer 2018",
          location: "San Francisco, CA"
        },
        {
          title: "Mobile Developer Intern",
          company: "Rogomi",
          season: "Summers 2016 & 2017",
          location: "Manila, Philippines"
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IconGroup />
          <div className="App-title"> Hi, I'm Cristian. I study Computer Science at Colgate University. </div>
        </header>
        <hr className="hr-margin" />
        <AboutMe />
        <hr className="hr-margin" />
        <WorkExperiences experiences={this.state.experiences} />
        <hr className="hr-margin" />
        <Projects projects={this.state.projects} />
        <hr className="hr-margin" />
        <ContactMe />
        <hr className="hr-margin" />
      </div>
    );
  }
}

export default App;
