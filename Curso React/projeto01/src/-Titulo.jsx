function Titulo({ name , cor }){
    return <h1 style={{ color:cor }}>
                Hello World {name ? name : "User"}
           </h1>
                      // Funciona como um if / else //
}

export default Titulo