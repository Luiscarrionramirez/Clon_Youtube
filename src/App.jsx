import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components"

function App() {
  return (
    // Configura el enrutador de la aplicación para manejar las rutas
    <BrowserRouter>
      {/* Define un contenedor con fondo negro */}
      <Box sx={{ backgroundColor: '#000' }}>
        {/* Renderiza la barra de navegación */}
        <NavBar />

        {/* Configura las rutas de la aplicación */}
        <Routes>
          {/* Ruta raíz que muestra el feed principal */}
          <Route path="/" exact element={<Feed />} />

          {/* Ruta para ver detalles de un video específico */}
          <Route path="/video/:id" element={<VideoDetail />} />

          {/* Ruta para ver detalles de un canal específico */}
          <Route path="/channel/:id" element={<ChannelDetail />} />

          {/* Ruta para buscar y mostrar resultados basados en un término de búsqueda */}
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App