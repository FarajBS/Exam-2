import axios from "axios"
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Books() {

    const [all, setAll] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("id") != null || localStorage.getItem("name") != null) {
            // navigate("/home")
        };

        axios({
            method: 'get',
            url: 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=6QxDn1C5bclQsNbAUEvA7RsWbNg83Bic',
        })
        .then((res) => {
            console.log(res.data.results);
            setAll(res.data.results.list);
        });
    }, []);
    return (
        <>
            {/* Nav */}
            <Nav />
            {/*== Nav ==*/}

            <div className="my-10">
                <div className="containe flex flex-col justify-center items-center md:flex-row md:justify-center md:items-start md:flex-wrap gap-4">

                    {all.map((item, index) => {
                        return (
                        <div key={index}>
                            
                           <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <img
                                        src={item.amazon_product_url}
                                        alt="img" 
                                    />
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title">{item.book_details.title}</h2>
                                    <p>{item.author}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/details/${id}`}><button className="btn btn-primary w-full">More</button></Link>
                                    </div>
                                </div>
                            </div>`
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}