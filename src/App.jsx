import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import InputText from './components/InputText'
import ButtonPage from './pages/ButtonPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='button' element={<ButtonPage />} />
          <Route path='input-text' element={<InputText />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
