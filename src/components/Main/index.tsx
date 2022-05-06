import {
  ArrowLeft, Bell, EnvelopeSimple, House, MagnifyingGlass,
} from 'phosphor-react';
import React from 'react';

import {
  Container, Header, ProfileInfo, BottomMenu,
} from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => (
  <Container>
    <Header>
      <button type="button">
        <ArrowLeft
          color="var(--twitter)"
          size={24}
          weight="bold"
        />
      </button>

      <ProfileInfo>
        <strong>Eduardo Lopes</strong>
        <span>5 Tweets</span>
      </ProfileInfo>
    </Header>

    <ProfilePage />

    <BottomMenu>
      <House
        color="var(--gray)"
        className="icon"
      />

      <MagnifyingGlass
        className="icon"
        color="var(--gray)"
      />

      <Bell
        className="icon"
        color="var(--gray)"
      />

      <EnvelopeSimple
        className="icon"
        color="var(--gray)"
      />
    </BottomMenu>
  </Container>
);

export default Main;
