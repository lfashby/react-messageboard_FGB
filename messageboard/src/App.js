import React, { Component } from 'react';
import Post from './components/Post.jsx'
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        'Hello World!!'
      ],
    }
  }
  render() {
    return (
      <div>
      {
        this.state.posts.map((postBody, idx) => {
          return (
            <Post key={idx} postBody={postBody} />
          )
        })
      }

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
