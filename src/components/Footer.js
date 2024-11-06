
import ThemeButton from './ThemeButton.js'

function Footer(){

    return(

        <footer className ="footer">
            
            <div className="footer-content">
                <ThemeButton/>
                <p className="copyright">&copy; {new Date().getFullYear()} Murilo Pereira</p>
                <p className="email">murilo.pereira@torontomu.ca</p> {/*This returns the current year and adds it to the footer paragraph element*/}
            </div>

        </footer>

    );
    
}

export default Footer