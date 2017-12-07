import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Panel className="jumbo">
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="Add your message" />
            <Button bsStyle="primary">Post</Button>
          </FormGroup>
        </form>
      </Panel>
      </div>
    );
  }
}

export default App;
