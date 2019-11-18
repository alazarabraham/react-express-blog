import React, { Component } from "react";
import axios from "axios";


class NewMessageForm extends Component{
  constructor(props){
    super(props)
    this.state={
      title: "",
      content:"",
      author_id: ""

    }
  }
  changeHandler= obj=>{
    this.setState({[obj.target.name] : obj.target.value})

  }
  submitHandler= obj =>{
    obj.preventDefault()
    console.log(this.state)
    axios.post("http://localhost:3006/v1/post/", this.state)
    .then(response => {
      console.log(response)
    }).catch(error =>{
      console.log(error)
    })

  }
  render(){
    const {title, content, author_id} = this.state
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <div><h1>Title</h1>
              <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div>
            <div><h1>Content</h1>
              <input type="text" name="content" value={content} onChange={this.changeHandler}/>
            </div>
            <div><h1>Author</h1>
              <input type="text" name="author_id" value={author_id} onChange={this.changeHandler}/>
            </div>
            <div>
              <button type="submit">submit post</button>
            </div>
          </form>
        </div>
      )    
  }}
export default NewMessageForm;
