
import ThemeButton from './ThemeButton.js'

function Footer(){

    return(

        <footer>
            
            <ThemeButton/>

            <p className="copyright">&copy; {new Date().getFullYear()} Murilo Pereira</p>
            <p className="email">murilo.pereira@torontomu.ca</p> {/*This returns the current year and adds it to the footer paragraph element*/}

        </footer>

    );
    
}

export default Footer