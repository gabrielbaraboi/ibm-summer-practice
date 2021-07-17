import { Nav, Logo } from './NavBar.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <Nav>
            <Logo>
                <FontAwesomeIcon icon={faLaptopCode} /> IBM Jobs
            </Logo>
        </Nav>
    );
}

export default NavBar;