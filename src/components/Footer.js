
import ThemeButton from './ThemeButton.js'

function Footer(){

    return(

        <footer>
            <p>&copy; {new Date().getFullYear()} Murilo Pereira</p> {/*This returns the current year and adds it to the footer paragraph element*/}
            <ThemeButton/>
        </footer>

    );
    
}

export default Footer