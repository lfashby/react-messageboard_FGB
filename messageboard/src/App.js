import React, { Component } from 'react';
import Post from './components/Post.jsx'
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.postMessage = this.postMessage.bind(this);
    this.handlePostInputChange = this.handlePostInputChange.bind(this);

    // uses separate postBody prop to capture message text -> pushed into posts collection
    this.state = {
      posts: [],
      newPostBody: '',
    }
  }

  // makes a copy of state obj -> pushes message to collection -> clears input field -> sets state to new copied state obj
  postMessage() {
    const newState = Object.assign({}, this.state);
    newState.posts.push(this.state.newPostBody);
    newState.newPostBody = '';
    this.setState(newState);
  }

  handlePostInputChange(e) {
    this.setState({
      newPostBody: e.target.value
    })
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
              <FormControl className="post-input" type="text" placeholder="Add your message" onChange={this.handlePostInputChange} value={this.state.newPostBody} />
              <Button bsStyle="primary" className="message-post-button" onClick={this.postMessage}>Post</Button>
            </FormGroup>
          </form>
        </Panel>
      </div>
    );
  }
}

export default App;
