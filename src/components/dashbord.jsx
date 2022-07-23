import axios from "axios";
import React, { Component } from 'react';
import { useEffect } from "react";
axios.defaults.headers.common['token'] = localStorage.getItem('token')
const Dashbord = () => {
    useEffect(() =>{
        async function fetchData(){
            console.log("dashboard");
            const response = await axios.get("https://reqres.in/api/unknown")
            console.log(response.data);
        }
        fetchData()
     
    },[])
    
    return ( <h1>Dashbord</h1> );
}
 
export default Dashbord;

