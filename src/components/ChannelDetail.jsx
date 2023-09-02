import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  
  // Estado para almacenar los detalles del canal
  const [channelDetail, setChannelDetail] = useState(null)
  
  // Estado para almacenar la lista de videos del canal
  const [videos, setVideos] = useState([])

  // Obtiene el ID del canal desde los parámetros de la URL
  const { id } = useParams();

  // Muestra los detalles del canal y videos en la consola (para depuración)
  console.log(channelDetail, videos)

  // Efectos para cargar detalles del canal y videos cuando el ID cambia
  useEffect(()=>{
    // Realiza una solicitud a la API para obtener detalles del canal
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    // Realiza una solicitud a la API para obtener videos del canal
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  },[id])


  return (
    // Contenedor principal con altura mínima
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            background: "linear-gradient(90deg, rgba(1,79,153,1) 0%, rgba(95,9,121,1) 48%, rgba(255,0,57,1) 100%)",
            zIndex: 10,
            height: "300px"
          }}
        />
          <ChannelCard channelDetail={channelDetail} marginTop="-115px"/>
      </Box>
      <Box display="flex" p="2">

        <Box sx={{ mr: { sm: "100px" }}} />
        <Videos videos={videos} />
        
      </Box>
    </Box>
  )
}

export default ChannelDetail