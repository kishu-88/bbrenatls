import React, { useState } from "react"
import "./Register.css";
import Logo from '../../../assets/logo.jpg';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        Username: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { Username, email, password, reEnterPassword } = user
        if( Username && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
               navigate("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="wrapper">
        <div className="text-center mt-3 name"> Butwal Bike Rentals </div>
        <div className="logo" style={{marginTop: '20px'}}> <img src={Logo} alt="" /> </div>
        <div className="text-center mt- name" style={{marginTop: '35px', fontSize: '20px', color: '#03A9F4'}}> Admin Login Panel </div>
        <div className="p-3 mt-3">
        <div className="form-field d-flex align-items-center"> 
            <span className="far fa-user" /> 
            <input type="text" name="Username" value={user.Username} placeholder="Your Username" onChange={ handleChange }></input>
          </div>
          <div className="form-field d-flex align-items-center"> 
            <span className="far fa-user" /> 
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
          </div>
          <div className="form-field d-flex align-items-center"> 
            <span className="fas fa-key" /> 
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" /> 
          </div>
          <div className="form-field d-flex align-items-center"> 
            <span className="fas fa-key" /> 
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
          </div>
          <div className="btn mt-3" style={{marginTop: '35px'}} onClick={register} >Register</div>
          <div>Or</div>
          <div className="btn mt-3" style={{marginTop: '35px'}} onClick={() => navigate("/login")}>Login</div>
        </div>
      </div>
    )
}

export default Register;