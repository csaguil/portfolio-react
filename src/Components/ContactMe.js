import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class ContactMe extends Component {
  render() {
    return (
      <div className="ContactMe">
        <h2> Interested in connecting? </h2>
        <Button primary size='huge' href="mailto:cristian.saguil@gmail.com">Let's Chat</Button>
      </div>
    );
  }
}

export default ContactMe;
