import razioLogo from "../Images/xrazio-logo.png";
import Work from "./work";
import About from "./about";
import { Link , Route , Routes} from "react-router-dom";



function Header() {
    return(
        <div className="contanier-header">
            <header>
                <a href="."><img src={razioLogo} className="logoMvn" alt="..."/></a>
                <nav className="ul-list">
                    <ul>
                    <li><Link to={'/'} className="active">Home</Link></li>
                    <li><Link to={'/WorkOfGallery'} >Work Of Gallery</Link></li>
                    <li><Link to={'/About'} >About</Link></li>
                    </ul>
                </nav>
                    <button className="button"><a href="https://www.instagram.com/_mvn02/" target="_blank" rel="noopener noreferrer">Get In Touch</a></button>
            </header>
            <Routes>
                <Route path="/" element={<xrazio/>}/>
                <Route path="/WorkOfGallery" element={<Work/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default Header;