import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Settings from '../pages/Settings'
// import Task from '../pages/Task'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  // {
  //   path: '/task',
  //   element: <Task/>
  // },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router
