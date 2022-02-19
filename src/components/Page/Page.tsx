import React from 'react'
import { Navbar } from 'components/Nav'
import { Outlet } from 'react-router-dom'

export const Page = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)
