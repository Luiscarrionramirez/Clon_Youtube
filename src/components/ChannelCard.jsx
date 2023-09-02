import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    // Contenedor Box que representa una tarjeta de canal
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        width: { xs: "356px", md: "320px"},
        height: "326px",
        margin: "auto",
        marginTop// Espaciado superior opcional proporcionado como prop
     
      }}
    >
      {/* Enlace a la página de detalles del canal */}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        {/* Contenido de la tarjeta */}
        <CardContent
          sx={{
            display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff"
          }}
        >
          {/* Imagen del canal */}
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3"
            }}
          />
          {/* Título del canal */}
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            {/* Icono de verificación */}
            <CheckCircle 
                sx={{fontSize: 14, color: "gray", ml: "5px"}}
              />
          </Typography>
            {/* Contador de suscriptores del canal */}
          {channelDetail?.statistics?.suscriberCount && (
            <Typography>
              {/* Formatea el contador de suscriptores con separadores de miles */}
              {parseInt(channelDetail?.statistics?.suscriberCount).toLocaleString()} Suscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard