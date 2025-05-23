import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ButtonPage from './pages/ButtonPage'
import TextFieldPage from './pages/TextFieldPage'
import SelectPage from './pages/SelectPage'
import ChecksAndRadiosPage from './pages/ChecksAndRadiosPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ButtonPage />} />
          <Route path='text-field' element={<TextFieldPage />} />
          <Route path='select' element={<SelectPage />} />
          <Route path='checks-and-radios' element={<ChecksAndRadiosPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
