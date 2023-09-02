import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { 
  demoThumbnailUrl, 
  demoVideoUrl, 
  demoVideoTitle, 
  demoChannelUrl, 
  demoChannelTitle 
} from "../utils/constants"

const VideoCard = ({ video: { id: {videoId}, snippet} }) => {

  return (
    // Tarjeta de vídeo
    <Card sx={{ width: {  xs: "100%", sm: "358px", md: "320px"}, boxShadow: "none", borderRadius: 0}}>
      {/* Enlace al detalle del vídeo */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Imagen del vídeo */}
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {
            xs: "100%", sm: "358px", md: "320px"
          }, height: 180 }}
        />
        {/* Contenido de la tarjeta */}
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px"}}>
          {/* Enlace al detalle del vídeo */}
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            {/* Título del vídeo */}
            <Typography variant="subtitle1" fontWeight="bold" color="white" >
              {/* Limita el título a 60 caracteres o muestra uno de demostración si no está disponible */}
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          {/* Enlace al canal del vídeo */}
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            {/* Nombre del canal y icono de verificación */}
            <Typography variant="subtitle2"  color="gray" >
              {snippet?.channelTitle || demoChannelTitle }
              <CheckCircle 
                sx={{fontSize: 12, color: "gray", ml: "5px"}}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard