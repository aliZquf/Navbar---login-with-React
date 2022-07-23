import React, { Component } from 'react';
import Users from './components/users'
import User from './components/user'
import LoginWithRouter from './components/login'
import Register from './components/register'
import Home from './components/home'
import Navbar from './components/navbar'
import Dashbord from './components/dashbord'
import NotFound from './components/notfound'
import {Route,Navigate} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Logout from './components/logout';



class App extends React.Component {
  state={
    user: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token){
      this.setState({user:null})
      return
    }
    // کد پایین برای زمانی است که ای پی ای مورد نظر را داشته باشیم اما در فیک سرور ما موجود نیست در نتیجه اطلاعات را در این پروژه به طور دستی میسازیم
    // const response = await axios.post('reqres.in/api/userbytoken',{token})
    const response = {
      data:{
        user:{
          name : "arash",
          email: " arash@gmail.com"
        }
      }
    }
    if(!response.data.user){
      this.setState({user: null})
      return
    }
    this.setState({user: response.data.user})
  }

    render() { 
        return <>
          <Navbar user={this.state.user}/>
        <div className="container mt-3">
            <Routes>
                <Route path="/users/:id" element={<User/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/login" element={<LoginWithRouter/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/dashboard" element={<Dashbord/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/NotFound" element={<NotFound/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Navigate to ="NotFound" />}/>
                
          </Routes>
        
          
        </div>
        </>;
    }
}



 
export default App;