import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 78px;
    background: #11101D;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.3s ease-in-out;
    .icon {
        color: #fff;
        height: 18px;
        text-align: center;
        line-height: 50px;
        width: 50px;
    }
    .profile {
        position: fixed;
        height: 70px;
        width: 78px;
        left: 0;
        bottom: -8px;
        padding: 14px;
        background: #1d1b31;
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        .details {
            opacity: 0;
        }
        img {
            height: 45px;
            width: 45px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 10px;
            opacity: 0;
        }
        .log-out {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;
            height: 50px;
            padding: 16px 0;
            border-radius: 12px;
            opacity: 1;
            &:hover {
                background-color: white;
            }
        }

    }
`

export const LogoDetails = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    .icon {
        opacity: 0;
        height: 30px;
        color: white;
        transition: all 0.3s ease-in-out;
        position: relative;
        top: 2px;
    }
`

export const LogoName = styled.div`
    color: #fff;
    font-size: 23px;
    font-weight: 500;
    opacity: 0;
    transition: all 0.4s ease-out;
    white-space: nowrap;
`

export const NavList = styled.ul`
    margin-top: 20px;
    height: 100%;
`

export const NavItem = styled.li`
    position: relative;
    margin: 8px 0;
    list-style: none;
    height: 50px;
    line-height: 50px;
    &:hover .tooltip {
        opacity: 1;
        pointer-events: auto;
        transition: all 0.4s ease;
        top: 20%;
        transform: translateY(-20%);
    }
    a {
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        align-items: center;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        background: #11101D;
        &:hover {
            background: #FFF;
        }
        &:hover div, &:hover svg {
            transition: all 0.3s ease-in-out;
            color: #11101D;
        }
    }
`

export const LinkName = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    /* display: none; */
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
`

export const ProfileDetails = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

export const Details = styled.div`
    color: #fff;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
`

export const Name = styled.div`
    font-size: 15px;
    display: inline-block;
    line-height: normal;
`

export const Role = styled.div`
    font-size: 12px;
    display: inline-block;
    line-height: normal;
`

export const Tooltip = styled.span`
    position: absolute;
    top: -20px;
    left: calc(100% + 25px);
    z-index: 3;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    height: 30px;
    line-height: 22px;
    font-weight: 400;
    opacity: 0;
    pointer-events: none;
    transition: 0s;
`