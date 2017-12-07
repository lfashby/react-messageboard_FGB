import React from 'react';
import { Panel } from 'react-bootstrap';

const Post = (props) => (
  <Panel className="posts">{ props.postBody }</Panel>
)

export default Post;
