import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Input from "./input"
import * as yup from 'yup';

import { useNavigate} from "react-router-dom";



function Login(){
    const navigate = useNavigate()

const [account,setAccount] = useState({
    email :'',
    password :'',
});

const [errors,setErrors] = useState([]);
const [sending,setSending] = useState(false);


const schema = yup.object().shape({
    email: yup.string().email("فرمت ایمیل صحیح نمیباشد").required("وارد کردن ایمیل الزامیست"),
    password: yup.string().min(4,"حداقل تعداد پسورد 4 کرکتر است").required("وارد کردن پسورد الزامی است")

})
  
  const validate = async()=>{
      try {
         const result = await schema.validate(account, {abortEarly:false});
         return result 
          
      } catch (error) {
          console.log(error.errors);
          setErrors(error.errors);
          
      }
  }
  const  handleSubmit= async (e)=>{
        
        e.preventDefault()
        const result = await validate()
        if(result){
         try {
       
             setSending(true)
            const response = await axios.post("https://reqres.in/api/login",result)
            localStorage.setItem("token",response.data.token);
                     window.location="/dashboard"
            setSending(false)
            console.log(response); 
         } catch (error) {
            setSending(false)
             setErrors(["ایمیل یا پسورد صحیح نمیباشد"])     
         }
        }
    }
    const handleChange = (e) => {
        const {id , value} = e.target   
        setAccount(prevState => ({
            ...prevState,
            [id] : value
        }))} 
        const {email, password} = account.email
        
        return (
            <>{
                errors.length !== 0 && (
                    <div className=" alert alert-danger">
                        <ul>{
                            Array.from(errors).map((e,i)=> <li key={i}>{e}</li>)
                        }
                        </ul>
                    </div>
                ) 
            }
             <form onSubmit={handleSubmit}>
                <Input label="email" onChange={handleChange} value={email} name="email" id="email" className="form-control" type="text" />
                <Input label="password" onChange={handleChange} value={password} name="password" id="password" className="form-control" type="text" />
                <button  disabled={sending} className="btn btn-primary">login</button>
            </form>       
            </>
        );  
}
export default Login;