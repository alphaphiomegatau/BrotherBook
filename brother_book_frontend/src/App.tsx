import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage'
import { RootPagePartial } from './pages/RootPagePartial';

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
], {

});

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
