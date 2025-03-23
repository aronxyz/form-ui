import { Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'

const ToggleMode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const handleToggleMode = () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('dark');

        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <button className='icon-button toggle-mode' onClick={handleToggleMode}>
            {isDarkMode ? <Sun /> : <Moon />}
        </button>
    )
}

export default ToggleMode