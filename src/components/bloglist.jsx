import React, { Component } from "react";
import { Link } from "react-router-dom";
import {MenuList, Progress, Dropdown, MenuLabel, MenuLink} from "bloomer";
import "./bloglist.css"
class BlogList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const posts = await this.loadData();
    this.setState({
      posts
    });
  }

  loadData = async () => {
    const url = "http://localhost:3006/v1/all";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <MenuLabel>Blog Post</MenuLabel>
        <Progress isColor="dark">loading...</Progress>  
        <div>
          
 
        <ul>
          {posts.map(post => {
            return (
              <li key={`post-${post.id}`}>
               <MenuList><li><MenuLink><Link to={`/post/${post.id}`}>{post.content}</Link></MenuLink></li></MenuList>
              </li>
            );
          })}
        </ul></div>  
      </>
    );
  }
}

export default BlogList;