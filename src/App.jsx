import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Builds from './Pages/Builds'
import Capabilities from './Pages/Capabilites'
import Story from './Pages/Story'
import Careers from './Pages/Career'
import Contact from './Pages/Contact'
import { ReactLenis } from 'lenis/react';
import Platform from './Pages/Platform'
import Solutions from './Pages/Solutions'
import Docs from './Pages/Docs'
import Company from './Pages/Company'
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/platform",
          element: <Platform />
        },
        {
          path: "/solutions",
          element: <Solutions />
        },
        {
          path: "/docs",
          element: <Docs />
        },
        {
          path: "/company",
          element: <Company />
        },
        // {
        //   path: "/builds",
        //   element: <Builds />
        // },
        // {
        //   path: "/capabilities",
        //   element: <Capabilities />
        // },
        // {
        //   path: "/story",
        //   element: <Story />
        // },
        // {
        //   path: "/careers",
        //   element: <Careers />
        // },
        {
          path: "/contact",
          element: <Contact />
        },

      ]
    }
  ])

  return (
    <div>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothTouch: true }}>
        <RouterProvider router={router}></RouterProvider>
      </ReactLenis>
    </div>
  )
}

export default App