import { CalendarBlank, MapPin } from 'phosphor-react';
import React from 'react';
import Feed from '../Feed';

import {
  Container, Banner, Avatar, ProfileData, EditButton, Followage,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditButton outlined>Edit profile</EditButton>

      <h1>Eduardo Lopes</h1>
      <h2>@edulopes777</h2>

      <p>
        ⚛️
      </p>

      <ul>
        <li>
          <CalendarBlank
            color="var(--gray)"
            className="icon"
          />
          Joined at july 2018
        </li>

        <li>
          <MapPin
            color="var(--gray)"
            className="icon"
          />
          Curitba, Parana
        </li>
      </ul>

      <Followage>
        <span>
          <strong>77</strong>
          following
        </span>
        <span>
          followers
          <strong>8954 </strong>
        </span>
      </Followage>
    </ProfileData>

    <Feed />
  </Container>
);

export default ProfilePage;
