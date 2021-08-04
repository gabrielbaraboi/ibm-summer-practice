import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ProfileCard, ProfileContainer,LinksCard,SpanLink,AboutContainer,Container,NameContainer, Background,Group, EditBtn } from './Profile.styledComponents';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { getCurrentUser } from "../../Services/auth.service"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../Services/profile.service';
import { getUserPicture } from '../../Services/profile.service';

const Profile = () => {
    const {id} = useParams();
    const [userExists, setUserExists] = useState(true);
    const [userData, setUserData] = useState();

    useEffect(() =>
      getProfile(id)
        .then(res => {
          setUserData(res.data.user);
        })
        .catch(err => {
          console.log(err.message);
          setUserExists(false)
        })
      , [])

    return (
        <ProfileContainer>
            <ProfileCard>
                <Background>
                    <img src={`/profile/${id}/getProfilePic`}></img>    
                </Background>
                <NameContainer>
                    <span>{userData?.companyName}{userData?.firstName} {userData?.lastName}</span>
                    <span>{userData?.role}</span>
                </NameContainer>         
            </ProfileCard>
            <Container>
                <LinksCard>
                    <Group>
                        <p>Social media</p>
                        <EditBtn type="button"><FontAwesomeIcon icon={faEdit} className="icon" fixedWidth> </FontAwesomeIcon></EditBtn>
                    </Group>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            <span> website </span>
                            <SpanLink> "link here" </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span> github </span>
                            <SpanLink> "link here" </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            <span> twitter </span>
                            <SpanLink> "link here" </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            <span> linkedin </span>
                            <SpanLink> "link here" </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            <span> facebook </span>
                            <SpanLink> "link here" </SpanLink>
                        </li>
                    </ul>
                </LinksCard>
                <AboutContainer>
                    <Group>
                        <div>
                            <p>About</p>
                        </div>
                        <EditBtn type="button"><FontAwesomeIcon icon={faEdit} className="icon" fixedWidth> </FontAwesomeIcon></EditBtn>
                    </Group>
                    <p>Some text about user</p>
                </AboutContainer>
            </Container>
        </ProfileContainer>
    )
}

export default Profile
