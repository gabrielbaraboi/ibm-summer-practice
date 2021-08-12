import {
    Nav,
    LogoDetails,
    LogoName,
    NavList,
    NavItem,
    LinkName,
    ProfileDetails,
    Details,
    Name,
    Role,
    Tooltip,
} from "./NavBar.styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faHome,
    faPlusCircle,
    faUser,
    faCog,
    faBuilding,
    faSignOutAlt,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import {
    logout,
    getCurrentUser,
    isUserData,
} from "../../Services/auth.service";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";

const NavBar = () => {
    const [openNav, setOpenNav] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const userData = getCurrentUser();
        setUser(userData);
    }, []);

    return (
        <Nav className={openNav ? `` : `open`}>
            <LogoDetails>
                <i>
                    <FontAwesomeIcon
                        icon={faGlobe}
                        className="icon"
                        fixedWidth
                    />
                </i>
                <LogoName>IBM Jobs</LogoName>
                <button
                    className={
                        openNav
                            ? `hamburger hamburger--slider`
                            : `hamburger hamburger--slider is-active`
                    }
                    type="button"
                    onClick={(e) => {
                        setOpenNav(!openNav);
                    }}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </LogoDetails>
            <NavList>
                <NavItem>
                    <Link to={`/`}>
                        <i>
                            <FontAwesomeIcon
                                icon={faHome}
                                className="icon"
                                fixedWidth
                            />
                        </i>
                        <LinkName>Home</LinkName>
                    </Link>
                    <Tooltip className="tooltip">Home</Tooltip>
                </NavItem>
                {isUserData() ? (
                    <NavItem>
                        <Link to={`/profile/${user?.id}`}>
                            <i>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="icon"
                                    fixedWidth
                                />
                            </i>
                            <LinkName>Profile</LinkName>
                        </Link>
                        <Tooltip className="tooltip">Profile</Tooltip>
                    </NavItem>
                ) : (
                    ``
                )}
                {isUserData() ? (
                    <NavItem>
                        <Link to={`/addpost`}>
                            <i>
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    className="icon"
                                    fixedWidth
                                />
                            </i>
                            <LinkName>New post</LinkName>
                        </Link>
                        <Tooltip className="tooltip">New post</Tooltip>
                    </NavItem>
                ) : (
                    ``
                )}
                {isUserData() ? (
                    <NavItem>
                        <Link to={`/inbox`}>
                            <i>
                                <FontAwesomeIcon
                                    icon={faFacebookMessenger}
                                    className="icon"
                                    fixedWidth
                                />
                            </i>
                            <LinkName>Messages</LinkName>
                        </Link>
                        <Tooltip className="tooltip">Messages</Tooltip>
                    </NavItem>
                ) : (
                    ``
                )}
                {isUserData() ? (
                    <NavItem>
                        <Link to={`/settings/${user?.id}`}>
                            <i>
                                <FontAwesomeIcon
                                    icon={faCog}
                                    className="icon"
                                    fixedWidth
                                />
                            </i>
                            <LinkName>Settings</LinkName>
                        </Link>
                        <Tooltip className="tooltip">Settings</Tooltip>
                    </NavItem>
                ) : (
                    ``
                )}
                {isUserData() ? (
                    <NavItem className="profile">
                        <ProfileDetails>
                            <ReactImageFallback
                                src={`/profile/${user?.id}/getProfilePic`}
                                fallbackImage={
                                    process.env.PUBLIC_URL + "/iconUser.jpg"
                                }
                            />
                            <Details className="details">
                                <Name>
                                    {user?.companyName} {user?.firstName}{" "}
                                    {user?.lastName}
                                </Name>
                                <Role>{user?.role}</Role>
                            </Details>
                            <Link to={`/`}>
                                <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    className="icon log-out"
                                    fixedWidth
                                    onClick={(e) => {
                                        e.preventDefault();
                                        try {
                                            logout()
                                                .then((res) => console.log(res))
                                                .catch((err) =>
                                                    console.log(err.message)
                                                );
                                        } catch (error) {
                                            console.log(error.message);
                                        }
                                    }}
                                />
                            </Link>
                        </ProfileDetails>
                    </NavItem>
                ) : (
                    <NavItem className="profile signout">
                        <Link to={`/login`}>
                            <i>
                                <FontAwesomeIcon
                                    icon={faSignInAlt}
                                    className="icon"
                                    fixedWidth
                                />
                            </i>
                            <LinkName>Sign in</LinkName>
                        </Link>
                        <Tooltip className="tooltip">Sign in</Tooltip>
                    </NavItem>
                )}
            </NavList>
        </Nav>
    );
};

export default NavBar;
