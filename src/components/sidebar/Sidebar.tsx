import './Sidebar.css';
import * as bi from 'react-bootstrap-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const [closed, setClosed] = useState(false);
    const sidbarLinks = [
        { name: 'Home', link: '/', icon: bi.HouseFill },
        { name: 'Student', link: '/batch', icon: bi.PeopleFill },
        { name: 'Attendance', link: '/attendance', icon: bi.CalendarDate },
        { name: 'Assesment', link: '/assessment', icon: bi.MortarboardFill },
        { name: 'Inventory', link: '/inventory', icon: bi.Boxes },
        { name: 'Job Details', link: '/ojt', icon: bi.AwardFill },
        { name: 'Notifications', link: '/notifications', icon: bi.BellFill },
    ];

    return (
        <div className={`flex-shrink fixed z-10 w-[100%] md:w-[60px] lg:w-[250px] md:static md:z-[1] ${closed ? '!w-0' : ''}`} id="sidebar-container">
            <div className="sidebar" id="sidebar">
                <button className={`${closed ? '' : 'd-none'} btn py-0 px-1 fs-5`} id="side-open-btn"
                    onClick={() => setClosed(false)}>
                    <bi.ArrowRightSquareFill />
                </button>
                <div className="sidebar-header mb-4">
                    <div className="app-icon">
                        <img src="./src/assets/images/appLogo.png" alt="App Logo" />
                    </div>
                    <button className="btn text-white py-0 px-1 fs-5" id="side-hide-btn"
                        onClick={() => {
                            setClosed(true);
                        }}>
                        <bi.ArrowLeftSquareFill />
                    </button>
                </div>
                <ul className="sidebar-list">
                    {
                        sidbarLinks.map((sidebarLink, index) => {
                            return (
                                <li key={index} className="sidebar-list-item">
                                    <NavLink to={sidebarLink.link} className="flex items-center md:justify-center 
                                    lg:justify-start w-[100%] py-[10px] px-[20px] text-[14px] leading-[24px]">
                                        <sidebarLink.icon className='me-3 md:me-0 lg:me-3' />
                                        <span className='md:hidden lg:block'>{sidebarLink.name}</span>
                                    </NavLink>
                                </li>
                            );
                        })
                    }
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
                        <bi.ThreeDots />
                    </button>

                    {/* <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">View Profile</a></li>
                        <li><a className="dropdown-item" href="/">Home Page</a></li>
                        <li><a className="dropdown-item" href="/logout">Logout <i className="bi bi-box-arrow-right ms-3"></i></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;