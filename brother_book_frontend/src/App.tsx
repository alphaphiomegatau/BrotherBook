import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage'
import { RootPagePartial } from './pages/RootPagePartial';

// See https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPagePartial/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ],
  }
], {});

export const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
