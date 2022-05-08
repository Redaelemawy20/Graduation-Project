import React from 'react'
import "./Login.css"
export default function Login() {
  return (
       <div id="container">
        <h1>LOGIN</h1>
        <form>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter e-mail" type="email"/>
            <div class="icon">
            <i className="fas fa-user"></i></div>
    
            <label for="pass">Password</label>
            <input id="pass" type="password" placeholder="Password"/>
            <div  class="icon"><i class="fas fa-lock" id="sec"></i></div>
            <input class="btn" type="submit" value="Submit"></input>
            <input id="res" class="btn" type="reset" value="reset"></input>
            <span>Forget password</span>
            </form>
    
   </div>
  )
}
