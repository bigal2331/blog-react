import React from "react";
import { connect } from "react-redux";

const PosList = ({ posts }) => {
  const postList = posts.map((post) => {
    return <div key={post.id}>{post.title} </div>;
  });

  return <div>{postList}</div>;
};

const mapStateToprops = ({ posts }) => ({ posts });

export default connect(mapStateToprops)(PosList);
