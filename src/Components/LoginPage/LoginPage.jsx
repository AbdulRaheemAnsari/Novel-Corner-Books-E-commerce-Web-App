import { useState } from 'react';
import './loginpage.css'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {

    const Data = { name: "", password: "" }
    const Data2 = { email: "" }
    const [data, setdata] = useState(Data)
    const [email, setemail] = useState(Data2)




    //flag  value
    const [flag, setFlag] = useState(false);
    const [flag2, setFlag2] = useState(false);



    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }


    const emailChange = (e) => {
        setemail({ ...email, [e.target.name]: e.target.value })
    }


    // login submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name || !data.password) {
            alert("Please fill this form")
        }
        else {
            setFlag(true);
        }
    }

    // email submit function
    const emailSubmit = (e) => {
        e.preventDefault();
        if (!email.email) {
            alert("Please fill this form")
        }
        else {
            setFlag2(true);
        }
    }

    return (
        <>
            <span>{(flag) ? <p className='flex justify-center bg-slate-300 py-3 text-2xl'>Congrates {data.name} You're successfully Loged In</p> : ""}</span>
            <span>{(flag2) ? <p className='flex justify-center bg-slate-300 py-3 text-2xl'>Congrates {email.name} You're successfully Registered</p> : ""}</span>
            <div className='login'>
                <div className="leftside">
                    <h1>Login</h1>

                    <div className="loginuser">
                        <h2>Connect with</h2>
                        <div className="logingoogle">
                            <div className="facebooklogin">
                                <FaFacebook className='faicon' /> <p>Login With Facebook</p>
                            </div>
                            <div className="googlelogin">
                                <FaGoogle className='faicon' /> <p>Login With Google</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="user">
                                    <p>User Name or Email address</p>
                                    <input type="text" name='name' value={data.name} onChange={handleChange} />
                                </div>
                                <div className="password">
                                    <p>Password</p>
                                    <input type="Password" name='password' value={data.password} onChange={handleChange} />
                                </div>
                                <div className="loginbutton">
                                    <div className="button">
                                        <button>Log in</button>
                                        <input className='check' type="checkbox" required />
                                        <p>Remember me</p>
                                    </div>
                                    <h4>Lost Your Password</h4>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>




                <div className="rightside">
                    <form onSubmit={emailSubmit}>
                        <h1>Register</h1>
                        <div className="email">
                            <div className="input">
                                <p>Email address</p>
                                <input type="email" name='email' value={email.email} onChange={emailChange} />
                                <h3>A link to set a new password will be sent to your email address.</h3>
                                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className=' underline text-[#02A794] cursor-pointer'>privacy policy.</span></p>
                                <button>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;