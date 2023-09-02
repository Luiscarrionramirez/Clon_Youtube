import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  // Estado para almacenar la lista de videos basados en el término de búsqueda
  const [videos, setVideos] = useState([])
  
  // Obtiene el término de búsqueda de los parámetros de la URL
  const { searchTerm } = useParams();

  // Efecto de efectuación para cargar videos basados en el término de búsqueda
  useEffect(() => {
    // Realiza una solicitud a la API con el término de búsqueda
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])


  return (
    // Contenedor principal con altura mínima y espacio de relleno
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white"
        }}
      >
      {/* Título que muestra el término de búsqueda */}
      Search Result For: <span style={{ color: "#f31503"}}>{searchTerm}</span> videos
      </Typography>
      {/* Componente Videos que muestra la lista de videos basados en el término de búsqueda */}
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed