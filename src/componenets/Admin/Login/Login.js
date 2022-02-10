import react from "react";
import './Login.css'
import Logo from '../../../assets/logo.jpg';
import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser}) => {

  const navigate = useNavigate();


  const [ user, setUser] = useState({
      Username:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/")
      })
  }

  return (
        <div>
          <div className="wrapper">
        <div className="text-center mt-3 name"> Butwal Bike Rentals </div>
        <div className="logo" style={{marginTop: '20px'}}> <img src={Logo} alt="" /> </div>
        <div className="text-center mt- name" style={{marginTop: '35px', fontSize: '20px', color: '#03A9F4'}}> Admin Login Panel </div>
        <div className="p-3 mt-3">
        <div className="form-field d-flex align-items-center"> 
            <span className="fas fa-key" /> 
            <input type="text" name="Username" value={user.username} onChange={handleChange}  placeholder="Username" /> 
          </div>
          <div className="form-field d-flex align-items-center"> 
            <span className="fas fa-key" /> 
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" /> 
          </div>
          <button className="btn mt-3" style={{marginTop: '35px'}} onClick={login}>Login</button>
          <div>Or</div>
          <button className="btn mt-3" style={{marginTop: '35px'}} onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
        </div>
    )
}
export default Login;