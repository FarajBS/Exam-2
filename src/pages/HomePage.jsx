import Nav from "../components/Nav";
import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function HomePage() {
    console.log(localStorage.getItem("id"))
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("id"))

    // const [all, allBooks] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        if(localStorage.getItem("id") == null || localStorage.getItem("name") == null) {
            navigate("/signIn")
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {/* Nav */}
            <Nav />
            {/*== Nav ==*/}

            <div className="my-10 w-screen h-screen container">
                <div className="">
                   <div>
                    <h2 className="text-4xl"><span className="font-bold">Welcome</span> {localStorage.getItem("name")}</h2>
                   </div>

                   <div className="bg-red-500">
                        <Link to="/books">
                            <div className="p-10 flex justify-center items-center bg-slate-500">
                                <h3 className="text-5xl">الكتب</h3>
                            </div>
                        </Link>
                   </div>

                </div>
            </div>

        </>
    )
};