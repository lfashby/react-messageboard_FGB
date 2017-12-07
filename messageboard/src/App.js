import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Panel className="posts">This is a post</Panel>
        <Panel className="post-submit-module">
          <form>
            <FormGroup>
              <FormControl type="text" placeholder="Add your message" />
              <Button bsStyle="primary" className="message-post-button">Post</Button>
            </FormGroup>
          </form>
        </Panel>
      </div>
    );
  }
}

export default App;
