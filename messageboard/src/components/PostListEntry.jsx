import React from 'react';
import { Panel } from 'react-bootstrap';

const PostListEntry = (props) => (
  <Panel className="posts">{ props.postBody }</Panel>
)

export default PostListEntry;
