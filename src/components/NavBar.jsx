import { Stack } from '@mui/material';
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    // Define la barra de navegación superior.
    <Stack 
    direction="row" // Establece la dirección de los elementos en fila horizontal.
    alignItems="center" // Alinea los elementos verticalmente al centro.
    p={2} // Agrega espacio de relleno a la barra de navegación.
    sx={{ 
      position: "sticky", // Establece la posición del elemento como "sticky".
      background: "#000", // Establece el color de fondo a negro.
      top: 0, // Fija la barra de navegación en la parte superior de la ventana.
      justifyContent: "space-between", // Distribuye el espacio horizontalmente entre los elementos.
    }}
    >
    {/* Crea un enlace al inicio de la aplicación con el logotipo */}
      <Link to="/" style={{ display: "flex", alignItems: "center"}}>
        <img src={logo} alt="Logo" height={45} />
      </Link>
      {/* Renderiza el componente de barra de búsqueda */}
      <SearchBar />
    </Stack>
  )
}

export default NavBar