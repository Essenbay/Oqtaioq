import './Login.css';
import React, {useState} from 'react';
function Login({active, setActive, setUser}){
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleChangeUsername = (e) => {
        setUsernameInput(e.currentTarget.value);
    }
    const handleChangePassword = (e) => {
        setPasswordInput(e.currentTarget.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(passwordInput){
            setUser(usernameInput)
            setUsernameInput('')
            setActive(false);
        }
        else if(usernameInput == "" && passwordInput == ""){
            console.log("Enter username and password!")
        }
        else{
            console.log("Wrong username or password")
            //error
        }
        setPasswordInput('');
    }
    const handleCancel = () => {
        setUsernameInput("");
        setPasswordInput("");
        setActive(false);
    }
    return(
        <div className={active ? "login-modal active" : "login-modal"} onClick={()=>setActive(false)}>
            <form className="login-modal-content" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className="login-header">
                    Login
                </div>
                <div className='login-form' action="" >
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" id="usernameInput" value={usernameInput} onChange={handleChangeUsername} placeholder="Enter your username"/>
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" value={passwordInput} onChange={handleChangePassword} placeholder="Enter your password"/>

                </div>
                <div className="login-button-group">
                    <input className='login-cancel' type="button" value="Cancel" onClick={handleCancel}></input>
                    <input className='login-submit' type="submit" value="Log In"></input>
                </div>
            </form>
        </div>
    )
}
export default Login;