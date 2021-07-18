import { Nav, LogoDetails, LogoName, NavList, NavItem, LinkName, ProfileDetails, Details, Name, Role } from './NavBar.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faGlobe, faHome, faPlusCircle, faUser, faCog, faBuilding, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <Nav>
            <LogoDetails>
                <FontAwesomeIcon icon={faGlobe} className="icon" fixedWidth />
                <LogoName>IBM Jobs</LogoName>
            </LogoDetails>
            <NavList>
                <NavItem>
                    <a href="/">
                        <FontAwesomeIcon icon={faHome} className="icon" fixedWidth />
                        <LinkName>Home</LinkName>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faUser} className="icon" fixedWidth />
                        <LinkName>Profile</LinkName>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faPlusCircle} className="icon" fixedWidth />
                        <LinkName>New post</LinkName>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faBuilding} className="icon" fixedWidth />
                        <LinkName>Companies</LinkName>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faCog} className="icon" fixedWidth />
                        <LinkName>Settings</LinkName>
                    </a>
                </NavItem>
                <NavItem className="profile">
                    <ProfileDetails>
                        <img src="https://i.imgur.com/ngfyBDS.jpeg" alt="profileImg" />
                        <Details>
                            <Name>Gabriel Baraboi</Name>
                            <Role>Student</Role>
                        </Details>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon log-out" fixedWidth />
                    </ProfileDetails>
                </NavItem>
            </NavList>
        </Nav>
    );
}

export default NavBar;