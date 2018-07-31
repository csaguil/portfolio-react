import React, { Component } from 'react';
import '../styles/Style.css';
import { Icon } from 'semantic-ui-react'

class IconGroup extends Component {
  render() {
    return (
      <div className="IconGroup">
        <a href="https://www.instagram.com/cristiansaguil/"><Icon instagram="true" name='instagram' size="big" /></a>
        <a href="https://www.linkedin.com/in/cristiansaguil"><Icon linkedin="true" name='linkedin' size="big" /></a>
        <a href="https://github.com/csaguil"><Icon github="true" name='github' size="big" /></a>
      </div>
    );
  }
}

export default IconGroup;
