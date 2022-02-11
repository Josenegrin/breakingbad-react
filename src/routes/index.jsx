import { Routes, Route } from 'react-router-dom'
import HomePage from '../views/HomePage'
import CharacterPage from '../views/CharacterPage'
import NotFoundPage from '../views/NotFoundPage'

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Rutas
