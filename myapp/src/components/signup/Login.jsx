
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../signup/login.css"
const Login = () => {
    const history = useNavigate();
    const [inputvalue, setInputvalue] = useState(
        {

            email: "",
            password: "",

        }
    )

    // const [data, setData] = useState([]);
    console.log(inputvalue);
    const getdata = (e) => {
        // console.log(e.target.value);
        //object destructuring 
        const { value, name } = e.target;
        // console.log(value, name);
        setInputvalue(() => {
            return {
                ...inputvalue,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserarr = localStorage.getItem("Userfind");
        console.log(getuserarr);

        const { email, password } = inputvalue;

        if (email === "") {
            alert("email required ");

        }

        else if (password === "") {
            alert("password required");

        } else if (!email.includes("@")) {
            alert("please enter valid email address");
        }
        else {
            if (getuserarr && getuserarr.length) {
                const userdata = JSON.parse(getuserarr);
                const userlogin = userdata.filter((element, indexnumber) => {
                    return element.email === email && element.password === password
                });
                if (userlogin.length === 0) {
                    alert("Enter valid details");
                }
                else {
                    localStorage.setItem("userlogin", JSON.stringify(userlogin));
                    console.log("Login Successfully");
                    history('/');
                }
            }
        }
    }

    // const navigate = useNavigate()
    // const [data, setData] = useState(1);
    // const [email,setEmail] = useState();
    // const [password,setPassword] = useState();
    // const [isValid,setValid] = useState(true);

    // const validate = () => {
    //     // return email.length && password.length; 
    //   };

    // const fd = new FormData()
    // fd.append('email',email)
    // fd.append('password',password)



    // const handleSubmit=()=>{

    //     console.log(data,'data is got here')
    //     localStorage.setItem('dataKey', JSON.stringify(data));
    //     fd  === null ||undefined ? setData(1) && (alert('Fill Up the Login form')):(
    //         navigate('/')
    //     )

    // }
    // useEffect(() => {
    //     email&&password !== null ?
    //     setValid(false)
    //     : alert('Fill Up the Login form')
    //   }, [email, password]);
    // useEffect(() => {
    //     handleSubmit();
    // },[data])

    return (
        <>

            <div className="wrapper" id="signin">
                <div className="container main">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-md-6 ">


                                <h1 className="text-center animated">  <strong>Welcome</strong>  <br></br>Login or Sign up</h1>

                            </div>
                            <div className="col-md-6 ">
                                <div className="input-box">
                                    <header>Login</header>
                                    <div className="input-field">
                                        <input type="text" className="input" name="email" onChange={getdata} required autocomplete="off" id="email" />
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="password" className="input" name="password" onChange={getdata} required autocomplete="off" id="password" />
                                        <label for="password">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" onClick={addData} className="submit" value="Sign in" />
                                    </div>
                                    <div className="sign-in">
                                        <span>Don't have an account? <Link to="/reg">Sign-up Here</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login
