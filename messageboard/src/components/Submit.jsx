import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostTitle: '',
      newPostBody: '',
      newPostUser: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.createPost = this.createPost.bind(this);
    this.clearPost = this.clearPost.bind(this);
  };

  handleTitleChange(e) {
    this.setState({ newPostTitle: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ newPostBody: e.target.value });
  }

  handleUserChange(e) {
    this.setState({ newPostUser: e.target.value });
  }

  createPost(e) {
    this.props.postMessage(this.state.newPostBody);
    this.setState({
      newPostTitle: '',
      newPostBody: '',
      newPostUser: '',
    });
    e.preventDefault();
  }

  clearPost(e) {
    this.setState({
      newPostTitle: '',
      newPostBody: '',
      newPostUser: '',
    });
  }

  render() {
    return (
      <Panel className="post-submit-module">
      <p className="submit-post-title">Create a new post</p>
        <form>
          <FormGroup>
            Post Title
            <FormControl className="post-title" type="text" placeholder="Add a post title" value={this.state.newPostTitle} onChange={this.handleTitleChange} />
            Message
            <FormControl className="post-message" type="text" placeholder="Add a message" value={this.state.newPostBody} onChange={this.handleBodyChange} />
            User:
            <FormControl className="post-user" type="text" placeholder="Add your username" value={this.state.newPostUser} onChange={this.handleUserChange} />
            <Button bsStyle="primary" className="message-post-button" onClick={this.createPost}>Create Post</Button>
            <Button className="cancel-post-button" onClick={this.clearPost}>Cancel</Button>
          </FormGroup>
        </form>
      </Panel>
    );
  }
}

export default Submit;
