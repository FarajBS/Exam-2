import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {



    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    


    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [allUsers, setAllUsers] = useState([]);  

    const navigate = useNavigate();
 
    

    useEffect(() => {
        if(localStorage.getItem("id") != null || localStorage.getItem("name") != null) {
            navigate("/home")
        };

        axios({
            method: 'get',
            url: 'https://67077a09a0e04071d22a7cb6.mockapi.io/users',
        })
        .then((res) => {
            console.log(res.data);
            setAllUsers(res.data);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const signIn = () => {

        allUsers.map((item) => {
            if(item.email == email && item.password == password) {
                localStorage.setItem("id", item.id);
                localStorage.setItem("name", item.name);
                localStorage.setItem("email", item.email);

                navigate("/home");
            } else {
                emailErr;
                passwordErr;
            }
        })
        
    };


    return (
        <>
            <div className="w-screen h-screen bg-[#ddd] flex flex-col justify-center items-center">
                <div className="container w-full h-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center">

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

                    {/* Login */}
                    <div className="w-full text-3xl mb-3 p-2">
                        <button className="btn btn-neutral w-full text-3xl" onClick={signIn}>Login</button>
                    </div>
                    <div>
                        <Link to="/signUp">Sign Up</Link>
                    </div>
                    {/*=== Login ===*/}

                </div>
            </div>
        </>
    )
};