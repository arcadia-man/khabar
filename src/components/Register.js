import React, {  useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { resisterInitiate } from '../redux/action';
import { Link } from 'react-router-dom';
export default function Register() {
    const [state, setstate] = useState({ emailid: "", password: "", cpassword: "" });
    const {emailid, password, cpassword} = state;
    const dispatch = useDispatch();
    const handlechange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }
    const Handlesubmit = (e) => {
        e.preventDefault();
        if((password !== cpassword)){           
            return;
        }
        dispatch(resisterInitiate(emailid, password))
        setstate({emailid : "" , password: "", cpassword:""});
        
    }
    return (

        <div style={{ backgroundColor: "#eeeeee" }}>

            <MDBContainer className='d-flex justify-content-center' >

                <form style={{ width: '23rem', minHeight: "85vh" }} onSubmit={Handlesubmit} className='d-flex justify-content-center flex-column '>
                    <h2 className='text-center my-5' >Create Account</h2>
                    <MDBInput label='Email' id='formControlLg1' type='text' size='lg' name='emailid' value={state.emailid} onChange={handlechange} className='bg-white' />
                    <br />
                    <MDBInput label='Password' id='formControlLg' type='password' size='lg' name='password' value={state.password} onChange={handlechange} className='bg-white' />
                    <br />
                    <MDBInput label='Confirm Password' id='formControlLg2' type='password' size='lg' name='cpassword' value={state.cpassword} onChange={handlechange} className='bg-white' />
                    <br />
                    
                    <div>
                        <MDBBtn rounded active type='submit' >Sign Up</MDBBtn>
                    </div>
                    <Link to= "/" className='my-1 text-center'>Back</Link>
                </form>
                
            </MDBContainer></div>
    );
}
