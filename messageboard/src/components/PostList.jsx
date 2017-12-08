import React, { Component } from 'react';
import PostListEntry from './PostListEntry.jsx'
import Submit from './Submit.jsx'

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.postMessage = this.postMessage.bind(this);

    // uses separate postBody prop to capture message text -> pushed into posts collection
    this.state = {
      posts: [],
    }
  }

  /* makes a copy of state obj -> pushes message to collection -> clears input
  field -> sets state to new copied state obj */
  postMessage(newPostBody) {
    const newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.setState(newState);
  }

  render() {
    return (
      <div>
      {
        this.state.posts.map((postBody, idx) => {
          return (
            <PostListEntry key={idx} postBody={postBody} />
          )
        })
      }
      <Submit postMessage={this.postMessage} />
      </div>
    );
  }
}

export default PostList;
