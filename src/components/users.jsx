import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Loader from './loading/loading'
import { Link } from 'react-router-dom';

class Users extends React.Component {
    state={
        users: [],
        isLoading: true,
    };

    async componentDidMount(){
        const response = await axios.get("https://reqres.in/api/users")
        console.log(response.data.data);
        
       setTimeout(() => {
        this.setState({users: response.data.data, isLoading: false});
       },500);
    }

    



    render() { 
        return <>
        <button onClick={this.handleCreate} className="btn btn-lg btn-primary">create</button>
        <div className="row">
            {
                
                    this.state.isLoading?(
                        <Loader/>
                    ):( this.state.users.map((user) => {
                        return (
                        <div className="col-4 text-center p-5">
                            <img src={user.avatar} style={{borderRadius:"50%" , width:"100px"}} alt="" />
                           <Link to={`users/${user.id}`}> <h4>{user.first_name} {user.last_name}</h4></Link>
                            <h5>{user.email}</h5>
                            <div className="row">
                                <div className="col-6">
                                    <button onClick={()=>{this.handleUpdate(user)}} className="btn btn-info btn-sm">Update</button>
                                </div>
                                <div className="col-6">
                                    <button onClick={()=>{this.handleDelete(user)}} className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                        )
                    }))
                   
                
            }
        </div>
        
        </>;
    }

handleCreate=async()=>{
    const newUser = {
        first_name:"alieza",
        last_name:"ghasemi",
        email:"alieza@gmail.com",
        avatar:"https://picsum.photos/200"
    }

    const response = await axios.post("https://reqres.in/api/users",newUser)
    this.setState({users:[...this.state.users,newUser]})

}
handleDelete= async(user)=>{
    const response = await axios.delete(`https://reqres.in/api/users/${user.id}`)
    const newUser = this.state.users.filter(u => u.id !== user.id)
    this.setState({users:newUser})
    
    
    
}

handleUpdate=async(user)=>{
    user.first_name="hossein"
    user.last_name = "nikookar"
    user.email = "nikki@gmail.com"
    user.avatar = "https://picsum.photos/200"
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user)
    const updatedUser = [...this.state.users]
    const index = updatedUser.indexOf(user)
    updatedUser[index] = {...user}
    this.setState({users:updatedUser})
  }

}
 
export default Users;