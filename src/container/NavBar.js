import React from 'react' 
import { Link } from 'react-router-dom';


function NavBar(props) {
    const layout = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            backgroundColor: "black",
            height: "30px",
            padding: "35px",
            marginBottom: "20px"
        }
    };

    return (
        <nav style={layout.nav}>
            <Link to="/">Home</Link>
            <Link to="/gods">Gods</Link>
            <Link to="/heroes">Heroes</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    )
}

export default NavBar;