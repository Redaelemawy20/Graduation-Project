import React from 'react'
// import "./Login.css"
import styled from "styled-components";
export default function Login() {
  return (
      <Loginstyle>
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
            </Loginstyle>
  )
}
const Loginstyle=styled.div`
h1{
    text-align: center;
    font-size: 35px;
}

    background-color:#ddd;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    
    /*text-align: center;*/
    width: fit-content;
    font-family: 'Asap', sans-serif;
    

 input{
    display:block;
    width: 245px;
    
    margin: 10px;
    margin-top: 0px;
    height: 30px;
    background: none;
    outline: none;
    border-radius: 30px;
    font-family: 'Asap', sans-serif;
    font-size: 18px;
    padding-left: 26px;

}
label{
    position: relative;
    left: 10px;
    font-size: 20px;
}
input.btn{
    position: relative;
    left: 16px;
    
    border-radius: 20px;
    /*font-family: 'Asap', sans-serif;
    font-size: 20px;*/
    
}

.icon i{
    
    color: grey;
    position: absolute;
    top:119px;
    left: 20px;
    
}
 .icon #sec{
    color: grey;
    position: absolute;
    top:187px;
    left: 20px;
    
 }
span{
    font-size: 15px;
    position: relative;
    left: 10px;
    margin-top:20px ;

}
span:hover{
    color: tomato;
}

`;