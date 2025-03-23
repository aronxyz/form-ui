import React from 'react'
import AsideNav from './AsideNav'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <React.Fragment>
                <div className='hide-on-desktop'>
                    <Header />
                    <Outlet />
                </div>
                <div className='hide-on-mobile'>
                    <Header />
                    <div className='app'>
                        <AsideNav />
                        <main>
                            <Outlet />
                        </main>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Layout