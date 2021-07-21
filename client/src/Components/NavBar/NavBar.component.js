import { Nav, LogoDetails, LogoName, NavList, NavItem, LinkName, ProfileDetails, Details, Name, Role, Tooltip, ProfileLink } from './NavBar.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHome, faPlusCircle, faUser, faCog, faBuilding, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { logout } from '../../Services/UserServices'
import { clearUser } from "../../Services/localStorageManagement";
import { isUserData, getUserData } from "../../Services/localStorageManagement";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const userData = getUserData();
        setUser(userData);
    }, [])

    return (
        <Nav className={openNav ? `open` : ``}>
            <LogoDetails>
                <i><FontAwesomeIcon icon={faGlobe} className="icon" fixedWidth /></i>
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
                        <i><FontAwesomeIcon icon={faHome} className="icon" fixedWidth /></i>
                        <LinkName>Home</LinkName>
                    </a>
                    <Tooltip className="tooltip">Home</Tooltip>
                </NavItem>
                {isUserData() ?
                    <NavItem>
                        <a href="#">
                            <i><FontAwesomeIcon icon={faUser} className="icon" fixedWidth /></i>
                            <LinkName>Profile</LinkName>
                        </a>
                        <Tooltip className="tooltip">Profile</Tooltip>
                    </NavItem> :
                    ``}
                {isUserData() ?
                    <NavItem>
                        <a href="#">
                            <i><FontAwesomeIcon icon={faPlusCircle} className="icon" fixedWidth /></i>
                            <LinkName>New post</LinkName>
                        </a>
                        <Tooltip className="tooltip">New post</Tooltip>
                    </NavItem> :
                    ``}
                <NavItem>
                    <a href="#">
                        <i><FontAwesomeIcon icon={faBuilding} className="icon" fixedWidth /></i>
                        <LinkName>Companies</LinkName>
                    </a>
                    <Tooltip className="tooltip">Companies</Tooltip>
                </NavItem>
                {isUserData() ?
                    <NavItem>
                        <a href="#">
                            <i><FontAwesomeIcon icon={faCog} className="icon" fixedWidth /></i>
                            <LinkName>Settings</LinkName>
                        </a>
                        <Tooltip className="tooltip">Settings</Tooltip>
                    </NavItem> :
                    ``}
                {isUserData() ?
                    <NavItem className="profile">
                        <ProfileDetails>
                            <img src="https://i.imgur.com/ngfyBDS.jpeg" alt="profileImg" />
                            <Details className="details">
                                <Name>{user?.companyName} {user?.firstName} {user?.lastName}</Name>
                                <Role>{user?.role}</Role>
                            </Details>
                            <a href="/">
                                <FontAwesomeIcon icon={faSignOutAlt} className="icon log-out" fixedWidth onClick={(e) => {
                                    e.preventDefault();
                                    try {
                                        logout().then(res => console.log(res)).catch(err => console.log(err.message));
                                        clearUser();
                                        window.location.reload();
                                    } catch (error) {
                                        console.log(error.message);
                                    }
                                }} />
                            </a>
                        </ProfileDetails>
                    </NavItem> :
                    <NavItem className="profile signout">
                        <a href="/login">
                            <i><FontAwesomeIcon icon={faSignInAlt} className="icon" fixedWidth /></i>
                            <LinkName>Sign in</LinkName>
                        </a>
                        <Tooltip className="tooltip">Sign in</Tooltip>
                    </NavItem>
                }
            </NavList>
        </Nav>
    );
}

export default NavBar;