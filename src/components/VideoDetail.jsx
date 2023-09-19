import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  // Estado para almacenar los detalles del video
  const [videoDetail, setVideoDetail] = useState(null);
  
  // Estado para almacenar videos relacionados
  const [videos, setVideos] = useState(null);
  
  // Obtiene el ID del video desde los parámetros de la URL
  const { id } = useParams();

  // Efectos de efectuación para cargar detalles del video y videos relacionados cuando el ID cambia
  useEffect(() => {
    // Realiza una solicitud a la API para obtener detalles del video
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    // Realiza una solicitud a la API para obtener videos relacionados al video actual
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  // Si los detalles del video no están disponibles, muestra un mensaje de carga
  if (!videoDetail?.snippet) return "Loading..."

  // Extrae los detalles relevantes del video
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail;

  return (
    // Contenedor principal 
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            {/* Reproductor de video */}
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"  
              controls
            />

      {loading ? ( 
         <p>Cargando...</p> 
       ) : error ? ( 
         <p>{error}</p> 
       ) : ( 
         <WeatherMainInfo weather={weather} /> 
       )}      
      {/* Reproductor de video */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            {/* Información del canal */}
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle", md: "h6" }} color="#fff">
                  {channelTitle}
                 {/* Icono de verificación */}
                 <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px"}} />
                </Typography>
              </Link>
              {/* Contador de vistas y me gusta */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7}}>
                  {/* Formatea el contador de vistas con separadores de miles */}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7}}>
                  {/* Formatea el contador de me gusta con separadores de miles */}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

      {/* Contenedor de videos relacionados */}
      <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
        {/* Componente Videos que muestra videos relacionados en una columna */}
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail
