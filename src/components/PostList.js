import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
const PosList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const postList = posts.map((post) => {
    // {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // }
    return <div key={post.id}>{post.body} </div>;
  });

  return <div>{postList}</div>;
};

const mapStateToprops = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToprops, { fetchPosts: fetchPosts })(PosList);
