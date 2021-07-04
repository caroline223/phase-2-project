import React from 'react' 
import { Link } from 'react-router-dom';


function NavBar(props) {
    const layout = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "30px",
            padding: "35px",
            marginBottom: "20px",
        }
    };

    return (
        <nav style={layout.nav} className="navBackground">
            <Link to="/" className="navTitle">Home</Link>
            <Link to="/gods" className="navTitle">Gods</Link>
            <Link to="/heroes" className="navTitle">Heroes</Link>
            <Link to="/residences" className="navTitle">Residence</Link>
        </nav>
    )
}

export default NavBar;