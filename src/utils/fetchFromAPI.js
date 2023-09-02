// Importa la biblioteca axios, que se utiliza para realizar solicitudes HTTP.
import axios from "axios";

// Define la URL base de la API de YouTube.
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Configura opciones para las solicitudes HTTP, incluyendo parámetros de consulta y encabezados.
const options = {
   // Configura opciones para las solicitudes HTTP, incluyendo parámetros de consulta y encabezados.
  params: {
     maxResults: 50 // Establece el número máximo de resultados a 50.
   },
   // Encabezados de la solicitud HTTP, incluyendo la clave de API y el host de la API de YouTube.
   headers: {
     'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY, // Usa una clave de API importada desde una variable de entorno.
     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' // Establece el host de la API de YouTube.
   }
 };

 // Exporta una función llamada fetchFromAPI que permite realizar solicitudes a la API de YouTube.
  export const fetchFromAPI = async (url) =>{
   // Realiza una solicitud GET a la API de YouTube utilizando axios.
   // Combina la URL base con la URL proporcionada como argumento y aplica las opciones configuradas.
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

   // Devuelve los datos obtenidos como resultado de la solicitud.
   return data;
 }