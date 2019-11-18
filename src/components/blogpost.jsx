import React, { Component } from "react";
import {Card} from "bloomer";

class BlogPost extends Component {
  state = {
    post: {}
  };

  async componentDidMount() {
    const post = await this.loadData();
    this.setState({
      post
    });
  }

  loadData = async () => {
    const postId = this.props.match.params.post_id;
    const url = `http://localhost:3006/v1/post/${postId}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    console.log(this.props);
    const { post } = this.state;
    return (
      <div>
        <Card><h2>{post.title}</h2></Card>
      </div>
    );
  }
}

export default BlogPost;