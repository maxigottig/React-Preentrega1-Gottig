
const NavBar = () => {
    return (
    <nav style={{
        backgroundColor: "blue", 
        display: "flex", 
        justifyContent: "center" 
        }}>
        <ul>
            <li style={{ color: "white"}}>Inicio</li>
            <li style={{ color: "white"}}>Productos</li>
            <li style={{ color: "white"}}>Quienes somos</li>
            <li style={{ color: "white"}}>Contacto</li>
        </ul>
    </nav>
    )
}

export default NavBar;