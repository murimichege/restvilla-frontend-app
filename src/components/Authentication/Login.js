import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import { Link , useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/actions'
import login_1 from '../../assets/img/login_1.jpg'

function Login() {

const initialstate = {
    email: '',
    password:''
}

    // state
    const [form, setForm] = useState(initialstate)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // form functions
    const handleChange = (e) => {

        setForm({...form, [e.target.name]: e.target.value})

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form, navigate))

    }
    return (
<div>
      <div className="container-fluid">
        <div className="row vh-100">

         <div className="col-md-5 text-center d-flex flex-column py-5 justify-content-center">
            <div className="auth-form-section">
                <div className="logo"><img src="restvilla.png" class="img-fluid" alt="Unplug UI" style={{width:"50%"}}/></div>
                    <h2>Login</h2>
                        <form className="auth-form" onSubmit={handleFormSubmit} autocomplete="off">
                            <div className="form-group">
                                <label for="email" style={{float: "left"}}>Email Address</label>
                                <input type="text" name="email" id="email" className="form-control" onChange={handleChange} placeholder="Enter email address" onkeyup="emailinputchecks()"/>
                            </div>
                            <div className="form-group">
                            <label for="password" style={{float: 'left'}}>Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Password" onChange={handleChange} onkeyup="passinputchecks()"/>
                            </div>
                            <button type="button" class="btn btn-success btn-block mb-3" id="login_form_submit" onClick={handleFormSubmit } disabled>Log In</button>

                            <div className=" justify-content-between">
                                <Link to="/" className="text-info">Forgot Password?</Link><br>
                                Don't have an account?<Link to="/Register" style={{color: "4a9924"}}> Sign Up</Link></br>
                              </div>  
                        </form>
                     
                    
                    </div>
                    
                </div>


            </div>




            <div className="col-md-7 text-center py-5 d-flex flex-column justify-content-center auth-bg-section text-white" style={{background:{login_1}}}>
            </div>
        </div>
    </div>
    )
}

export default Login
