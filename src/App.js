import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
// import CategoryList from "./components/search";
import './App.css';
import "bulma/css/bulma.css";
import {Button, MenuList, Menu, Card, Progress} from "bloomer";
import BlogList from './components/bloglist';
import BlogPost from './components/blogpost';
import './App.css';
import { setPriority } from 'os';
// import scrollToComponent from 'react-scroll-to-component';
import NewMessageForm from "./components/newmessageform";



function App() {
  return (
    <Router>
<Route path="/" exact component={BlogList} />


      <Route path="/post/:post_id?" exact component={BlogPost} />
      <NewMessageForm/>
      
      
    </Router>
  );
}

export default App;
