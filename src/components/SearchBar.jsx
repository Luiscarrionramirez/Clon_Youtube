import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para navegar a la página de resultados de búsqueda
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si se ha ingresado un término de búsqueda válido
    if(searchTerm){
      // Navega a la página de resultados de búsqueda con el término de búsqueda como parte de la URL
      navigate(`/search/${searchTerm}`);

      // Limpia el campo de búsqueda después de la navegación
      setSearchTerm('');
    }
  };

  return (
    // Un componente de Paper que actúa como un formulario de búsqueda
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
         borderRadius: 20,
         border: "1px solid #e3e3e3",
         pl: 2,
         boxShadow: "none",
         mr: { sm: 5 },
         width: "80%"
      }}
    >
      <input 
         type="text"
         className="search-bar"
         placeholder="Search..."
         value={searchTerm}
         onChange={(e)=>{
          // Actualiza el estado con el término de búsqueda mientras se escribe
          setSearchTerm(e.target.value);
         }}
      />
      {/* Botón de búsqueda */}
      <IconButton 
        type="submit"
        sx={{ p: { sm: "5px", md:"10px" }, color: "red" }}
      >
        {/* Icono de búsqueda */}
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
