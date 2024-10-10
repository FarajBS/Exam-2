import { Link, useNavigate } from "react-router-dom"


export default function Nav() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/signIn");
    };

    return (
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand text-4xl font-bold" href="#">FBS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-2xl font-semibold" aria-current="page" href="#">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/books" className="nav-link text-2xl font-semibold" aria-current="page" href="#">Books</Link>
                        </li>
                    </ul>
                
                    <form className="d-flex" role="search">
                        <button onClick={logout} className="btn btn-outline-success text-2xl font-semibold" type="submit">Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
        
        </>
    )
}
