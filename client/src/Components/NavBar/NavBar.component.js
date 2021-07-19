import { Nav, LogoDetails, LogoName, NavList, NavItem, LinkName, ProfileDetails, Details, Name, Role, Tooltip } from './NavBar.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHome, faPlusCircle, faUser, faCog, faBuilding, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const NavBar = () => {
    const [openNav, setOpenNav] = useState(true);

    return (
        <Nav className={openNav ? `open` : ``}>
            <LogoDetails>
                <FontAwesomeIcon icon={faGlobe} className="icon" fixedWidth />
                <LogoName>IBM Jobs</LogoName>
                <button className={openNav ? `hamburger hamburger--slider is-active` : `hamburger hamburger--slider`} type="button" onClick={(e) => {
                    setOpenNav(!openNav);
                }}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </LogoDetails>
            <NavList>
                <NavItem>
                    <a href="/">
                        <FontAwesomeIcon icon={faHome} className="icon" fixedWidth />
                        <LinkName>Home</LinkName>
                    </a>
                    <Tooltip className="tooltip">Home</Tooltip>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faUser} className="icon" fixedWidth />
                        <LinkName>Profile</LinkName>
                    </a>
                    <Tooltip className="tooltip">Profile</Tooltip>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faPlusCircle} className="icon" fixedWidth />
                        <LinkName>New post</LinkName>
                    </a>
                    <Tooltip className="tooltip">New post</Tooltip>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faBuilding} className="icon" fixedWidth />
                        <LinkName>Companies</LinkName>
                    </a>
                    <Tooltip className="tooltip">Companies</Tooltip>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <FontAwesomeIcon icon={faCog} className="icon" fixedWidth />
                        <LinkName>Settings</LinkName>
                    </a>
                    <Tooltip className="tooltip">Settings</Tooltip>
                </NavItem>
                <NavItem className="profile">
                    <ProfileDetails>
                        <img src="https://i.imgur.com/ngfyBDS.jpeg" alt="profileImg" />
                        <Details className="details">
                            <Name>Gabriel Baraboi</Name>
                            <Role>Student</Role>
                        </Details>
                        <a href="#">                        
                            <FontAwesomeIcon icon={faSignOutAlt} className="icon log-out" fixedWidth />
                        </a>
                    </ProfileDetails>
                </NavItem>
            </NavList>
        </Nav>
    );
}

export default NavBar;