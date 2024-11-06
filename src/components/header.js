
function Header() {

    return(

        <nav className="navigation-bar">
            <div className="nav-logo">Murilo Pereira</div>
            <ul className="nav-links">
                <li className="nav-item"><a href="https://www.linkedin.com/in/murilo-pereira-it/" target="_blank">LinkedIn</a></li>  {/* target blank to open new tab*/}
                <li className="nav-item"><a href="https://drive.google.com/file/d/1vpeqR-ronYRkARtulJB0cCf876Ao_0ml/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>

    );

}

export default Header