import './Login.css';
import React, {useState} from 'react';
import { checkPassword } from '../../storage/users/users';
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
        if(checkPassword(usernameInput, passwordInput)){
            setUser(usernameInput)
            setUsernameInput('')
            setActive(false);
            setWrongState(false);
            setNullState(false);
        }
        else if(usernameInput == "" || passwordInput == ""){
            setNullState(true);
            setWrongState(false);
        }
        else{
            setWrongState(true);
        }
        setPasswordInput('');
        
    }
    const handleCancel = () => {
        setUsernameInput("");
        setPasswordInput("");
        setWrongState(false);
        setNullState(false);
        setActive(false);
    }
    const [wrongState, setWrongState] = useState(false);
    const [nullState, setNullState] = useState(false);

    return(
        <div className={active ? "login-modal active" : "login-modal"} onClick={()=>setActive(false)}>
            <form className="login-modal-content" onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
                <div className="login-header">
                    Login
                </div>
                <div className='login-form' action="" >
                    <label htmlFor="usernameInput">Username</label>
                    <input type="text" id="usernameInput" className={nullState ? 'login-form-username-input null' : 'login-form-username-input'} value={usernameInput} onChange={handleChangeUsername} placeholder="Enter your username"/>
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" className={nullState ? 'login-form-password-input null' : 'login-form-password-input'} value={passwordInput} onChange={handleChangePassword} placeholder="Enter your password"/>

                </div>
                <div className="login-footer">
                    <div className="login-button-group">
                        <input className='login-cancel' type="button" value="Cancel" onClick={handleCancel}></input>
                        <input className='login-submit' type="submit" value="Log In"></input>
                    </div>
                    <div className={wrongState ? "login-wrong-state active" : "login-wrong-state"}>
                        Wrong username or password
                    </div>
                </div>
                
            </form>
        </div>
    )
}
export default Login;