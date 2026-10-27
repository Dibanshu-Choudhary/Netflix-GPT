import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {

  const appRoutes = createBrowserRouter([

    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }

  ])
  return (

      <RouterProvider  router={appRoutes} />

  )
}

export default Body
