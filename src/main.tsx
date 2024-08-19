import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.tsx';
import Dashboard from './components/dashboard/Dashboard.tsx';
import StudentSection, { Batches, StudentList } from './components/student/StudentSection.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'batch',
        element: <StudentSection />,
        children: [
          {
            index: true,
            element: <Batches />
          },
          {
            path: 'students',
            element: <StudentList />
          }
        ]
      },
      {
        path: 'attendance',
        element: <div>Attendance</div>
      },
      {
        path: 'assessment',
        element: <div>Assessment</div>
      },
      {
        path: 'ojt',
        element: <div>On the job training</div>
      },
      {
        path: 'inventory',
        element: <div>Inventory</div>
      },
      {
        path: 'notifications',
        element: <div>Notifications</div>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
