import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/actions';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import register_1 from '../../assets/img/register_1.jpg'
import { ToastContainer, toast } from 'react-toastify';
import './Auth.css'

function Register() {

    const initialstate =  {
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        password: '',
        confirmuserPassword: ''

    }


    // state

    const [form, setForm] = useState(initialstate)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // form functions
    const handleChange = (e) => {

        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(register(form, navigate))

    }
    return (
        <div className="container-fluid">
        <div className="row vh-100">
            <div className="col-md-6 text-center py-5 d-flex flex-column justify-content-center auth-bg-section text-white" style={{background:{register_1}}}>
                 <div className="logo"><img src="restvilla.png" className="img-fluid" alt="Unplug UI" width="50%"/></div>
                <p>Villa World</p> 
            </div>
            <div className="col-md-6 text-center d-flex flex-column py-5 justify-content-center">
                <div className="auth-form-section">
                    
                    <h2>Register</h2>
                    
                    
                        <form className="auth-form" onSubmit={handleFormSubmit} name="register_form" id="register_form" autocomplete="off">
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                <label for="first_name" style={{float: "left"}}>First Name</label>
                                <input type="text" name="first_name" id="first_name" className="form-control" placeholder="Enter first name" onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label for="last_name" style={{float: "left"}}>Last Name</label>
                                    <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Enter last name" onChange={handleChange} required/>
                                </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="email" style={{float: "left"}}>Email Address</label>
                                    <input type="text" name="email" id="email" class="form-control" placeholder="Enter email address"onChange={handleChange}required/>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-group">
                                    <label for="phone_no" style={{float: "left"}}>Phone Number</label>
                                    <input type="text" name="phone_no" id="phone_no" class="form-control" placeholder="Enter phone number"  onChange={handleChange} required/>
                                </div>
                            </div>
                          </div>
                        <div className="form-group">
                            <label for="password"style={{float: "left"}}>Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label for="confirmuserPassword" style={{float: "left"}}>Confirm Password</label>
                            <input type="password" name="confirmuserPassword" id="confirmuserPassword" className="form-control" placeholder="Confirm Password" onChange={handleChange} required/>
                        </div>
                        <button type="button" className="btn btn-success btn-block mb-3" id="register_form_submit" onClick={handleFormSubmit}>Register</button>
                        <div className=" justify-content-between">
                            Already have an account? <Link to="/Login" style={{float: "left"}}>Log In</Link>
                        </div>
</form>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register
