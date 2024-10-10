import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SignUp() {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const allEmail = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [allUsers, setAllUsers] = useState([]);    

    const navigate = useNavigate();
 
    const getUsers = () => {
        axios({
            method: 'get',
            url: 'https://67077a09a0e04071d22a7cb6.mockapi.io/users',
            responseType: 'stream'
        })
        .then((res) => {
            setAllUsers(res.data);
            allUsers.find((item) => {
                allEmail(item.email)
            })
        });
    }

    useEffect(() => {
        if(localStorage.getItem("id") != null || localStorage.getItem("name") != null) {
            navigate("/home")
        };

        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const signUp = () => {

        if(allEmail.includes(email)) {
            setEmailErr("Email Is Exist");
        } else {
            if (name.length > 5) {
                if (emailPattern.test(email)) {
                    if (password.length > 8) {
                        axios.post('https://67077a09a0e04071d22a7cb6.mockapi.io/users', {
                            name: name,
                            email: email,
                            password: password
                        })
                        .then(() => {
                            navigate('/signIn');
                        })
                        .catch(function (error) {
                        console.log(error);
                        })
                    } else {
                        setPasswordErr("Password Shold Be More Than 8 Number");
                    }
                } else {
                    setEmailErr("Email Shold Be A Valid Email");
                    
                };
            } else {
                setNameErr("Name Should Be More Than 5 Caracters");
            };
        }
    };

    return (
        <>
            <div className="w-screen h-screen bg-[#ddd] flex flex-col justify-center items-center">
                <div className="container w-full md:w-3/4 lg:w-1/2 h-full flex flex-col justify-center items-center">
                    {/* Name */}
                    <div className="w-full text-3xl mb-3 p-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                        </label>

                        <div className="text-center tetx-xl text-red-400 font-normal" onChange={(e) => setNameErr(e.target.value)} value={nameErr}>{nameErr}</div>
                    </div>
                    {/*=== Name ===*/}

                    {/* Email */}
                    <div className="w-full text-3xl mb-3 p-2">
                        <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                        </label>

                        <div className="text-center tetx-xl text-red-400 font-normal" onChange={(e) => setEmailErr(e.target.value)} value={emailErr}></div>
                    </div>
                    {/*=== Email ===*/}

                    
                    {/* Password */}
                    <div className="w-full text-3xl mb-3 p-2">
                        <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                        
                        </label>

                        <div className="text-center tetx-xl text-red-400 font-normal" onChange={(e) => setPasswordErr(e.target.value)} value={passwordErr}>{passwordErr}</div>
                    </div>
                    {/* Password */}

                    {/* Register */}
                    <div className="w-full text-3xl mb-3 p-2">
                        <button className="btn btn-neutral w-full text-3xl" onClick={signUp}>Register</button>
                    </div>
                    <Link to="/signIn">Sign In</Link>

                    {/*=== Register ===*/}

                </div>
            </div>
        </>
    )
};