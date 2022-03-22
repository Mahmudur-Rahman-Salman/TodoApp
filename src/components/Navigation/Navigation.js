import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>

            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/todo">TodoApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                           
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
                            </li>
                            {user?.email ? <button type="button" className="btn btn-primar" onClick={logout}>Logout</button>
                                :
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;