import './Sidebar.css';
import { ArrowLeftSquare } from 'react-bootstrap-icons';
import { useState } from 'react';

function Sidebar() {
    const [closed, setClosed] = useState(false);

    return (
        <div className={"col-4 col-md-3 col-lg-2 px-0 " + (closed? 'hide' : '')} id="sidebar-container">
            <div className="sidebar" id="sidebar">
                <div className="sidebar-header mb-4">
                    <div className="app-icon">
                        <img src="/public/images/appLogo.png" alt="App Logo" />
                    </div>
                    <button className="btn text-white py-0 px-1 fs-5" id="side-toggle-btn"
                    onClick={() => {
                        setClosed(true);
                    }}>
                        <ArrowLeftSquare/>
                    </button>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <a href="/dashboard">
                            <i className="fa-solid fa-house me-3"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/batch/student">
                            <i className="fa-solid fa-user-graduate me-3"></i>
                            <span>Student </span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/attendance">
                            <i className="fa-solid fa-calendar-days me-3"></i>
                            <span>Attendance </span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/assessment">
                            <i className="fa-solid fa-graduation-cap me-3"></i>
                            <span>Assesment</span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/inventory">
                            <i className="fa-solid fa-boxes-stacked me-3"></i>
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/jobDetails">
                            <i className="bi bi-ticket-detailed me-3"></i>
                            <span>Job Details </span>
                        </a>
                    </li>
                    <li className="sidebar-list-item">
                        <a href="/notifications">
                            
                            <span>Notifications</span>
                        </a>
                    </li>
                </ul>
                <div className="account-info dropup">
                    <div className="account-info-picture">
                        <img src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="Account" />
                    </div>
                    <div className="account-info-name">
                        Monica G.
                    </div>
                    <button className="account-info-more" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                    </button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">View Profile</a></li>
                        <li><a className="dropdown-item" href="/">Home Page</a></li>
                        <li><a className="dropdown-item" href="/logout">Logout <i className="bi bi-box-arrow-right ms-3"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;