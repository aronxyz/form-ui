import React from 'react'
import { NavLink } from 'react-router-dom'
const AsideNav = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`} to={"button"}>Button</NavLink></li>
                    <li><NavLink className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`} to={"textarea"}>Textarea</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default AsideNav