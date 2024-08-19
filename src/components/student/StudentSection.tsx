import { Outlet } from 'react-router-dom';
import './StudentSection.css';
import { CaretRightFill, Funnel, Search } from "react-bootstrap-icons";

export default function StudentSection() {

    return (
        <>
            <div className="flex items-center py-5 px-2 md:px-5">
                <span className="flex items-center gap-2" id="nav-direction-section">
                    <a href="student" className="text-decoration-none text-dark">Student</a>
                    <CaretRightFill />
                    <a href="" className="text-decoration-none text-dark">Current Batch</a>
                </span>

                <div className="ms-auto flex items-center gap-2 [&>.active]:bg-red-800 [&>.active]:text-white" id="content-nav">
                    <a href="" className="text-decoration-none border rounded-md py-1 px-3 text-red-800 border-red-800 active">Batches</a>
                    <a href="" className="text-decoration-none border rounded-md py-1 px-3 text-red-800 border-red-800">Student List</a>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export function StudentList() {
    return (
        <div>Student List</div>
    );
}

export function Batches() {

    return (
        <>
            <div className="flex items-center px-2 md:px-5">
                <div className="flex items-center gap-2 [&>.active]:bg-yellow-600 [&>.active]:text-white" id="content-nav">
                    <a href="" className="text-decoration-none border rounded-md py-1 px-3 text-yellow-600 border-yellow-600 active">Applicant Details</a>
                    <a href="" className="text-decoration-none border rounded-md py-1 px-3 text-yellow-600 border-yellow-600">Interview Selected</a>
                    <a href="" className="text-decoration-none border rounded-md py-1 px-3 text-yellow-600 border-yellow-600">Registered Student</a>
                </div>

                <div className="ms-auto">
                    <div className="flex items-center gap-x-2 px-2 py-1 rounded-md bg-white">
                        <Search />
                        <div className='h-[20px] w-[2px] bg-black'></div>
                        <input type="text" className='outline-none w-[150px]'/>
                        <div className='h-[20px] w-[2px] bg-black'></div>
                        <Funnel />
                    </div>
                </div>
            </div>

            <div>

            </div>
        </>
    );
}