import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const Sidebar = ({ selectedCategory, setSelectedCategory}) => {
  return (
    // Contenedor Stack que organiza elementos en fila en dispositivos pequeños y en columna en dispositivos medianos y grandes
    <Stack 
      direction= "row"
      sx={{
         overflowY: "auto",
         height: { sx: "auto", md: "95%"},
         flexDirection: { md: "column" }
      }}
    >
      {/* Mapea las categorías y crea un botón para cada una */}
      {categories.map((category) => (
         <button 
            className="category-btn"
            onClick={()=>{
               // Establece la categoría seleccionada al hacer clic en el botón
               setSelectedCategory(category.name)
            }}
            style={{ 
               // Establece el fondo y el color del texto del botón en función de si está seleccionado
               background: category.name === selectedCategory && "#fc1503", 
               color: "white"}}
            key={category.name}
         >
            {/* Icono de la categoría */}
            <span 
               style={{ 
                  color: category.name === selectedCategory ? "white" : "red", 
                  marginRight: "15px"}}
            >
               {category.icon}
            </span>
            {/* Nombre de la categoría */}
            <span style={{
               opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
            >
               {category.name}
            </span>
         </button>
      ))}
    </Stack>
  )
}

export default Sidebar