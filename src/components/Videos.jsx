import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from "./"


const Videos = ({ videos, direction }) => {

  
  // Si no hay videos disponibles, muestra un mensaje de carga
  if(!videos) return "Loading..." 

  return (
    // Contenedor Stack que organiza elementos en fila o en la dirección especificada (por defecto, en fila)
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-around"
      gap={4}
    >
      {/* Mapea los videos y crea una tarjeta de video o de canal para cada uno */}
      {videos.map((item, idx) => (
         <Box 
            key={idx}
         >
            {/* Si es un video, crea una tarjeta de video */}
            {item.id.videoId && <VideoCard video={item} />}
            {/* Si es un canal, crea una tarjeta de canal */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
         </Box>
      ))}
    </Stack>
  )
}

export default Videos