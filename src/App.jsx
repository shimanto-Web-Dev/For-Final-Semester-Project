import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Page//Home/Home'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />} />
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <>







      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
