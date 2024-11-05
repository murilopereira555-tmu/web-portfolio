
function Header() {

    return(

        <nav className="navigation-bar">
            <div className="nav-logo">Murilo Pereira</div>
            <ul className="nav-links">
                <li className="nav-item"><a href="https://www.linkedin.com/in/murilo-pereira-it/" target="_blank">LinkedIn</a></li>  {/* target blank to open new tab*/}
                <li className="nav-item"><a href="#about">Resume</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    );

}

export default Header