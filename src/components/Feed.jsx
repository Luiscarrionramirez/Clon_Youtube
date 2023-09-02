import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('New')

  // Estado para almacenar la lista de videos
  const [videos, setVideos] = useState([])

  // Efecto de efectuación para cargar videos basados en la categoría seleccionada
  useEffect(()=>{
    // Realiza una solicitud a la API con la categoría seleccionada
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items) )
  },[selectedCategory])


  return (
    // Un contenedor Stack que organiza los elementos en fila (columna en dispositivos pequeños y fila en dispositivos medianos y grandes)
    <Stack 
      sx={{ flexDirection: { sx: 'column', md: 'row'}}}
    >
      {/* La columna de la barra lateral */}
      <Box 
        sx={{ 
          height: { sx: 'auto', md: '92vh'},
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2}
        }}
      >

        {/* Barra lateral que permite seleccionar una categoría */}
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Información de derechos de autor */}
        <Typography 
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white"}}
        >
          Copyright 2023 Luis Carrión
        </Typography>

      </Box>


        {/* Columna principal con videos */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{
              color: "white"
            }}
          >
            {/* Título de la categoría seleccionada */}
            {selectedCategory}
            <span style={{ color: "#f31503"}}>  videos</span>
          </Typography>

          {/* Componente Videos que muestra la lista de videos */}
        <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed