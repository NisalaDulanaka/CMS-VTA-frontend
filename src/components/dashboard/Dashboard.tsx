import { BookFill, CaretRightFill, CartCheckFill, FileEarmarkBarGraphFill, ChevronUp, ChevronDown, DashLg } from 'react-bootstrap-icons';
import './Dashboard.css';

function Dashboard() {
    const attendanceData = [
        { mis: 1, name: 'Sam Angular', nic: '200341015478', age: 20, address: 'No 12/A, Gaslight Road, Middle Earth' },
        { mis: 2, name: 'Sam Angular', nic: '200341015478', age: 20, address: 'No 12/A, Gaslight Road, Middle Earth' },
        { mis: 3, name: 'Sam Angular', nic: '200341015478', age: 20, address: 'No 12/A, Gaslight Road, Middle Earth' },
        { mis: 4, name: 'Sam Angular', nic: '200341015478', age: 20, address: 'No 12/A, Gaslight Road, Middle Earth' }
    ];
    const leaderBoardData = [
        { mis: 5, name: 'Sam Angular', rank: 1, theory: 350, practical: 50, percentage: '90%', progress: 'none' },
        { mis: 2, name: 'Alfred Pennyworth', rank: 2, theory: 320, practical: 50, percentage: '87%', progress: 'up' },
        { mis: 8, name: 'Angela Nuance', rank: 3, theory: 300, practical: 45, percentage: '84%', progress: 'down' },
        { mis: 4, name: 'Victoria Justice', rank: 4, theory: 280, practical: 50, percentage: '79%', progress: 'up' },
        { mis: 4, name: 'Manson Linton', rank: 4, theory: 280, practical: 50, percentage: '79%', progress: 'up' },
        { mis: 4, name: 'Conan Larson', rank: 4, theory: 280, practical: 50, percentage: '79%', progress: 'up' }
    ];
    const notificationsData = [
        { title: 'Unmarked Attendance', date: '10 January, 2024', message: 'Some quick example text to build on the card title and make up the bulk.....' },
        { title: 'Unmarked Attendance', date: '10 January, 2024', message: 'Some quick example text to build on the card title and make up the bulk.....' },
        { title: 'Unmarked Attendance', date: '10 January, 2024', message: 'Some quick example text to build on the card title and make up the bulk.....' },
    ];

    return (
        <>

            <div className="flex py-5 px-2 md:px-5">
                <span className="flex items-center gap-2" id="nav-direction-section">
                    <a href="" className="text-decoration-none text-dark">Home</a>
                    <CaretRightFill />
                    <a href="" className="text-decoration-none text-dark">Dashboard</a>
                </span>
            </div>

            <div className="grid grid-cols-12 gap-5 p-5 pt-2">

                <div className="col-span-7 rounded-sm shadow-md px-4 py-4 bg-white">
                    <div className="attendance-details">
                        <a href="/attendance" className='font-medium'>MARK ATTENDANCE</a>
                        <hr className='mt-1 mb-3' />
                    </div>
                    <div className="site-scrollbar" id="attendance-section">
                        <table className="table-auto w-[100%] mb-4 text-left text-xs" id="attendance-table">
                            <thead>
                                <tr className='border-b border-slate-300'>
                                    <th>MIS</th>
                                    <th>STUDENT</th>
                                    <th>NIC</th>
                                    <th>AGE</th>
                                    <th>ADDRESS</th>
                                    <th>ATTENDANCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attendanceData.map((attendance, index) => {
                                        return (
                                            <tr key={index} className='border-b border-slate-300'>
                                                <th>{attendance.mis}</th>
                                                <td>{attendance.name}</td>
                                                <td>{attendance.nic}</td>
                                                <td>{attendance.age}</td>
                                                <td>{attendance.address}</td>
                                                <td>
                                                    <div className='flex justify-center'>
                                                        <input type="checkbox" className="form-check" />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-span-5 rounded-sm">
                    <div className="grid grid-cols-2 gap-3 h-[100%]">
                        <a className="flex flex-col justify-center items-center shortcut py-5 px-5 bg-red-500 shadow-md">
                            <BookFill />
                            <span className="text-center fw-medium mt-2">
                                Continuous Assessments Summary
                            </span>
                        </a>
                        <a className="flex flex-col justify-center items-center shortcut py-5 px-5 bg-green-500 shadow-md">
                            <BookFill />
                            <span className="text-center fw-medium mt-2">
                                Continuous Assessments Summary
                            </span>
                        </a>
                        <a className="flex flex-col justify-center items-center shortcut py-5 px-5 bg-blue-500 shadow-md">
                            <CartCheckFill />
                            <span className="text-center fw-medium mt-2">
                                Inventory Book Summary
                            </span>
                        </a>
                        <a href="/attendance/reports" className="flex flex-col justify-center items-center shortcut py-5 px-5 bg-yellow-500 shadow-md">
                            <FileEarmarkBarGraphFill />
                            <span className="text-center fw-medium mt-2">
                                Monthy Attendance Summary
                            </span>
                        </a>
                    </div>
                </div>

                <div className="col-span-5 rounded-sm shadow-md px-4 py-4 bg-white">
                    <div className="notification-section">
                        <a href="/notifications" className='font-medium'>NOTIFICATIONS</a>
                        <hr className='mt-1 mb-3' />
                    </div>
                    <div className="notifications site-scrollbar flex flex-col gap-y-2">
                        {
                            notificationsData.map((notification) => {
                                return (
                                    <div className="bg-[#e9eaec] px-2 py-2">
                                        <h6 className="text-sm font-[500]">{notification.title}</h6>
                                        <h6 className="mb-2 text-xs">{notification.date}</h6>
                                        <p className="text-sm">
                                            {notification.message}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="col-span-7 rounded-sm shadow-md px-4 py-4 bg-white h-fit">
                <div className="attendance-details">
                        <a href="/attendance" className='font-medium'>STUDENT LEADERBOARD</a>
                        <hr className='mt-1 mb-3' />
                    </div>
                    <div className="site-scrollbar" id="attendance-section">
                        <table className="table-auto w-[100%] mb-4 text-left text-xs" id="attendance-table">
                            <thead>
                                <tr className='border-b border-slate-300'>
                                    <th>PLACE</th>
                                    <th>STUDENT</th>
                                    <th>THEORY MARKS</th>
                                    <th>PRACTICAL MARKS</th>
                                    <th>OVERALL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leaderBoardData.map((student, index) => {

                                        return (
                                            <tr key={index} className={`border-b border-slate-300 ${
                                                (student.rank == 1)? 'text-green-500' : (student.rank == 2? 'text-orange-500' : 
                                                    (student.rank == 3? 'text-yellow-500' : ''))
                                                } ${student.rank < 4? 'font-medium' : ''}`}>
                                                <td>
                                                    {
                                                        student.progress == 'up'? <ChevronUp color='green' /> : (
                                                            student.progress == 'down'? <ChevronDown color='red'fontWeight={'900'} /> : <DashLg color='blue' fontWeight={'900'} />
                                                        )
                                                    }
                                                </td>
                                                <td>{student.name}</td>
                                                <td>{student.theory}</td>
                                                <td>{student.practical}</td>
                                                <td>{student.percentage}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;