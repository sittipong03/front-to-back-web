import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "../pages/Home"
import About from '../pages/About'
import Register from '../pages/auth/register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import Layout from '../layouts/Layout'
import LayoutAdmin from '../layouts/LayoutAdmin'

function AppRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                </Route>

                <Route path='admin' element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path='manage' element={<Manage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoute