import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 250px;
    background: #11101D;
    padding: 6px 14px;
    z-index: 99;
    transition: all 0.5s ease;
    .icon {
        color: #fff;
        height: 18px;
        text-align: center;
        line-height: 50px;
        width: 50px;
    }
    .profile {
        position: fixed;
        height: 60px;
        width: 250px;
        left: 0;
        bottom: -8px;
        padding: 10px 14px;
        background: #1d1b31;
        transition: all 0.5s ease;
        overflow: hidden;
        img {
            height: 45px;
            width: 45px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 10px;
        }
        .log-out {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            transition: all 0.5s ease;
        }
    }
`

export const LogoDetails = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    .icon {
        /* opacity: 0; */
        height: 30px;
        color: white;
        transition: all 0.5s ease;
    }
`

export const LogoName = styled.div`
    color: #fff;
    font-size: 23px;
    font-weight: 500;
    /* opacity: 0; */
    transition: all 0.5s ease;
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
    a {
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 12px;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        background: #11101D;
        &:hover {
            background: #FFF;
        }
        &:hover div, &:hover svg {
            transition: all 0.5s ease;
            color: #11101D;
        }
    }
`

export const LinkName = styled.div`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    /* opacity: 0; */
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